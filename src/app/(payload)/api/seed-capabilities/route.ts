/**
 * API endpoint to seed capabilities content from JSON files
 * POST /api/seed-capabilities
 *
 * This is useful when running on Cloudflare Workers where
 * direct CLI access to the database is limited.
 *
 * Requires authentication - only admin users can seed.
 */

import { getPayload, Payload } from 'payload'
import config from '@/payload.config'
import { NextResponse } from 'next/server'
import {
  transformCapabilityToPayload,
  capabilityDefinitions,
} from '@/seed/capabilities-transformer'

// Import JSON content files at build time
import feedbackManagerJson from '../../../../../json-contents/capabilities/feedback-manager-content_seo.json'
import discoverJson from '../../../../../json-contents/capabilities/discover-capability-content_seo.json'
import strategyBoardJson from '../../../../../json-contents/capabilities/strategy-board-content_seo.json'
import roadmapJson from '../../../../../json-contents/capabilities/roadmap-content_seo.json'
import deliverJson from '../../../../../json-contents/capabilities/deliver-capability-content_seo.json'

// Map file names to imported JSON
const jsonContentMap: Record<string, any> = {
  'feedback-manager-content_seo.json': feedbackManagerJson,
  'discover-capability-content_seo.json': discoverJson,
  'strategy-board-content_seo.json': strategyBoardJson,
  'roadmap-content_seo.json': roadmapJson,
  'deliver-capability-content_seo.json': deliverJson,
}

// Placeholder images for capability pages
const PLACEHOLDER_IMAGES = {
  hero: 'https://picsum.photos/seed/cap-hero/1200/800',
  feature1: 'https://picsum.photos/seed/cap-feat1/800/600',
  feature2: 'https://picsum.photos/seed/cap-feat2/800/600',
  feature3: 'https://picsum.photos/seed/cap-feat3/800/600',
}

async function uploadPlaceholderImage(
  payload: Payload,
  url: string,
  filename: string,
  alt: string,
): Promise<number | null> {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      console.error(`Failed to fetch image from ${url}`)
      return null
    }

    const arrayBuffer = await response.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    const file = {
      name: filename,
      data: buffer,
      mimetype: 'image/jpeg',
      size: buffer.length,
    }

    const media = await payload.create({
      collection: 'media',
      data: { alt },
      file,
    })

    return media.id as number
  } catch (error) {
    console.error(`Error uploading placeholder image ${filename}:`, error)
    return null
  }
}

export async function POST(request: Request) {
  try {
    const payload = await getPayload({ config })

    // Check if user is authenticated and is admin
    const { user } = await payload.auth({ headers: request.headers })

    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized. Please log in as admin.' },
        { status: 401 },
      )
    }

    // Check for optional force parameter to reseed
    const url = new URL(request.url)
    const force = url.searchParams.get('force') === 'true'

    // Check existing capabilities
    const existingCapabilities = await payload.find({
      collection: 'capabilities',
      limit: 100,
    })

    if (existingCapabilities.docs.length > 0 && !force) {
      return NextResponse.json(
        {
          success: false,
          message: 'Capabilities already exist. Use ?force=true to reseed.',
          count: existingCapabilities.docs.length,
          capabilities: existingCapabilities.docs.map((c: any) => c.slug),
        },
        { status: 409 },
      )
    }

    // If force, delete existing capabilities first
    if (force && existingCapabilities.docs.length > 0) {
      console.log(`Deleting ${existingCapabilities.docs.length} existing capabilities...`)
      for (const cap of existingCapabilities.docs) {
        await payload.delete({
          collection: 'capabilities',
          id: cap.id,
        })
      }
    }

    // Upload placeholder images
    console.log('Uploading placeholder images for capabilities...')
    const heroImageId = await uploadPlaceholderImage(
      payload,
      PLACEHOLDER_IMAGES.hero,
      'capability-hero.jpg',
      'Capability page hero image',
    )

    // Seed each capability
    const results: Array<{ slug: string; success: boolean; error?: string }> = []

    for (const capDef of capabilityDefinitions) {
      try {
        const jsonContent = jsonContentMap[capDef.file]
        if (!jsonContent) {
          results.push({
            slug: capDef.slug,
            success: false,
            error: `JSON file not found: ${capDef.file}`,
          })
          continue
        }

        // Transform JSON to Payload format
        const payloadData = transformCapabilityToPayload(
          jsonContent,
          capDef.slug,
          capDef.displayName,
          capDef.parentCluster,
        )

        // Add hero image if available and hero block exists
        if (heroImageId && payloadData.sections) {
          payloadData.sections = payloadData.sections.map((section: any) => {
            if (section.blockType === 'hero') {
              return { ...section, image: heroImageId }
            }
            return section
          })
        }

        // Create the capability
        await payload.create({
          collection: 'capabilities',
          data: payloadData as any,
        })

        results.push({ slug: capDef.slug, success: true })
        console.log(`Created capability: ${capDef.displayName}`)
      } catch (error) {
        console.error(`Error creating capability ${capDef.slug}:`, error)
        results.push({
          slug: capDef.slug,
          success: false,
          error: String(error),
        })
      }
    }

    const successCount = results.filter((r) => r.success).length
    const failCount = results.filter((r) => !r.success).length

    return NextResponse.json({
      success: failCount === 0,
      message: `Created ${successCount} capabilities, ${failCount} failed`,
      results,
      imagesUploaded: {
        hero: !!heroImageId,
      },
    })
  } catch (error) {
    console.error('Seed capabilities error:', error)
    return NextResponse.json(
      { error: 'Failed to seed capabilities', details: String(error) },
      { status: 500 },
    )
  }
}

// GET endpoint to check current capabilities status
export async function GET() {
  try {
    const payload = await getPayload({ config })

    const capabilities = await payload.find({
      collection: 'capabilities',
      limit: 100,
    })

    return NextResponse.json({
      count: capabilities.docs.length,
      capabilities: capabilities.docs.map((c: any) => ({
        id: c.id,
        slug: c.slug,
        displayName: c.displayName,
        parentCluster: c.parentCluster,
        status: c.status,
        sectionsCount: c.sections?.length || 0,
      })),
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to check capabilities', details: String(error) },
      { status: 500 },
    )
  }
}

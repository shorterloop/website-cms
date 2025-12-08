/**
 * API endpoint to seed homepage content
 * POST /api/seed-homepage
 *
 * This is useful when running on Cloudflare Workers where
 * direct CLI access to the database is limited.
 *
 * Requires authentication - only admin users can seed.
 */

import { getPayload, Payload } from 'payload'
import config from '@/payload.config'
import { homepageData } from '@/seed/homepage-data'
import { NextResponse } from 'next/server'

// Placeholder images from picsum.photos (more reliable than Unsplash for API use)
const PLACEHOLDER_IMAGES = {
  hero: 'https://picsum.photos/seed/hero/1200/800',
  aiEngine: 'https://picsum.photos/seed/ai/800/600',
  // Integration logos - using simple colored squares from placeholder services
  jira: 'https://picsum.photos/seed/jira/100/100',
  linear: 'https://picsum.photos/seed/linear/100/100',
  asana: 'https://picsum.photos/seed/asana/100/100',
  shortcut: 'https://picsum.photos/seed/shortcut/100/100',
  intercom: 'https://picsum.photos/seed/intercom/100/100',
  zendesk: 'https://picsum.photos/seed/zendesk/100/100',
  hubspot: 'https://picsum.photos/seed/hubspot/100/100',
  salesforce: 'https://picsum.photos/seed/salesforce/100/100',
  notion: 'https://picsum.photos/seed/notion/100/100',
  confluence: 'https://picsum.photos/seed/confluence/100/100',
  googledocs: 'https://picsum.photos/seed/gdocs/100/100',
  slack: 'https://picsum.photos/seed/slack/100/100',
  teams: 'https://picsum.photos/seed/teams/100/100',
}

async function uploadPlaceholderImage(
  payload: Payload,
  url: string,
  filename: string,
  alt: string,
): Promise<number | null> {
  try {
    // Fetch the image
    const response = await fetch(url)
    if (!response.ok) {
      console.error(`Failed to fetch image from ${url}`)
      return null
    }

    const arrayBuffer = await response.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    // Create a File-like object for Payload
    const file = {
      name: filename,
      data: buffer,
      mimetype: 'image/jpeg',
      size: buffer.length,
    }

    // Upload to Payload media collection
    const media = await payload.create({
      collection: 'media',
      data: {
        alt,
      },
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

    // Check if homepage already has content
    const existingHomepage = await payload.findGlobal({
      slug: 'homepage',
    })

    const hasExistingContent =
      existingHomepage?.sections && existingHomepage.sections.length > 0

    if (hasExistingContent) {
      return NextResponse.json(
        {
          success: false,
          message: 'Homepage already has content',
          sectionsCount: existingHomepage.sections?.length || 0,
        },
        { status: 409 },
      )
    }

    // Upload placeholder images
    console.log('Uploading placeholder images...')

    const heroImageId = await uploadPlaceholderImage(
      payload,
      PLACEHOLDER_IMAGES.hero,
      'hero-placeholder.jpg',
      'Hero section placeholder image',
    )

    const aiVisualId = await uploadPlaceholderImage(
      payload,
      PLACEHOLDER_IMAGES.aiEngine,
      'ai-engine-placeholder.jpg',
      'AI Engine visual placeholder',
    )

    // Upload integration logos
    const integrationLogos: Record<string, number | null> = {}
    const logoKeys = [
      'jira',
      'linear',
      'asana',
      'shortcut',
      'intercom',
      'zendesk',
      'hubspot',
      'salesforce',
      'notion',
      'confluence',
      'googledocs',
      'slack',
      'teams',
    ]

    for (const key of logoKeys) {
      integrationLogos[key] = await uploadPlaceholderImage(
        payload,
        PLACEHOLDER_IMAGES[key as keyof typeof PLACEHOLDER_IMAGES],
        `${key}-logo.jpg`,
        `${key} logo placeholder`,
      )
    }

    // Build sections with image IDs
    const sectionsWithImages = homepageData.sections.map((section: any) => {
      if (section.blockType === 'hero' && heroImageId) {
        return { ...section, image: heroImageId }
      }

      if (section.blockType === 'aiEngine' && aiVisualId) {
        return { ...section, visual: aiVisualId }
      }

      if (section.blockType === 'integrations') {
        const logoMap: Record<string, string> = {
          Jira: 'jira',
          Linear: 'linear',
          Asana: 'asana',
          Shortcut: 'shortcut',
          Intercom: 'intercom',
          Zendesk: 'zendesk',
          HubSpot: 'hubspot',
          Salesforce: 'salesforce',
          Notion: 'notion',
          Confluence: 'confluence',
          'Google Docs': 'googledocs',
          Slack: 'slack',
          'Microsoft Teams': 'teams',
        }

        return {
          ...section,
          integrationGroups: section.integrationGroups.map((group: any) => ({
            ...group,
            integrations: group.integrations.map((integration: any) => {
              const logoKey = logoMap[integration.name]
              const logoId = logoKey ? integrationLogos[logoKey] : null
              return logoId ? { ...integration, logo: logoId } : integration
            }),
          })),
        }
      }

      return section
    })

    // Seed the homepage
    await payload.updateGlobal({
      slug: 'homepage',
      data: {
        sections: sectionsWithImages,
        ...homepageData.seo,
      },
    })

    return NextResponse.json({
      success: true,
      message: 'Homepage seeded successfully with placeholder images',
      sectionsCount: homepageData.sections.length,
      imagesUploaded: {
        hero: !!heroImageId,
        aiVisual: !!aiVisualId,
        integrationLogos: Object.values(integrationLogos).filter(Boolean).length,
      },
    })
  } catch (error) {
    console.error('Seed error:', error)
    return NextResponse.json(
      { error: 'Failed to seed homepage', details: String(error) },
      { status: 500 },
    )
  }
}

// GET endpoint to check current homepage status
export async function GET() {
  try {
    const payload = await getPayload({ config })

    const homepage = await payload.findGlobal({
      slug: 'homepage',
    })

    return NextResponse.json({
      hasSections: Boolean(homepage?.sections?.length),
      sectionsCount: homepage?.sections?.length || 0,
      sectionTypes: homepage?.sections?.map((s: any) => s.blockType) || [],
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to check homepage', details: String(error) },
      { status: 500 },
    )
  }
}

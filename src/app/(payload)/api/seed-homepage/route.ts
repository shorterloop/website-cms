/**
 * API endpoint to seed homepage content
 * POST /api/seed-homepage
 *
 * This is useful when running on Cloudflare Workers where
 * direct CLI access to the database is limited.
 *
 * Requires authentication - only admin users can seed.
 */

import { getPayload } from 'payload'
import config from '@/payload.config'
import { homepageData } from '@/seed/homepage-data'
import { NextResponse } from 'next/server'

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

    // Seed the homepage
    await payload.updateGlobal({
      slug: 'homepage',
      data: {
        sections: homepageData.sections as any,
        ...homepageData.seo,
      },
    })

    return NextResponse.json({
      success: true,
      message: 'Homepage seeded successfully',
      sectionsCount: homepageData.sections.length,
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

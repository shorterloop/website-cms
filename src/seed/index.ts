/**
 * Seed script for populating the homepage with initial content
 * Run with: pnpm seed
 *
 * This script populates the Homepage global with content based on
 * the cms-schema/homepage-schema.md specification.
 */

import { getPayload } from 'payload'
import config from '../payload.config'
import { homepageData } from './homepage-data'

async function seed() {
  console.log('🌱 Starting homepage seed...')

  const payload = await getPayload({ config })

  try {
    // Check if homepage already has content
    const existingHomepage = await payload.findGlobal({
      slug: 'homepage',
    })

    const hasExistingBlocks =
      existingHomepage?.sections && existingHomepage.sections.length > 0

    if (hasExistingBlocks) {
      console.log('⚠️  Homepage already has content. Skipping seed.')
      console.log(`   Current sections: ${existingHomepage.sections?.length || 0}`)
      console.log(
        '   To re-seed, first clear the homepage content in the admin panel.',
      )
      return
    }

    // Note: Blocks that require media uploads (hero image, integration logos, etc.)
    // will need images to be uploaded manually through the admin panel.
    // This seed creates the block structure with placeholder references.

    // Create the homepage content
    await payload.updateGlobal({
      slug: 'homepage',
      data: {
        sections: homepageData.sections,
        ...homepageData.seo,
      },
    })

    console.log('✅ Homepage seeded successfully!')
    console.log('   Sections created:', homepageData.sections.length)
    console.log('')
    console.log('📝 Next steps:')
    console.log('   1. Log into the admin panel at /admin')
    console.log(
      '   2. Navigate to Globals → Homepage',
    )
    console.log('   3. Upload the hero image and other media assets')
    console.log(
      '   4. Upload integration logos in the Integrations section',
    )
    console.log('   5. Review and adjust content as needed')
  } catch (error) {
    console.error('❌ Error seeding homepage:', error)
    throw error
  }

  process.exit(0)
}

seed()

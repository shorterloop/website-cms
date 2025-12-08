import { GlobalConfig } from 'payload'
import { HeroBlock, CTABlock } from '../blocks'

export const Homepage: GlobalConfig = {
  slug: 'homepage',
  label: 'Homepage',
  admin: {
    description: 'Manage the homepage content. The homepage is designed to communicate value in under 3 seconds.',
    group: 'Content',
  },
  fields: [
    // SEO Tab
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'sections',
              type: 'blocks',
              label: 'Page Sections',
              blocks: [HeroBlock, CTABlock],
              minRows: 1,
              admin: {
                description: 'Add and arrange sections for the homepage. Start with a Hero block.',
              },
            },
          ],
        },
        {
          label: 'SEO',
          fields: [
            {
              name: 'metaTitle',
              type: 'text',
              label: 'Meta Title',
              admin: {
                description: 'Page title for search engines (50-60 characters)',
              },
              minLength: 50,
              maxLength: 60,
            },
            {
              name: 'metaDescription',
              type: 'textarea',
              label: 'Meta Description',
              admin: {
                description: 'Page description for search engines (150-160 characters)',
              },
              minLength: 150,
              maxLength: 160,
            },
            {
              name: 'ogImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Social Share Image',
              admin: {
                description: 'Image for social media sharing (1200x630px recommended)',
              },
            },
          ],
        },
      ],
    },
  ],
}

import { GlobalConfig } from 'payload'
import { HeroBlock, CTABlock, TestimonialBlock, MetricsBlock } from '../blocks'
import { seoFields } from '../fields'

export const Homepage: GlobalConfig = {
  slug: 'homepage',
  label: 'Homepage',
  admin: {
    description:
      'Manage the homepage content. The homepage is designed to communicate value in under 3 seconds.',
    group: 'Content',
  },
  fields: [
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
              blocks: [HeroBlock, CTABlock, TestimonialBlock, MetricsBlock],
              minRows: 1,
              admin: {
                description:
                  'Add and arrange sections for the homepage. Start with a Hero block.',
              },
            },
          ],
        },
        {
          label: 'SEO',
          fields: seoFields,
        },
      ],
    },
  ],
}

import { Block } from 'payload'

export const TestimonialBlock: Block = {
  slug: 'testimonial',
  labels: {
    singular: 'Testimonial',
    plural: 'Testimonials',
  },
  imageURL: '/assets/blocks/testimonial.png',
  fields: [
    {
      name: 'variant',
      type: 'select',
      label: 'Display Variant',
      defaultValue: 'single',
      options: [
        { label: 'Single Quote', value: 'single' },
        { label: 'Multiple Quotes', value: 'multiple' },
        { label: 'With Metrics', value: 'with_metrics' },
      ],
      admin: {
        description: 'How to display the testimonial(s)',
      },
    },
    {
      name: 'headline',
      type: 'text',
      label: 'Section Headline',
      admin: {
        description: 'e.g., "Teams Who\'ve Made the Shift" or "What Product Teams Say"',
      },
      minLength: 15,
      maxLength: 50,
    },
    {
      name: 'quotes',
      type: 'array',
      label: 'Testimonials',
      required: true,
      minRows: 1,
      maxRows: 4,
      admin: {
        description: 'Quality over quantity. Specific outcomes beat generic praise.',
      },
      fields: [
        {
          name: 'quote',
          type: 'textarea',
          label: 'Quote',
          required: true,
          admin: {
            description: 'The testimonial text. Must include specific outcome, not generic praise.',
          },
          minLength: 60,
          maxLength: 250,
        },
        {
          name: 'context',
          type: 'text',
          label: 'Quote Context',
          admin: {
            description: 'Optional context for the quote (e.g., "After 3 months using Shorter Loop")',
          },
          minLength: 20,
          maxLength: 80,
        },
        {
          type: 'row',
          fields: [
            {
              name: 'authorName',
              type: 'text',
              label: 'Author Name',
              required: true,
              admin: {
                width: '50%',
              },
              minLength: 5,
              maxLength: 50,
            },
            {
              name: 'authorTitle',
              type: 'text',
              label: 'Author Title',
              required: true,
              admin: {
                description: 'Role and company',
                width: '50%',
              },
              minLength: 10,
              maxLength: 60,
            },
          ],
        },
        {
          type: 'row',
          fields: [
            {
              name: 'authorImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Author Photo',
              admin: {
                description: 'Headshot (increases trust significantly)',
                width: '50%',
              },
            },
            {
              name: 'companyLogo',
              type: 'upload',
              relationTo: 'media',
              label: 'Company Logo',
              admin: {
                width: '50%',
              },
            },
          ],
        },
        {
          name: 'rating',
          type: 'number',
          label: 'Star Rating',
          min: 1,
          max: 5,
          admin: {
            description: 'Optional 1-5 star rating',
          },
        },
      ],
    },
  ],
}

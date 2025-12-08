import { Block } from 'payload'

export const FAQBlock: Block = {
  slug: 'faq',
  labels: {
    singular: 'FAQ',
    plural: 'FAQs',
  },
  imageURL: '/assets/blocks/faq.png',
  fields: [
    {
      name: 'headline',
      type: 'text',
      label: 'Headline',
      required: true,
      defaultValue: 'Frequently Asked Questions',
      admin: {
        description: 'e.g., "Frequently Asked Questions"',
      },
      minLength: 15,
      maxLength: 40,
    },
    {
      name: 'questions',
      type: 'array',
      label: 'Questions',
      required: true,
      minRows: 6,
      maxRows: 15,
      admin: {
        description: 'More questions is better for SEO (6-15 recommended)',
      },
      fields: [
        {
          name: 'question',
          type: 'text',
          label: 'Question',
          required: true,
          admin: {
            description: 'Natural language question matching real search queries',
          },
          minLength: 20,
          maxLength: 100,
        },
        {
          name: 'answer',
          type: 'textarea',
          label: 'Answer',
          required: true,
          admin: {
            description:
              'Comprehensive answer. Schema-eligible answers need 150+ characters for rich snippets.',
          },
          minLength: 80,
          maxLength: 400,
        },
        {
          type: 'row',
          fields: [
            {
              name: 'category',
              type: 'select',
              label: 'Category',
              admin: {
                description: 'Optional grouping',
                width: '50%',
              },
              options: [
                { label: 'General', value: 'general' },
                { label: 'Technical', value: 'technical' },
                { label: 'Pricing', value: 'pricing' },
                { label: 'Security', value: 'security' },
              ],
            },
            {
              name: 'schemaEligible',
              type: 'checkbox',
              label: 'Schema Eligible',
              defaultValue: false,
              admin: {
                description: 'Include in FAQ schema markup for rich snippets?',
                width: '50%',
              },
            },
          ],
        },
      ],
    },
  ],
}

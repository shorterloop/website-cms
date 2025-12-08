import { Block } from 'payload'

export const PagePreviewBlock: Block = {
  slug: 'pagePreview',
  dbName: 'preview', // Shortened for DB table names
  labels: {
    singular: 'Page Preview',
    plural: 'Page Previews',
  },
  imageURL: '/assets/blocks/page-preview.png',
  fields: [
    {
      name: 'headline',
      type: 'text',
      label: 'Headline',
      required: true,
      defaultValue: 'What you\'ll find on this page',
      admin: {
        description: 'e.g., "What you\'ll find on this page" or "On this page"',
      },
      minLength: 10,
      maxLength: 40,
    },
    {
      name: 'previewItems',
      type: 'array',
      label: 'Preview Items',
      dbName: 'prev_items', // Unique dbName
      required: true,
      minRows: 4,
      maxRows: 6,
      admin: {
        description: 'Anchored preview items (4-6). Use benefit-oriented labels.',
      },
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Label',
          required: true,
          admin: {
            description: 'Benefit-oriented label, e.g., "How teams use this in practice" (not just "Use Cases")',
          },
          minLength: 15,
          maxLength: 50,
        },
        {
          name: 'anchorId',
          type: 'text',
          label: 'Anchor ID',
          required: true,
          admin: {
            description: 'Section ID to scroll to (e.g., "use-cases", "faq", "comparison")',
          },
        },
        {
          name: 'icon',
          type: 'select',
          label: 'Icon',
          options: [
            { label: 'Features', value: 'features' },
            { label: 'Use Cases', value: 'use_cases' },
            { label: 'Integrations', value: 'integrations' },
            { label: 'Comparison', value: 'comparison' },
            { label: 'FAQ', value: 'faq' },
            { label: 'Testimonials', value: 'testimonials' },
            { label: 'Workflow', value: 'workflow' },
            { label: 'Metrics', value: 'metrics' },
          ],
        },
      ],
    },
  ],
}

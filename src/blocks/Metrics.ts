import { Block } from 'payload'

export const MetricsBlock: Block = {
  slug: 'metrics',
  labels: {
    singular: 'Metrics',
    plural: 'Metrics',
  },
  imageURL: '/assets/blocks/metrics.png',
  fields: [
    {
      name: 'variant',
      type: 'select',
      label: 'Display Variant',
      defaultValue: 'bar',
      options: [
        { label: 'Stats Bar', value: 'bar' },
        { label: 'Stats Grid', value: 'grid' },
        { label: 'Highlight Cards', value: 'cards' },
      ],
      admin: {
        description: 'How to display the metrics',
      },
    },
    {
      name: 'headline',
      type: 'text',
      label: 'Section Headline',
      admin: {
        description: 'Optional headline above the metrics',
      },
      minLength: 15,
      maxLength: 60,
    },
    {
      name: 'subheadline',
      type: 'text',
      label: 'Subheadline',
      admin: {
        description: 'Optional supporting text',
      },
      minLength: 30,
      maxLength: 120,
    },
    {
      name: 'stats',
      type: 'array',
      label: 'Statistics',
      required: true,
      minRows: 2,
      maxRows: 4,
      admin: {
        description: 'Each stat must include a concrete number, percentage, or timeframe',
      },
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'value',
              type: 'text',
              label: 'Value',
              required: true,
              admin: {
                description: 'e.g., "80%", "3x", "12 weeks", "40%"',
                width: '30%',
              },
              minLength: 1,
              maxLength: 20,
            },
            {
              name: 'label',
              type: 'text',
              label: 'Label',
              required: true,
              admin: {
                description: 'What the metric measures',
                width: '70%',
              },
              minLength: 15,
              maxLength: 80,
            },
          ],
        },
        {
          name: 'context',
          type: 'text',
          label: 'Context',
          admin: {
            description: 'Optional additional context for the metric',
          },
          minLength: 20,
          maxLength: 80,
        },
        {
          name: 'highlighted',
          type: 'checkbox',
          label: 'Highlight This Stat',
          defaultValue: false,
          admin: {
            description: 'Give this stat visual emphasis (accent color)',
          },
        },
      ],
    },
    {
      name: 'source',
      type: 'text',
      label: 'Source Attribution',
      admin: {
        description: 'Optional source for the stats (e.g., "Based on customer surveys Q3 2024")',
      },
      maxLength: 100,
    },
  ],
}

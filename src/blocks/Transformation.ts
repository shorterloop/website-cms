import { Block } from 'payload'

export const TransformationBlock: Block = {
  slug: 'transformation',
  dbName: 'xform', // Shortened for DB table names
  labels: {
    singular: 'Transformation',
    plural: 'Transformations',
  },
  imageURL: '/assets/blocks/transformation.png',
  fields: [
    {
      name: 'variant',
      type: 'select',
      label: 'Display Variant',
      defaultValue: 'side_by_side',
      options: [
        { label: 'Side by Side', value: 'side_by_side' },
        { label: 'Stacked', value: 'stacked' },
        { label: 'Timeline', value: 'timeline' },
        { label: 'Compact Shifts', value: 'compact' },
      ],
      admin: {
        description: 'How to display the transformation',
      },
    },
    {
      name: 'eyebrow',
      type: 'text',
      label: 'Eyebrow Text',
      admin: {
        description: 'e.g., "The Pivot"',
      },
      minLength: 5,
      maxLength: 30,
    },
    {
      name: 'headline',
      type: 'text',
      label: 'Headline',
      required: true,
      admin: {
        description: 'e.g., "From chaos to clarity"',
      },
      minLength: 15,
      maxLength: 60,
    },
    {
      name: 'subheadline',
      type: 'text',
      label: 'Subheadline',
      admin: {
        description: 'e.g., "Every transformation flows through the pivot."',
      },
      minLength: 20,
      maxLength: 120,
    },
    {
      type: 'row',
      fields: [
        {
          name: 'beforeColumnLabel',
          type: 'text',
          label: 'Before Column Label',
          defaultValue: 'Before',
          admin: {
            description: 'e.g., "The Status Quo"',
            width: '50%',
          },
          minLength: 5,
          maxLength: 30,
        },
        {
          name: 'afterColumnLabel',
          type: 'text',
          label: 'After Column Label',
          defaultValue: 'After',
          admin: {
            description: 'e.g., "With Shorter Loop"',
            width: '50%',
          },
          minLength: 5,
          maxLength: 30,
        },
      ],
    },
    {
      name: 'transformations',
      type: 'array',
      label: 'Transformations',
      required: true,
      minRows: 3,
      maxRows: 6,
      admin: {
        description: 'Before → After pairs (4-6 recommended)',
      },
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'beforeTitle',
              type: 'text',
              label: 'Before Title',
              required: true,
              admin: {
                description: 'Problem state',
                width: '50%',
              },
              minLength: 10,
              maxLength: 50,
            },
            {
              name: 'afterTitle',
              type: 'text',
              label: 'After Title',
              required: true,
              admin: {
                description: 'Solution state',
                width: '50%',
              },
              minLength: 10,
              maxLength: 50,
            },
          ],
        },
        {
          type: 'row',
          fields: [
            {
              name: 'beforeDetail',
              type: 'textarea',
              label: 'Before Detail',
              admin: {
                description: 'Expanded pain',
                width: '50%',
              },
              minLength: 40,
              maxLength: 200,
            },
            {
              name: 'afterDetail',
              type: 'textarea',
              label: 'After Detail',
              admin: {
                description: 'Expanded outcome',
                width: '50%',
              },
              minLength: 40,
              maxLength: 200,
            },
          ],
        },
      ],
    },
    {
      name: 'showStatsBar',
      type: 'checkbox',
      label: 'Show Stats Bar',
      defaultValue: false,
      admin: {
        description: 'Display statistics that reinforce the pain/transformation',
      },
    },
    {
      name: 'stats',
      type: 'array',
      label: 'Statistics',
      minRows: 2,
      maxRows: 3,
      admin: {
        description: 'Stats that reinforce the transformation with data',
        condition: (data, siblingData) => siblingData?.showStatsBar,
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
                description: 'e.g., "80%"',
                width: '30%',
              },
              minLength: 1,
              maxLength: 10,
            },
            {
              name: 'label',
              type: 'text',
              label: 'Label',
              required: true,
              admin: {
                description: 'e.g., "of features go unused"',
                width: '70%',
              },
              minLength: 15,
              maxLength: 80,
            },
          ],
        },
      ],
    },
    {
      name: 'positioningStatement',
      type: 'textarea',
      label: 'Positioning Statement',
      admin: {
        description:
          'Optional: How Shorter Loop fits as the operating system for product decisions',
      },
      minLength: 60,
      maxLength: 200,
    },
  ],
}

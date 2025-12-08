import { Block } from 'payload'

export const FeaturesBlock: Block = {
  slug: 'features',
  dbName: 'feats', // Shortened for DB table names
  labels: {
    singular: 'Features',
    plural: 'Features',
  },
  imageURL: '/assets/blocks/features.png',
  fields: [
    {
      name: 'headline',
      type: 'text',
      label: 'Headline',
      required: true,
      admin: {
        description: 'e.g., "Built for Teams That Listen"',
      },
      minLength: 15,
      maxLength: 50,
    },
    {
      name: 'subheadline',
      type: 'text',
      label: 'Subheadline',
      admin: {
        description: 'Optional framing',
      },
      minLength: 30,
      maxLength: 100,
    },
    {
      name: 'heroFeatures',
      type: 'array',
      label: 'Hero Features',
      dbName: 'feat_hero', // Unique dbName
      required: true,
      minRows: 2,
      maxRows: 3,
      admin: {
        description: 'Primary features shown prominently (2-3)',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true,
          minLength: 15,
          maxLength: 50,
        },
        {
          name: 'tagline',
          type: 'text',
          label: 'Tagline',
          required: true,
          admin: {
            description: 'One-line value prop',
          },
          minLength: 20,
          maxLength: 60,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
          required: true,
          admin: {
            description: 'Detailed explanation',
          },
          minLength: 80,
          maxLength: 200,
        },
        {
          name: 'benefits',
          type: 'array',
          label: 'Benefits',
          dbName: 'feat_ben', // Unique dbName for nested array
          required: true,
          minRows: 3,
          maxRows: 4,
          fields: [
            {
              name: 'text',
              type: 'text',
              label: 'Benefit',
              required: true,
              admin: {
                description: 'Single benefit (outcome, not specification)',
              },
              minLength: 15,
              maxLength: 60,
            },
          ],
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Image',
          required: true,
          admin: {
            description: 'Screenshot or illustration',
          },
        },
      ],
    },
    {
      name: 'additionalFeatures',
      type: 'array',
      label: 'Additional Features',
      dbName: 'feat_add', // Unique dbName
      maxRows: 6,
      admin: {
        description: 'Secondary features shown smaller (0-6)',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true,
          minLength: 15,
          maxLength: 50,
        },
        {
          name: 'tagline',
          type: 'text',
          label: 'Tagline',
          required: true,
          admin: {
            description: 'One-line value prop',
          },
          minLength: 20,
          maxLength: 60,
        },
        {
          name: 'description',
          type: 'text',
          label: 'Description',
          required: true,
          admin: {
            description: 'Brief explanation',
          },
          minLength: 60,
          maxLength: 150,
        },
        {
          name: 'icon',
          type: 'select',
          label: 'Icon',
          required: true,
          options: [
            { label: 'Collect', value: 'collect' },
            { label: 'Organize', value: 'organize' },
            { label: 'Analyze', value: 'analyze' },
            { label: 'Prioritize', value: 'prioritize' },
            { label: 'Track', value: 'track' },
            { label: 'Report', value: 'report' },
            { label: 'Integrate', value: 'integrate' },
            { label: 'Automate', value: 'automate' },
            { label: 'Collaborate', value: 'collaborate' },
            { label: 'Secure', value: 'secure' },
          ],
        },
      ],
    },
  ],
}

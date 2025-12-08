import { Block } from 'payload'

export const TrustedByBlock: Block = {
  slug: 'trustedBy',
  dbName: 'trust', // Shortened for DB table names
  labels: {
    singular: 'Trusted By',
    plural: 'Trusted By',
  },
  imageURL: '/assets/blocks/trusted-by.png',
  fields: [
    {
      name: 'headline',
      type: 'text',
      label: 'Headline',
      admin: {
        description: 'e.g., "Built for product teams who refuse to guess"',
      },
      minLength: 10,
      maxLength: 50,
    },
    {
      name: 'displayMode',
      type: 'select',
      label: 'Display Mode',
      required: true,
      defaultValue: 'logos',
      options: [
        { label: 'Logos Only', value: 'logos' },
        { label: 'Audience Tags Only', value: 'audience_tags' },
        { label: 'Both', value: 'both' },
      ],
      admin: {
        description: 'How to display the trust signals',
      },
    },
    {
      name: 'logos',
      type: 'array',
      label: 'Company Logos',
      dbName: 'trust_logos', // Unique dbName
      minRows: 3,
      maxRows: 8,
      admin: {
        description: 'Company logos (grayscale preferred)',
        condition: (data, siblingData) =>
          siblingData?.displayMode === 'logos' || siblingData?.displayMode === 'both',
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Logo',
          required: true,
        },
        {
          name: 'alt',
          type: 'text',
          label: 'Company Name',
          required: true,
          minLength: 2,
          maxLength: 40,
        },
      ],
    },
    {
      name: 'audienceTags',
      type: 'array',
      label: 'Audience Tags',
      dbName: 'trust_tags', // Unique dbName
      minRows: 3,
      maxRows: 5,
      admin: {
        description: 'Self-identification tags for target audience',
        condition: (data, siblingData) =>
          siblingData?.displayMode === 'audience_tags' || siblingData?.displayMode === 'both',
      },
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Tag Label',
          required: true,
          admin: {
            description: 'e.g., "Product Managers", "CPOs", "Heads of Product"',
          },
          minLength: 5,
          maxLength: 30,
        },
      ],
    },
  ],
}

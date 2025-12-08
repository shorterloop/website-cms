import { Block } from 'payload'

export const CapabilityClustersBlock: Block = {
  slug: 'capabilityClusters',
  dbName: 'clusters', // Shortened for DB table names
  labels: {
    singular: 'Capability Clusters',
    plural: 'Capability Clusters',
  },
  imageURL: '/assets/blocks/capability-clusters.png',
  fields: [
    {
      name: 'headline',
      type: 'text',
      label: 'Headline',
      required: true,
      admin: {
        description: 'e.g., "Everything You Need, Nothing You Don\'t"',
      },
      minLength: 15,
      maxLength: 50,
    },
    {
      name: 'subheadline',
      type: 'text',
      label: 'Subheadline',
      admin: {
        description: 'e.g., "Three capabilities. One connected system."',
      },
      minLength: 20,
      maxLength: 100,
    },
    {
      name: 'clusters',
      type: 'array',
      label: 'Clusters',
      dbName: 'clust_items', // Unique dbName
      required: true,
      minRows: 3,
      maxRows: 3,
      admin: {
        description: 'Exactly 3 clusters: Understand, Decide, Align',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Cluster Name',
          required: true,
          admin: {
            description: 'e.g., "Understand", "Decide", "Align"',
          },
          minLength: 5,
          maxLength: 20,
        },
        {
          name: 'tagline',
          type: 'text',
          label: 'Tagline',
          required: true,
          admin: {
            description: 'e.g., "Turn noise into signal"',
          },
          minLength: 15,
          maxLength: 40,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
          required: true,
          admin: {
            description: 'What you get, concretely',
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
            { label: 'Understand (Ear/Listen)', value: 'understand' },
            { label: 'Decide (Scale/Balance)', value: 'decide' },
            { label: 'Align (People/Team)', value: 'align' },
            { label: 'Discover', value: 'discover' },
            { label: 'Analyze', value: 'analyze' },
            { label: 'Execute', value: 'execute' },
          ],
        },
        {
          name: 'features',
          type: 'array',
          label: 'Features',
          dbName: 'clust_feats', // Unique dbName for nested array
          required: true,
          minRows: 3,
          maxRows: 5,
          admin: {
            description: 'Specific features in this cluster (3-5)',
          },
          fields: [
            {
              name: 'name',
              type: 'text',
              label: 'Feature Name',
              required: true,
              admin: {
                description: 'e.g., "Feedback Inbox", "Theme Detection"',
              },
              minLength: 10,
              maxLength: 40,
            },
          ],
        },
        {
          name: 'linkUrl',
          type: 'text',
          label: 'Link URL',
          required: true,
          admin: {
            description: 'Path to capability page',
          },
        },
        {
          name: 'linkText',
          type: 'text',
          label: 'Link Text',
          required: true,
          defaultValue: 'Explore →',
          admin: {
            description: 'e.g., "Explore →"',
          },
          minLength: 5,
          maxLength: 25,
        },
      ],
    },
  ],
}

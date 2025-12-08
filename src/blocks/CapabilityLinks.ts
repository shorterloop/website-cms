import { Block } from 'payload'

export const CapabilityLinksBlock: Block = {
  slug: 'capabilityLinks',
  dbName: 'caps', // Shortened for DB table names
  labels: {
    singular: 'Capability Links',
    plural: 'Capability Links',
  },
  imageURL: '/assets/blocks/capability-links.png',
  fields: [
    {
      name: 'headline',
      type: 'text',
      label: 'Headline',
      required: true,
      defaultValue: 'Powered By',
      admin: {
        description: 'e.g., "Powered By" or "Built With"',
      },
      minLength: 10,
      maxLength: 50,
    },
    {
      name: 'subheadline',
      type: 'text',
      label: 'Subheadline',
      admin: {
        description: 'Optional context',
      },
      minLength: 20,
      maxLength: 100,
    },
    {
      name: 'capabilities',
      type: 'array',
      label: 'Capabilities',
      dbName: 'cap_links', // Unique dbName
      required: true,
      minRows: 2,
      maxRows: 4,
      admin: {
        description: 'Capabilities that power this solution (2-4)',
      },
      fields: [
        {
          name: 'capabilitySlug',
          type: 'text',
          label: 'Capability Slug',
          required: true,
          admin: {
            description: 'URL slug of the capability page',
          },
        },
        {
          name: 'capabilityName',
          type: 'text',
          label: 'Display Name',
          required: true,
          admin: {
            description: 'e.g., "Feedback Manager", "Signals Engine"',
          },
          minLength: 10,
          maxLength: 40,
        },
        {
          name: 'roleInSolution',
          type: 'text',
          label: 'Role in Solution',
          required: true,
          admin: {
            description: 'Why this capability matters here',
          },
          minLength: 40,
          maxLength: 100,
        },
        {
          name: 'icon',
          type: 'select',
          label: 'Icon',
          options: [
            { label: 'Feedback', value: 'feedback' },
            { label: 'Signals', value: 'signals' },
            { label: 'Roadmap', value: 'roadmap' },
            { label: 'OST', value: 'ost' },
            { label: 'Analytics', value: 'analytics' },
            { label: 'Insights', value: 'insights' },
            { label: 'Workflow', value: 'workflow' },
            { label: 'Collaboration', value: 'collaboration' },
          ],
        },
      ],
    },
    {
      name: 'ctaText',
      type: 'text',
      label: 'CTA Text',
      admin: {
        description: 'Optional call to action',
      },
      minLength: 10,
      maxLength: 30,
    },
    {
      name: 'ctaUrl',
      type: 'text',
      label: 'CTA URL',
      admin: {
        description: 'Link to capabilities overview page',
      },
    },
  ],
}

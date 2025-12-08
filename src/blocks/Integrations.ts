import { Block } from 'payload'

export const IntegrationsBlock: Block = {
  slug: 'integrations',
  dbName: 'intgr', // Shortened for DB table names
  labels: {
    singular: 'Integrations',
    plural: 'Integrations',
  },
  imageURL: '/assets/blocks/integrations.png',
  fields: [
    {
      name: 'variant',
      type: 'select',
      label: 'Display Variant',
      defaultValue: 'grouped',
      options: [
        { label: 'Grouped by Category', value: 'grouped' },
        { label: 'Logo Grid', value: 'grid' },
        { label: 'Compact Bar', value: 'compact' },
      ],
      admin: {
        description: 'How to display the integrations',
      },
    },
    {
      name: 'headline',
      type: 'text',
      label: 'Headline',
      required: true,
      admin: {
        description: 'e.g., "Works With Your Stack" or "25+ Integrations. One Hub."',
      },
      minLength: 15,
      maxLength: 60,
    },
    {
      name: 'subheadline',
      type: 'text',
      label: 'Subheadline',
      required: true,
      admin: {
        description: 'Address the fear (e.g., "Keep using Jira. We\'ll handle the rest.")',
      },
      minLength: 30,
      maxLength: 120,
    },
    {
      name: 'integrationGroups',
      type: 'array',
      label: 'Integration Groups',
      dbName: 'groups', // Shortened for DB
      required: true,
      minRows: 2,
      maxRows: 5,
      admin: {
        description: 'Group integrations by category',
      },
      fields: [
        {
          name: 'groupName',
          type: 'text',
          label: 'Group Name',
          required: true,
          admin: {
            description: 'e.g., "Issue Trackers", "Support Tools", "Analytics"',
          },
          minLength: 5,
          maxLength: 30,
        },
        {
          name: 'integrations',
          type: 'array',
          label: 'Integrations',
          dbName: 'int_items', // Unique dbName to avoid conflict with RelatedContentBlock's 'items'
          required: true,
          minRows: 2,
          maxRows: 8,
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'name',
                  type: 'text',
                  label: 'Name',
                  required: true,
                  admin: {
                    width: '40%',
                  },
                  minLength: 2,
                  maxLength: 30,
                },
                {
                  name: 'status',
                  type: 'select',
                  label: 'Status',
                  required: true,
                  defaultValue: 'live',
                  dbName: 'st', // Shortened for DB
                  options: [
                    { label: 'Live', value: 'live' },
                    { label: 'Coming Soon', value: 'coming_soon' },
                    { label: 'Beta', value: 'beta' },
                  ],
                  admin: {
                    width: '30%',
                  },
                },
                {
                  name: 'featured',
                  type: 'checkbox',
                  label: 'Featured',
                  defaultValue: false,
                  admin: {
                    description: 'Highlight this integration',
                    width: '30%',
                  },
                },
              ],
            },
            {
              name: 'logo',
              type: 'upload',
              relationTo: 'media',
              label: 'Logo',
            },
            {
              name: 'description',
              type: 'text',
              label: 'Description',
              admin: {
                description: 'Optional one-liner about what this integration does',
              },
              minLength: 20,
              maxLength: 100,
            },
          ],
        },
      ],
    },
    {
      name: 'additionalMethods',
      type: 'array',
      label: 'Additional Integration Methods',
      dbName: 'methods', // Shortened for DB
      maxRows: 4,
      admin: {
        description: 'Other ways to integrate (API, CSV, etc.)',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true,
          admin: {
            description: 'e.g., "REST API", "CSV Import", "Webhooks"',
          },
          minLength: 5,
          maxLength: 30,
        },
        {
          name: 'description',
          type: 'text',
          label: 'Description',
          required: true,
          minLength: 20,
          maxLength: 100,
        },
        {
          name: 'icon',
          type: 'select',
          label: 'Icon',
          options: [
            { label: 'API', value: 'api' },
            { label: 'CSV', value: 'csv' },
            { label: 'Webhook', value: 'webhook' },
            { label: 'Zapier', value: 'zapier' },
            { label: 'Code', value: 'code' },
          ],
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'ctaText',
          type: 'text',
          label: 'CTA Text',
          admin: {
            description: 'e.g., "See All Integrations"',
            width: '50%',
          },
          minLength: 10,
          maxLength: 30,
        },
        {
          name: 'ctaUrl',
          type: 'text',
          label: 'CTA URL',
          admin: {
            description: 'Link to full integrations page',
            width: '50%',
          },
        },
      ],
    },
  ],
}

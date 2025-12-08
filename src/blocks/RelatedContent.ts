import { Block } from 'payload'

export const RelatedContentBlock: Block = {
  slug: 'relatedContent',
  dbName: 'related', // Shortened for DB table names
  labels: {
    singular: 'Related Content',
    plural: 'Related Content',
  },
  imageURL: '/assets/blocks/related-content.png',
  fields: [
    {
      name: 'variant',
      type: 'select',
      label: 'Display Variant',
      defaultValue: 'cards',
      options: [
        { label: 'Cards', value: 'cards' },
        { label: 'List', value: 'list' },
        { label: 'Compact Links', value: 'compact' },
      ],
      admin: {
        description: 'How to display the related content',
      },
    },
    {
      name: 'headline',
      type: 'text',
      label: 'Section Headline',
      admin: {
        description: 'e.g., "Continue Learning" or "Related Resources"',
      },
      minLength: 10,
      maxLength: 50,
    },
    {
      name: 'showNextStep',
      type: 'checkbox',
      label: 'Show Primary Next Step',
      defaultValue: true,
      admin: {
        description: 'Display a prominent next action for the user',
      },
    },
    {
      name: 'nextStep',
      type: 'group',
      label: 'Primary Next Step',
      admin: {
        description: 'The main recommended action for the reader',
        condition: (data, siblingData) => siblingData?.showNextStep,
      },
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Label',
          required: true,
          admin: {
            description: 'e.g., "Watch the 3-minute demo"',
          },
          minLength: 15,
          maxLength: 60,
        },
        {
          name: 'url',
          type: 'text',
          label: 'URL',
          required: true,
        },
        {
          name: 'type',
          type: 'select',
          label: 'Type',
          required: true,
          options: [
            { label: 'Demo Video', value: 'demo_video' },
            { label: 'Documentation', value: 'documentation' },
            { label: 'Template', value: 'template' },
            { label: 'Guide', value: 'guide' },
            { label: 'Free Trial', value: 'trial' },
          ],
        },
        {
          name: 'description',
          type: 'text',
          label: 'Description',
          admin: {
            description: "Brief description of what they'll get",
          },
          minLength: 20,
          maxLength: 100,
        },
      ],
    },
    {
      name: 'relatedItems',
      type: 'array',
      label: 'Related Items',
      dbName: 'items', // Shortened for DB
      maxRows: 6,
      admin: {
        description: 'Links to related content (capabilities, articles, etc.)',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true,
          minLength: 10,
          maxLength: 80,
        },
        {
          name: 'url',
          type: 'text',
          label: 'URL',
          required: true,
        },
        {
          name: 'relationshipType',
          type: 'select',
          label: 'Relationship',
          dbName: 'rel', // Shortened for DB
          options: [
            { label: 'Works With', value: 'works_with' },
            { label: 'Alternative To', value: 'alternative_to' },
            { label: 'Builds On', value: 'builds_on' },
            { label: 'Feeds Into', value: 'feeds_into' },
            { label: 'Related Topic', value: 'related' },
          ],
          admin: {
            description: 'How this content relates to the current page',
          },
        },
        {
          name: 'contentType',
          type: 'select',
          label: 'Content Type',
          dbName: 'type', // Shortened for DB
          options: [
            { label: 'Capability', value: 'capability' },
            { label: 'Use Case', value: 'use_case' },
            { label: 'Blog Post', value: 'blog' },
            { label: 'Guide', value: 'guide' },
            { label: 'Case Study', value: 'case_study' },
            { label: 'Template', value: 'template' },
          ],
        },
        {
          name: 'description',
          type: 'text',
          label: 'Description',
          admin: {
            description: "Brief description or why it's relevant",
          },
          minLength: 20,
          maxLength: 120,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Thumbnail',
          admin: {
            description: 'Optional thumbnail image',
          },
        },
      ],
    },
  ],
}

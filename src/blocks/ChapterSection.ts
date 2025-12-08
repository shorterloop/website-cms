import { Block } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const ChapterSectionBlock: Block = {
  slug: 'chapterSection',
  dbName: 'chapter', // Shortened for DB table names
  labels: {
    singular: 'Chapter/Section',
    plural: 'Chapters/Sections',
  },
  imageURL: '/assets/blocks/chapter-section.png',
  fields: [
    {
      name: 'chapterNumber',
      type: 'number',
      label: 'Chapter Number',
      admin: {
        description: 'Optional chapter number for numbered sections',
      },
      min: 1,
      max: 20,
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
      admin: {
        description: 'Chapter or section title',
      },
      minLength: 10,
      maxLength: 80,
    },
    {
      name: 'slug',
      type: 'text',
      label: 'Slug',
      required: true,
      admin: {
        description: 'For anchor links (e.g., "getting-started", "best-practices")',
      },
    },
    {
      name: 'body',
      type: 'richText',
      label: 'Content',
      required: true,
      editor: lexicalEditor({}),
      admin: {
        description: 'Main chapter content',
      },
    },
    {
      name: 'keyInsight',
      type: 'textarea',
      label: 'Key Insight',
      admin: {
        description: 'Optional pullout insight or quote to highlight',
      },
      minLength: 30,
      maxLength: 150,
    },
    {
      name: 'visual',
      type: 'upload',
      relationTo: 'media',
      label: 'Visual',
      admin: {
        description: 'Optional diagram, screenshot, or illustration',
      },
    },
    {
      name: 'callout',
      type: 'group',
      label: 'Callout Box',
      admin: {
        description: 'Optional callout for tips, warnings, or examples',
      },
      fields: [
        {
          name: 'showCallout',
          type: 'checkbox',
          label: 'Show Callout',
          defaultValue: false,
        },
        {
          name: 'type',
          type: 'select',
          label: 'Callout Type',
          defaultValue: 'tip',
          options: [
            { label: 'Tip', value: 'tip' },
            { label: 'Warning', value: 'warning' },
            { label: 'Example', value: 'example' },
            { label: 'Note', value: 'note' },
            { label: 'Quote', value: 'quote' },
          ],
          admin: {
            condition: (data, siblingData) => siblingData?.showCallout,
          },
        },
        {
          name: 'content',
          type: 'textarea',
          label: 'Callout Content',
          admin: {
            condition: (data, siblingData) => siblingData?.showCallout,
          },
          minLength: 20,
          maxLength: 300,
        },
      ],
    },
  ],
}

import { Block } from 'payload'

export const TableOfContentsBlock: Block = {
  slug: 'tableOfContents',
  dbName: 'toc', // Shortened for DB table names
  labels: {
    singular: 'Table of Contents',
    plural: 'Tables of Contents',
  },
  imageURL: '/assets/blocks/table-of-contents.png',
  fields: [
    {
      name: 'headline',
      type: 'text',
      label: 'Headline',
      defaultValue: 'On This Page',
      admin: {
        description: 'e.g., "On This Page", "Contents", "Jump To"',
      },
      minLength: 5,
      maxLength: 30,
    },
    {
      name: 'position',
      type: 'select',
      label: 'Position',
      required: true,
      defaultValue: 'sidebar_sticky',
      options: [
        { label: 'Sticky Sidebar', value: 'sidebar_sticky' },
        { label: 'Inline (Top)', value: 'top_inline' },
        { label: 'Floating Button', value: 'floating' },
      ],
      admin: {
        description: 'Where to display the table of contents',
      },
    },
    {
      name: 'showProgress',
      type: 'checkbox',
      label: 'Show Reading Progress',
      defaultValue: false,
      admin: {
        description: 'Display a reading progress indicator',
      },
    },
    {
      name: 'autoGenerate',
      type: 'checkbox',
      label: 'Auto-generate from Headings',
      defaultValue: true,
      admin: {
        description: 'Automatically generate TOC from page headings (H2, H3)',
      },
    },
    {
      name: 'items',
      type: 'array',
      label: 'Manual TOC Items',
      dbName: 'toc_items', // Unique dbName
      admin: {
        description: 'Manual TOC entries (used if auto-generate is off)',
        condition: (data, siblingData) => !siblingData?.autoGenerate,
      },
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Label',
          required: true,
          admin: {
            description: 'Display text for the TOC item',
          },
          minLength: 5,
          maxLength: 60,
        },
        {
          name: 'anchorId',
          type: 'text',
          label: 'Anchor ID',
          required: true,
          admin: {
            description: 'Section ID to scroll to',
          },
        },
        {
          name: 'level',
          type: 'select',
          label: 'Level',
          defaultValue: 'h2',
          options: [
            { label: 'H2 (Main Section)', value: 'h2' },
            { label: 'H3 (Subsection)', value: 'h3' },
          ],
          admin: {
            description: 'Indentation level',
          },
        },
      ],
    },
    {
      name: 'hideOnMobile',
      type: 'checkbox',
      label: 'Hide on Mobile',
      defaultValue: false,
      admin: {
        description: 'Hide the TOC on mobile devices (use floating button instead)',
      },
    },
  ],
}

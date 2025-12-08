import { Block } from 'payload'

export const CardsBlock: Block = {
  slug: 'cards',
  dbName: 'cards', // Shortened for DB table names
  labels: {
    singular: 'Cards',
    plural: 'Cards',
  },
  imageURL: '/assets/blocks/cards.png',
  fields: [
    {
      name: 'headline',
      type: 'text',
      label: 'Section Headline',
      admin: {
        description: 'Optional headline for the cards section',
      },
      maxLength: 60,
    },
    {
      name: 'subheadline',
      type: 'text',
      label: 'Section Subheadline',
      admin: {
        description: 'Optional subheadline for the cards section',
      },
      maxLength: 120,
    },
    {
      name: 'layout',
      type: 'select',
      label: 'Layout',
      required: true,
      defaultValue: 'grid-3',
      options: [
        { label: '2 Columns Grid', value: 'grid-2' },
        { label: '3 Columns Grid', value: 'grid-3' },
        { label: '4 Columns Grid', value: 'grid-4' },
        { label: 'Horizontal Scroll', value: 'scroll' },
      ],
      admin: {
        description: 'How to display the cards',
      },
    },
    {
      name: 'cards',
      type: 'array',
      label: 'Cards',
      dbName: 'card_items', // Unique dbName for nested array
      required: true,
      minRows: 1,
      maxRows: 12,
      admin: {
        description: 'Add cards to this section (1-12)',
      },
      fields: [
        {
          name: 'headline',
          type: 'text',
          label: 'Headline',
          required: true,
          admin: {
            description: 'Card headline',
          },
          minLength: 5,
          maxLength: 60,
        },
        {
          name: 'subheadline',
          type: 'text',
          label: 'Subheadline',
          admin: {
            description: 'Optional card subheadline',
          },
          maxLength: 80,
        },
        {
          name: 'icon',
          type: 'select',
          label: 'Icon',
          admin: {
            description: 'Optional icon for the card',
          },
          options: [
            { label: 'Check', value: 'check' },
            { label: 'Star', value: 'star' },
            { label: 'Lightning', value: 'lightning' },
            { label: 'Shield', value: 'shield' },
            { label: 'Chart', value: 'chart' },
            { label: 'Users', value: 'users' },
            { label: 'Gear', value: 'gear' },
            { label: 'Heart', value: 'heart' },
            { label: 'Target', value: 'target' },
            { label: 'Rocket', value: 'rocket' },
            { label: 'Clock', value: 'clock' },
            { label: 'Globe', value: 'globe' },
          ],
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
          admin: {
            description: 'Optional card description',
          },
          maxLength: 200,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Image',
          admin: {
            description: 'Optional card image',
          },
        },
        {
          name: 'imagePosition',
          type: 'select',
          label: 'Image Position',
          defaultValue: 'top',
          options: [
            { label: 'Top', value: 'top' },
            { label: 'Bottom', value: 'bottom' },
            { label: 'Left', value: 'left' },
            { label: 'Right', value: 'right' },
          ],
          admin: {
            description: 'Where to position the image relative to content',
            condition: (data, siblingData) => Boolean(siblingData?.image),
          },
        },
        {
          name: 'linkUrl',
          type: 'text',
          label: 'Link URL',
          admin: {
            description: 'Optional link for the card',
          },
        },
        {
          name: 'linkText',
          type: 'text',
          label: 'Link Text',
          defaultValue: 'Learn more →',
          admin: {
            description: 'Text for the link (if URL provided)',
            condition: (data, siblingData) => Boolean(siblingData?.linkUrl),
          },
          maxLength: 30,
        },
      ],
    },
  ],
}

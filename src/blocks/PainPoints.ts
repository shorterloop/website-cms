import { Block } from 'payload'

export const PainPointsBlock: Block = {
  slug: 'painPoints',
  dbName: 'pains', // Shortened for DB table names
  labels: {
    singular: 'Pain Points',
    plural: 'Pain Points',
  },
  imageURL: '/assets/blocks/pain-points.png',
  fields: [
    {
      name: 'variant',
      type: 'select',
      label: 'Display Variant',
      defaultValue: 'list',
      options: [
        { label: 'Simple List', value: 'list' },
        { label: 'Cards with Icons', value: 'cards' },
        { label: 'Narrative with Points', value: 'narrative' },
        { label: 'Warning Signs', value: 'warnings' },
      ],
      admin: {
        description: 'How to display the pain points',
      },
    },
    {
      name: 'headline',
      type: 'text',
      label: 'Headline',
      required: true,
      admin: {
        description: 'Name the struggle. Can be provocative.',
      },
      minLength: 15,
      maxLength: 60,
    },
    {
      name: 'subheadline',
      type: 'text',
      label: 'Subheadline',
      admin: {
        description: 'Optional elaboration (will be italicized)',
      },
      minLength: 30,
      maxLength: 120,
    },
    {
      name: 'narrative',
      type: 'richText',
      label: 'Narrative',
      admin: {
        description:
          'The story. Prose, not bullets. Should include antagonist + loss. Use for "narrative" variant.',
        condition: (data, siblingData) => siblingData?.variant === 'narrative',
      },
    },
    {
      name: 'painPoints',
      type: 'array',
      label: 'Pain Points',
      required: true,
      minRows: 3,
      maxRows: 6,
      admin: {
        description: 'List of pain points (3-4 recommended for most contexts)',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true,
          admin: {
            description: 'The pain in one line',
          },
          minLength: 15,
          maxLength: 60,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
          required: true,
          admin: {
            description: 'Expand the pain. Be specific, not generic.',
          },
          minLength: 40,
          maxLength: 200,
        },
        {
          name: 'icon',
          type: 'select',
          label: 'Icon',
          options: [
            { label: 'Warning', value: 'warning' },
            { label: 'Error', value: 'error' },
            { label: 'Time', value: 'time' },
            { label: 'Money', value: 'money' },
            { label: 'Confusion', value: 'confusion' },
            { label: 'Disconnect', value: 'disconnect' },
            { label: 'Chaos', value: 'chaos' },
            { label: 'Silence', value: 'silence' },
            { label: 'Conflict', value: 'conflict' },
            { label: 'Loss', value: 'loss' },
          ],
        },
        {
          name: 'severity',
          type: 'select',
          label: 'Severity',
          options: [
            { label: 'Early Warning', value: 'early' },
            { label: 'Mid Stage', value: 'mid' },
            { label: 'Late/Critical', value: 'late' },
          ],
          admin: {
            description: 'For warning signs variant - indicates progression',
            condition: (data, siblingData, { blockData }) => blockData?.variant === 'warnings',
          },
        },
        {
          name: 'consequence',
          type: 'text',
          label: 'Consequence',
          admin: {
            description: 'What happens because of this pain point',
          },
          minLength: 30,
          maxLength: 120,
        },
      ],
    },
    {
      name: 'emotionalQuestion',
      type: 'text',
      label: 'Emotional Question',
      admin: {
        description:
          'The question they ask themselves (e.g., "How do I justify this to the board?")',
        condition: (data, siblingData) => siblingData?.variant === 'narrative',
      },
      minLength: 30,
      maxLength: 100,
    },
    {
      name: 'antagonists',
      type: 'array',
      label: 'Antagonists',
      maxRows: 4,
      admin: {
        description: 'The villains (behaviors, not people)',
        condition: (data, siblingData) => siblingData?.variant === 'narrative',
      },
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
          admin: {
            description: 'e.g., "Loudest-voice wins"',
          },
          minLength: 15,
          maxLength: 60,
        },
      ],
    },
    {
      name: 'losses',
      type: 'array',
      label: 'Losses',
      maxRows: 3,
      admin: {
        description: "What's at stake",
        condition: (data, siblingData) => siblingData?.variant === 'narrative',
      },
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
          admin: {
            description: 'e.g., "6 months building the wrong feature"',
          },
          minLength: 20,
          maxLength: 80,
        },
      ],
    },
  ],
}

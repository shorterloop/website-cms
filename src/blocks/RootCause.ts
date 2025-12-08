import { Block } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const RootCauseBlock: Block = {
  slug: 'rootCause',
  dbName: 'rootc', // Shortened for DB table names
  labels: {
    singular: 'Root Cause',
    plural: 'Root Causes',
  },
  imageURL: '/assets/blocks/root-cause.png',
  fields: [
    {
      name: 'headline',
      type: 'text',
      label: 'Headline',
      required: true,
      admin: {
        description: 'e.g., "It\'s Not a People Problem. It\'s a System Problem."',
      },
      minLength: 15,
      maxLength: 60,
    },
    {
      name: 'explanation',
      type: 'richText',
      label: 'Explanation',
      required: true,
      editor: lexicalEditor({}),
      admin: {
        description: 'Why this is structural, not individual failure. Don\'t blame them — blame the system.',
      },
    },
    {
      name: 'systemGaps',
      type: 'array',
      label: 'System Gaps',
      dbName: 'rootc_gaps', // Unique dbName
      required: true,
      minRows: 2,
      maxRows: 4,
      admin: {
        description: 'The missing pieces in the current system (2-4)',
      },
      fields: [
        {
          name: 'gap',
          type: 'text',
          label: 'Gap',
          required: true,
          admin: {
            description: 'What\'s missing, e.g., "No single source of truth for feedback"',
          },
          minLength: 15,
          maxLength: 50,
        },
        {
          name: 'consequence',
          type: 'text',
          label: 'Consequence',
          required: true,
          admin: {
            description: 'What happens because of this gap',
          },
          minLength: 40,
          maxLength: 100,
        },
        {
          name: 'icon',
          type: 'select',
          label: 'Icon',
          options: [
            { label: 'Broken', value: 'broken' },
            { label: 'Missing', value: 'missing' },
            { label: 'Disconnect', value: 'disconnect' },
            { label: 'Chaos', value: 'chaos' },
            { label: 'Blind Spot', value: 'blind_spot' },
            { label: 'Fragmented', value: 'fragmented' },
          ],
        },
      ],
    },
    {
      name: 'reframe',
      type: 'textarea',
      label: 'Reframe',
      required: true,
      admin: {
        description: 'The "aha" moment insight that shifts perspective. e.g., "You don\'t have a prioritization problem. You have an evidence problem."',
      },
      minLength: 50,
      maxLength: 150,
    },
    {
      name: 'reframeHighlight',
      type: 'text',
      label: 'Reframe Highlight Word',
      admin: {
        description: 'Optional word to emphasize in the reframe',
      },
      maxLength: 20,
    },
    {
      name: 'visual',
      type: 'upload',
      relationTo: 'media',
      label: 'Visual',
      admin: {
        description: 'Optional diagram showing the system gap',
      },
    },
  ],
}

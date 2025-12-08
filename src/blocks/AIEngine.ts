import { Block } from 'payload'

export const AIEngineBlock: Block = {
  slug: 'aiEngine',
  dbName: 'ai', // Shortened for DB table names
  labels: {
    singular: 'AI Engine',
    plural: 'AI Engines',
  },
  imageURL: '/assets/blocks/ai-engine.png',
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      label: 'Eyebrow',
      admin: {
        description: 'e.g., "Your Moat"',
      },
      minLength: 5,
      maxLength: 30,
    },
    {
      name: 'headline',
      type: 'text',
      label: 'Headline',
      required: true,
      admin: {
        description: 'e.g., "Your Research Team, Always On"',
      },
      minLength: 15,
      maxLength: 50,
    },
    {
      name: 'subheadline',
      type: 'text',
      label: 'Subheadline',
      required: true,
      admin: {
        description: 'What the AI does - one sentence',
      },
      minLength: 40,
      maxLength: 120,
    },
    {
      name: 'body',
      type: 'textarea',
      label: 'Body',
      required: true,
      admin: {
        description: 'The synthesis story - focus on what humans couldn\'t do at scale',
      },
      minLength: 80,
      maxLength: 200,
    },
    {
      name: 'capabilities',
      type: 'array',
      label: 'AI Capabilities',
      dbName: 'ai_caps', // Unique dbName
      required: true,
      minRows: 3,
      maxRows: 4,
      admin: {
        description: 'What the AI enables (3-4 capabilities)',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Capability Title',
          required: true,
          minLength: 10,
          maxLength: 40,
        },
        {
          name: 'description',
          type: 'text',
          label: 'Description',
          required: true,
          admin: {
            description: 'Outcome-focused, not feature-focused',
          },
          minLength: 40,
          maxLength: 100,
        },
        {
          name: 'icon',
          type: 'select',
          label: 'Icon',
          options: [
            { label: 'Synthesis', value: 'synthesis' },
            { label: 'Pattern', value: 'pattern' },
            { label: 'Signal', value: 'signal' },
            { label: 'Insight', value: 'insight' },
            { label: 'Automation', value: 'automation' },
            { label: 'Speed', value: 'speed' },
          ],
        },
      ],
    },
    {
      name: 'visual',
      type: 'upload',
      relationTo: 'media',
      label: 'Visual',
      admin: {
        description: 'Screenshot or illustration showing AI in action',
      },
    },
    {
      name: 'disclaimer',
      type: 'text',
      label: 'Disclaimer',
      admin: {
        description: 'Optional disclaimer about AI capabilities',
      },
      maxLength: 100,
    },
  ],
}

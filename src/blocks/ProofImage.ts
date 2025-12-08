import { Block } from 'payload'

export const ProofImageBlock: Block = {
  slug: 'proofImage',
  dbName: 'proof', // Shortened for DB table names
  labels: {
    singular: 'Proof Image',
    plural: 'Proof Images',
  },
  imageURL: '/assets/blocks/proof-image.png',
  fields: [
    {
      name: 'headline',
      type: 'text',
      label: 'Headline',
      admin: {
        description: 'Optional. e.g., "See it in action"',
      },
      minLength: 10,
      maxLength: 50,
    },
    {
      name: 'proofType',
      type: 'select',
      label: 'Proof Type',
      required: true,
      defaultValue: 'screenshot',
      options: [
        { label: 'Screenshot', value: 'screenshot' },
        { label: 'Before/After', value: 'before_after' },
        { label: 'Output Example', value: 'output_example' },
        { label: 'Audit Log', value: 'audit_log' },
        { label: 'Graph/Analytics', value: 'graph' },
      ],
      admin: {
        description: 'Type of proof being shown',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Real Usage Image',
      required: true,
      admin: {
        description: 'MUST be a real screenshot, not a mockup or illustration',
      },
    },
    {
      name: 'caption',
      type: 'textarea',
      label: 'Caption',
      required: true,
      admin: {
        description: 'Describe the scenario. What are we looking at? Include context.',
      },
      minLength: 40,
      maxLength: 150,
    },
    {
      name: 'context',
      type: 'text',
      label: 'Additional Context',
      admin: {
        description: 'e.g., "Created by a 12-person product team during Q3 planning"',
      },
      minLength: 20,
      maxLength: 100,
    },
  ],
}

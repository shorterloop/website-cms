import { Block } from 'payload'

export const WorkflowBlock: Block = {
  slug: 'workflow',
  labels: {
    singular: 'Workflow',
    plural: 'Workflows',
  },
  imageURL: '/assets/blocks/workflow.png',
  fields: [
    {
      name: 'variant',
      type: 'select',
      label: 'Display Variant',
      defaultValue: 'flow_line',
      options: [
        { label: 'Flow Line', value: 'flow_line' },
        { label: 'Numbered Steps', value: 'numbered' },
        { label: 'Cards', value: 'cards' },
        { label: 'Timeline', value: 'timeline' },
      ],
      admin: {
        description: 'How to display the workflow steps',
      },
    },
    {
      name: 'eyebrow',
      type: 'text',
      label: 'Eyebrow Text',
      admin: {
        description: 'Small text above the headline (e.g., "How It Works")',
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
        description: 'Section headline (e.g., "From Noise to Strategy")',
      },
      minLength: 15,
      maxLength: 60,
    },
    {
      name: 'subheadline',
      type: 'text',
      label: 'Subheadline',
      admin: {
        description: 'Brief setup text',
      },
      minLength: 30,
      maxLength: 120,
    },
    {
      name: 'steps',
      type: 'array',
      label: 'Steps',
      required: true,
      minRows: 3,
      maxRows: 6,
      admin: {
        description: 'The workflow steps (3-6 steps recommended)',
      },
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'stepNumber',
              type: 'number',
              label: 'Step Number',
              required: true,
              min: 1,
              max: 6,
              admin: {
                width: '20%',
              },
            },
            {
              name: 'label',
              type: 'text',
              label: 'Step Label',
              required: true,
              admin: {
                description: 'Short label (e.g., "Signals", "Themes", "Opportunities")',
                width: '80%',
              },
              minLength: 3,
              maxLength: 30,
            },
          ],
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
          required: true,
          admin: {
            description: 'What happens at this stage',
          },
          minLength: 40,
          maxLength: 150,
        },
        {
          name: 'icon',
          type: 'select',
          label: 'Icon',
          options: [
            { label: 'Signal', value: 'signal' },
            { label: 'Theme', value: 'theme' },
            { label: 'Opportunity', value: 'opportunity' },
            { label: 'Bet', value: 'bet' },
            { label: 'Roadmap', value: 'roadmap' },
            { label: 'Outcome', value: 'outcome' },
            { label: 'Collect', value: 'collect' },
            { label: 'Analyze', value: 'analyze' },
            { label: 'Decide', value: 'decide' },
            { label: 'Execute', value: 'execute' },
            { label: 'Measure', value: 'measure' },
            { label: 'Learn', value: 'learn' },
          ],
          admin: {
            description: 'Icon to display for this step',
          },
        },
        {
          name: 'isPivotPoint',
          type: 'checkbox',
          label: 'Highlight as Pivot Point',
          defaultValue: false,
          admin: {
            description: 'Give this step visual emphasis (accent color)',
          },
        },
        {
          name: 'screenshot',
          type: 'upload',
          relationTo: 'media',
          label: 'Screenshot',
          admin: {
            description: 'Optional screenshot showing this step in action',
          },
        },
      ],
    },
    {
      name: 'conclusion',
      type: 'text',
      label: 'Conclusion',
      admin: {
        description: 'Optional wrap-up text after the steps',
      },
      minLength: 30,
      maxLength: 120,
    },
    {
      name: 'visual',
      type: 'upload',
      relationTo: 'media',
      label: 'Flow Diagram',
      admin: {
        description: 'Optional diagram or illustration of the full workflow',
      },
    },
  ],
}

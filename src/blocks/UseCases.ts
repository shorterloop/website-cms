import { Block } from 'payload'

export const UseCasesBlock: Block = {
  slug: 'useCases',
  dbName: 'ucase', // Shortened for DB table names
  labels: {
    singular: 'Use Cases',
    plural: 'Use Cases',
  },
  imageURL: '/assets/blocks/use-cases.png',
  fields: [
    {
      name: 'headline',
      type: 'text',
      label: 'Headline',
      required: true,
      admin: {
        description: 'e.g., "How Teams Use Feedback Manager"',
      },
      minLength: 15,
      maxLength: 50,
    },
    {
      name: 'subheadline',
      type: 'text',
      label: 'Subheadline',
      admin: {
        description: 'Optional framing',
      },
      minLength: 30,
      maxLength: 100,
    },
    {
      name: 'useCases',
      type: 'array',
      label: 'Use Cases',
      dbName: 'uc_items', // Unique dbName
      required: true,
      minRows: 2,
      maxRows: 4,
      admin: {
        description: 'Different scenarios or personas (2-4)',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true,
          admin: {
            description: 'Scenario title, e.g., "SaaS Product Team"',
          },
          minLength: 15,
          maxLength: 60,
        },
        {
          name: 'subtitle',
          type: 'text',
          label: 'Subtitle',
          admin: {
            description: 'Context, e.g., "500+ backlog items"',
          },
          minLength: 15,
          maxLength: 60,
        },
        {
          name: 'companyType',
          type: 'text',
          label: 'Company Type',
          admin: {
            description: 'e.g., "B2B SaaS, 25-person team"',
          },
          minLength: 10,
          maxLength: 40,
        },
        {
          name: 'challenge',
          type: 'textarea',
          label: 'Challenge',
          required: true,
          admin: {
            description: 'The problem they faced',
          },
          minLength: 60,
          maxLength: 150,
        },
        {
          name: 'solution',
          type: 'textarea',
          label: 'Solution',
          required: true,
          admin: {
            description: 'How they used the capability',
          },
          minLength: 60,
          maxLength: 150,
        },
        {
          name: 'results',
          type: 'array',
          label: 'Results',
          dbName: 'uc_results', // Unique dbName for nested array
          required: true,
          minRows: 2,
          maxRows: 4,
          admin: {
            description: 'Outcomes achieved. At least one must have a metric!',
          },
          fields: [
            {
              name: 'text',
              type: 'text',
              label: 'Result',
              required: true,
              admin: {
                description: 'Single result statement',
              },
              minLength: 20,
              maxLength: 80,
            },
            {
              name: 'hasMetric',
              type: 'checkbox',
              label: 'Has Metric',
              required: true,
              defaultValue: false,
              admin: {
                description:
                  'Does this result include a number/percentage/timeframe?',
              },
            },
          ],
        },
        {
          name: 'showQuote',
          type: 'checkbox',
          label: 'Include Quote',
          defaultValue: false,
        },
        {
          name: 'quote',
          type: 'group',
          label: 'Quote',
          admin: {
            condition: (data, siblingData) => siblingData?.showQuote,
          },
          fields: [
            {
              name: 'text',
              type: 'textarea',
              label: 'Quote Text',
              required: true,
              minLength: 60,
              maxLength: 200,
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'authorName',
                  type: 'text',
                  label: 'Author Name',
                  required: true,
                  admin: {
                    width: '50%',
                  },
                  minLength: 5,
                  maxLength: 50,
                },
                {
                  name: 'authorTitle',
                  type: 'text',
                  label: 'Author Title',
                  required: true,
                  admin: {
                    width: '50%',
                    description: 'Role and company',
                  },
                  minLength: 10,
                  maxLength: 60,
                },
              ],
            },
          ],
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Image',
          admin: {
            description: 'Optional visual',
          },
        },
      ],
    },
  ],
}

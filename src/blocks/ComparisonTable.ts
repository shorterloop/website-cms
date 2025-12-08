import { Block } from 'payload'

export const ComparisonTableBlock: Block = {
  slug: 'comparisonTable',
  dbName: 'compare', // Shortened for DB table names
  labels: {
    singular: 'Comparison Table',
    plural: 'Comparison Tables',
  },
  imageURL: '/assets/blocks/comparison.png',
  fields: [
    {
      name: 'headline',
      type: 'text',
      label: 'Headline',
      required: true,
      admin: {
        description: 'e.g., "Feedback Manager vs. Traditional Tools"',
      },
      minLength: 15,
      maxLength: 60,
    },
    {
      name: 'subheadline',
      type: 'text',
      label: 'Subheadline',
      admin: {
        description: 'Frame the comparison',
      },
      minLength: 30,
      maxLength: 100,
    },
    {
      name: 'comparisonType',
      type: 'select',
      label: 'Comparison Type',
      required: true,
      defaultValue: 'category',
      options: [
        { label: 'Category (vs tool type)', value: 'category' },
        { label: 'Specific (vs named competitors)', value: 'specific' },
      ],
      admin: {
        description: 'Compare against categories or named competitors',
      },
    },
    {
      name: 'columns',
      type: 'array',
      label: 'Columns',
      dbName: 'cmp_cols', // Unique dbName
      required: true,
      minRows: 2,
      maxRows: 3,
      admin: {
        description: 'Comparison columns (your product + competitors/alternatives)',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Column Header',
          required: true,
          admin: {
            description: 'e.g., "Short Loop", "Spreadsheets", "Generic PM Tools"',
          },
          minLength: 5,
          maxLength: 30,
        },
        {
          name: 'isSelf',
          type: 'checkbox',
          label: 'Is Your Product',
          defaultValue: false,
          admin: {
            description: 'Check if this column represents your product (for styling)',
          },
        },
      ],
    },
    {
      name: 'rows',
      type: 'array',
      label: 'Comparison Rows',
      dbName: 'cmp_rows', // Unique dbName
      required: true,
      minRows: 6,
      maxRows: 12,
      admin: {
        description: 'Features/criteria being compared',
      },
      fields: [
        {
          name: 'feature',
          type: 'text',
          label: 'Feature/Criteria',
          required: true,
          admin: {
            description: "What's being compared",
          },
          minLength: 15,
          maxLength: 60,
        },
        {
          name: 'values',
          type: 'array',
          label: 'Values',
          dbName: 'cmp_vals', // Unique dbName for nested array
          required: true,
          minRows: 2,
          maxRows: 3,
          admin: {
            description: 'Value for each column (must match number of columns)',
          },
          fields: [
            {
              name: 'columnIndex',
              type: 'number',
              label: 'Column Index',
              required: true,
              min: 0,
              max: 2,
              admin: {
                description: 'Which column (0, 1, or 2)',
              },
            },
            {
              name: 'value',
              type: 'text',
              label: 'Value',
              required: true,
              admin: {
                description: 'Can include ✓/✗ or be descriptive',
              },
              minLength: 1,
              maxLength: 80,
            },
            {
              name: 'highlight',
              type: 'checkbox',
              label: 'Highlight as Advantage',
              defaultValue: false,
            },
          ],
        },
      ],
    },
    {
      name: 'conclusion',
      type: 'text',
      label: 'Conclusion',
      admin: {
        description: 'Optional wrap-up statement',
      },
      minLength: 40,
      maxLength: 150,
    },
  ],
}

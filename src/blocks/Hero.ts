import { Block } from 'payload'

export const HeroBlock: Block = {
  slug: 'hero',
  labels: {
    singular: 'Hero',
    plural: 'Heroes',
  },
  imageURL: '/assets/blocks/hero.png',
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      label: 'Eyebrow Text',
      admin: {
        description: 'Small text above the headline (e.g., "Discovery-First Product Management")',
      },
      minLength: 10,
      maxLength: 40,
    },
    {
      name: 'headline',
      type: 'text',
      label: 'Headline',
      required: true,
      admin: {
        description: 'Main headline. Action-oriented, no jargon. Must pass the "so what" test in 3 seconds.',
      },
      minLength: 20,
      maxLength: 80,
    },
    {
      name: 'headlineEmphasisWord',
      type: 'text',
      label: 'Emphasis Word',
      admin: {
        description: 'Word to highlight in the headline (will be styled with accent color)',
      },
      minLength: 3,
      maxLength: 20,
    },
    {
      name: 'subheadline',
      type: 'textarea',
      label: 'Subheadline',
      required: true,
      admin: {
        description: 'Expands on headline. Plain English value prop.',
      },
      minLength: 40,
      maxLength: 160,
    },
    {
      name: 'supportingText',
      type: 'text',
      label: 'Supporting Text',
      admin: {
        description: 'Optional proof point or additional context.',
      },
      minLength: 40,
      maxLength: 120,
    },
    {
      type: 'row',
      fields: [
        {
          name: 'primaryCtaText',
          type: 'text',
          label: 'Primary CTA Text',
          required: true,
          admin: {
            description: 'e.g., "Start Free Trial"',
            width: '50%',
          },
          minLength: 10,
          maxLength: 25,
        },
        {
          name: 'primaryCtaUrl',
          type: 'text',
          label: 'Primary CTA URL',
          required: true,
          admin: {
            description: 'Valid internal path or URL',
            width: '50%',
          },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'secondaryCtaText',
          type: 'text',
          label: 'Secondary CTA Text',
          admin: {
            description: 'e.g., "See How It Works"',
            width: '50%',
          },
          minLength: 10,
          maxLength: 25,
        },
        {
          name: 'secondaryCtaUrl',
          type: 'text',
          label: 'Secondary CTA URL',
          admin: {
            description: 'Valid internal path or URL',
            width: '50%',
          },
        },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Hero Image',
      admin: {
        description: 'Product screenshot or illustration. Shows the product, not stock photography.',
      },
    },
    {
      name: 'trustNote',
      type: 'text',
      label: 'Trust Note',
      admin: {
        description: 'Small trust signal below CTAs (e.g., "No credit card required")',
      },
      minLength: 10,
      maxLength: 40,
    },
  ],
}

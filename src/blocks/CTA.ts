import { Block } from 'payload'

export const CTABlock: Block = {
  slug: 'cta',
  labels: {
    singular: 'Call to Action',
    plural: 'Calls to Action',
  },
  imageURL: '/assets/blocks/cta.png',
  fields: [
    {
      name: 'variant',
      type: 'select',
      label: 'CTA Variant',
      defaultValue: 'standard',
      options: [
        { label: 'Standard', value: 'standard' },
        { label: 'Compact (Mid-Page)', value: 'compact' },
        { label: 'Final (Full Width)', value: 'final' },
      ],
      admin: {
        description: 'Controls the visual style of the CTA section',
      },
    },
    {
      name: 'showLogoMark',
      type: 'checkbox',
      label: 'Show Logo Mark',
      defaultValue: false,
      admin: {
        description: 'Display large logo mark above headline (typically for final CTA)',
        condition: (data, siblingData) => siblingData?.variant === 'final',
      },
    },
    {
      name: 'headline',
      type: 'text',
      label: 'Headline',
      required: true,
      admin: {
        description: 'Strong, transformation-focused headline. Reinforce core value.',
      },
      minLength: 15,
      maxLength: 60,
    },
    {
      name: 'subheadline',
      type: 'text',
      label: 'Subheadline',
      admin: {
        description: 'Optional supporting text or final nudge.',
      },
      minLength: 30,
      maxLength: 100,
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
            description: 'Action verb + outcome (e.g., "Start Free Trial")',
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
            description: 'Usually signup or trial',
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
            description: 'Alternative action (e.g., "Book a Demo")',
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
            description: 'Demo or contact page',
            width: '50%',
          },
        },
      ],
    },
    {
      name: 'showTrustSignals',
      type: 'checkbox',
      label: 'Show Trust Signals',
      defaultValue: false,
      admin: {
        description: 'Display trust signals below the CTAs',
      },
    },
    {
      name: 'trustSignals',
      type: 'array',
      label: 'Trust Signals',
      minRows: 2,
      maxRows: 5,
      admin: {
        description: 'Reduce friction with trust signals (e.g., "No credit card required")',
        condition: (data, siblingData) => siblingData?.showTrustSignals,
      },
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Trust Signal',
          required: true,
          minLength: 10,
          maxLength: 40,
        },
      ],
    },
    {
      name: 'additionalMessage',
      type: 'text',
      label: 'Additional Message',
      admin: {
        description: 'Optional extra context below the CTA buttons',
        condition: (data, siblingData) => siblingData?.variant === 'final',
      },
      minLength: 30,
      maxLength: 120,
    },
  ],
}

import { Block } from 'payload'

export const GateLeadCaptureBlock: Block = {
  slug: 'gateLeadCapture',
  dbName: 'gate', // Shortened for DB table names
  labels: {
    singular: 'Gate/Lead Capture',
    plural: 'Gate/Lead Captures',
  },
  imageURL: '/assets/blocks/gate-lead-capture.png',
  fields: [
    {
      name: 'variant',
      type: 'select',
      label: 'Variant',
      required: true,
      defaultValue: 'inline',
      options: [
        { label: 'Inline Form', value: 'inline' },
        { label: 'Modal/Popup', value: 'modal' },
        { label: 'Full Page Gate', value: 'full_page' },
      ],
      admin: {
        description: 'How to display the lead capture form',
      },
    },
    {
      name: 'headline',
      type: 'text',
      label: 'Headline',
      required: true,
      admin: {
        description: 'e.g., "Get the complete guide" or "Download the template"',
      },
      minLength: 15,
      maxLength: 60,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      admin: {
        description: 'What they\'ll get and why it\'s valuable',
      },
      minLength: 40,
      maxLength: 150,
    },
    {
      name: 'previewImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Preview Image',
      admin: {
        description: 'Preview of the gated content (cover image, first page, etc.)',
      },
    },
    {
      name: 'formFields',
      type: 'select',
      label: 'Required Form Fields',
      hasMany: true,
      required: true,
      defaultValue: ['email'],
      options: [
        { label: 'Email', value: 'email' },
        { label: 'Name', value: 'name' },
        { label: 'Company', value: 'company' },
        { label: 'Role/Title', value: 'role' },
        { label: 'Phone', value: 'phone' },
        { label: 'Team Size', value: 'team_size' },
      ],
      admin: {
        description: 'Fields to collect (email is always required)',
      },
    },
    {
      name: 'buttonText',
      type: 'text',
      label: 'Button Text',
      required: true,
      defaultValue: 'Download Now',
      admin: {
        description: 'e.g., "Download Now", "Get the Guide", "Access Template"',
      },
      minLength: 8,
      maxLength: 25,
    },
    {
      name: 'privacyNote',
      type: 'text',
      label: 'Privacy Note',
      defaultValue: 'We respect your privacy. Unsubscribe anytime.',
      admin: {
        description: 'Brief privacy reassurance',
      },
      minLength: 20,
      maxLength: 80,
    },
    {
      name: 'successMessage',
      type: 'text',
      label: 'Success Message',
      defaultValue: 'Check your email for the download link!',
      admin: {
        description: 'Message shown after successful submission',
      },
      minLength: 20,
      maxLength: 100,
    },
    {
      name: 'downloadFile',
      type: 'upload',
      relationTo: 'media',
      label: 'Download File',
      admin: {
        description: 'The gated file to be downloaded after form submission',
      },
    },
  ],
}

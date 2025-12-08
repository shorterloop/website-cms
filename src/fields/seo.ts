import { Field } from 'payload'

/**
 * Reusable SEO/Meta fields group
 * Use with spread operator: ...seoFields
 * Or wrap in a tab/group as needed
 */
export const seoFields: Field[] = [
  {
    name: 'metaTitle',
    type: 'text',
    label: 'Meta Title',
    admin: {
      description: 'Page title for search engines. Include primary keyword near the front. (50-60 characters)',
    },
    minLength: 50,
    maxLength: 60,
  },
  {
    name: 'metaDescription',
    type: 'textarea',
    label: 'Meta Description',
    admin: {
      description: 'Page description for search engines. Should be compelling with problem + promise. (150-160 characters)',
    },
    minLength: 150,
    maxLength: 160,
  },
  {
    name: 'metaKeywords',
    type: 'array',
    label: 'Meta Keywords',
    admin: {
      description: 'Primary and secondary keywords for SEO tracking (not used by Google, but useful for internal reference)',
    },
    maxRows: 10,
    fields: [
      {
        name: 'keyword',
        type: 'text',
        required: true,
      },
    ],
  },
  {
    name: 'ogImage',
    type: 'upload',
    relationTo: 'media',
    label: 'Social Share Image',
    admin: {
      description: 'Image for social media sharing (1200x630px recommended)',
    },
  },
  {
    name: 'canonicalUrl',
    type: 'text',
    label: 'Canonical URL',
    admin: {
      description: 'Only set if this page should point to a different canonical URL',
    },
  },
  {
    name: 'noIndex',
    type: 'checkbox',
    label: 'No Index',
    defaultValue: false,
    admin: {
      description: 'Prevent search engines from indexing this page',
    },
  },
]

/**
 * SEO fields wrapped in a collapsible group
 * Useful when adding to collections alongside other fields
 */
export const seoFieldsGroup: Field = {
  name: 'seo',
  type: 'group',
  label: 'SEO',
  admin: {
    description: 'Search engine optimization settings',
  },
  fields: seoFields,
}

/**
 * SEO fields as a tab
 * Useful for globals or when SEO deserves its own tab
 */
export const seoFieldsTab = {
  label: 'SEO',
  fields: seoFields,
}

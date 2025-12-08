import { CollectionConfig } from 'payload'
import {
  // Tier 1 Blocks
  HeroBlock,
  PainPointsBlock,
  WorkflowBlock,
  PagePreviewBlock,
  CTABlock,
  // Tier 2 Blocks
  FeaturesBlock,
  ProofImageBlock,
  IntegrationsBlock,
  UseCasesBlock,
  // Tier 3 Blocks
  ComparisonTableBlock,
  FAQBlock,
  TestimonialBlock,
  RelatedContentBlock,
} from '../blocks'

export const Capabilities: CollectionConfig = {
  slug: 'capabilities',
  labels: {
    singular: 'Capability',
    plural: 'Capabilities',
  },
  admin: {
    useAsTitle: 'displayName',
    defaultColumns: ['displayName', 'slug', 'parentCluster', 'updatedAt'],
    description:
      'Capability pages (e.g., Feedback Manager, Signals Engine, OST, Roadmap Builder)',
    group: 'Content',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Page Info',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'displayName',
                  type: 'text',
                  label: 'Display Name',
                  required: true,
                  admin: {
                    description: 'e.g., "Feedback Manager"',
                    width: '50%',
                  },
                },
                {
                  name: 'slug',
                  type: 'text',
                  label: 'URL Slug',
                  required: true,
                  unique: true,
                  admin: {
                    description: 'e.g., "feedback-manager"',
                    width: '50%',
                  },
                },
              ],
            },
            {
              name: 'parentCluster',
              type: 'select',
              label: 'Parent Cluster',
              required: true,
              options: [
                { label: 'Understand', value: 'understand' },
                { label: 'Decide', value: 'decide' },
                { label: 'Align', value: 'align' },
              ],
              admin: {
                description: 'Which homepage cluster this capability belongs to',
              },
            },
            {
              name: 'reasonThisCapabilityExists',
              type: 'textarea',
              label: 'Why This Capability Exists',
              required: true,
              admin: {
                description:
                  'The core insight. Why does this need to exist? Should work as a standalone LinkedIn post opener.',
              },
              minLength: 80,
              maxLength: 200,
            },
            {
              type: 'collapsible',
              label: 'Pricing Context',
              admin: {
                initCollapsed: true,
              },
              fields: [
                {
                  name: 'pricingNote',
                  type: 'text',
                  label: 'Pricing Note',
                  admin: {
                    description:
                      'Optional contextual pricing hint. e.g., "Available on Scale and Enterprise plans"',
                  },
                  minLength: 30,
                  maxLength: 120,
                },
                {
                  name: 'pricingNoteType',
                  type: 'select',
                  label: 'Pricing Type',
                  options: [
                    { label: 'Included in All Plans', value: 'included_all_plans' },
                    { label: 'Starter and Above', value: 'starter_and_above' },
                    { label: 'Enterprise Only', value: 'enterprise_only' },
                    { label: 'Add-on', value: 'add_on' },
                    { label: 'Seats Based', value: 'seats_based' },
                  ],
                  admin: {
                    condition: (data, siblingData) => Boolean(siblingData?.pricingNote),
                  },
                },
              ],
            },
          ],
        },
        {
          label: 'Content',
          fields: [
            {
              name: 'sections',
              type: 'blocks',
              label: 'Page Sections',
              blocks: [
                // Tier 1: Skimmer Path
                HeroBlock,
                PainPointsBlock,
                WorkflowBlock,
                PagePreviewBlock,
                CTABlock,
                // Tier 2: Evaluator Path
                FeaturesBlock,
                ProofImageBlock,
                IntegrationsBlock,
                UseCasesBlock,
                // Tier 3: Researcher Path
                ComparisonTableBlock,
                FAQBlock,
                TestimonialBlock,
                RelatedContentBlock,
              ],
              minRows: 1,
              admin: {
                description:
                  'Build the capability page with sections. Tier 1 (Hero → Mid-CTA) hooks in 30 seconds. Tier 2 builds confidence. Tier 3 closes + ranks for SEO.',
              },
            },
          ],
        },
        {
          label: 'Related Content',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'recommendedNextStepUrl',
                  type: 'text',
                  label: 'Recommended Next Step URL',
                  required: true,
                  admin: {
                    description: 'Primary next action: docs, demo video, or template',
                    width: '50%',
                  },
                },
                {
                  name: 'recommendedNextStepLabel',
                  type: 'text',
                  label: 'Next Step Label',
                  required: true,
                  admin: {
                    description: 'e.g., "Watch the 3-minute demo"',
                    width: '50%',
                  },
                  minLength: 15,
                  maxLength: 50,
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'relatedArticleUrl',
                  type: 'text',
                  label: 'Related Article URL',
                  admin: {
                    description: 'SEO content pairing: blog post or guide',
                    width: '50%',
                  },
                },
                {
                  name: 'relatedArticleTitle',
                  type: 'text',
                  label: 'Related Article Title',
                  admin: {
                    description: 'Article title for display',
                    width: '50%',
                    condition: (data, siblingData) => Boolean(siblingData?.relatedArticleUrl),
                  },
                  minLength: 20,
                  maxLength: 80,
                },
              ],
            },
            {
              name: 'relatedCapabilities',
              type: 'relationship',
              label: 'Related Capabilities',
              relationTo: 'capabilities',
              hasMany: true,
              maxRows: 4,
              admin: {
                description: 'Links to related capability pages (max 4)',
              },
            },
          ],
        },
        {
          label: 'SEO',
          fields: [
            {
              name: 'metaTitle',
              type: 'text',
              label: 'Meta Title',
              required: true,
              admin: {
                description:
                  'Page title for search engines. Include primary keyword. (50-60 characters)',
              },
              minLength: 50,
              maxLength: 60,
            },
            {
              name: 'metaDescription',
              type: 'textarea',
              label: 'Meta Description',
              required: true,
              admin: {
                description:
                  'Compelling summary with keyword. (150-160 characters)',
              },
              minLength: 150,
              maxLength: 160,
            },
            {
              name: 'metaKeywords',
              type: 'array',
              label: 'Meta Keywords',
              admin: {
                description: 'Primary + secondary keywords for SEO tracking',
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
          ],
        },
        {
          label: 'Settings',
          fields: [
            {
              name: 'showToc',
              type: 'checkbox',
              label: 'Show Table of Contents',
              defaultValue: true,
              admin: {
                description: 'Enable sticky table of contents for this page',
              },
            },
            {
              name: 'tocPosition',
              type: 'select',
              label: 'TOC Position',
              defaultValue: 'sidebar_sticky',
              options: [
                { label: 'Sticky Sidebar', value: 'sidebar_sticky' },
                { label: 'Top Inline', value: 'top_inline' },
                { label: 'Floating Button', value: 'floating' },
              ],
              admin: {
                condition: (data) => data?.showToc,
              },
            },
            {
              name: 'showProgress',
              type: 'checkbox',
              label: 'Show Reading Progress',
              defaultValue: false,
              admin: {
                description: 'Show reading progress indicator',
                condition: (data) => data?.showToc,
              },
            },
            {
              name: 'status',
              type: 'select',
              label: 'Page Status',
              defaultValue: 'draft',
              options: [
                { label: 'Draft', value: 'draft' },
                { label: 'Published', value: 'published' },
                { label: 'Archived', value: 'archived' },
              ],
              admin: {
                position: 'sidebar',
              },
            },
          ],
        },
      ],
    },
  ],
}

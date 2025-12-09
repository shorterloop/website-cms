/**
 * Transforms JSON capability content files to Payload CMS format
 * Reads from json-contents/capabilities/*.json
 */

// Helper to strip markdown formatting from text
function stripMarkdown(text: string): string {
  if (!text) return ''
  return text
    .replace(/^#+\s*/gm, '') // Remove heading markers
    .replace(/\*\*([^*]+)\*\*/g, '$1') // Remove bold
    .replace(/\*([^*]+)\*/g, '$1') // Remove italic
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove links, keep text
    .trim()
}

// Helper to map emoji icons to block icon values
function mapIcon(emoji: string): string {
  const iconMap: Record<string, string> = {
    '📧': 'scattered',
    '🔁': 'duplicate',
    '🕳️': 'lost',
    '📥': 'collect',
    '🤖': 'ai',
    '📊': 'organize',
    '💬': 'engage',
    '✅': 'convert',
    '🔄': 'sync',
    '🔀': 'disconnect',
    '🧩': 'fragment',
    '⏰': 'time',
    '🎯': 'target',
    '📈': 'chart',
    '🔍': 'search',
    '⭐': 'star',
    '🏷️': 'tag',
    '🔗': 'link',
    '📸': 'image',
    '👥': 'users',
    '❓': 'question',
    '📉': 'decline',
    '💼': 'business',
    '✍️': 'edit',
    '🧪': 'experiment',
    '🚀': 'rocket',
    '💡': 'idea',
    '📝': 'document',
    '🛠️': 'tools',
    '⚙️': 'settings',
    '🎨': 'design',
    '📋': 'clipboard',
    '🔒': 'lock',
    '🌐': 'globe',
    '💰': 'money',
    '📱': 'mobile',
    '🖥️': 'desktop',
    '☁️': 'cloud',
    '🔔': 'bell',
    '📣': 'announce',
  }
  return iconMap[emoji] || 'default'
}

interface JsonCapability {
  page_title: string
  meta: {
    description: string
    keywords: string
  }
  hero: {
    headline: string
    subheadline: string
    supporting_text?: string
    primary_cta: { text: string; url: string }
    secondary_cta?: { text: string; url: string }
    hero_image?: { url: string; alt: string }
  }
  problem: {
    headline: string
    subheadline?: string
    pain_points: Array<{
      icon: string
      title: string
      description: string
    }>
  }
  solution: {
    headline: string
    subheadline?: string
    conclusion?: string
    features?: Array<{
      icon: string
      title: string
      description: string
    }>
    workflow?: Array<{
      step: number
      icon: string
      title: string
      description: string
    }>
  }
  capability_workflow?: {
    headline: string
    subheadline?: string
    description?: string
    steps: Array<{
      step: number
      feature: string
      icon: string
      title: string
      description: string
      outcome?: string
    }>
    workflow_benefits?: string
  }
  features?: {
    headline: string
    feature_list?: Array<{
      title: string
      tagline: string
      description: string
      benefits?: string[]
      image?: { url: string; alt: string }
    }>
  }
  integrations?: {
    headline: string
    subheadline: string
    platforms: string[]
  }
  use_cases?: {
    headline: string
    cases: Array<{
      title: string
      subtitle?: string
      description?: string
      solution?: string
      outcome?: string
      results?: string[]
      key_actions?: string[]
    }>
  }
  comparison?: {
    headline: string
    subheadline?: string
    table: Array<{
      capability: string
      [key: string]: string
    }>
  }
  testimonials?: {
    headline: string
    quotes: Array<{
      quote: string
      author: string
      title: string
    }>
  }
  faq?: {
    headline: string
    questions: Array<{
      question: string
      answer: string
    }>
  }
  final_cta: {
    headline: string
    subheadline?: string
    primary_cta: { text: string; url: string }
    secondary_cta?: { text: string; url: string }
    trust_signals?: string[]
  }
  _seo_metadata?: {
    primary_keywords?: string[]
    secondary_keywords?: string[]
  }
}

export function transformCapabilityToPayload(
  json: JsonCapability,
  slug: string,
  displayName: string,
  parentCluster: 'understand' | 'decide' | 'align',
) {
  const sections: any[] = []

  // Hero Block
  if (json.hero) {
    sections.push({
      blockType: 'hero',
      headline: stripMarkdown(json.hero.headline),
      subheadline: stripMarkdown(json.hero.subheadline),
      supportingText: json.hero.supporting_text
        ? stripMarkdown(json.hero.supporting_text)
        : undefined,
      primaryCtaText: stripMarkdown(json.hero.primary_cta.text),
      primaryCtaUrl: json.hero.primary_cta.url || '/signup',
      secondaryCtaText: json.hero.secondary_cta
        ? stripMarkdown(json.hero.secondary_cta.text)
        : undefined,
      secondaryCtaUrl: json.hero.secondary_cta?.url,
    })
  }

  // Pain Points Block (Problem section)
  if (json.problem?.pain_points) {
    sections.push({
      blockType: 'painPoints',
      headline: stripMarkdown(json.problem.headline),
      subheadline: json.problem.subheadline
        ? stripMarkdown(json.problem.subheadline)
        : undefined,
      painPoints: json.problem.pain_points.slice(0, 4).map((p) => ({
        icon: mapIcon(p.icon),
        title: stripMarkdown(p.title),
        description: stripMarkdown(p.description),
      })),
    })
  }

  // Workflow Block (Solution section or capability_workflow)
  if (json.capability_workflow?.steps) {
    // Use capability_workflow if available
    sections.push({
      blockType: 'workflow',
      variant: 'numbered',
      headline: stripMarkdown(json.capability_workflow.headline),
      subheadline: json.capability_workflow.subheadline
        ? stripMarkdown(json.capability_workflow.subheadline)
        : undefined,
      steps: json.capability_workflow.steps.slice(0, 6).map((s, i) => ({
        stepNumber: s.step || i + 1,
        label: stripMarkdown(s.title || s.feature),
        description: stripMarkdown(s.description),
        icon: mapIcon(s.icon),
      })),
      conclusion: json.capability_workflow.workflow_benefits
        ? stripMarkdown(json.capability_workflow.workflow_benefits.split('\n')[0])
        : undefined,
    })
  } else if (json.solution?.workflow) {
    sections.push({
      blockType: 'workflow',
      variant: 'numbered',
      headline: stripMarkdown(json.solution.headline),
      subheadline: json.solution.subheadline
        ? stripMarkdown(json.solution.subheadline)
        : undefined,
      steps: json.solution.workflow.slice(0, 6).map((s) => ({
        stepNumber: s.step,
        label: stripMarkdown(s.title),
        description: stripMarkdown(s.description),
        icon: mapIcon(s.icon),
      })),
      conclusion: json.solution.conclusion
        ? stripMarkdown(json.solution.conclusion)
        : undefined,
    })
  } else if (json.solution?.features) {
    // Fallback to solution features if no workflow
    sections.push({
      blockType: 'workflow',
      variant: 'numbered',
      headline: stripMarkdown(json.solution.headline),
      subheadline: json.solution.subheadline
        ? stripMarkdown(json.solution.subheadline)
        : undefined,
      steps: json.solution.features.slice(0, 6).map((s, i) => ({
        stepNumber: i + 1,
        label: stripMarkdown(s.title),
        description: stripMarkdown(s.description),
        icon: mapIcon(s.icon),
      })),
    })
  }

  // Mid-page CTA
  sections.push({
    blockType: 'cta',
    variant: 'compact',
    headline: `Start Using ${displayName} Today`,
    primaryCtaText: 'Start Free Trial',
    primaryCtaUrl: '/signup',
    secondaryCtaText: 'Book a Demo',
    secondaryCtaUrl: '/demo',
  })

  // Features Block
  if (json.features?.feature_list) {
    const heroFeatures = json.features.feature_list.slice(0, 3)
    const additionalFeatures = json.features.feature_list.slice(3, 9)

    sections.push({
      blockType: 'features',
      headline: stripMarkdown(json.features.headline),
      heroFeatures: heroFeatures.map((f) => ({
        title: stripMarkdown(f.title),
        tagline: stripMarkdown(f.tagline),
        description: stripMarkdown(f.description),
        benefits: f.benefits?.slice(0, 4).map((b) => ({
          text: stripMarkdown(b),
        })),
      })),
      additionalFeatures: additionalFeatures.map((f) => ({
        title: stripMarkdown(f.title),
        tagline: stripMarkdown(f.tagline),
        description: stripMarkdown(f.description),
        icon: 'default',
      })),
    })
  }

  // Use Cases Block
  if (json.use_cases?.cases) {
    sections.push({
      blockType: 'useCases',
      headline: stripMarkdown(json.use_cases.headline),
      useCases: json.use_cases.cases.slice(0, 4).map((c) => ({
        title: stripMarkdown(c.title),
        subtitle: c.subtitle ? stripMarkdown(c.subtitle) : undefined,
        challenge: c.description ? stripMarkdown(c.description) : 'Challenge description',
        solution: c.solution || c.outcome ? stripMarkdown(c.solution || c.outcome || '') : 'Solution description',
        results: (c.results || c.key_actions || []).slice(0, 4).map((r) => ({
          text: stripMarkdown(r),
          hasMetric: /\d+%?|\d+x/.test(r),
        })),
      })),
    })
  }

  // Comparison Table Block
  if (json.comparison?.table) {
    const columns = Object.keys(json.comparison.table[0] || {}).filter(
      (k) => k !== 'capability',
    )
    sections.push({
      blockType: 'comparisonTable',
      headline: stripMarkdown(json.comparison.headline),
      subheadline: json.comparison.subheadline
        ? stripMarkdown(json.comparison.subheadline)
        : undefined,
      columns: columns.slice(0, 3).map((col, i) => ({
        name: col.replace(/_/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()),
        isSelf: i === columns.length - 1 || col.toLowerCase().includes('feedback') || col.toLowerCase().includes('shorter'),
      })),
      rows: json.comparison.table.slice(0, 12).map((row) => ({
        feature: row.capability,
        values: columns.slice(0, 3).map((col, i) => ({
          columnIndex: i,
          value: row[col] || '',
          highlight: i === columns.length - 1,
        })),
      })),
    })
  }

  // FAQ Block
  if (json.faq?.questions) {
    sections.push({
      blockType: 'faq',
      headline: stripMarkdown(json.faq.headline),
      questions: json.faq.questions.slice(0, 15).map((q) => ({
        question: stripMarkdown(q.question),
        answer: stripMarkdown(q.answer),
        schemaEligible: q.answer.length > 150,
      })),
    })
  }

  // Testimonials Block
  if (json.testimonials?.quotes) {
    sections.push({
      blockType: 'testimonial',
      variant: 'multiple',
      headline: stripMarkdown(json.testimonials.headline),
      quotes: json.testimonials.quotes.slice(0, 4).map((t) => ({
        quote: stripMarkdown(t.quote),
        authorName: t.author,
        authorTitle: t.title,
        rating: 5,
      })),
    })
  }

  // Final CTA Block
  if (json.final_cta) {
    sections.push({
      blockType: 'cta',
      variant: 'final',
      showLogoMark: true,
      headline: stripMarkdown(json.final_cta.headline),
      subheadline: json.final_cta.subheadline
        ? stripMarkdown(json.final_cta.subheadline)
        : undefined,
      primaryCtaText: stripMarkdown(json.final_cta.primary_cta.text),
      primaryCtaUrl: json.final_cta.primary_cta.url || '/signup',
      secondaryCtaText: json.final_cta.secondary_cta
        ? stripMarkdown(json.final_cta.secondary_cta.text)
        : undefined,
      secondaryCtaUrl: json.final_cta.secondary_cta?.url,
      showTrustSignals: Boolean(json.final_cta.trust_signals?.length),
      trustSignals: json.final_cta.trust_signals?.map((t) => ({ text: t })),
    })
  }

  // Build meta keywords array
  const keywords = [
    ...(json._seo_metadata?.primary_keywords || []),
    ...(json._seo_metadata?.secondary_keywords || []).slice(0, 5),
  ].map((k) => ({ keyword: k }))

  return {
    displayName,
    slug,
    parentCluster,
    reasonThisCapabilityExists: `${displayName} exists because ${json.meta.description.slice(0, 180)}`,
    sections,
    recommendedNextStepUrl: '/demo',
    recommendedNextStepLabel: `See ${displayName} in Action`,
    metaTitle: json.page_title.slice(0, 60),
    metaDescription: json.meta.description.slice(0, 160),
    metaKeywords: keywords.slice(0, 10),
    showToc: true,
    tocPosition: 'sidebar_sticky',
    status: 'draft',
  }
}

// Capability definitions with their cluster assignments
export const capabilityDefinitions = [
  {
    file: 'feedback-manager-content_seo.json',
    slug: 'feedback-manager',
    displayName: 'Feedback Manager',
    parentCluster: 'understand' as const,
  },
  {
    file: 'discover-capability-content_seo.json',
    slug: 'discover',
    displayName: 'Discover',
    parentCluster: 'understand' as const,
  },
  {
    file: 'strategy-board-content_seo.json',
    slug: 'strategy-board',
    displayName: 'Strategy Board',
    parentCluster: 'decide' as const,
  },
  {
    file: 'roadmap-content_seo.json',
    slug: 'roadmap',
    displayName: 'Roadmap',
    parentCluster: 'align' as const,
  },
  {
    file: 'deliver-capability-content_seo.json',
    slug: 'deliver',
    displayName: 'Deliver',
    parentCluster: 'align' as const,
  },
]

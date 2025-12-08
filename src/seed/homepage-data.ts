/**
 * Homepage seed data based on cms-schema/homepage-schema.md
 * 9 sections in order: Hero, TrustedBy, Transformation, Workflow, Integrations, AI Engine, Capability Clusters, Testimonial, Final CTA
 */

export const homepageData = {
  sections: [
    // Section 1: Hero
    {
      blockType: 'hero',
      eyebrow: 'Discovery-First Product Management',
      headline: 'Stop Building Products Nobody Wants',
      headlineEmphasisWord: 'Nobody',
      subheadline:
        'Most product teams ship fast but think slowly. Shorter Loop connects customer signals to product decisions—so you build what actually matters.',
      supportingText:
        'Join product teams who\'ve replaced gut feelings with evidence-based decisions.',
      primaryCtaText: 'Start Free Trial',
      primaryCtaUrl: '/signup',
      secondaryCtaText: 'See How It Works',
      secondaryCtaUrl: '#how-it-works',
      trustNote: 'No credit card required',
    },

    // Section 2: Trusted By / Audience Signal
    {
      blockType: 'trustedBy',
      headline: 'Built for product teams who refuse to guess',
      displayMode: 'audience_tags',
      audienceTags: [
        { label: 'Product Managers' },
        { label: 'CPOs & VPs of Product' },
        { label: 'Heads of Product' },
        { label: 'Product Operations' },
      ],
    },

    // Section 3: The Pivot — Transformation
    {
      blockType: 'transformation',
      variant: 'side_by_side',
      eyebrow: 'The Pivot',
      headline: 'From Chaos to Clarity',
      subheadline: 'Every transformation flows through the pivot—where uncertainty becomes evidence.',
      beforeColumnLabel: 'The Status Quo',
      afterColumnLabel: 'With Shorter Loop',
      transformations: [
        {
          beforeTitle: 'Feedback scattered everywhere',
          beforeDetail:
            'Customer insights trapped in Slack threads, support tickets, sales calls, and spreadsheets. Important patterns go unnoticed.',
          afterTitle: 'One unified feedback hub',
          afterDetail:
            'All customer signals flow into a single, searchable system. Patterns emerge automatically. Nothing falls through the cracks.',
        },
        {
          beforeTitle: 'Prioritization by politics',
          beforeDetail:
            'Roadmap decisions driven by whoever shouts loudest. No clear criteria. Endless debates about what to build next.',
          afterTitle: 'Prioritization by evidence',
          afterDetail:
            'Every feature tied to customer evidence. Clear scoring frameworks. Stakeholder conversations grounded in data.',
        },
        {
          beforeTitle: 'Strategy in slide decks',
          beforeDetail:
            'Vision documents that nobody reads. Disconnect between strategy and execution. Teams building in different directions.',
          afterTitle: 'Strategy connected to execution',
          afterDetail:
            'Live roadmaps that show the why behind every decision. Teams aligned on what matters and why it matters.',
        },
        {
          beforeTitle: 'Learning after launch',
          beforeDetail:
            'Ship features, hope they work. Customer outcomes unknown until quarterly reviews reveal missed targets.',
          afterTitle: 'Learning throughout the loop',
          afterDetail:
            'Continuous signal collection. Real-time outcome tracking. Course corrections before it is too late.',
        },
      ],
      showStatsBar: true,
      stats: [
        { value: '80%', label: 'of features are rarely or never used' },
        { value: '42%', label: 'of startups fail due to no market need' },
        { value: '3x', label: 'more likely to succeed with customer evidence' },
      ],
    },

    // Section 4: How It Works
    {
      blockType: 'workflow',
      variant: 'flow_line',
      eyebrow: 'How It Works',
      headline: 'From Noise to Strategy in Six Steps',
      subheadline:
        'A connected system that turns scattered feedback into confident product decisions.',
      steps: [
        {
          stepNumber: 1,
          label: 'Signals',
          description:
            'Customer feedback flows in from every channel—support tickets, sales calls, surveys, NPS, social media. All in one place.',
          icon: 'signal',
          isPivotPoint: false,
        },
        {
          stepNumber: 2,
          label: 'Themes',
          description:
            'AI clusters similar feedback into themes. See patterns across thousands of data points that humans would miss.',
          icon: 'theme',
          isPivotPoint: false,
        },
        {
          stepNumber: 3,
          label: 'Opportunities',
          description:
            'Themes become scored opportunities with clear customer evidence. The pivot point where noise becomes signal.',
          icon: 'opportunity',
          isPivotPoint: true,
        },
        {
          stepNumber: 4,
          label: 'Bets',
          description:
            'Opportunities become prioritized bets with clear hypotheses. Every bet tied to expected outcomes and evidence.',
          icon: 'bet',
          isPivotPoint: false,
        },
        {
          stepNumber: 5,
          label: 'Roadmap',
          description:
            'Bets flow into an outcome-driven roadmap. Stakeholders see the why behind every decision. Alignment built-in.',
          icon: 'roadmap',
          isPivotPoint: false,
        },
        {
          stepNumber: 6,
          label: 'Outcomes',
          description:
            'Track what actually happened. Learn what worked. Feed insights back into the loop for continuous improvement.',
          icon: 'outcome',
          isPivotPoint: false,
        },
      ],
      conclusion: 'The loop never stops. Every outcome feeds back into new signals.',
    },

    // Section 5: Integrations
    {
      blockType: 'integrations',
      variant: 'grouped',
      headline: 'Works With Your Stack',
      subheadline:
        'Keep using the tools you love. Shorter Loop connects to your existing workflow—no migration required.',
      integrationGroups: [
        {
          groupName: 'Issue Trackers',
          integrations: [
            { name: 'Jira', status: 'live', featured: true },
            { name: 'Linear', status: 'live', featured: true },
            { name: 'Asana', status: 'live', featured: false },
            { name: 'Shortcut', status: 'coming_soon', featured: false },
          ],
        },
        {
          groupName: 'Customer Feedback',
          integrations: [
            { name: 'Intercom', status: 'live', featured: true },
            { name: 'Zendesk', status: 'live', featured: false },
            { name: 'HubSpot', status: 'live', featured: false },
            { name: 'Salesforce', status: 'coming_soon', featured: false },
          ],
        },
        {
          groupName: 'Documentation',
          integrations: [
            { name: 'Notion', status: 'live', featured: true },
            { name: 'Confluence', status: 'live', featured: false },
            { name: 'Google Docs', status: 'coming_soon', featured: false },
          ],
        },
        {
          groupName: 'Communication',
          integrations: [
            { name: 'Slack', status: 'live', featured: true },
            { name: 'Microsoft Teams', status: 'coming_soon', featured: false },
          ],
        },
      ],
      additionalMethods: [
        {
          title: 'REST API',
          description: 'Full API access for custom integrations and workflows',
          icon: 'api',
        },
        {
          title: 'CSV Import',
          description: 'Bulk import historical feedback and customer data',
          icon: 'csv',
        },
        {
          title: 'Webhooks',
          description: 'Real-time notifications for any event in the system',
          icon: 'webhook',
        },
      ],
      ctaText: 'See All Integrations',
      ctaUrl: '/integrations',
    },

    // Section 6: AI Engine
    {
      blockType: 'aiEngine',
      eyebrow: 'Your Moat',
      headline: 'Your Research Team, Always On',
      subheadline:
        'AI that synthesizes thousands of customer signals into actionable insights—work that would take humans weeks.',
      body: 'Most AI summarizes. Ours synthesizes. It finds connections across feedback sources, identifies emerging patterns before they become obvious, and surfaces opportunities you would have missed. Not a replacement for product thinking—an amplifier for it.',
      capabilities: [
        {
          title: 'Cross-Source Synthesis',
          description:
            'Connect dots across support tickets, NPS comments, sales calls, and user research in seconds.',
          icon: 'synthesis',
        },
        {
          title: 'Pattern Recognition',
          description:
            'Spot emerging trends and recurring themes before they become obvious problems or opportunities.',
          icon: 'pattern',
        },
        {
          title: 'Signal Extraction',
          description:
            'Pull specific customer needs and pain points from unstructured feedback at scale.',
          icon: 'signal',
        },
        {
          title: 'Insight Generation',
          description:
            'Transform raw feedback into clear opportunity statements with supporting evidence.',
          icon: 'insight',
        },
      ],
    },

    // Section 7: Capability Clusters
    {
      blockType: 'capabilityClusters',
      headline: 'Everything You Need, Nothing You Don\'t',
      subheadline: 'Three capabilities. One connected system. No bloat.',
      clusters: [
        {
          name: 'Understand',
          tagline: 'Turn noise into signal',
          description:
            'Collect feedback from every channel, let AI find patterns, and surface the insights that matter. Stop drowning in data.',
          icon: 'understand',
          features: [
            { name: 'Unified Feedback Inbox' },
            { name: '25+ Native Integrations' },
            { name: 'AI Theme Detection' },
            { name: 'Signal Tagging & Search' },
          ],
          linkUrl: '/capabilities/understand',
          linkText: 'Explore Understand →',
        },
        {
          name: 'Decide',
          tagline: 'Prioritize with evidence',
          description:
            'Score opportunities with real customer evidence. Make prioritization decisions that stakeholders can trust and support.',
          icon: 'decide',
          features: [
            { name: 'Opportunity Scoring' },
            { name: 'Bet Tracker & Hypotheses' },
            { name: 'Evidence Linking' },
            { name: 'Stakeholder Views' },
          ],
          linkUrl: '/capabilities/decide',
          linkText: 'Explore Decide →',
        },
        {
          name: 'Align',
          tagline: 'Get everyone on the same page',
          description:
            'Build roadmaps that show the why. Track outcomes that matter. Keep teams and stakeholders moving in the same direction.',
          icon: 'align',
          features: [
            { name: 'Outcome-Driven Roadmaps' },
            { name: 'Real-Time Outcome Tracking' },
            { name: 'Share & Export Anywhere' },
            { name: 'Team & Stakeholder Views' },
          ],
          linkUrl: '/capabilities/align',
          linkText: 'Explore Align →',
        },
      ],
    },

    // Section 8: Social Proof / Testimonials
    {
      blockType: 'testimonial',
      variant: 'multiple',
      headline: 'Teams Who\'ve Made the Shift',
      quotes: [
        {
          quote:
            'We went from spending two days per sprint on roadmap debates to 30 minutes. Every feature now has a clear evidence trail that stakeholders can see. The political battles just... stopped.',
          context: 'After 6 months using Shorter Loop',
          authorName: 'Sarah Chen',
          authorTitle: 'VP of Product, TechScale Inc.',
          rating: 5,
        },
        {
          quote:
            'Our feature adoption rate jumped from 23% to 61% in one quarter. Turns out we were building what we thought customers wanted, not what they actually needed. Shorter Loop showed us the difference.',
          context: 'Results from Q3 2024',
          authorName: 'Marcus Johnson',
          authorTitle: 'CPO, GrowthWorks',
          rating: 5,
        },
        {
          quote:
            'I used to dread stakeholder meetings. Now I walk in with data. When the CEO asks why we are building something, I have 47 customer quotes and a clear opportunity score to show her.',
          authorName: 'Priya Patel',
          authorTitle: 'Senior Product Manager, CloudFirst',
          rating: 5,
        },
      ],
    },

    // Section 9: Final CTA
    {
      blockType: 'cta',
      variant: 'final',
      showLogoMark: true,
      headline: 'Build Products Customers Actually Want',
      subheadline: 'Start with evidence. Ship with confidence. Learn with every loop.',
      primaryCtaText: 'Start Free Trial',
      primaryCtaUrl: '/signup',
      secondaryCtaText: 'Book a Demo',
      secondaryCtaUrl: '/demo',
      showTrustSignals: true,
      trustSignals: [
        { text: 'No credit card required' },
        { text: 'Free 14-day trial' },
        { text: 'Setup in under 5 minutes' },
        { text: 'Cancel anytime' },
      ],
    },
  ],
  // SEO fields
  seo: {
    metaTitle: 'Shorter Loop | Discovery-First Product Management',
    metaDescription:
      'Stop building products nobody wants. Shorter Loop connects customer signals to product decisions—so you build what actually matters. Start free trial.',
    ogTitle: 'Shorter Loop | Build Products Customers Actually Want',
    ogDescription:
      'Turn scattered customer feedback into confident product decisions. Evidence-based prioritization for product teams who refuse to guess.',
  },
}

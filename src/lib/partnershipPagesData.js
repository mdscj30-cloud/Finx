export const partnershipPages = [
  {
    slug: "cpa-white-label",
    title: "CPA White-Label Partnership Program",
    description: "Expand your firm's capacity and profitability with our white-label AI accounting solution.",
    programOverview: "Our White-Label program allows CPA firms to outsource low-margin compliance work to FinxisAI while maintaining their brand. We act as your back-office engine.",
    benefits: [
      "Increase client load by 300%",
      "Reduce overhead costs by 40%",
      "Fully branded client portal",
      "Dedicated account manager"
    ],
    requirements: [
      "Minimum 50 active business clients",
      "Commitment to cloud-based workflow",
      "Designated point of contact"
    ],
    revenueModel: "Wholesale pricing starting at 50% off retail. You set your own client fees.",
    process: ["Apply", "Discovery Call", "Contract", "Onboarding", "Go Live"],
    cta: "Become a Partner"
  },
  {
    slug: "partnership-confirmation",
    title: "Application Received",
    description: "Thank you for your interest in partnering with FinxisAI.",
    programOverview: "We have received your application. Our partnership team will review your details and contact you within 24 hours.",
    benefits: [],
    requirements: [],
    revenueModel: "",
    process: [],
    cta: "Return Home"
  },
  {
    slug: "partnership-dashboard",
    title: "Partner Dashboard Overview",
    description: "Manage all your clients from a single pane of glass.",
    programOverview: "The Partner Dashboard gives you real-time visibility into the status of every client file. Track bookkeeping progress, view flagged items, and access reports.",
    benefits: [
      "Centralized client list",
      "Status tracking",
      "Bulk actions",
      "Team permission management"
    ],
    requirements: [],
    revenueModel: "",
    process: [],
    cta: "Login to Dashboard"
  },
  {
    slug: "partnership-documentation",
    title: "Partner Resources & Documentation",
    description: "Guides, templates, and marketing assets for our partners.",
    programOverview: "Access a library of resources to help you sell and deliver value to your clients. Includes email templates, sales decks, and onboarding checklists.",
    benefits: ["Sales enablement", "Technical guides", "Marketing assets"],
    requirements: [],
    revenueModel: "",
    process: [],
    cta: "Access Library"
  },
  {
    slug: "partnership-support",
    title: "Dedicated Partner Support",
    description: "We are here to ensure your success.",
    programOverview: "Partners get priority access to our support team. Whether it's a technical integration question or a complex accounting scenario, we have your back.",
    benefits: ["24/7 Priority Support", "Dedicated Slack Channel", "Quarterly Strategy Reviews"],
    requirements: [],
    revenueModel: "",
    process: [],
    cta: "Contact Support"
  }
];

export const getPartnershipPageBySlug = (slug) => partnershipPages.find(p => p.slug === slug);

export const generatePartnershipSchema = (page) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": page.title,
  "description": page.description
});
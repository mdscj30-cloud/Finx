export const funnelPages = [
  {
    slug: "smb-accounting-solution",
    title: "AI Accounting for Small Business",
    targetAudience: "Small Business Owners",
    heroHeadline: "Stop Drowning in Spreadsheets. Start Growing.",
    heroSubhead: "Automated bookkeeping, tax prep, and financial insights for modern small businesses.",
    painPoints: [
      { icon: "Clock", title: "Wasted Time", desc: "Hours lost to manual data entry every week." },
      { icon: "AlertTriangle", title: "Tax Anxiety", desc: "Fear of errors triggering an IRS audit." },
      { icon: "EyeOff", title: "Blind Spots", desc: "No real-time visibility into cash flow." }
    ],
    solutionOverview: "FinxisAI connects to your bank accounts and uses AI to categorize transactions, reconcile accounts, and generate financial reports instantly.",
    benefits: [
      { metric: "10hrs+", desc: "Saved per week on admin" },
      { metric: "100%", desc: "Tax compliance accuracy" },
      { metric: "24/7", desc: "Real-time dashboard access" }
    ],
    pricing: "Starts at $299/mo",
    ctaText: "Get Your Free Financial Health Check",
    testimonials: [
      { quote: "I feel like I have a CFO in my pocket.", author: "Mike T., Retail Owner" }
    ]
  },
  {
    slug: "cpa-firm-accounting-solution",
    title: "White-Label AI for CPA Firms",
    targetAudience: "CPA Firm Owners",
    heroHeadline: "Scale Your Firm Without Hiring More Staff",
    heroSubhead: "Leverage AI to automate compliance work and shift to high-value advisory services.",
    painPoints: [
      { icon: "Users", title: "Staffing Shortage", desc: "Cannot find qualified accountants to hire." },
      { icon: "TrendingDown", title: "Margin Compression", desc: "Compliance work is becoming commoditized." },
      { icon: "Briefcase", title: "Burnout", desc: "Tax season is destroying team morale." }
    ],
    solutionOverview: "A white-label platform that handles the grunt work—categorization, reconciliation, and draft reporting—so your CPAs can focus on strategy.",
    benefits: [
      { metric: "3x", desc: "Increase in client capacity" },
      { metric: "40%", desc: "Reduction in labor costs" },
      { metric: "Zero", desc: "Setup cost for partners" }
    ],
    pricing: "Custom Partner Pricing",
    ctaText: "Apply for Partnership",
    testimonials: [
      { quote: "We doubled our client base without adding headcount.", author: "Sarah J., CPA Partner" }
    ]
  },
  {
    slug: "startup-accounting-solution",
    title: "Financial Stack for High-Growth Startups",
    targetAudience: "Startup Founders",
    heroHeadline: "Fundraising-Ready Financials on Autopilot",
    heroSubhead: "Burn rate analysis, runway modeling, and GAAP financials for VC-backed startups.",
    painPoints: [
      { icon: "TrendingUp", title: "Complex Cap Tables", desc: "Managing equity and convertible notes." },
      { icon: "Search", title: "Due Diligence", desc: "Messy books killing potential deals." },
      { icon: "Zap", title: "Cash Burn", desc: "Running out of cash unexpectedly." }
    ],
    solutionOverview: "Fractional CFO services combined with AI bookkeeping to give you the financial rigor of a public company at seed-stage costs.",
    benefits: [
      { metric: "Days", desc: "To close monthly books" },
      { metric: "Real-time", desc: "Runway monitoring" },
      { metric: "VC", desc: "Approved reporting standards" }
    ],
    pricing: "Starts at $499/mo",
    ctaText: "Book a Demo",
    testimonials: [
      { quote: "Investors loved our data room. Thanks Finxis.", author: "David K., Tech Founder" }
    ]
  },
  {
    slug: "saas-accounting-solution",
    title: "SaaS Metrics & Revenue Recognition",
    targetAudience: "SaaS Companies",
    heroHeadline: "Master Your MRR, ARR, and Churn",
    heroSubhead: "Automated ASC 606 compliance and subscription analytics for software companies.",
    painPoints: [
      { icon: "RefreshCw", title: "Rev Rec", desc: "Deferring revenue correctly is a nightmare." },
      { icon: "Globe", title: "Global Tax", desc: "Handling VAT/GST for international customers." },
      { icon: "BarChart", title: "Metric Chaos", desc: "Disagreement on CAC/LTV calculations." }
    ],
    solutionOverview: "Direct integration with Stripe/Chargebee to automate revenue recognition and generate SaaS-specific financial boards.",
    benefits: [
      { metric: "100%", desc: "ASC 606 Compliance" },
      { metric: "Auto", desc: "Churn analysis" },
      { metric: "Global", desc: "Multi-currency support" }
    ],
    pricing: "Starts at $799/mo",
    ctaText: "See the Dashboard",
    testimonials: [
      { quote: "Finally, finance tools that understand SaaS.", author: "Elena R., SaaS CEO" }
    ]
  },
  {
    slug: "ecommerce-accounting-solution",
    title: "E-Commerce Accounting & Tax",
    targetAudience: "Online Retailers",
    heroHeadline: "Know Your True Profit on Every SKU",
    heroSubhead: "Inventory accounting, sales tax nexus, and channel profitability for e-com brands.",
    painPoints: [
      { icon: "Box", title: "Inventory", desc: "COGS calculations are always wrong." },
      { icon: "Map", title: "Nexus", desc: "Sales tax liability in 40+ states." },
      { icon: "Layers", title: "Channel Data", desc: "Amazon fees hiding true margins." }
    ],
    solutionOverview: "We sync with Shopify, Amazon, and Walmart to provide granular profitability analysis and automated sales tax filing.",
    benefits: [
      { metric: "SKU-level", desc: "Profitability tracking" },
      { metric: "50+", desc: "States/Counties filed" },
      { metric: "Daily", desc: "Sales reconciliation" }
    ],
    pricing: "Starts at $599/mo",
    ctaText: "Audit My Store",
    testimonials: [
      { quote: "Saved us $20k in missed deductions.", author: "Tom W., E-com Founder" }
    ]
  }
];

export const getFunnelPageBySlug = (slug) => funnelPages.find(p => p.slug === slug);

export const generateFunnelSchema = (page) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": page.title,
  "description": page.heroSubhead,
  "brand": { "@type": "Brand", "name": "FinxisAI" },
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
});
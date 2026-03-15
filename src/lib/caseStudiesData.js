export const caseStudies = [
  // --- SaaS (2) ---
  {
    id: "saas-1",
    title: "Scaling Financial Ops for Series B SaaS",
    slug: "saas-startup-accounting-scaling",
    companyName: "TechFlow",
    industry: "SaaS",
    revenue: "$10M ARR",
    challenge: "Manual reconciliation of thousands of Stripe transactions delayed monthly close by 15 days.",
    solution: "Implemented AI-driven bookkeeping engine to automate revenue recognition and bank reconciliation.",
    results: "Reduced monthly close to 3 days. Saved 40 hours/month. 99.8% accuracy.",
    testimonial: "FinxisAI didn't just clean up our books; they gave us the confidence to scale aggressively.",
    author: "Jane Doe, CFO",
    metaDescription: "How TechFlow reduced monthly close time by 80% using FinxisAI automated accounting.",
    relatedIds: ["saas-2", "startup-1", "tech-1"]
  },
  {
    id: "saas-2",
    title: "Multi-Currency Reconciliation for Global SaaS",
    slug: "saas-global-multi-currency",
    companyName: "CloudConnect",
    industry: "SaaS",
    revenue: "$25M ARR",
    challenge: "Exchange rate fluctuations across 5 currencies created massive reporting discrepancies.",
    solution: "Deployed multi-currency module to automate FX adjustments and consolidated reporting.",
    results: "Eliminated FX backlog. Saved $50k/year in hidden fees. Audit-ready financials.",
    testimonial: "We finally trust our international P&L numbers again.",
    author: "Mark Smith, VP Finance",
    metaDescription: "Solving multi-currency headaches for a global SaaS platform.",
    relatedIds: ["saas-1", "ecom-2", "tech-2"]
  },

  // --- E-Commerce (2) ---
  {
    id: "ecom-1",
    title: "Automated COGS for High-Volume Retailer",
    slug: "ecommerce-cogs-automation",
    companyName: "StyleHub",
    industry: "E-Commerce",
    revenue: "$15M GMV",
    challenge: "Inaccurate COGS data led to cash flow issues and stock-outs during peak seasons.",
    solution: "Integrated inventory management system with accounting for real-time COGS tracking.",
    results: "98% margin accuracy. Released $200k in working capital. optimized inventory turnover.",
    testimonial: "We finally know our true profit margin on every SKU.",
    author: "Sarah Lee, Founder",
    metaDescription: "Improving inventory profitability for a fashion e-commerce brand.",
    relatedIds: ["ecom-2", "retail-1", "saas-2"]
  },
  {
    id: "ecom-2",
    title: "Sales Tax Nexus Compliance",
    slug: "ecommerce-sales-tax-compliance",
    companyName: "GearDirect",
    industry: "E-Commerce",
    revenue: "$8M GMV",
    challenge: "Crossed nexus thresholds in 20 states without realizing, creating liability risk.",
    solution: "Automated sales tax calculation and filing across all jurisdictions.",
    results: "100% compliance in 30 days. Avoided potential $45k in penalties.",
    testimonial: "They saved us from a sales tax nightmare.",
    author: "Mike Ross, CEO",
    metaDescription: "Navigating multi-state sales tax compliance for growing e-commerce.",
    relatedIds: ["ecom-1", "saas-2", "retail-2"]
  },

  // --- Healthcare (2) ---
  {
    id: "health-1",
    title: "Modernizing Private Practice Finances",
    slug: "healthcare-private-practice-accounting",
    companyName: "ClearView Dermatology",
    industry: "Healthcare",
    revenue: "$3M Revenue",
    challenge: "Paper-based billing and manual bookkeeping led to revenue leakage.",
    solution: "Digitized billing workflow and automated reconciliation with EHR system.",
    results: "Recovered $15k in unbilled revenue monthly. Reduced admin time by 50%.",
    testimonial: "I can focus on patients knowing the finances are healthy.",
    author: "Dr. Emily Chen, Owner",
    metaDescription: "Digital transformation for a busy dermatology practice.",
    relatedIds: ["health-2", "pro-1", "smb-1"]
  },
  {
    id: "health-2",
    title: "Consolidated Reporting for Dental Group",
    slug: "healthcare-dental-group-cfo",
    companyName: "BrightSmiles Group",
    industry: "Healthcare",
    revenue: "$12M Revenue",
    challenge: "Lack of visibility across 8 locations made performance comparison impossible.",
    solution: "Implemented consolidated dashboard tracking KPIs per location.",
    results: "Identified 15% cost savings in supply chain. Standardized profitability metrics.",
    testimonial: "The location-by-location comparison was an eye-opener.",
    author: "Tom Wilson, Operations Director",
    metaDescription: "Financial consolidation for a multi-location dental group.",
    relatedIds: ["health-1", "franchise-1", "franchise-2"]
  },

  // --- Agency (2) ---
  {
    id: "agency-1",
    title: "Project Profitability for Digital Agency",
    slug: "agency-project-profitability",
    companyName: "PixelPerfect",
    industry: "Agency",
    revenue: "$5M Revenue",
    challenge: "Scope creep and lack of time tracking eroded project margins.",
    solution: "Job costing implementation integrated with time tracking software.",
    results: "Increased net margin from 8% to 22%. Identified unprofitable clients.",
    testimonial: "We stopped working for free and started growing profits.",
    author: "Alex Turner, Creative Director",
    metaDescription: "Optimizing project margins for a digital creative agency.",
    relatedIds: ["agency-2", "pro-2", "saas-1"]
  },
  {
    id: "agency-2",
    title: "Retainer Management for Marketing Firm",
    slug: "agency-retainer-management",
    companyName: "GrowthEngine",
    industry: "Agency",
    revenue: "$9M Revenue",
    challenge: "Manual tracking of retainer budgets caused over-servicing and billing disputes.",
    solution: "Automated retainer tracking and revenue recognition system.",
    results: "Eliminated billing disputes. Improved client retention by 15%.",
    testimonial: "Transparency with clients has never been easier.",
    author: "Jessica Day, VP Accounts",
    metaDescription: "Streamlining retainer management for a marketing agency.",
    relatedIds: ["agency-1", "pro-1", "saas-2"]
  },

  // --- Small Business (2) ---
  {
    id: "smb-1",
    title: "Automated Books for Local Retail",
    slug: "smb-retail-automation",
    companyName: "Main St. Boutique",
    industry: "Small Business",
    revenue: "$800k Revenue",
    challenge: "Owner spent weekends on data entry instead of growing the business.",
    solution: "Integrated POS with accounting software for daily auto-reconciliation.",
    results: "Saved 12 hours/week. Real-time cash flow visibility.",
    testimonial: "I got my weekends back and my business is thriving.",
    author: "Linda Green, Owner",
    metaDescription: "Automating bookkeeping for a local retail business.",
    relatedIds: ["smb-2", "ecom-1", "restaurant-1"]
  },
  {
    id: "smb-2",
    title: "Cash Flow Management for Trade Biz",
    slug: "smb-trade-cash-flow",
    companyName: "Precision Plumbing",
    industry: "Small Business",
    revenue: "$2.5M Revenue",
    challenge: "Uneven cash flow from project-based work caused payroll stress.",
    solution: "Implemented 13-week cash flow forecast and invoice factoring integration.",
    results: "Stabilized cash flow. Enabled hiring of 3 new techs.",
    testimonial: "We finally have a roadmap for our cash.",
    author: "Bob Miller, Owner",
    metaDescription: "Solving cash flow volatility for a plumbing business.",
    relatedIds: ["smb-1", "construction-1", "agency-1"]
  },

  // --- Startup (2) ---
  {
    id: "startup-1",
    title: "Pre-Seed Financial Modeling",
    slug: "startup-financial-modeling",
    companyName: "NextGen Tech",
    industry: "Startup",
    revenue: "Pre-Revenue",
    challenge: "Founders needed a robust financial model to secure seed funding.",
    solution: "Built dynamic 5-year financial model with adjustable growth drivers.",
    results: "Secured $2M seed round. Investors praised the financial clarity.",
    testimonial: "The model was key to our successful fundraise.",
    author: "David Kim, Founder",
    metaDescription: "Financial modeling for a pre-seed tech startup.",
    relatedIds: ["startup-2", "saas-1", "saas-2"]
  },
  {
    id: "startup-2",
    title: "Burn Rate Optimization",
    slug: "startup-burn-rate",
    companyName: "BioLife Sciences",
    industry: "Startup",
    revenue: "Pre-Revenue",
    challenge: "High operational costs were shortening the runway too fast.",
    solution: "Detailed expense audit and implementation of spend management controls.",
    results: "Extended runway by 6 months. Reduced non-essential spend by 25%.",
    testimonial: "We bought ourselves time to hit our milestones.",
    author: "Sarah Connor, CEO",
    metaDescription: "Extending runway through burn rate optimization.",
    relatedIds: ["startup-1", "saas-1", "health-1"]
  },

  // --- Manufacturing (2) ---
  {
    id: "mfg-1",
    title: "Cost Accounting for Manufacturer",
    slug: "manufacturing-cost-accounting",
    companyName: "SteelCraft",
    industry: "Manufacturing",
    revenue: "$18M Revenue",
    challenge: "Pricing decisions were based on outdated material cost assumptions.",
    solution: "Implemented real-time standard costing system updated daily.",
    results: "Improved gross margin by 4%. Optimized product pricing.",
    testimonial: "We stopped selling our most popular product at a loss.",
    author: "Frank Castle, Plant Manager",
    metaDescription: "Real-time cost accounting for a metal manufacturer.",
    relatedIds: ["mfg-2", "ecom-1", "wholesale-1"]
  },
  {
    id: "mfg-2",
    title: "Inventory Control Implementation",
    slug: "manufacturing-inventory-control",
    companyName: "AutoParts Co.",
    industry: "Manufacturing",
    revenue: "$40M Revenue",
    challenge: "Excess raw material inventory tied up millions in cash.",
    solution: "Deployed JIT inventory tracking and demand forecasting.",
    results: "Reduced inventory holding costs by 20%. Freed $1.5M cash.",
    testimonial: "Our warehouse is leaner and our bank account is fuller.",
    author: "Lisa Ray, CFO",
    metaDescription: "Optimizing inventory levels for an automotive supplier.",
    relatedIds: ["mfg-1", "ecom-2", "retail-2"]
  },

  // --- Real Estate (2) ---
  {
    id: "re-1",
    title: "Portfolio Accounting Automation",
    slug: "real-estate-portfolio-accounting",
    companyName: "Urban Properties",
    industry: "Real Estate",
    revenue: "$10M Rental Income",
    challenge: "Managing finances for 50 properties in spreadsheets was unscalable.",
    solution: "Automated property accounting software implementation.",
    results: "Consolidated reporting in minutes. 99% rent collection tracking.",
    testimonial: "Scaling our portfolio is now a breeze.",
    author: "John Smith, Developer",
    metaDescription: "Automating accounting for a mid-sized real estate portfolio.",
    relatedIds: ["re-2", "smb-2", "construction-1"]
  },
  {
    id: "re-2",
    title: "Tax Deferral via 1031 Exchange",
    slug: "real-estate-1031-exchange",
    companyName: "Capital Investments",
    industry: "Real Estate",
    revenue: "$5M Transaction Volume",
    challenge: "Facing massive capital gains tax on property sale.",
    solution: "Facilitated complex 1031 exchange to defer tax liability.",
    results: "Deferred $400k in taxes. Reinvested full equity into larger asset.",
    testimonial: "FinxisAI guided us through every step of the exchange.",
    author: "Mary Johnson, Investor",
    metaDescription: "Strategic tax deferral for real estate investors.",
    relatedIds: ["re-1", "tax-1", "wealth-1"]
  },

  // --- Non-Profit (2) ---
  {
    id: "np-1",
    title: "Grant Tracking and Compliance",
    slug: "non-profit-grant-tracking",
    companyName: "Community First",
    industry: "Non-Profit",
    revenue: "$3M Budget",
    challenge: "Risk of losing funding due to poor restricted fund tracking.",
    solution: "Fund accounting system setup to track restrictions.",
    results: "Passed audit with zero findings. Secured renewal of major grant.",
    testimonial: "Our donors trust us because our books are transparent.",
    author: "Rev. James Hill, Director",
    metaDescription: "Ensuring compliance and grant tracking for non-profits.",
    relatedIds: ["np-2", "smb-1", "health-1"]
  },
  {
    id: "np-2",
    title: "Budgeting for Sustainability",
    slug: "non-profit-budgeting",
    companyName: "Green Earth",
    industry: "Non-Profit",
    revenue: "$1.5M Budget",
    challenge: "Operating at a deficit with no clear path to sustainability.",
    solution: "Zero-based budgeting and program profitability analysis.",
    results: "Balanced budget in Year 1. Identified sustainable revenue sources.",
    testimonial: "We are now financially sustainable for the long haul.",
    author: "Alice Cooper, Exec Director",
    metaDescription: "Financial sustainability planning for environmental non-profit.",
    relatedIds: ["np-1", "startup-2", "agency-2"]
  },

  // --- Restaurant (2) ---
  {
    id: "rest-1",
    title: "Prime Cost Optimization",
    slug: "restaurant-prime-cost",
    companyName: "Bistro 55",
    industry: "Restaurant",
    revenue: "$2M Revenue",
    challenge: "Rising food and labor costs were eroding margins to zero.",
    solution: "Weekly prime cost reporting and menu engineering.",
    results: "Reduced prime costs from 68% to 58%. Profitability restored.",
    testimonial: "We finally make money on our busy nights.",
    author: "Chef Gordon, Owner",
    metaDescription: "Reducing food and labor costs for a busy bistro.",
    relatedIds: ["rest-2", "smb-1", "retail-1"]
  },
  {
    id: "rest-2",
    title: "Multi-Unit Franchise Accounting",
    slug: "restaurant-franchise-accounting",
    companyName: "BurgerBar Group",
    industry: "Restaurant",
    revenue: "$6M Revenue",
    challenge: "Inconsistent reporting across 5 locations.",
    solution: "Standardized chart of accounts and centralized AP.",
    results: "Consistent reporting. Bulk purchasing saved 8%.",
    testimonial: "Running 5 stores is as easy as running one now.",
    author: "Bill Gates, Franchisee",
    metaDescription: "Standardizing accounting for a multi-unit restaurant franchise.",
    relatedIds: ["rest-1", "franchise-1", "franchise-2"]
  },

  // --- Professional Services (2) ---
  {
    id: "pro-1",
    title: "WIP Billing for Law Firm",
    slug: "law-firm-wip-billing",
    companyName: "Justice & Partners",
    industry: "Professional Services",
    revenue: "$8M Revenue",
    challenge: "Slow billing cycle led to massive Work-In-Progress buildup.",
    solution: "Automated billing workflows and WIP aging reports.",
    results: "Reduced billing cycle by 15 days. Improved realization rate.",
    testimonial: "Our cash flow improved immediately.",
    author: "Harvey Specter, Partner",
    metaDescription: "Accelerating cash flow for a mid-sized law firm.",
    relatedIds: ["pro-2", "agency-1", "agency-2"]
  },
  {
    id: "pro-2",
    title: "Utilization Tracking for Consultants",
    slug: "consulting-utilization-tracking",
    companyName: "StrategyCo",
    industry: "Professional Services",
    revenue: "$4M Revenue",
    challenge: "Unclear staff utilization led to hiring freezes and burnout.",
    solution: "Utilization dashboard implementation.",
    results: "Optimized staffing levels. Increased billable hours by 10%.",
    testimonial: "We now hire based on data, not gut feel.",
    author: "Marty Kahn, CEO",
    metaDescription: "Optimizing staff utilization for a consulting firm.",
    relatedIds: ["pro-1", "agency-1", "saas-2"]
  }
];

export const getCaseStudyBySlug = (slug) => caseStudies.find(s => s.slug === slug);
export const getRelatedStudies = (id, count = 3) => {
  const current = caseStudies.find(s => s.id === id);
  if(!current) return [];
  return caseStudies.filter(s => current.relatedIds.includes(s.id)).slice(0, count);
};

export const generateCaseStudySchema = (study) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": study.title,
  "description": study.metaDescription,
  "author": {
    "@type": "Person",
    "name": study.author
  },
  "publisher": {
    "@type": "Organization",
    "name": "FinxisAI"
  }
});
import { 
  Building2, Stethoscope, ShoppingCart, Rocket, 
  Briefcase, Landmark, HardHat, Hotel, Truck, Calculator,
  TrendingUp, Shield, Users, PieChart, FileText, CheckCircle2
} from 'lucide-react';

const industries = {
  ecommerce: {
    name: 'E-Commerce',
    icon: ShoppingCart,
    painPoints: [
      'Inventory reconciliation nightmares across multiple channels (Shopify, Amazon, eBay)',
      'Sales tax nexus complexity in 40+ states',
      'COGS accuracy and gross margin tracking',
      'Payment processor fee reconciliation (Stripe, PayPal, Affirm)',
      'Handling returns and refunds accurately in financials',
      'Platform integration data breaks'
    ]
  },
  healthcare: {
    name: 'Healthcare',
    icon: Stethoscope,
    painPoints: [
      'HIPAA compliance and patient data privacy',
      'Insurance billing reconciliation and denial management',
      'Provider compensation calculations',
      'Tracking equipment depreciation and medical supplies inventory',
      'Regulatory reporting requirements',
      'Revenue cycle management gaps'
    ]
  },
  saas: {
    name: 'SaaS & Tech',
    icon: Rocket,
    painPoints: [
      'Revenue recognition (ASC 606) for subscriptions',
      'Capitalizing software development costs',
      'Tracking SaaS metrics (CAC, LTV, Churn, ARR/MRR)',
      'Investor reporting requirements (Series A/B)',
      'R&D tax credit documentation',
      'Stock option expensing'
    ]
  },
  nonprofit: {
    name: 'Nonprofits',
    icon: Users,
    painPoints: [
      'Fund accounting and restricted vs. unrestricted assets',
      'Grant reporting and compliance',
      'Donor management system reconciliation',
      'Form 990 preparation complexity',
      'Board reporting transparency',
      'Budget tracking for specific programs'
    ]
  },
  realestate: {
    name: 'Real Estate',
    icon: Building2,
    painPoints: [
      'Property-level P&L tracking',
      'CAM reconciliations and tenant billing',
      'Construction in Progress (CIP) accounting',
      '1031 exchange documentation',
      'Depreciation schedules for multiple asset classes',
      'Portfolio-wide cash flow visibility'
    ]
  },
  professional: {
    name: 'Professional Services',
    icon: Briefcase,
    painPoints: [
      'Project profitability tracking',
      'WIP (Work in Progress) accounting',
      'Billable utilization reporting',
      'Trust accounting (IOLTA for lawyers)',
      'Partner compensation modeling',
      'Uneven cash flow cycles'
    ]
  },
  manufacturing: {
    name: 'Manufacturing',
    icon: HardHat,
    painPoints: [
      'Inventory valuation (FIFO/LIFO/Weighted Avg)',
      'Bill of Materials (BOM) accuracy',
      'Overhead allocation to production',
      'Supply chain cash flow gaps',
      'Equipment maintenance capitalization',
      'Waste and scrap tracking'
    ]
  }
};

const serviceIndustryData = {
  'bookkeeping-ecommerce': {
    serviceType: 'AI-Enabled Bookkeeping',
    industryType: 'ecommerce',
    industryName: 'E-Commerce',
    heroHeadline: 'Automated E-Commerce Bookkeeping',
    heroSubheading: 'Reconcile Shopify, Amazon, and Stripe sales instantly with AI-driven precision.',
    heroImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80',
    serviceDescription: `For e-commerce businesses, volume is both a blessing and a curse. Managing thousands of transactions across Shopify, Amazon, Stripe, and PayPal can overwhelm traditional bookkeeping methods. Our AI-enabled service ingests data directly from your sales channels and payment processors, matching orders to deposits with 99.9% accuracy. We separate sales tax, shipping income, and platform fees automatically, giving you a true gross margin view.`,
    industryPainPoints: industries.ecommerce.painPoints,
    solutions: [
      { title: 'Automated Channel Feeds', description: 'Direct API connections to Shopify, Amazon, and Walmart to import orders.' },
      { title: 'Payment Reconciliation', description: 'AI matches net deposits to gross sales, isolating fees and refunds.' },
      { title: 'Sales Tax Hygiene', description: 'Accurately tracking collected tax by state to ensure easy remittance.' },
      { title: 'Inventory Sync', description: 'Periodic inventory value adjustments based on your IMS data.' },
      { title: 'Margin Analysis', description: 'Real-time dashboard showing true profitability per channel.' },
      { title: 'Refund Management', description: 'Automated handling of returns to keep revenue figures accurate.' }
    ],
    examples: [
      {
        title: 'The Multi-Channel Seller',
        description: 'A brand selling on Shopify and Amazon FBA was under-reporting COGS by 15%.',
        result: 'Corrected margins led to a pricing strategy shift that added $120k in annual profit.'
      },
      {
        title: 'The Sales Tax Nexus',
        description: 'A scaling seller hit economic nexus in 12 states without knowing it.',
        result: 'We identified the exposure, registered the business, and automated future filings.'
      }
    ],
    benefits: [
      { title: 'True Gross Margins', description: 'Know exactly what you make after fees and COGS.' },
      { title: 'Audit-Ready Sales Tax', description: 'Never fear a state nexus questionnaire again.' },
      { title: 'Cash Flow Clarity', description: 'Understand your settlement timing from Amazon/Stripe.' },
      { title: 'Investor Ready', description: 'Clean books for potential exit or financing.' },
      { title: 'Time Savings', description: 'Eliminate 40+ hours of manual spreadsheet matching per month.' },
      { title: 'Scalability', description: 'Handle 100 or 100,000 transactions without breaking.' }
    ],
    compliance: {
      regulations: ['State Economic Nexus Laws', 'Marketplace Facilitator Laws', 'GAAP Revenue Recognition'],
      text: 'E-commerce compliance is a moving target. We monitor state thresholds daily and ensure your revenue recognition aligns with when control transfers to the customer, not just when cash hits the bank.'
    },
    implementation: {
      timeline: '2-3 Weeks',
      steps: ['Connect Sales Channels', 'Map COGS & Inventory', 'Configure Tax Settings', 'Historical Import', 'Go Live']
    },
    faqs: [
      { question: 'Do you handle Amazon settlements?', answer: 'Yes, we parse the raw settlement files to separate sales, FBA fees, advertising, and reserves.' },
      { question: 'What about inventory counting?', answer: 'We don\'t physically count stock, but we reconcile your books to your inventory management system\'s valuation report.' },
      { question: 'Can you handle multiple currencies?', answer: 'Absolutely. We handle multi-currency consolidation and FX gain/loss tracking.' },
      { question: 'Do you file sales tax?', answer: 'We prepare the liability reports. For filing, we partner with tools like TaxJar or Avalara, which we manage for you.' }
    ],
    caseStudy: {
      title: 'From spreadsheet chaos to an 8-figure exit',
      challenge: 'Founders were manually entering daily sales totals, missing fees and refunds.',
      solution: 'Implemented automated feed reconciliation and landed cost tracking.',
      result: 'Clean financials passed due diligence, resulting in a successful acquisition.'
    }
  },
  'bookkeeping-healthcare': {
    serviceType: 'AI-Enabled Bookkeeping',
    industryType: 'healthcare',
    industryName: 'Healthcare',
    heroHeadline: 'HIPAA-Compliant Bookkeeping for Medical Practices',
    heroSubheading: 'Secure, accurate financial management for private practices, clinics, and healthcare groups.',
    heroImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80',
    serviceDescription: `Healthcare finance requires a unique blend of precision and privacy. From managing insurance reimbursements to tracking expensive medical equipment, the stakes are high. FinxisAI provides a HIPAA-compliant bookkeeping solution that respects patient confidentiality while giving you deep visibility into your practice's financial health. We automate the reconciliation of EMR/EHR reports with bank deposits, helping you spot denials and underpayments faster.`,
    industryPainPoints: industries.healthcare.painPoints,
    solutions: [
      { title: 'Revenue Cycle Reconciliation', description: 'Matching billed amounts to insurance payments and patient co-pays.' },
      { title: 'Provider Compensation', description: 'Tracking collections by provider for accurate payout calculations.' },
      { title: 'Expense Allocation', description: 'Allocating overhead to specific departments or locations.' },
      { title: 'Supply Inventory', description: 'Tracking medical supply usage and reorder thresholds.' },
      { title: 'Equipment Fixed Assets', description: 'Managing depreciation schedules for costly medical devices.' },
      { title: 'HIPAA Security', description: 'Data handling protocols that exceed standard financial security.' }
    ],
    examples: [
      {
        title: 'The Multi-Location Clinic',
        description: 'A dental group with 5 locations couldn\'t track profitability per site.',
        result: 'Implemented location-based class tracking, identifying one loss-making clinic to turnaround.'
      },
      {
        title: 'The Insurance Gap',
        description: 'A practice was writing off "small" denials without review.',
        result: 'Our reconciliation process caught $45k in recoverable denials in year one.'
      }
    ],
    benefits: [
      { title: 'Provider Performance', description: 'Clear metrics on production vs. collections per doctor.' },
      { title: 'Strict Privacy', description: 'Workflows designed to never expose PHI in financial records.' },
      { title: 'Cost Control', description: 'Identify trends in supply costs before they hurt margins.' },
      { title: 'Tax Strategy', description: 'Maximize deductions for equipment (Section 179).' },
      { title: 'Reduced Fraud Risk', description: 'Internal controls to protect against employee theft.' },
      { title: 'Peace of Mind', description: 'Focus on patient care, knowing your books are audit-ready.' }
    ],
    compliance: {
      regulations: ['HIPAA', 'Stark Law', 'Anti-Kickback Statute', 'IRS Medical Practice Audit Technique Guide'],
      text: 'We maintain strict separation of clinical and financial data. Our systems are SOC 2 Type II and HIPAA compliant, ensuring that your patient data remains protected while your financial data remains accurate.'
    },
    implementation: {
      timeline: '3-4 Weeks',
      steps: ['HIPAA BAA Signing', 'EMR/PMS Integration Analysis', 'Chart of Accounts Customization', 'Provider Setup', 'Go Live']
    },
    faqs: [
      { question: 'Is your staff HIPAA trained?', answer: 'Yes, all staff handling healthcare accounts undergo mandatory annual HIPAA training.' },
      { question: 'Do you access patient charts?', answer: 'No. We work with aggregate financial reports from your EMR, not patient charts.' },
      { question: 'Can you handle multiple tax IDs?', answer: 'Yes, we specialize in multi-entity structures common in medical groups.' },
      { question: 'Do you help with physician compensation?', answer: 'We provide the Net Collections data required for you to calculate productivity bonuses.' }
    ],
    caseStudy: {
      title: 'Streamlining a 15-Provider Group',
      challenge: 'Manual spreadsheets for compensation took the practice manager 3 days a month.',
      solution: 'Automated collections reporting by provider.',
      result: 'Compensation calculation time reduced to 2 hours; provider trust in data increased.'
    }
  },
  'tax-prep-saas-startups': {
    serviceType: 'Tax Preparation',
    industryType: 'saas',
    industryName: 'SaaS Startups',
    heroHeadline: 'Strategic Tax Prep for High-Growth SaaS',
    heroSubheading: 'Maximize R&D credits and navigate complex state nexus issues while you scale.',
    heroImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80',
    serviceDescription: `For SaaS startups, tax season isn't just about filing—it's about burn rate preservation. The R&D Tax Credit can provide a massive runway extension, but only if documented correctly. Furthermore, as you scale users globally, your state and international tax exposure explodes. FinxisAI combines automated tax-ready bookkeeping with expert CPA review to ensure you capture every credit you deserve while staying compliant in every jurisdiction you enter.`,
    industryPainPoints: industries.saas.painPoints,
    solutions: [
      { title: 'R&D Credit Studies', description: 'Identify and document qualified engineering activities for tax credits.' },
      { title: 'State Nexus Analysis', description: 'Determine filing requirements based on sales and remote employee locations.' },
      { title: 'Stock Option Planning', description: 'Guidance on ISO/NSO exercises and 409A implications.' },
      { title: 'NOL Carryforwards', description: 'Strategically managing net operating losses for future profitability.' },
      { title: 'International Tax', description: 'Handling transfer pricing and VAT for global sales.' },
      { title: 'Due Diligence Packs', description: 'Keeping tax records ready for VC scrutiny.' }
    ],
    examples: [
      {
        title: 'The Seed Stage Runway Extension',
        description: 'A pre-revenue startup didn\'t know they could offset payroll tax with R&D credits.',
        result: 'We filed for the payroll offset, saving them $65k in cash—equivalent to 4 months of runway.'
      },
      {
        title: 'The Remote Workforce',
        description: 'A startup hired devs in 5 states without registering for payroll tax.',
        result: 'We remediated the exposure through voluntary disclosure, avoiding steep penalties.'
      }
    ],
    benefits: [
      { title: 'Cash Savings', description: 'R&D credits can return up to 10% of your burn to your bank.' },
      { title: 'Audit Defense', description: 'Documentation that stands up to IRS and investor scrutiny.' },
      { title: 'Global Scale', description: 'Grow without fear of tripping international tax wires.' },
      { title: 'Investor Confidence', description: 'Clean tax history is a prerequisite for Series A.' },
      { title: 'Remote Compliance', description: 'Hire talent anywhere without creating tax messes.' },
      { title: 'Proactive Planning', description: 'Know your liability months before the deadline.' }
    ],
    compliance: {
      regulations: ['IRC Section 41 (R&D)', 'Wayfair Decision (Sales Tax)', 'ASC 740 (Income Taxes)'],
      text: 'SaaS tax compliance is about more than income tax; it is about sales tax on digital goods, payroll tax for remote teams, and documenting innovation. We take a holistic view of your regulatory footprint.'
    },
    implementation: {
      timeline: '4-6 Weeks (for R&D Study)',
      steps: ['Eligibility Assessment', 'Engineering Interviews', 'Expense Allocation', 'Credit Calculation', 'Filing']
    },
    faqs: [
      { question: 'Can I claim R&D credits if I\'m losing money?', answer: 'Yes! Startups with <$5M revenue can use credits to offset payroll taxes, saving actual cash.' },
      { question: 'Do you handle 1099s for contractors?', answer: 'Yes, we automate the collection of W-9s and filing of 1099s.' },
      { question: 'What about sales tax on software?', answer: 'It varies by state. We perform a nexus study to tell you exactly where you need to collect.' },
      { question: 'Do I need to file in Delaware?', answer: 'If you are a Delaware C-Corp, yes, you file a franchise tax report, even if you have no operations there.' }
    ],
    caseStudy: {
      title: 'Series B Readiness',
      challenge: 'Investors demanded 3 years of audited financials and tax returns.',
      solution: 'Reconstructed historical R&D claims and restated returns to be GAAP compliant.',
      result: 'Passed diligence with zero findings; raised $15M.'
    }
  },
  'virtual-cfo-ecommerce': {
    serviceType: 'Virtual CFO Services',
    industryType: 'ecommerce',
    industryName: 'E-Commerce',
    heroHeadline: 'Strategic Financial Leadership for E-Commerce',
    heroSubheading: 'Scale your brand with data-driven forecasting, inventory planning, and cash flow management.',
    heroImage: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80',
    serviceDescription: `E-commerce is a cash-intensive game. Inventory binds up capital, ad spend fluctuates wildly, and payment processors hold your money. You don't just need a bookkeeper; you need a strategic partner. Our Virtual CFO service for e-commerce brands helps you navigate the "Cash Conversion Cycle," plan inventory buys, optimize ad spend ROAS, and forecast cash flow so you never stock out or run dry.`,
    industryPainPoints: industries.ecommerce.painPoints,
    solutions: [
      { title: 'Cash Flow Forecasting', description: 'Predicting cash lows based on inventory deposits and payout schedules.' },
      { title: 'Inventory Planning', description: 'Open-to-buy planning to balance stock levels with demand.' },
      { title: 'Unit Economics Analysis', description: 'Drilling down to the contribution margin of every SKU.' },
      { title: 'Marketing ROI', description: 'Measuring MER (Marketing Efficiency Ratio) and LTV:CAC.' },
      { title: 'Funding Strategy', description: 'Helping you secure inventory financing or equity investment.' },
      { title: 'Exit Planning', description: 'Preparing your financials to maximize valuation multiples.' }
    ],
    examples: [
      {
        title: 'The Inventory Crunch',
        description: 'A brand was growing 100% YoY but constantly running out of cash for stock.',
        result: 'We negotiated better vendor terms and secured a line of credit, smoothing the cash cycle.'
      },
      {
        title: 'The Unprofitable SKU',
        description: 'A hero product had high sales but negative contribution margin after ads.',
        result: 'We identified the bleed, raised prices, and optimized the bundle strategy.'
      }
    ],
    benefits: [
      { title: 'Never Stock Out', description: 'Plan purchases with precision.' },
      { title: 'Maximize Valuation', description: 'Build a business buyers want to acquire.' },
      { title: 'Sleep Better', description: 'Know exactly how much runway you have.' },
      { title: 'Negotiate Power', description: 'Data to back up vendor negotiations.' },
      { title: 'Marketing Efficiency', description: 'Spend only on what drives profit.' },
      { title: 'Strategic Partner', description: 'A sounding board for big decisions.' }
    ],
    compliance: {
      regulations: ['Inventory GAAP Accounting', 'Sales Tax Compliance', 'Consumer Protection Laws'],
      text: 'While we focus on strategy, we build it on a foundation of compliance. We ensure your inventory valuation methods (FIFO/LIFO) are consistent and compliant with accounting standards.'
    },
    implementation: {
      timeline: 'First 30 Days',
      steps: ['Financial Health Check', 'Forecast Build', 'KPI Dashboard Setup', 'Strategy Session', 'Monthly Cadence']
    },
    faqs: [
      { question: 'How often do we meet?', answer: 'Typically monthly for a deep dive, with weekly check-ins available.' },
      { question: 'Do you help with fundraising?', answer: 'Yes, we help build the pitch deck financials and sit in on investor meetings.' },
      { question: 'What software do you use?', answer: 'We layer tools like Fathom or Jirav on top of QBO/Xero for advanced forecasting.' },
      { question: 'Is this expensive?', answer: 'It is a fraction of the cost of a full-time CFO, typically structured as a flat monthly retainer.' }
    ],
    caseStudy: {
      title: 'Preparing for Exit',
      challenge: 'Founder wanted to sell but financials were messy and focused on tax minimization.',
      solution: 'Restated financials to accrual basis, adding back personal expenses (EBITDA adjustments).',
      result: 'Sold for a 5x multiple, 2 turns higher than initial offers.'
    }
  },
  'payroll-healthcare': {
    serviceType: 'Payroll Services',
    industryType: 'healthcare',
    industryName: 'Healthcare',
    heroHeadline: 'Precision Payroll for Medical Professionals',
    heroSubheading: 'Handle complex shifts, multiple locations, and provider compensation with ease.',
    heroImage: 'https://images.unsplash.com/photo-1576091160550-2187d80a1a87?auto=format&fit=crop&q=80',
    serviceDescription: `Healthcare payroll is rarely simple. You have doctors on production-based comp, nurses on complex shift differentials, and support staff on hourly wages—often across multiple locations. Mistakes here lead to unhappy providers and compliance risks. FinxisAI delivers a specialized payroll service that integrates with your time-tracking and scheduling software, ensuring every calculation is accurate and every tax is filed on time.`,
    industryPainPoints: industries.healthcare.painPoints,
    solutions: [
      { title: 'Production Bonus Calc', description: 'Automating complex physician compensation models.' },
      { title: 'Multi-Location Tracking', description: 'Allocating labor costs to specific clinics for P&L accuracy.' },
      { title: 'Shift Differentials', description: 'Handling night/weekend rates and overtime rules automatically.' },
      { title: 'Benefits Admin', description: 'Managing deductions for health, 401k, and malpractice insurance.' },
      { title: 'Contractor vs Employee', description: 'Guidance on classifying locum tenens properly.' },
      { title: 'Tax Filing', description: 'Automated federal, state, and local tax remittance.' }
    ],
    examples: [
      {
        title: 'The Overtime Error',
        description: 'A clinic was miscalculating overtime for nurses working split shifts.',
        result: 'We corrected the logic in the time/attendance system, preventing a potential labor lawsuit.'
      },
      {
        title: 'The Bonus Lag',
        description: 'Doctors waited 45 days for production bonuses due to manual calc.',
        result: 'Automated the data flow from billing to payroll; reduced wait to 10 days.'
      }
    ],
    benefits: [
      { title: 'Happy Providers', description: 'Accurate, timely pay builds trust.' },
      { title: 'Labor Cost Visibility', description: 'See real-time labor % of revenue per site.' },
      { title: 'Compliance Safety', description: 'Avoid DOL audits and tax penalties.' },
      { title: 'Time Savings', description: 'Stop manually keying hours from spreadsheets.' },
      { title: 'Seamless Benefits', description: 'New hires enrolled easily; terms processed instantly.' },
      { title: 'Digital Access', description: 'Employees access stubs and W2s online.' }
    ],
    compliance: {
      regulations: ['FLSA (Overtime)', 'ACA Reporting', 'Employee Classification', 'State Labor Laws'],
      text: 'Healthcare is a target for labor audits. We ensure your pay policies comply with the Fair Labor Standards Act, especially regarding overtime for support staff and exempt status for providers.'
    },
    implementation: {
      timeline: '2-4 Weeks',
      steps: ['Data Migration', 'Policy Review', 'System Setup', 'Parallel Run', 'Go Live']
    },
    faqs: [
      { question: 'Do you integrate with TSheets/Deputy?', answer: 'Yes, we integrate with most major time and attendance platforms.' },
      { question: 'Can you handle per diem staff?', answer: 'Yes, we support complex pay rates and variable schedules.' },
      { question: 'Who files the taxes?', answer: 'We handle all filings and deposits. You just approve the run.' },
      { question: 'What if a doctor is an owner?', answer: 'We handle owner draws and guaranteed payments appropriately for tax purposes.' }
    ],
    caseStudy: {
      title: 'Scaling from 1 to 5 Locations',
      challenge: 'Payroll took 2 days per cycle due to manual location allocation.',
      solution: 'Implemented department codes and automated time import.',
      result: 'Payroll processing time reduced to 30 minutes; accurate P&L by location achieved.'
    }
  },
  'cpa-support-nonprofits': {
    serviceType: 'CPA Support & Review',
    industryType: 'nonprofit',
    industryName: 'Nonprofits',
    heroHeadline: 'Specialized Support for Nonprofit Accounting',
    heroSubheading: 'Navigate fund accounting, grant compliance, and Form 990 preparation with expert CPA support.',
    heroImage: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80',
    serviceDescription: `Nonprofit accounting is fundamentally different from for-profit accounting. The focus isn't just on the bottom line, but on stewardship, restrictions, and impact. FinxisAI provides specialized support to help your organization manage net assets, track restricted funds, and prepare for the annual audit. We act as your technical accounting partner, ensuring your financial story aligns with your mission.`,
    industryPainPoints: industries.nonprofit.painPoints,
    solutions: [
      { title: 'Fund Accounting Setup', description: 'Structuring your COA to track restricted vs. unrestricted assets.' },
      { title: 'Grant Management', description: 'Tracking expenses against specific grant budgets and timelines.' },
      { title: 'Audit Preparation', description: 'Preparing schedules and workpapers for your annual audit.' },
      { title: 'Form 990 Support', description: 'Compiling the financial data required for your informational return.' },
      { title: 'Board Reporting', description: 'Creating clear, visual dashboards for non-financial board members.' },
      { title: 'Functional Expense Alloc', description: 'Allocating costs to Program, Admin, and Fundraising correctly.' }
    ],
    examples: [
      {
        title: 'The Restricted Fund Mix-up',
        description: 'A charity accidentally spent restricted building funds on operations.',
        result: 'We helped reconstruct the accounts, replenish the fund, and implement controls to prevent recurrence.'
      },
      {
        title: 'The Grant Audit',
        description: 'A grantor audited a $500k award; documentation was missing.',
        result: 'We established a digital document trail; future audits passed with zero findings.'
      }
    ],
    benefits: [
      { title: 'Donor Confidence', description: 'Transparent reporting encourages giving.' },
      { title: 'Grant Compliance', description: 'Secure future funding by managing current grants well.' },
      { title: 'Audit Efficiency', description: 'Reduce audit fees by being prepared.' },
      { title: 'Mission Focus', description: 'Spend less time on spreadsheets, more on impact.' },
      { title: 'Risk Management', description: 'Protect your tax-exempt status.' },
      { title: 'Strategic Budgeting', description: 'Align resources with mission priorities.' }
    ],
    compliance: {
      regulations: ['FASB ASU 2016-14', 'Uniform Guidance (Federal Grants)', 'IRS Form 990', 'State Solicitation Laws'],
      text: 'We adhere to the latest nonprofit accounting standards, ensuring your Statement of Functional Expenses and Net Asset classifications meet FASB requirements.'
    },
    implementation: {
      timeline: '2-3 Weeks',
      steps: ['Fund Structure Review', 'Grant Inventory', 'Reporting Setup', 'Training', 'Ongoing Support']
    },
    faqs: [
      { question: 'Do you sign the audit opinion?', answer: 'No, we prepare you for the audit. The independent opinion comes from your external auditor.' },
      { question: 'Can you help with the Single Audit?', answer: 'Yes, if you expend >$750k in federal funds, we prepare the SEFA and support the Single Audit.' },
      { question: 'Do you understand Quickbooks for Nonprofits?', answer: 'Yes, we are experts in configuring QBO/Xero specifically for fund accounting.' },
      { question: 'Is this affordable for small nonprofits?', answer: 'We offer tiered pricing specifically designed for the nonprofit budget constraints.' }
    ],
    caseStudy: {
      title: 'Restoring Board Trust',
      challenge: 'The Board lost trust in financial reports that were always late and confusing.',
      solution: 'Implemented a visual dashboard and timely monthly close process.',
      result: 'Board meetings shifted from arguing about numbers to discussing strategy.'
    }
  },
  'cleanup-bookkeeping-real-estate': {
    serviceType: 'Cleanup & Catch-Up Bookkeeping',
    industryType: 'realestate',
    industryName: 'Real Estate',
    heroHeadline: 'Cleanup & Catch-Up for Real Estate Portfolios',
    heroSubheading: 'Untangle years of messy property records, reconcile CAMs, and get tax-ready fast.',
    heroImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80',
    serviceDescription: `Real estate books often get messy. Properties are bought and sold, refinances happen, and expenses get mixed up between entities. If your portfolio's financials are a tangle of commingled funds and unrecorded depreciation, FinxisAI can help. We specialize in forensic cleanup for real estate, reconstructing property-level P&Ls, reconciling mortgage balances, and ensuring your basis tracking is accurate for tax time.`,
    industryPainPoints: industries.realestate.painPoints,
    solutions: [
      { title: 'Property Class Tracking', description: 'Tagging every transaction to the correct property unit.' },
      { title: 'Mortgage Reconciliation', description: 'Splitting principal, interest, and escrow correctly.' },
      { title: 'Depreciation Catch-up', description: 'Calculating missed depreciation to lower tax liability.' },
      { title: 'Intercompany Cleanup', description: 'Untangling loans between your various LLCs.' },
      { title: 'Tenant Ledger Recon', description: 'Matching deposits to leases and security deposits.' },
      { title: 'CAPEX Analysis', description: 'Correctly capitalizing improvements vs. expensing repairs.' }
    ],
    examples: [
      {
        title: 'The Refinance Rescue',
        description: 'Lender needed clean financials for a refi; books were 18 months behind.',
        result: 'We deployed a cleanup team, processed 2,000 transactions in 10 days, and saved the deal.'
      },
      {
        title: 'The Commingled Nightmare',
        description: 'Owner used one bank account for 5 properties.',
        result: 'We retroactively separated the books, creating distinct P&Ls for each asset.'
      }
    ],
    benefits: [
      { title: 'Tax Savings', description: 'Found expenses often exceed our fee.' },
      { title: 'Lender Ready', description: 'Get approved for financing faster.' },
      { title: 'Asset Performance', description: 'Know which properties are actually making money.' },
      { title: 'Legal Protection', description: 'Maintain the corporate veil with separate books.' },
      { title: 'Peace of Mind', description: 'Stop worrying about the IRS.' },
      { title: 'Basis Accuracy', description: 'Crucial for future sales or 1031 exchanges.' }
    ],
    compliance: {
      regulations: ['IRS Passive Activity Rules', 'Tangible Property Regulations', 'State Landlord-Tenant Laws'],
      text: 'Real estate tax law is complex. We ensure repairs are distinguished from improvements (TPR compliance) and that security deposits are handled according to state trust account laws.'
    },
    implementation: {
      timeline: '2-6 Weeks (Depends on Volume)',
      steps: ['Diagnostic Review', 'Document Gathering', 'Processing Phase', 'Review & Adjust', 'Delivery']
    },
    faqs: [
      { question: 'How far back can you go?', answer: 'We can reconstruct books for as many years as you have bank statements.' },
      { question: 'Do I need my old receipts?', answer: 'Bank statements are the primary source; receipts are great but we can often work without them for cleanup (though you should keep them).' },
      { question: 'What about AppFolio/Buildium data?', answer: 'We can export data from your PMS to reconcile against the bank.' },
      { question: 'Cost?', answer: 'Cleanup is priced by volume/complexity, usually a one-time project fee.' }
    ],
    caseStudy: {
      title: 'Preparing for 1031 Exchange',
      challenge: 'Client needed to prove basis for a $2M exchange; records were in shoeboxes.',
      solution: 'Digitized and categorized 5 years of history.',
      result: 'Accurate basis calculation saved client $150k in capital gains tax.'
    }
  },
  'financial-reporting-professional-services': {
    serviceType: 'Financial Reporting',
    industryType: 'professional',
    industryName: 'Professional Services',
    heroHeadline: 'KPI Reporting for Agencies & Firms',
    heroSubheading: 'Move beyond the P&L. Track utilization, project profitability, and client margins.',
    heroImage: 'https://images.unsplash.com/photo-1554774853-719586f8c277?auto=format&fit=crop&q=80',
    serviceDescription: `For law firms, agencies, and consultancies, time is inventory. If you don't track it, you lose it. Standard financial statements don't tell the whole story. You need to know which clients are profitable, which employees are utilized, and how much WIP you have. FinxisAI delivers advanced management reporting that connects your time-tracking data with your financials, giving you the insights to price better and hire smarter.`,
    industryPainPoints: industries.professional.painPoints,
    solutions: [
      { title: 'Project Profitability', description: 'Matching labor costs to project revenue.' },
      { title: 'Utilization Dashboards', description: 'Tracking billable vs. non-billable time per head.' },
      { title: 'Client Margin Analysis', description: 'Identifying which clients are dragging down margins.' },
      { title: 'WIP Reporting', description: ' valuing unbilled time for accrual accounting.' },
      { title: 'Pipeline Forecasting', description: 'Predicting future revenue based on deal stages.' },
      { title: 'Overhead Rate Calc', description: 'Determining the true cost of an hour of work.' }
    ],
    examples: [
      {
        title: 'The Agency Scope Creep',
        description: 'A marketing agency was consistently over-servicing retainers.',
        result: 'Implemented budget-vs-actual tracking; renegotiated fees for top 5 over-serviced clients.'
      },
      {
        title: 'The Hiring Guess',
        description: 'A law firm hired based on gut feeling, leading to cash crunches.',
        result: 'Built a capacity model triggering hires only when utilization hit 85%.'
      }
    ],
    benefits: [
      { title: 'Better Pricing', description: 'Data-driven quotes ensure profitability.' },
      { title: 'Staff Accountability', description: 'Transparent goals for billable hours.' },
      { title: 'Cash Flow', description: 'Faster billing cycles improve collection.' },
      { title: 'Client Selection', description: 'Fire unprofitable clients with confidence.' },
      { title: 'Growth Strategy', description: 'Know exactly when to scale.' },
      { title: 'Valuation', description: 'Recurring revenue quality increases firm value.' }
    ],
    compliance: {
      regulations: ['ASC 606 (Revenue Recognition)', 'IOLTA Rules (Legal)', 'State Professional Board Rules'],
      text: 'For legal and financial firms, trust accounting compliance is non-negotiable. We ensure client funds are segregated and tracked in accordance with state bar or board regulations.'
    },
    implementation: {
      timeline: '2-4 Weeks',
      steps: ['System Integration (Harvest/Clio)', 'KPI Definition', 'Dashboard Build', 'Review Cycle Setup', 'Go Live']
    },
    faqs: [
      { question: 'Do you integrate with Clio/Harvest?', answer: 'Yes, we pull data from industry-specific tools to marry with QBO data.' },
      { question: 'Can you track fixed-fee projects?', answer: 'Yes, we calculate the effective hourly rate for fixed-fee work.' },
      { question: 'How often are reports updated?', answer: 'Dashboards can be real-time; deep analysis is usually monthly.' },
      { question: 'Do you help with partner distributions?', answer: 'We provide the net income calculation per partner agreement rules.' }
    ],
    caseStudy: {
      title: 'Doubling Profit Margins',
      challenge: 'Consultancy had $5M revenue but only 5% net margin.',
      solution: 'Identified high-cost/low-revenue projects via granular reporting.',
      result: 'Pivot to high-margin niche increased net margin to 18% in 12 months.'
    }
  },
  'reconciliation-manufacturing': {
    serviceType: 'Reconciliation Services',
    industryType: 'manufacturing',
    industryName: 'Manufacturing',
    heroHeadline: 'Inventory & Cost Reconciliation for Manufacturers',
    heroSubheading: 'Get control of your COGS, BOMs, and production variances with precision reconciliation.',
    heroImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80',
    serviceDescription: `In manufacturing, profit is made or lost on the shop floor. Small errors in inventory counts or Bill of Materials (BOM) costs compound into massive financial discrepancies. FinxisAI provides specialized reconciliation services to bridge the gap between your ERP/MRP system and your general ledger. We validate inventory balances, analyze production variances, and ensure your Cost of Goods Sold reflects reality.`,
    industryPainPoints: industries.manufacturing.painPoints,
    solutions: [
      { title: 'Three-Way Match', description: 'Verifying PO, Receiver, and Invoice match perfectly.' },
      { title: 'WIP Reconciliation', description: 'Valuing goods currently in production accurately.' },
      { title: 'Inventory Adjustments', description: 'Investigating and clearing cycle count discrepancies.' },
      { title: 'Standard Cost Updates', description: 'Revising standard costs to reflect actual material prices.' },
      { title: 'Scrap & Spoilage', description: 'Tracking waste to identify production inefficiencies.' },
      { title: 'Landed Cost Tracking', description: 'Allocating freight and tariffs to inventory value.' }
    ],
    examples: [
      {
        title: 'The Phantom Inventory',
        description: 'GL showed $1M inventory; warehouse had $700k. A $300k write-off loomed.',
        result: 'We traced the error to unrecorded scrap and receiver errors; process fixed, variance reduced.'
      },
      {
        title: 'The Margin Slide',
        description: 'Raw material costs spiked, but standard costs weren\'t updated.',
        result: 'We implemented a monthly standard cost update process to protect margins.'
      }
    ],
    benefits: [
      { title: 'Accurate Margins', description: 'Price your products based on real costs.' },
      { title: 'Asset Security', description: 'Prevent theft and loss with tight controls.' },
      { title: 'Tax Optimization', description: 'Proper inventory valuation affects taxable income.' },
      { title: 'Production Insight', description: 'Data feedback loop to operations.' },
      { title: 'Cash Management', description: 'Don\'t tie up cash in dead stock.' },
      { title: 'System Trust', description: 'Believe the numbers in your ERP.' }
    ],
    compliance: {
      regulations: ['Uniform Capitalization Rules (UNICAP)', 'GAAP Inventory Standards', 'Sarbanes-Oxley (for public cos)'],
      text: 'Inventory valuation is a top audit risk. We ensure your methods (absorption costing, lower of cost or market) comply with GAAP and tax regulations, specifically Section 263A (UNICAP).'
    },
    implementation: {
      timeline: '4-8 Weeks',
      steps: ['Process Walkthrough', 'Data Extract', 'Reconciliation Model Build', 'Variance Analysis', 'Process Improvement']
    },
    faqs: [
      { question: 'Do you work with NetSuite/SAP?', answer: 'Yes, we have experience with major ERP systems.' },
      { question: 'Can you help with physical counts?', answer: 'We oversee the process and reconcile the tags, but don\'t do the counting.' },
      { question: 'What about overhead allocation?', answer: 'We help design logical allocation bases (machine hours, labor hours).' },
      { question: 'Do you handle assembly builds?', answer: 'Yes, tracking the conversion of raw materials to finished goods is core to our service.' }
    ],
    caseStudy: {
      title: 'Recovering $200k in Variance',
      challenge: 'Manufacturer had a consistent unexplained monthly variance.',
      solution: 'Deep dive reconciliation revealed a BOM error in the flagship product.',
      result: 'Correction saved $200k/year in under-priced product sales.'
    }
  },
  'virtual-cfo-nonprofits': {
    serviceType: 'Virtual CFO Services',
    industryType: 'nonprofit',
    industryName: 'Nonprofits',
    heroHeadline: 'Strategic Finance for Mission-Driven Orgs',
    heroSubheading: 'Sustainable financial planning, grant strategy, and board transparency.',
    heroImage: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80',
    serviceDescription: `Nonprofits face unique financial pressures: reliance on donors, restricted funding, and the need to demonstrate impact efficiency. A standard bookkeeper can't navigate these strategic waters. Our Virtual CFO service brings executive-level financial leadership to your organization. We help you build sustainable budgets, manage cash flow through grant cycles, and present financial narratives that inspire confidence in your board and donors.`,
    industryPainPoints: industries.nonprofit.painPoints,
    solutions: [
      { title: 'Sustainability Modeling', description: 'Forecasting long-term viability beyond current grant cycles.' },
      { title: 'Grant Budgeting', description: 'Strategic budget building to ensure full cost recovery.' },
      { title: 'Cash Flow Management', description: 'Navigating the "lumpy" cash flow of fundraising seasons.' },
      { title: 'Board Presentations', description: 'Translating finance for non-financial board members.' },
      { title: 'Reserve Planning', description: 'Building adequate operating reserves policies.' },
      { title: 'Program ROI', description: 'Measuring the cost-effectiveness of different programs.' }
    ],
    examples: [
      {
        title: 'The Grant Cliff',
        description: 'A major multi-year grant was ending; no plan to replace revenue.',
        result: 'We modeled 3 scenarios, leading the board to launch a successful endowment campaign.'
      },
      {
        title: 'The Indirect Cost Win',
        description: 'Org was not claiming full overhead on federal grants.',
        result: 'We negotiated a higher indirect cost rate, unlocking $50k/year in unrestricted funds.'
      }
    ],
    benefits: [
      { title: 'Financial Stability', description: 'Move from survival mode to strategic growth.' },
      { title: 'Board Confidence', description: 'Reports that answer questions before they are asked.' },
      { title: 'Donor Trust', description: 'Demonstrate fiscal responsibility and impact.' },
      { title: 'Full Cost Recovery', description: 'Stop subsidizing programs with reserves.' },
      { title: 'Compliance Safety', description: 'Navigate federal and state regulations.' },
      { title: 'Executive Partner', description: 'A financial voice at the leadership table.' }
    ],
    compliance: {
      regulations: ['UPMIFA (Endowments)', 'IRS Public Support Test', 'Grantor Restrictions'],
      text: 'We monitor your Public Support Test to ensure you maintain public charity status and comply with UPMIFA standards for endowment management.'
    },
    implementation: {
      timeline: 'First 30 Days',
      steps: ['Financial Assessment', 'Budget Review', 'Dashboard Setup', 'Board Intro', 'Monthly Cycle']
    },
    faqs: [
      { question: 'Do you present to the Board?', answer: 'Yes, we can present quarterly financials remotely.' },
      { question: 'Do you help with the audit?', answer: 'We manage the relationship with the auditor and oversee the process.' },
      { question: 'Can you help write grant budgets?', answer: 'Yes, we ensure budgets are realistic and include all allowable costs.' },
      { question: 'How is this different from a Treasurer?', answer: 'We do the heavy lifting and analysis; the Treasurer provides oversight.' }
    ],
    caseStudy: {
      title: 'Turning Around a Deficit',
      challenge: 'Nonprofit ran a deficit for 3 years, eroding reserves.',
      solution: 'Implemented program-level profitability analysis.',
      result: 'Sunsetted 2 underperforming programs; returned to surplus in 18 months.'
    }
  }
};

export { serviceIndustryData };
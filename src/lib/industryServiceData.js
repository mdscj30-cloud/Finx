import { 
  Rocket, ShoppingCart, Stethoscope, Briefcase, Layers, 
  TrendingUp, ShieldCheck, PieChart, Users, Calculator,
  FileText, Globe, Building2, HardHat, CheckCircle2
} from 'lucide-react';

export const industryServiceData = {
  // --- SaaS Pages ---
  'bookkeeping-saas-companies': {
    title: "Bookkeeping for SaaS Companies | FinxisAI",
    metaDesc: "Specialized bookkeeping for SaaS companies. We track MRR, ARR, and churn while ensuring ASC 606 compliance with AI-driven accuracy and CPA oversight.",
    serviceType: "Bookkeeping",
    industry: "SaaS",
    hero: {
      headline: " specialized Bookkeeping for SaaS Growth",
      subheading: "Track MRR, ARR, and Churn accurately while we handle the daily reconciliation and ASC 606 compliance.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    },
    intro: "Software-as-a-Service (SaaS) businesses operate on a unique financial model where recurring revenue, deferred revenue, and customer acquisition costs (CAC) are the heartbeat of the organization. Standard bookkeeping often fails to capture the nuance of subscription models, leading to skewed metrics and compliance risks. At FinxisAI, we provide specialized bookkeeping that aligns your financial records with SaaS metrics.",
    challenges: [
      { title: "Revenue Recognition", desc: "Correctly amortizing annual contracts over 12 months (ASC 606) rather than booking it all as cash upfront." },
      { title: "Metric Tracking", desc: "Separating new revenue, expansion revenue, and churn in the general ledger." },
      { title: "Expense Categorization", desc: "Distinguishing between COGS (hosting, support) and OPEX (sales, R&D)." }
    ],
    support: "We combine AI automation to handle high-volume transaction matching (Stripe, PayPal, bank feeds) with expert human review to ensure subscription revenue is recognized in the correct period. Our team understands the difference between bookings and revenue, ensuring your P&L reflects reality.",
    workflow: [
      { step: "Data Ingestion", desc: "Connect bank feeds and payment processors (Stripe/Chargebee)." },
      { step: "AI Categorization", desc: "Automated coding of server costs, ad spend, and software subscriptions." },
      { step: "Revenue Rec", desc: "Human adjustment for deferred revenue schedules." },
      { step: "Metric Calculation", desc: "Updating SaaS KPI dashboards (LTV, CAC)." },
      { step: "Final Review", desc: "CPA review of month-end close." }
    ],
    compliance: "For SaaS, GAAP compliance—specifically ASC 606—is critical for valuation. We ensure your books are audit-ready for investors, with clear schedules for deferred revenue and capitalized software development costs where applicable.",
    useCases: [
      { title: "Series A Preparation", desc: "Cleaned up 2 years of cash-basis books to accrual basis for a fintech startup, enabling a successful $10M raise." },
      { title: "Deferred Revenue Fix", desc: "Corrected a $500k revenue overstatement for a B2B SaaS co by implementing proper recognition schedules." }
    ],
    benefits: "By specializing in SaaS, we speak your language. You get more than just tax compliance; you get financial intelligence that helps you manage burn rate and extend runway.",
    faqs: [
      { q: "Do you integrate with Stripe?", a: "Yes, we pull data directly to reconcile gross sales vs. net deposits." },
      { q: "Can you track R&D costs?", a: "Yes, we segregate R&D for tax credit purposes." },
      { q: "Is this accrual accounting?", a: "Yes, we manage the accrual adjustments monthly." }
    ],
    internalLinks: [
      { label: "R&D Tax Credits", path: "/services/tax-preparation" },
      { label: "Virtual CFO for SaaS", path: "/services/virtual-cfo-saas-businesses" }
    ],
    externalLinks: [
      { label: "ASC 606 Guidance", url: "https://www.fasb.org" },
      { label: "SaaS Metrics Guide", url: "https://www.saastr.com" }
    ],
    relatedPages: [
      { title: "Accounting for SaaS Startups", path: "/services/accounting-saas-startups" },
      { title: "Virtual CFO for SaaS", path: "/services/virtual-cfo-saas-businesses" }
    ]
  },
  'accounting-saas-startups': {
    title: "Accounting Services for SaaS Startups | FinxisAI",
    metaDesc: "Scalable accounting for SaaS startups. From seed to scale, we manage burn rate, R&D credits, and investor reporting.",
    serviceType: "Accounting",
    industry: "SaaS",
    hero: {
      headline: "Scalable Accounting for SaaS Startups",
      subheading: "From seed round to exit, we provide the financial infrastructure you need to scale fast and stay compliant.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
    },
    intro: "SaaS startups move fast. You need accounting that keeps pace with your growth while preparing you for due diligence at any moment. We focus on burn rate management, R&D tax credit optimization, and accurate financial reporting for board meetings.",
    challenges: [
      { title: "Cash Burn Management", desc: "Keeping a close eye on runway." },
      { title: "Investor Reporting", desc: "Providing GAAP-compliant financials to VCs." },
      { title: "Global Tax", desc: "Managing sales tax/VAT for digital goods." }
    ],
    support: "Our service creates a solid financial foundation. We set up your chart of accounts to track unit economics, manage your AP to optimize cash flow, and ensure you are maximizing non-dilutive funding like R&D credits.",
    workflow: [
      { step: "Setup", desc: "SaaS-specific Chart of Accounts implementation." },
      { step: "Automated AP", desc: "Bill.com integration for payables." },
      { step: "Payroll Sync", desc: "Mapping engineering salaries for R&D." },
      { step: "Month-End", desc: "Reconciliation and board pack preparation." },
      { step: "Advisory", desc: "Quarterly review of burn and runway." }
    ],
    compliance: "We help you navigate the complex landscape of digital goods taxation (Wayfair decision) and ensure your employee stock option (ESO) expensing is handled correctly.",
    useCases: [
      { title: "Runway Extension", desc: "Identified $40k in unnecessary software spend for a seed-stage startup." },
      { title: "Due Diligence Pass", desc: "Organized 3 years of financials in 2 weeks for an acquisition target." }
    ],
    benefits: "Investors trust our numbers. We provide the clarity you need to make hiring and spending decisions with confidence.",
    faqs: [
      { q: "Do you handle 409A valuations?", a: "We prepare the data needed for the valuation provider." },
      { q: "How fast is onboarding?", a: " typically 1-2 weeks." },
      { q: "Do you support multi-currency?", a: "Yes, for global SaaS sales." }
    ],
    internalLinks: [
      { label: "SaaS Bookkeeping", path: "/services/bookkeeping-saas-companies" },
      { label: "Pricing", path: "/pricing" }
    ],
    externalLinks: [
      { label: "AICPA Startup Guide", url: "https://www.aicpa.org" },
      { label: "IRS R&D Credit", url: "https://www.irs.gov" }
    ],
    relatedPages: [
      { title: "Bookkeeping for SaaS", path: "/services/bookkeeping-saas-companies" },
      { title: "Virtual CFO for SaaS", path: "/services/virtual-cfo-saas-businesses" }
    ]
  },
  'virtual-cfo-saas-businesses': {
    title: "Virtual CFO Services for SaaS Businesses | FinxisAI",
    metaDesc: "Fractional CFO services for growing SaaS companies. Strategic financial modeling, fundraising support, and KPI management.",
    serviceType: "Virtual CFO",
    industry: "SaaS",
    hero: {
      headline: "Strategic CFO Leadership for SaaS",
      subheading: "Drive valuation with expert financial modeling, cohort analysis, and capital strategy.",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80"
    },
    intro: "Scaling a SaaS business requires more than just accurate books; it requires strategic foresight. Our Virtual CFO service helps you model future growth, understand your unit economics (LTV/CAC), and prepare for your next fundraising round.",
    challenges: [
      { title: "Fundraising", desc: "Building convincing financial models for VCs." },
      { title: "Pricing Strategy", desc: "Optimizing tiers for maximum revenue." },
      { title: "Cash Flow Planning", desc: "Managing the lag between booking and cash." }
    ],
    support: "We act as your strategic partner. We build dynamic financial models that allow you to scenario-test decisions (e.g., 'What if we double ad spend?'). We also sit in on board meetings to present financial results.",
    workflow: [
      { step: "Discovery", desc: "Deep dive into business model and goals." },
      { step: "Modeling", desc: "Building a 3-statement financial model." },
      { step: "KPI Dashboard", desc: "Setting up real-time SaaS metrics." },
      { step: "Strategy", desc: "Monthly strategy sessions." },
      { step: "Execution", desc: "Overseeing the finance function." }
    ],
    compliance: "We ensure your financial strategy aligns with long-term compliance goals, including preparing for potential audits or IPO readiness.",
    useCases: [
      { title: "Series B Raise", desc: "Built the model used to secure $25M in funding." },
      { title: "Churn Reduction", desc: "Cohort analysis identified a specific customer segment with high churn, leading to product changes." }
    ],
    benefits: "Get the expertise of a seasoned SaaS CFO at a fraction of the cost. Make data-driven decisions that increase your company's valuation.",
    faqs: [
      { q: "Do you help with pitch decks?", a: "Yes, we help craft the financial narrative." },
      { q: "How often do we meet?", a: "Usually weekly or bi-weekly." },
      { q: "Is this a full-time role?", a: "No, it is a fractional service." }
    ],
    internalLinks: [
      { label: "SaaS Accounting", path: "/services/accounting-saas-startups" },
      { label: "Case Studies", path: "/case-studies" }
    ],
    externalLinks: [
      { label: "SaaS Capital Index", url: "https://www.saas-capital.com" },
      { label: "SEC Reg D", url: "https://www.sec.gov" }
    ],
    relatedPages: [
      { title: "Bookkeeping for SaaS", path: "/services/bookkeeping-saas-companies" },
      { title: "Accounting for Startups", path: "/services/accounting-saas-startups" }
    ]
  },

  // --- E-Commerce Pages ---
  'bookkeeping-ecommerce-businesses': {
    title: "Bookkeeping for E-Commerce Businesses | FinxisAI",
    metaDesc: "Automated bookkeeping for Shopify, Amazon, and WooCommerce sellers. We reconcile sales, fees, and inventory across all channels.",
    serviceType: "Bookkeeping",
    industry: "E-Commerce",
    hero: {
      headline: "Multi-Channel E-Commerce Bookkeeping",
      subheading: "Stop wrestling with spreadsheets. We automate reconciliation for Shopify, Amazon, and Stripe.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=800&q=80"
    },
    intro: "E-commerce bookkeeping is complex due to high transaction volumes, multiple sales channels, and payment processor fees. FinxisAI automates the flow of data from your store to your ledger, ensuring you know your true margins.",
    challenges: [
      { title: "Fee Reconciliation", desc: "Net deposits from Stripe/Amazon don't match gross sales." },
      { title: "Inventory", desc: "Tracking COGS accurately as goods are sold." },
      { title: "Returns", desc: "Handling refunds and restocking correctly." }
    ],
    support: "Our AI-driven system connects directly to your sales channels. We split every deposit to record gross sales, shipping income, sales tax collected, and merchant fees, giving you a clear view of profitability.",
    workflow: [
      { step: "Connect", desc: "Link Shopify, Amazon, Stripe, Bank." },
      { step: "Map", desc: "Map SKUs to revenue accounts." },
      { step: "Automate", desc: "Daily transaction import and matching." },
      { step: "Reconcile", desc: "Verify clearing accounts zero out." },
      { step: "Report", desc: "Monthly P&L by channel." }
    ],
    compliance: "We ensure accurate recording of sales tax collected vs. remitted, a key area of risk for e-sellers.",
    useCases: [
      { title: "Margin Clarity", desc: "Revealed that a top-selling product was actually losing money after ad spend and fees." },
      { title: "Audit Defense", desc: "Provided clean records for a sales tax audit." }
    ],
    benefits: "Save 20+ hours a month on data entry. Know your true profit per order.",
    faqs: [
      { q: "Do you support Amazon FBA?", a: "Yes, including settlement report parsing." },
      { q: "What about inventory counting?", a: "We reconcile your IMS values to the GL." },
      { q: "Do you handle foreign currency?", a: "Yes." }
    ],
    internalLinks: [
      { label: "Sales Tax Services", path: "/services/sales-tax-ecommerce" },
      { label: "Virtual CFO", path: "/services/virtual-cfo-ecommerce-brands" }
    ],
    externalLinks: [
      { label: "Shopify Guides", url: "https://www.shopify.com" },
      { label: "Amazon Seller Central", url: "https://sellercentral.amazon.com" }
    ],
    relatedPages: [
      { title: "Sales Tax for E-Commerce", path: "/services/sales-tax-ecommerce" },
      { title: "Virtual CFO for Brands", path: "/services/virtual-cfo-ecommerce-brands" }
    ]
  },
  'accounting-online-stores': {
    title: "Accounting Services for Online Stores | FinxisAI",
    metaDesc: "Comprehensive accounting for DTC brands and online retailers. Inventory management, COGS analysis, and profit optimization.",
    serviceType: "Accounting",
    industry: "E-Commerce",
    hero: {
      headline: "Growth Accounting for DTC Brands",
      subheading: "Move beyond basic bookkeeping. Get strategic accounting that optimizes inventory and cash flow.",
      image: "https://images.unsplash.com/photo-1472851294608-41551cb68409?auto=format&fit=crop&w=800&q=80"
    },
    intro: "Online stores face cash crunches due to inventory outlays. Our accounting services focus on inventory management, landed cost calculations, and cash flow timing to ensure you can fund your next PO.",
    challenges: [
      { title: "Inventory Cash Trap", desc: "Cash tied up in slow-moving stock." },
      { title: "Landed Costs", desc: "Calculating freight and tariffs into COGS." },
      { title: "Ad Spend", desc: "Tracking ROAS and marketing efficiency." }
    ],
    support: "We implement accrual accounting to match revenue with the COGS of items sold in the same month. This gives you a true gross margin view, essential for making ad spend decisions.",
    workflow: [
      { step: "Assess", desc: "Review inventory systems." },
      { step: "Implement", desc: "Set up landed cost tracking." },
      { step: "Monitor", desc: "Weekly cash flow check." },
      { step: "Adjust", desc: "Monthly inventory valuation adjustment." },
      { step: "Plan", desc: "Quarterly tax planning." }
    ],
    compliance: "We manage the complexities of inventory valuation methods (FIFO/Weighted Average) required by the IRS.",
    useCases: [
      { title: "Profit Boost", desc: "Identified $15k in unrecorded freight costs, correcting pricing strategy." },
      { title: "Funding Secured", desc: "Prepared financials for inventory financing approval." }
    ],
    benefits: "Make buying decisions based on data. Optimize your inventory turnover.",
    faqs: [
      { q: "Do you work with inventory software?", a: "Yes, like Cin7, Dear, etc." },
      { q: "Can you help with loans?", a: "We prepare the reports lenders need." },
      { q: "Is this monthly?", a: "Yes, a monthly subscription." }
    ],
    internalLinks: [
      { label: "E-Commerce Bookkeeping", path: "/services/bookkeeping-ecommerce-businesses" },
      { label: "Contact Us", path: "/contact" }
    ],
    externalLinks: [
      { label: "IRS Inventory Guide", url: "https://www.irs.gov" },
      { label: "GAAP Inventory", url: "https://www.fasb.org" }
    ],
    relatedPages: [
      { title: "Bookkeeping for E-Com", path: "/services/bookkeeping-ecommerce-businesses" },
      { title: "Virtual CFO for E-Com", path: "/services/virtual-cfo-ecommerce-brands" }
    ]
  },
  'sales-tax-ecommerce': {
    title: "Sales Tax & Compliance for E-Commerce | FinxisAI",
    metaDesc: "Navigate economic nexus laws with ease. We handle sales tax registration, calculation, and filing for multi-state sellers.",
    serviceType: "Tax & Compliance",
    industry: "E-Commerce",
    hero: {
      headline: "Solve the Sales Tax Puzzle",
      subheading: "Don't let Nexus laws slow you down. We manage registration and filing across all 50 states.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80"
    },
    intro: "Since the Wayfair decision, e-commerce sellers must track sales thresholds in every state. It is a compliance minefield. FinxisAI provides automated sales tax compliance services to keep you safe.",
    challenges: [
      { title: "Nexus Tracking", desc: "Monitoring 50 different economic thresholds." },
      { title: "Marketplace Facilitators", desc: "Knowing when Amazon collects vs. when you do." },
      { title: "Filing Frequency", desc: "Managing monthly, quarterly, and annual deadlines." }
    ],
    support: "We perform a nexus study to see where you owe. Then, we integrate with tools like TaxJar or Avalara to automate the calculation and filing, overseen by our tax experts.",
    workflow: [
      { step: "Nexus Study", desc: "Analyze sales data by state." },
      { step: "Register", desc: "File permits in required states." },
      { step: "Configure", desc: "Set up tax engines in Shopify/Amazon." },
      { step: "File", desc: "Automated monthly remittance." },
      { step: "Monitor", desc: "Ongoing threshold alerts." }
    ],
    compliance: "Strict adherence to state and local tax laws to avoid penalties and interest.",
    useCases: [
      { title: "Audit Avoidance", desc: "Proactively registered a client in 5 states before they received nexus notices." },
      { title: "Refund Recovery", desc: "Found $5k in overpaid sales tax due to platform errors." }
    ],
    benefits: "Sleep soundly knowing you aren't accruing hidden tax liabilities.",
    faqs: [
      { q: "Do I need to file in every state?", a: "Only where you have physical presence or economic nexus." },
      { q: "Does Shopify handle this?", a: "They calculate it, but you must register and remit it." },
      { q: "What is economic nexus?", a: "Tax obligation based on sales volume ($) or transaction count." }
    ],
    internalLinks: [
      { label: "E-Commerce Accounting", path: "/services/accounting-online-stores" },
      { label: "Tax Prep", path: "/services/tax-preparation" }
    ],
    externalLinks: [
      { label: "Sales Tax Institute", url: "https://www.salestaxinstitute.com" },
      { label: "MTC Guidelines", url: "https://www.mtc.gov" }
    ],
    relatedPages: [
      { title: "Bookkeeping for E-Com", path: "/services/bookkeeping-ecommerce-businesses" },
      { title: "Accounting for Online Stores", path: "/services/accounting-online-stores" }
    ]
  },
  'virtual-cfo-ecommerce-brands': {
    title: "Virtual CFO Services for E-Commerce Brands | FinxisAI",
    metaDesc: "Fractional CFO services for high-growth e-commerce brands. Inventory planning, cash flow forecasting, and exit strategy.",
    serviceType: "Virtual CFO",
    industry: "E-Commerce",
    hero: {
      headline: "Strategic Finance for Scaling Brands",
      subheading: "Master your cash conversion cycle and plan inventory buys with precision.",
      image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=800&q=80"
    },
    intro: "Scaling a brand requires capital. Our Virtual CFOs help you manage that capital, negotiate vendor terms, and optimize your marketing spend (MER) for profitable growth.",
    challenges: [
      { title: "Cash Conversion Cycle", desc: "Bridging the gap between paying suppliers and getting paid." },
      { title: "Inventory Forecasting", desc: "Avoiding stockouts and overstock." },
      { title: "Profitability", desc: "Ensuring growth doesn't come at the cost of margins." }
    ],
    support: "We build a comprehensive financial model that links your inventory planning with your cash flow forecast. We advise on pricing, channel expansion, and financing options.",
    workflow: [
      { step: "Audit", desc: "Review current financial health." },
      { step: "Forecast", desc: "Build 13-week cash flow model." },
      { step: "Plan", desc: "Open-to-buy inventory planning." },
      { step: "Review", desc: "Monthly performance deep dive." },
      { step: "Optimize", desc: "Ongoing margin analysis." }
    ],
    compliance: "We ensure your financial strategy is compliant with lender covenants and investor requirements.",
    useCases: [
      { title: "Inventory Financing", desc: "Helped a client secure a $500k line of credit." },
      { title: "Exit Prep", desc: "Cleaned up financials to maximize valuation multiple for sale." }
    ],
    benefits: "Grow faster with less risk. Have a financial expert in your corner.",
    faqs: [
      { q: "Do you help with financing?", a: "Yes, we introduce you to partners." },
      { q: "Can you help with wholesale?", a: "Yes, we support B2B channels." },
      { q: "What revenue size is best?", a: "$1M - $50M annual revenue." }
    ],
    internalLinks: [
      { label: "E-Commerce Bookkeeping", path: "/services/bookkeeping-ecommerce-businesses" },
      { label: "About Us", path: "/about" }
    ],
    externalLinks: [
      { label: "Shopify Capital", url: "https://www.shopify.com/capital" },
      { label: "Clearco", url: "https://clear.co" }
    ],
    relatedPages: [
      { title: "Accounting for Online Stores", path: "/services/accounting-online-stores" },
      { title: "Sales Tax Services", path: "/services/sales-tax-ecommerce" }
    ]
  },

  // --- Healthcare Pages ---
  'bookkeeping-healthcare-practices': {
    title: "Bookkeeping for Healthcare Practices | FinxisAI",
    metaDesc: "HIPAA-compliant bookkeeping for medical and dental practices. Track revenue by provider and manage expenses with precision.",
    serviceType: "Bookkeeping",
    industry: "Healthcare",
    hero: {
      headline: "HIPAA-Compliant Medical Bookkeeping",
      subheading: "Secure, accurate financial records for private practices. Focus on patients, not paperwork.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
    },
    intro: "Medical practices deal with complex revenue cycles—insurance deposits, co-pays, and patient billing. FinxisAI provides specialized bookkeeping that ensures every dollar is accounted for while maintaining strict patient privacy.",
    challenges: [
      { title: "Revenue Reconciliation", desc: "Matching bulk insurance deposits to individual patient claims." },
      { title: "Expense Tracking", desc: "Tracking medical supplies vs. office expenses." },
      { title: "Security", desc: "Ensuring financial data handling meets HIPAA standards." }
    ],
    support: "We use HIPAA-compliant workflows to reconcile your bank deposits with your Practice Management Software (PMS) reports. We track revenue by provider to assist with compensation calculations.",
    workflow: [
      { step: "Secure Link", desc: "Connect bank and PMS (aggregate data)." },
      { step: "Match", desc: "Reconcile daily deposits." },
      { step: "Categorize", desc: "Code expenses to uniform system of accounts." },
      { step: "Provider Split", desc: "Track collections by doctor." },
      { step: "Review", desc: "Monthly financial health check." }
    ],
    compliance: "Our systems and staff protocols are designed to protect PHI, even though we primarily deal with financial data.",
    useCases: [
      { title: "Embezzlement Detection", desc: "Tight reconciliation controls caught a front-desk theft scheme." },
      { title: "Profit per Chair", desc: "Analysis revealed which dental hygienist was most profitable." }
    ],
    benefits: "Reduce administrative burden. Gain visibility into practice profitability.",
    faqs: [
      { q: "Is this HIPAA compliant?", a: "Yes, we sign a BAA." },
      { q: "Do you integrate with Dentrix/Epic?", a: "We work with reports from these systems." },
      { q: "Do you handle payroll?", a: "Yes, see our payroll service." }
    ],
    internalLinks: [
      { label: "Healthcare Payroll", path: "/services/payroll-healthcare-providers" },
      { label: "Accounting for Clinics", path: "/services/accounting-medical-dental-clinics" }
    ],
    externalLinks: [
      { label: "HHS HIPAA Guide", url: "https://www.hhs.gov" },
      { label: "MGMA Resources", url: "https://www.mgma.com" }
    ],
    relatedPages: [
      { title: "Accounting for Clinics", path: "/services/accounting-medical-dental-clinics" },
      { title: "Payroll for Providers", path: "/services/payroll-healthcare-providers" }
    ]
  },
  'accounting-medical-dental-clinics': {
    title: "Accounting Services for Medical & Dental Clinics | FinxisAI",
    metaDesc: "Specialized accounting for multi-location clinics. Consolidate financials, manage fixed assets, and optimize tax strategy.",
    serviceType: "Accounting",
    industry: "Healthcare",
    hero: {
      headline: "Accounting for Growing Clinics",
      subheading: "Scale your practice with multi-location financial management and expert tax strategy.",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
    },
    intro: "As practices grow to multiple locations or add partners, accounting complexity explodes. We provide the structure needed to manage consolidated financials, partner distributions, and sophisticated tax planning.",
    challenges: [
      { title: "Multi-Entity", desc: "Consolidating books for multiple locations." },
      { title: "Fixed Assets", desc: "Depreciating expensive medical equipment." },
      { title: "Partner Comp", desc: "Calculating complex profit-sharing distributions." }
    ],
    support: "We act as your controller. We manage the month-end close for all locations, producing a consolidated P&L that allows you to compare performance across clinics.",
    workflow: [
      { step: "Structure", desc: "Set up location/class tracking." },
      { step: "Assets", desc: "Maintain fixed asset register." },
      { step: "Close", desc: " rigorous month-end close." },
      { step: "Report", desc: "Comparative clinic analysis." },
      { step: "Advise", desc: "Quarterly partner meeting." }
    ],
    compliance: "We ensure compliance with Stark Law and Anti-Kickback statutes regarding financial relationships.",
    useCases: [
      { title: "Expansion Analysis", desc: "Modeled the ROI of opening a 3rd location." },
      { title: "Tax Savings", desc: "Utilized cost segregation to accelerate depreciation on a new building." }
    ],
    benefits: "Make data-driven decisions about expansion and equipment purchases.",
    faqs: [
      { q: "Can you handle MSO structures?", a: "Yes, we specialize in MSO accounting." },
      { q: "Do you advise on buy-ins?", a: "Yes, we value the practice for new partners." },
      { q: "How do you handle equipment loans?", a: "We amortize them correctly." }
    ],
    internalLinks: [
      { label: "Healthcare Bookkeeping", path: "/services/bookkeeping-healthcare-practices" },
      { label: "Tax Preparation", path: "/services/tax-preparation" }
    ],
    externalLinks: [
      { label: "ADA Financial Guide", url: "https://www.ada.org" },
      { label: "AMA Practice Management", url: "https://www.ama-assn.org" }
    ],
    relatedPages: [
      { title: "Bookkeeping for Practices", path: "/services/bookkeeping-healthcare-practices" },
      { title: "Payroll for Providers", path: "/services/payroll-healthcare-providers" }
    ]
  },
  'payroll-healthcare-providers': {
    title: "Payroll Services for Healthcare Providers | FinxisAI",
    metaDesc: "Accurate payroll for doctors, nurses, and staff. We handle shift differentials, bonuses, and locum tenens payments.",
    serviceType: "Payroll",
    industry: "Healthcare",
    hero: {
      headline: "Error-Free Healthcare Payroll",
      subheading: "Manage complex shifts, production bonuses, and multiple tax jurisdictions with ease.",
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80"
    },
    intro: "Healthcare payroll is notorious for errors due to complex pay structures. FinxisAI automates the process, ensuring your staff is paid correctly and on time, boosting morale and retention.",
    challenges: [
      { title: "Complex Pay", desc: "Shift differentials, overtime, and on-call pay." },
      { title: "Bonuses", desc: "Production-based compensation for providers." },
      { title: "Contractors", desc: "Managing 1099 locums vs. W-2 staff." }
    ],
    support: "We integrate with your scheduling software to pull hours automatically. We calculate production bonuses based on collection data and handle all tax filings.",
    workflow: [
      { step: "Import", desc: "Pull time data from scheduler." },
      { step: "Calculate", desc: "Apply shift rules and bonuses." },
      { step: "Approve", desc: "Manager review portal." },
      { step: "Pay", desc: "Direct deposit and tax remittance." },
      { step: "File", desc: "Quarterly and annual tax forms." }
    ],
    compliance: "We help you avoid DOL audits by ensuring overtime is calculated correctly according to FLSA rules.",
    useCases: [
      { title: "Overtime Fix", desc: "Corrected a blended rate overtime error saving the clinic from a lawsuit." },
      { title: "Time Savings", desc: "Reduced payroll processing time from 2 days to 2 hours." }
    ],
    benefits: "Retain your best staff with reliable pay. Reduce administrative headaches.",
    faqs: [
      { q: "Do you handle 401k deductions?", a: "Yes, and remittance." },
      { q: "Can employees access stubs?", a: "Yes, via mobile app." },
      { q: "Do you support multi-state?", a: "Yes." }
    ],
    internalLinks: [
      { label: "Healthcare Accounting", path: "/services/accounting-medical-dental-clinics" },
      { label: "Contact Us", path: "/contact" }
    ],
    externalLinks: [
      { label: "DOL FLSA Guide", url: "https://www.dol.gov" },
      { label: "IRS Payroll Tax", url: "https://www.irs.gov" }
    ],
    relatedPages: [
      { title: "Bookkeeping for Practices", path: "/services/bookkeeping-healthcare-practices" },
      { title: "Accounting for Clinics", path: "/services/accounting-medical-dental-clinics" }
    ]
  },

  // --- Agency Pages ---
  'bookkeeping-marketing-creative-agencies': {
    title: "Bookkeeping for Marketing & Creative Agencies | FinxisAI",
    metaDesc: "Track project costs and retainer profitability. Bookkeeping designed for the fast-paced agency world.",
    serviceType: "Bookkeeping",
    industry: "Agencies",
    hero: {
      headline: "Bookkeeping Built for Agencies",
      subheading: "Know which clients are profitable. Track project costs and retainers with precision.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80"
    },
    intro: "Agencies live and die by cash flow and margins. If you don't track expenses by client, you don't know who is making you money. FinxisAI provides project-based bookkeeping to give you that clarity.",
    challenges: [
      { title: "Client Profitability", desc: "Allocating software and contractor costs to specific clients." },
      { title: "Retainer Management", desc: "Tracking usage against monthly retainers." },
      { title: "Pass-Throughs", desc: "Managing ad spend reimbursement." }
    ],
    support: "We set up your books to track revenue and expenses by 'Customer/Project'. This allows us to produce Profit & Loss statements for every single client you serve.",
    workflow: [
      { step: "Integrate", desc: "Connect bank and expense tools." },
      { step: "Tag", desc: "Tag every expense to a client." },
      { step: "Reconcile", desc: "Match retainers to invoices." },
      { step: "Report", desc: "Client profitability dashboard." },
      { step: "Review", desc: "Monthly variance analysis." }
    ],
    compliance: "We ensure 1099 compliance for your army of freelancers and contractors.",
    useCases: [
      { title: "Firing Clients", desc: "Data showed the biggest client was the least profitable; agency resigned the account and profits went up." },
      { title: "Freelancer Control", desc: " centralized contractor payments." }
    ],
    benefits: "Stop subsidizing unprofitable clients. Price your services with confidence.",
    faqs: [
      { q: "Do you integrate with Harvest?", a: "Yes, for time tracking cost allocation." },
      { q: "How do you handle media spend?", a: "We separate it from agency revenue." },
      { q: "Can you track by department?", a: "Yes (e.g., Creative vs. Media)." }
    ],
    internalLinks: [
      { label: "Agency Accounting", path: "/services/accounting-digital-agencies" },
      { label: "Virtual CFO", path: "/services/virtual-cfo-agencies" }
    ],
    externalLinks: [
      { label: "4A's Agency Finance", url: "https://www.aaaa.org" },
      { label: "HubSpot Agency Guide", url: "https://www.hubspot.com" }
    ],
    relatedPages: [
      { title: "Accounting for Digital Agencies", path: "/services/accounting-digital-agencies" },
      { title: "Virtual CFO for Agencies", path: "/services/virtual-cfo-agencies" }
    ]
  },
  'accounting-digital-agencies': {
    title: "Accounting Services for Digital Agencies | FinxisAI",
    metaDesc: "Strategic accounting for digital agencies. WIP reporting, utilization tracking, and cash flow management.",
    serviceType: "Accounting",
    industry: "Agencies",
    hero: {
      headline: "Scale Your Agency Profitably",
      subheading: "Move from chaos to clarity with agency-specific accounting and KPI tracking.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
    },
    intro: "As agencies scale, 'cash in bank' is no longer a good metric. You need to understand utilization, realization rates, and Work In Progress (WIP). Our accounting service provides the management reporting you need to scale operations.",
    challenges: [
      { title: "Utilization", desc: "Are staff billable enough?" },
      { title: "Revenue Rec", desc: "Matching revenue to the month work is done." },
      { title: "Cash Flow", desc: "Managing slow-paying clients." }
    ],
    support: "We implement accrual accounting and WIP adjustments to show true monthly performance. We also track non-financial KPIs like employee utilization.",
    workflow: [
      { step: "Benchmark", desc: "Set utilization targets." },
      { step: "Track", desc: "Monitor billable hours." },
      { step: "Accrue", desc: "Recognize revenue based on % complete." },
      { step: "Report", desc: "Agency health dashboard." },
      { step: "Optimize", desc: "Resource planning advice." }
    ],
    compliance: "We ensure you are compliant with state sales tax on digital services where applicable.",
    useCases: [
      { title: "Utilization Boost", desc: "Raised billable utilization from 60% to 75%, adding $200k profit." },
      { title: "Cash Fix", desc: "Implemented tighter AR terms reducing DSO by 15 days." }
    ],
    benefits: "Run your agency by the numbers. Improve margins and cash flow.",
    faqs: [
      { q: "Do you help with forecasting?", a: "Yes, revenue forecasting is key." },
      { q: "Can you help price projects?", a: "We provide cost data to inform pricing." },
      { q: "Do you handle payroll?", a: "Yes." }
    ],
    internalLinks: [
      { label: "Agency Bookkeeping", path: "/services/bookkeeping-marketing-creative-agencies" },
      { label: "Pricing", path: "/pricing" }
    ],
    externalLinks: [
      { label: "Bureau of Digital", url: "https://bureauofdigital.com" },
      { label: "Promethean Research", url: "https://prometheanresearch.com" }
    ],
    relatedPages: [
      { title: "Bookkeeping for Agencies", path: "/services/bookkeeping-marketing-creative-agencies" },
      { title: "Virtual CFO for Agencies", path: "/services/virtual-cfo-agencies" }
    ]
  },
  'virtual-cfo-agencies': {
    title: "Virtual CFO Services for Agencies | FinxisAI",
    metaDesc: "Fractional CFO for marketing agencies. Improve margins, plan for growth, and prepare for exit.",
    serviceType: "Virtual CFO",
    industry: "Agencies",
    hero: {
      headline: "Strategic Finance for Agency Owners",
      subheading: "Break through revenue plateaus with expert financial guidance and forecasting.",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80"
    },
    intro: "Many agencies hit a revenue ceiling. Breaking through requires strategic investment and financial discipline. Our Virtual CFOs partner with agency owners to plan for growth, acquisitions, or exit.",
    challenges: [
      { title: "Scaling Pains", desc: "Growing revenue but shrinking margins." },
      { title: "Staffing", desc: "Knowing when to hire ahead of the curve." },
      { title: "Exit Strategy", desc: "Building value for a future sale." }
    ],
    support: "We build a hiring forecast model that tells you exactly when to add staff based on pipeline. We optimize your rate card and service mix for maximum profitability.",
    workflow: [
      { step: "Analyze", desc: "Review service lines and margins." },
      { step: "Model", desc: "Build growth forecast." },
      { step: "Plan", desc: "Staffing capacity planning." },
      { step: "Measure", desc: "Monthly KPI review." },
      { step: "Guide", desc: "Strategic advisory." }
    ],
    compliance: "We ensure your incentive compensation plans are structured effectively and compliantly.",
    useCases: [
      { title: "Profit Turnaround", desc: "Turned a break-even agency into a 20% EBITDA business in 18 months." },
      { title: "Acquisition", desc: "Guided an agency through due diligence for a sale to a larger holding company." }
    ],
    benefits: "Build an agency that is valuable, scalable, and less dependent on the founder.",
    faqs: [
      { q: "Do you help with M&A?", a: "Yes, buy-side and sell-side." },
      { q: "How much does it cost?", a: "Flat monthly fee based on complexity." },
      { q: "Is this weekly?", a: "Typically bi-weekly or monthly meetings." }
    ],
    internalLinks: [
      { label: "Agency Accounting", path: "/services/accounting-digital-agencies" },
      { label: "Contact", path: "/contact" }
    ],
    externalLinks: [
      { label: "Agency Management Institute", url: "https://agencymanagementinstitute.com" },
      { label: "SoDA Report", url: "https://sodareport.com" }
    ],
    relatedPages: [
      { title: "Accounting for Agencies", path: "/services/accounting-digital-agencies" },
      { title: "Bookkeeping for Agencies", path: "/services/bookkeeping-marketing-creative-agencies" }
    ]
  },

  // --- Professional Services ---
  'bookkeeping-professional-services': {
    title: "Bookkeeping for Professional Services Firms | FinxisAI",
    metaDesc: "Reliable bookkeeping for consultants, lawyers, and architects. Track billable hours and expenses accurately.",
    serviceType: "Bookkeeping",
    industry: "Professional Services",
    hero: {
      headline: "Precision Bookkeeping for Professionals",
      subheading: "Lawyers, Architects, Consultants: Keep your books compliant and your billing accurate.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
    },
    intro: "Professional services firms sell expertise. Your inventory is time. We ensure your financial records reflect the value you deliver, tracking reimbursable expenses and trust accounts with absolute precision.",
    challenges: [
      { title: "Trust Accounting", desc: "Strict rules for handling client funds (IOLTA)." },
      { title: "Reimbursables", desc: "Capturing costs to bill back to clients." },
      { title: "Partner Draws", desc: "Tracking equity distributions." }
    ],
    support: "We use specialized workflows to manage trust accounts, ensuring 3-way reconciliation (Bank = Book = Client Ledgers). We also ensure all billable expenses are captured.",
    workflow: [
      { step: "Sync", desc: "Connect practice management software." },
      { step: "Separate", desc: "Keep operating and trust funds distinct." },
      { step: "Track", desc: "Log billable expenses." },
      { step: "Reconcile", desc: "Monthly 3-way trust reconciliation." },
      { step: "Report", desc: "Partner equity reports." }
    ],
    compliance: "For lawyers, trust account non-compliance can mean disbarment. We take this compliance zero-seriously.",
    useCases: [
      { title: "Audit Ready", desc: "Helped a law firm pass a state bar audit with zero findings." },
      { title: "Expense Recovery", desc: "Found $20k in unbilled client expenses." }
    ],
    benefits: "Protect your license. Maximize your billable revenue.",
    faqs: [
      { q: "Do you know IOLTA rules?", a: "Yes, strictly." },
      { q: "Do you work with Clio?", a: "Yes, and MyCase/PracticePanther." },
      { q: "Can you track by partner?", a: "Yes, for comp formulas." }
    ],
    internalLinks: [
      { label: "Accounting for Startups", path: "/services/accounting-startups" },
      { label: "Tax Prep", path: "/services/tax-preparation" }
    ],
    externalLinks: [
      { label: "ABA Trust Guide", url: "https://www.americanbar.org" },
      { label: "AIA Practice Guide", url: "https://www.aia.org" }
    ],
    relatedPages: [
      { title: "Accounting for Startups", path: "/services/accounting-startups" },
      { title: "Tax Preparation", path: "/services/tax-preparation" }
    ]
  },
  'accounting-startups': {
    title: "Accounting Services for Startups | FinxisAI",
    metaDesc: "Flexible accounting for early-stage startups. Scalable solutions from pre-revenue to Series A.",
    serviceType: "Accounting",
    industry: "Professional Services",
    hero: {
      headline: "Accounting Foundation for Startups",
      subheading: "Get set up right from Day 1. Scalable financial systems for high-growth potential.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80"
    },
    intro: "Startups need to be lean but compliant. Bad accounting in the early days creates 'technical debt' that kills deals later. We provide a right-sized accounting solution that grows with you.",
    challenges: [
      { title: "Setup", desc: "Choosing the right entity and software stack." },
      { title: "Cash", desc: "Managing burn with limited resources." },
      { title: "Compliance", desc: "Payroll registration and sales tax." }
    ],
    support: "We set up your tech stack (QBO, Gusto, Brex) and establish best practices for expense management. As you grow, we add layers of reporting and control.",
    workflow: [
      { step: "Implement", desc: "Tech stack setup." },
      { step: "Process", desc: "Weekly transaction categorization." },
      { step: "Pay", desc: "Payroll and contractor management." },
      { step: "Close", desc: "Monthly bank rec." },
      { step: "Scale", desc: "Add services as needed." }
    ],
    compliance: "We ensure you register for payroll taxes in every state you hire remote talent.",
    useCases: [
      { title: "Clean Cap Table", desc: "Maintained clean records for a convertible note round." },
      { title: "Tax Savings", desc: "Elected S-Corp status at the right time to save on self-employment tax." }
    ],
    benefits: "Focus on product and sales. Let us build the back office.",
    faqs: [
      { q: "Is this expensive?", a: "We have startup-friendly tiers." },
      { q: "Do you help with incorporation?", a: "Yes, via partners." },
      { q: "Can I switch to you from Excel?", a: "Yes, we migrate you." }
    ],
    internalLinks: [
      { label: "SaaS Accounting", path: "/services/accounting-saas-startups" },
      { label: "Pricing", path: "/pricing" }
    ],
    externalLinks: [
      { label: "Y Combinator Finance", url: "https://www.ycombinator.com/library" },
      { label: "IRS Startup Center", url: "https://www.irs.gov/businesses/small-businesses-self-employed/starting-a-business" }
    ],
    relatedPages: [
      { title: "SaaS Accounting", path: "/services/accounting-saas-startups" },
      { title: "Bookkeeping for Pros", path: "/services/bookkeeping-professional-services" }
    ]
  }
};
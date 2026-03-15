export const regions = {
  Northeast: ["Connecticut", "Maine", "Massachusetts", "New Hampshire", "Rhode Island", "Vermont", "New Jersey", "New York", "Pennsylvania"],
  Midwest: ["Illinois", "Indiana", "Michigan", "Ohio", "Wisconsin", "Iowa", "Kansas", "Minnesota", "Missouri", "Nebraska", "North Dakota", "South Dakota"],
  South: ["Delaware", "Florida", "Georgia", "Maryland", "North Carolina", "South Carolina", "Virginia", "District of Columbia", "West Virginia", "Alabama", "Kentucky", "Mississippi", "Tennessee", "Arkansas", "Louisiana", "Oklahoma", "Texas"],
  West: ["Arizona", "Colorado", "Idaho", "Montana", "Nevada", "New Mexico", "Utah", "Wyoming", "Alaska", "California", "Hawaii", "Oregon", "Washington"]
};

export const services = [
  { slug: "bookkeeping", name: "Bookkeeping", icon: "Calculator" },
  { slug: "accounting", name: "Accounting", icon: "TrendingUp" },
  { slug: "tax-preparation", name: "Tax Preparation", icon: "FileText" },
  { slug: "payroll", name: "Payroll", icon: "Users" },
  { slug: "virtual-cfo", name: "Virtual CFO", icon: "Briefcase" }
];

export const usStates = [
  { name: "Alabama", slug: "alabama", region: "South", taxBody: "Alabama Department of Revenue", taxName: "Business Privilege Tax" },
  { name: "Alaska", slug: "alaska", region: "West", taxBody: "Alaska Department of Revenue", taxName: "Corporate Income Tax" },
  { name: "Arizona", slug: "arizona", region: "West", taxBody: "Arizona Department of Revenue", taxName: "Transaction Privilege Tax" },
  { name: "Arkansas", slug: "arkansas", region: "South", taxBody: "Arkansas Dept of Finance", taxName: "Franchise Tax" },
  { name: "California", slug: "california", region: "West", taxBody: "Franchise Tax Board", taxName: "Franchise Tax" },
  { name: "Colorado", slug: "colorado", region: "West", taxBody: "Colorado Department of Revenue", taxName: "State Income Tax" },
  { name: "Connecticut", slug: "connecticut", region: "Northeast", taxBody: "Department of Revenue Services", taxName: "Corporation Business Tax" },
  { name: "Delaware", slug: "delaware", region: "South", taxBody: "Division of Revenue", taxName: "Franchise Tax" },
  { name: "Florida", slug: "florida", region: "South", taxBody: "Florida Department of Revenue", taxName: "Sales and Use Tax" },
  { name: "Georgia", slug: "georgia", region: "South", taxBody: "Georgia Department of Revenue", taxName: "Net Worth Tax" },
  { name: "Hawaii", slug: "hawaii", region: "West", taxBody: "Department of Taxation", taxName: "General Excise Tax" },
  { name: "Idaho", slug: "idaho", region: "West", taxBody: "Idaho State Tax Commission", taxName: "Income Tax" },
  { name: "Illinois", slug: "illinois", region: "Midwest", taxBody: "Illinois Department of Revenue", taxName: "Replacement Tax" },
  { name: "Indiana", slug: "indiana", region: "Midwest", taxBody: "Department of Revenue", taxName: "Adjusted Gross Income Tax" },
  { name: "Iowa", slug: "iowa", region: "Midwest", taxBody: "Iowa Department of Revenue", taxName: "Corporate Income Tax" },
  { name: "Kansas", slug: "kansas", region: "Midwest", taxBody: "Kansas Department of Revenue", taxName: "Income Tax" },
  { name: "Kentucky", slug: "kentucky", region: "South", taxBody: "Department of Revenue", taxName: "Limited Liability Entity Tax" },
  { name: "Louisiana", slug: "louisiana", region: "South", taxBody: "Department of Revenue", taxName: "Corporation Franchise Tax" },
  { name: "Maine", slug: "maine", region: "Northeast", taxBody: "Maine Revenue Services", taxName: "Corporate Income Tax" },
  { name: "Maryland", slug: "maryland", region: "South", taxBody: "Comptroller of Maryland", taxName: "Corporate Income Tax" },
  { name: "Massachusetts", slug: "massachusetts", region: "Northeast", taxBody: "Department of Revenue", taxName: "Corporate Excise Tax" },
  { name: "Michigan", slug: "michigan", region: "Midwest", taxBody: "Department of Treasury", taxName: "Corporate Income Tax" },
  { name: "Minnesota", slug: "minnesota", region: "Midwest", taxBody: "Department of Revenue", taxName: "Corporate Franchise Tax" },
  { name: "Mississippi", slug: "mississippi", region: "South", taxBody: "Department of Revenue", taxName: "Franchise Tax" },
  { name: "Missouri", slug: "missouri", region: "Midwest", taxBody: "Department of Revenue", taxName: "Corporate Income Tax" },
  { name: "Montana", slug: "montana", region: "West", taxBody: "Department of Revenue", taxName: "Corporate Income Tax" },
  { name: "Nebraska", slug: "nebraska", region: "Midwest", taxBody: "Department of Revenue", taxName: "Corporate Income Tax" },
  { name: "Nevada", slug: "nevada", region: "West", taxBody: "Department of Taxation", taxName: "Commerce Tax" },
  { name: "New Hampshire", slug: "new-hampshire", region: "Northeast", taxBody: "Department of Revenue Administration", taxName: "Business Profits Tax" },
  { name: "New Jersey", slug: "new-jersey", region: "Northeast", taxBody: "Division of Taxation", taxName: "Corporation Business Tax" },
  { name: "New Mexico", slug: "new-mexico", region: "West", taxBody: "Taxation and Revenue Department", taxName: "Gross Receipts Tax" },
  { name: "New York", slug: "new-york", region: "Northeast", taxBody: "Department of Taxation and Finance", taxName: "Corporation Franchise Tax" },
  { name: "North Carolina", slug: "north-carolina", region: "South", taxBody: "Department of Revenue", taxName: "Franchise Tax" },
  { name: "North Dakota", slug: "north-dakota", region: "Midwest", taxBody: "Office of State Tax Commissioner", taxName: "Corporate Income Tax" },
  { name: "Ohio", slug: "ohio", region: "Midwest", taxBody: "Department of Taxation", taxName: "Commercial Activity Tax (CAT)" },
  { name: "Oklahoma", slug: "oklahoma", region: "South", taxBody: "Tax Commission", taxName: "Franchise Tax" },
  { name: "Oregon", slug: "oregon", region: "West", taxBody: "Department of Revenue", taxName: "Corporate Activity Tax" },
  { name: "Pennsylvania", slug: "pennsylvania", region: "Northeast", taxBody: "Department of Revenue", taxName: "Corporate Net Income Tax" },
  { name: "Rhode Island", slug: "rhode-island", region: "Northeast", taxBody: "Division of Taxation", taxName: "Corporate Income Tax" },
  { name: "South Carolina", slug: "south-carolina", region: "South", taxBody: "Department of Revenue", taxName: "Corporate Income Tax" },
  { name: "South Dakota", slug: "south-dakota", region: "Midwest", taxBody: "Department of Revenue", taxName: "Sales Tax" },
  { name: "Tennessee", slug: "tennessee", region: "South", taxBody: "Department of Revenue", taxName: "Franchise & Excise Tax" },
  { name: "Texas", slug: "texas", region: "South", taxBody: "Comptroller of Public Accounts", taxName: "Franchise Tax" },
  { name: "Utah", slug: "utah", region: "West", taxBody: "State Tax Commission", taxName: "Corporate Franchise Tax" },
  { name: "Vermont", slug: "vermont", region: "Northeast", taxBody: "Department of Taxes", taxName: "Corporate Income Tax" },
  { name: "Virginia", slug: "virginia", region: "South", taxBody: "Department of Taxation", taxName: "Corporate Income Tax" },
  { name: "Washington", slug: "washington", region: "West", taxBody: "Department of Revenue", taxName: "B&O Tax" },
  { name: "West Virginia", slug: "west-virginia", region: "South", taxBody: "State Tax Department", taxName: "Corporate Net Income Tax" },
  { name: "Wisconsin", slug: "wisconsin", region: "Midwest", taxBody: "Department of Revenue", taxName: "Corporate Income/Franchise Tax" },
  { name: "Wyoming", slug: "wyoming", region: "West", taxBody: "Department of Revenue", taxName: "Sales Tax" }
];

export const getServiceContent = (service, state) => {
  const contentMap = {
    "bookkeeping": {
      intro: `For businesses in ${state.name}, maintaining accurate financial records is more than just good practice—it's essential for navigating ${state.region}ern economic conditions. Our bookkeeping services are tailored to ${state.name}'s specific regulatory environment.`,
      challenges: [
        { title: `${state.taxName} Compliance`, desc: `Ensuring all transactions are recorded to support accurate ${state.taxName} filings.` },
        { title: "Local Economic Factors", desc: `Managing cash flow amidst ${state.name}'s specific market dynamics.` },
        { title: "Audit Readiness", desc: "Keeping books in a state of perpetual readiness for state or federal review." }
      ],
      support: `We provide automated bookkeeping that syncs with your bank feeds while ensuring compliance with the ${state.taxBody}.`,
      workflow: "Our AI categorization engine handles 90% of the volume, while our US-based team reviews anomalies specific to your state's tax laws.",
      compliance: `${state.name} businesses face strict scrutiny from the ${state.taxBody}. We ensure your general ledger aligns perfectly with state reporting requirements.`,
      useCase: `A ${state.name} retail business reduced their monthly close time by 5 days using our automated reconciliation.`
    },
    "accounting": {
      intro: `Strategic accounting is the backbone of any successful ${state.name} enterprise. We move beyond basic data entry to provide financial intelligence that drives growth in the ${state.name} market.`,
      challenges: [
        { title: "Financial Modeling", desc: "Forecasting growth in the local economic climate." },
        { title: "GAAP Compliance", desc: "Ensuring financial statements meet investor standards." },
        { title: "Cost Control", desc: "Monitoring operational costs specific to the region." }
      ],
      support: `Our accounting services offer monthly financial statements, KPI tracking, and strategic advisory tailored to ${state.name} industries.`,
      workflow: "From accrual adjustments to month-end close, our team manages your entire accounting cycle.",
      compliance: `We ensure strict adherence to GAAP and relevant ${state.name} state regulations for financial reporting.`,
      useCase: `Helped a ${state.name} manufacturing firm identify 15% in cost savings through detailed expense analysis.`
    },
    "tax-preparation": {
      intro: `Navigating the ${state.taxBody} requirements requires local expertise. We specialize in ${state.name} tax preparation for businesses of all sizes.`,
      challenges: [
        { title: `${state.taxName} Filings`, desc: "Accurate calculation and timely filing of state-specific taxes." },
        { title: "Nexus Issues", desc: "Determining tax obligations across state lines." },
        { title: "Deduction Optimization", desc: "Identifying state-specific credits and incentives." }
      ],
      support: `We leverage AI to scan for every possible deduction while our CPAs ensure full compliance with the ${state.taxBody}.`,
      workflow: "Secure document upload followed by AI-assisted preparation and rigorous human review.",
      compliance: `Zero-error tolerance for IRS and ${state.taxBody} submissions to minimize audit risk.`,
      useCase: `Recovered overpaid ${state.taxName} for a client through a retrospective tax review.`
    },
    "payroll": {
      intro: `Managing payroll in ${state.name} involves navigating complex labor laws and state tax withholdings. We ensure your team is paid correctly and on time.`,
      challenges: [
        { title: "State Withholding", desc: `Correctly calculating ${state.name} income tax withholdings.` },
        { title: "Labor Compliance", desc: `Adhering to ${state.name} wage and hour laws.` },
        { title: "Remote Workers", desc: "Managing payroll for employees across state borders." }
      ],
      support: `Full-service payroll processing including direct deposit, tax filing, and W-2 generation for ${state.name} employees.`,
      workflow: "Automated time tracking integration with expert review of payroll runs before funds are released.",
      compliance: `We handle all filings with the ${state.taxBody} and federal agencies.`,
      useCase: `Streamlined payroll for a ${state.name} tech company with remote employees in 5 other states.`
    },
    "virtual-cfo": {
      intro: `Access high-level financial strategy without the cost of a full-time executive. Our Virtual CFO services help ${state.name} businesses scale efficiently.`,
      challenges: [
        { title: "Capital Strategy", desc: "Raising funds and managing capital structure." },
        { title: "Growth Planning", desc: "Strategic forecasting for expansion." },
        { title: "Risk Management", desc: "Mitigating financial risks in the local market." }
      ],
      support: `We provide budgeting, forecasting, and strategic guidance to help you navigate the ${state.name} business landscape.`,
      workflow: "Regular strategy sessions combined with dynamic financial modeling and board reporting.",
      compliance: "Strategic oversight to ensure long-term financial health and regulatory compliance.",
      useCase: `Guided a ${state.name} startup through a successful Series A funding round with robust financial modeling.`
    }
  };

  return contentMap[service.slug];
};
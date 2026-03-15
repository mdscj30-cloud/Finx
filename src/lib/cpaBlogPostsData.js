import { 
  Calculator, PieChart, TrendingUp, Shield, Users, 
  Briefcase, FileText, CheckCircle, Brain, Target, 
  Activity, Globe, ShoppingCart, Landmark, Cloud,
  Stethoscope, Utensils, Home, Heart, Factory, Store
} from 'lucide-react';

const authors = {
  sarah: {
    name: 'Sarah Jenkins',
    title: 'Head of Tax Advisory',
    avatar: 'https://images.unsplash.com/photo-1493882552576-fce827c6161e'
  },
  michael: {
    name: 'Michael Chen',
    title: 'Chief Financial Officer',
    avatar: 'https://images.unsplash.com/photo-1493882552576-fce827c6161e'
  },
  elena: {
    name: 'Dr. Elena Rodriguez',
    title: 'Head of AI Strategy',
    avatar: 'https://images.unsplash.com/photo-1493882552576-fce827c6161e'
  }
};

const cpaPostDefinitions = [
  // Tax Planning & Strategy
  { title: "Advanced Tax Planning Strategies for High-Income Earners", img: "https://images.unsplash.com/photo-1554224155-a1487473ffd9", cat: "Tax Strategy", icon: Calculator },
  { title: "Entity Selection and Tax Implications", img: "https://images.unsplash.com/photo-1694388001616-1176f534d72f", cat: "Tax Strategy", icon: Landmark },
  { title: "Tax Loss Harvesting Strategies", img: "https://images.unsplash.com/photo-1644995520656-e9b9a807ffbe", cat: "Tax Strategy", icon: TrendingUp },
  { title: "Charitable Giving and Tax Deductions", img: "https://images.unsplash.com/photo-1579444741963-5ae219cfe27c", cat: "Tax Strategy", icon: Heart },
  { title: "Succession Planning and Tax Optimization", img: "https://images.unsplash.com/photo-1554224155-a1487473ffd9", cat: "Tax Strategy", icon: Users },
  { title: "S-Corp vs C-Corp Tax Comparison", img: "https://images.unsplash.com/photo-1697256200022-f61abccad430", cat: "Tax Strategy", icon: FileText },
  { title: "Pass-Through Entity Taxation", img: "https://images.unsplash.com/photo-1667862828497-90c66496deac", cat: "Tax Strategy", icon: Calculator },
  { title: "Alternative Minimum Tax (AMT) Planning", img: "https://images.unsplash.com/photo-1554224154-22dec7ec8818", cat: "Tax Strategy", icon: Shield },
  { title: "Tax-Efficient Investment Strategies", img: "https://images.unsplash.com/photo-1651129521731-6f6ea5ea0caa", cat: "Tax Strategy", icon: TrendingUp },
  { title: "Estate Planning and Tax Considerations", img: "https://images.unsplash.com/photo-1644995520656-e9b9a807ffbe", cat: "Tax Strategy", icon: Home },

  // Bookkeeping & Accounting
  { title: "GAAP vs IFRS Accounting Standards", img: "https://images.unsplash.com/photo-1515435187718-b41654581592", cat: "Accounting Standards", icon: Globe },
  { title: "Internal Controls and Fraud Prevention", img: "https://images.unsplash.com/photo-1614173644825-7be93344f65e", cat: "Accounting Standards", icon: Shield },
  { title: "Audit Preparation and Documentation", img: "https://images.unsplash.com/photo-1443140570159-279cf334cf24", cat: "Accounting Standards", icon: FileText },
  { title: "Revenue Recognition Standards (ASC 606)", img: "https://images.unsplash.com/photo-1618044733300-9472054094ee", cat: "Accounting Standards", icon: Calculator },
  { title: "Lease Accounting (ASC 842) Explained", img: "https://images.unsplash.com/photo-1673337720270-0d433ad461a4", cat: "Accounting Standards", icon: Home },
  { title: "Consolidation Accounting for Multi-Entity", img: "https://images.unsplash.com/photo-1642132652860-471b4228023e", cat: "Accounting Standards", icon: Briefcase },
  { title: "Intercompany Transactions and Eliminations", img: "https://images.unsplash.com/photo-1586282391127-20f3952f64f7", cat: "Accounting Standards", icon: TrendingUp },
  { title: "Goodwill and Intangible Assets Accounting", img: "https://images.unsplash.com/photo-1515435187718-b41654581592", cat: "Accounting Standards", icon: PieChart },
  { title: "Contingent Liabilities and Accruals", img: "https://images.unsplash.com/photo-1500401519266-0b71b29a05e0", cat: "Accounting Standards", icon: FileText },
  { title: "Related Party Transactions Disclosure", img: "https://images.unsplash.com/photo-1618044733300-9472054094ee", cat: "Accounting Standards", icon: Users },

  // Payroll & Compliance
  { title: "Payroll Tax Compliance for Multi-State Businesses", img: "https://images.unsplash.com/photo-1692914274476-0e6920cc80cf", cat: "Compliance", icon: Globe },
  { title: "Executive Compensation and Deductibility", img: "https://images.unsplash.com/photo-1636038159707-91ac808db883", cat: "Compliance", icon: Briefcase },
  { title: "Fringe Benefits and Tax Treatment", img: "https://images.unsplash.com/photo-1586282391127-20f3952f64f7", cat: "Compliance", icon: CheckCircle },
  { title: "Payroll Audit Defense Strategies", img: "https://images.unsplash.com/photo-1579444741963-5ae219cfe27c", cat: "Compliance", icon: Shield },
  { title: "Wage and Hour Compliance Issues", img: "https://images.unsplash.com/photo-1554224154-22dec7ec8818", cat: "Compliance", icon: Calculator },
  { title: "Independent Contractor Misclassification Risks", img: "https://images.unsplash.com/photo-1690166444493-b3f5fbcd4762", cat: "Compliance", icon: Users },
  { title: "Payroll Recordkeeping Requirements", img: "https://images.unsplash.com/photo-1587392942611-a3240176d6dc", cat: "Compliance", icon: FileText },
  { title: "Retirement Plan Compliance and Contributions", img: "https://images.unsplash.com/photo-1651129521731-6f6ea5ea0caa", cat: "Compliance", icon: TrendingUp },
  { title: "Health Insurance and Tax Deductions", img: "https://images.unsplash.com/photo-1599410648382-04e7d8805a03", cat: "Compliance", icon: Heart },
  { title: "Paid Leave Laws and Compliance", img: "https://images.unsplash.com/photo-1554224155-a1487473ffd9", cat: "Compliance", icon: FileText },

  // Financial Analysis
  { title: "Financial Statement Analysis for Lenders", img: "https://images.unsplash.com/photo-1605512930578-a93be1839e4f", cat: "Financial Analysis", icon: Activity },
  { title: "Debt Covenant Compliance Monitoring", img: "https://images.unsplash.com/photo-1651129521731-6f6ea5ea0caa", cat: "Financial Analysis", icon: CheckCircle },
  { title: "Working Capital Management Strategies", img: "https://images.unsplash.com/photo-1613251342336-25adab990132", cat: "Financial Analysis", icon: TrendingUp },
  { title: "Liquidity Analysis and Cash Management", img: "https://images.unsplash.com/photo-1533750349088-cd871a92f312", cat: "Financial Analysis", icon: Calculator },
  { title: "Solvency Ratios and Financial Health", img: "https://images.unsplash.com/photo-1651129521731-6f6ea5ea0caa", cat: "Financial Analysis", icon: Shield },
  { title: "Profitability Metrics and Margins", img: "https://images.unsplash.com/photo-1625296276703-3fbc924f07b5", cat: "Financial Analysis", icon: PieChart },
  { title: "Return on Investment (ROI) Analysis", img: "https://images.unsplash.com/photo-1618044733300-9472054094ee", cat: "Financial Analysis", icon: TrendingUp },
  { title: "Earnings Quality Assessment", img: "https://images.unsplash.com/photo-1618044733300-9472054094ee", cat: "Financial Analysis", icon: Activity },
  { title: "Segment Reporting and Analysis", img: "https://images.unsplash.com/photo-1686061592689-312bbfb5c055", cat: "Financial Analysis", icon: Target },
  { title: "Comparative Financial Analysis", img: "https://images.unsplash.com/photo-1516383274235-5f42d6c6426d", cat: "Financial Analysis", icon: Activity },

  // Industry-Specific
  { title: "SaaS Company Accounting and Metrics", img: "https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0", cat: "Specialized Industries", icon: Cloud },
  { title: "E-Commerce Business Accounting", img: "https://images.unsplash.com/photo-1562064445-c4cf9ff375e5", cat: "Specialized Industries", icon: ShoppingCart },
  { title: "Healthcare Provider Accounting", img: "https://images.unsplash.com/photo-1685995833594-8c35ffa8ccb0", cat: "Specialized Industries", icon: Stethoscope },
  { title: "Digital Agency Accounting", img: "https://images.unsplash.com/photo-1603985585179-3d71c35a537c", cat: "Specialized Industries", icon: Briefcase },
  { title: "Restaurant and Hospitality Accounting", img: "https://images.unsplash.com/photo-1628430044725-7bc787a850fc", cat: "Specialized Industries", icon: Utensils },
  { title: "Real Estate Investment Accounting", img: "https://images.unsplash.com/photo-1685279053124-f47a436a9c1e", cat: "Specialized Industries", icon: Home },
  { title: "Non-Profit Organization Accounting", img: "https://images.unsplash.com/photo-1579444741963-5ae219cfe27c", cat: "Specialized Industries", icon: Heart },
  { title: "Manufacturing and Production Accounting", img: "https://images.unsplash.com/photo-1610891015188-5369212db097", cat: "Specialized Industries", icon: Factory },
  { title: "Professional Services Firm Accounting", img: "https://images.unsplash.com/photo-1675270714610-11a5cadcc7b3", cat: "Specialized Industries", icon: Users },
  { title: "Franchise Business Accounting", img: "https://images.unsplash.com/photo-1703080112790-75bd0f5dfcb5", cat: "Specialized Industries", icon: Store }
];

const generateCpaContent = (title, category) => {
  return [
    {
      heading: "Strategic Overview",
      content: `<p class="mb-4">For modern CPAs, understanding <strong>${title}</strong> is key to providing high-value advisory services.</p><p>This guide covers essential ${category.toLowerCase()} concepts for your firm.</p>`
    },
    {
      heading: "Client Advisory Applications",
      content: `<p class="mb-4">Applying ${title} strategies helps clients optimize their operations and reduce risk.</p>`
    },
    {
      heading: "Regulatory Considerations",
      content: `<p class="mb-4">Stay ahead of compliance requirements related to ${category.toLowerCase()} to protect your clients.</p>`
    },
    {
      heading: "Actionable Insights",
      content: `<p>Implement these best practices for ${title} to differentiate your practice.</p>`
    }
  ];
};

export const cpaBlogPosts = cpaPostDefinitions.map((def, index) => ({
  id: `cpa-${index + 1}`,
  title: def.title,
  slug: def.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
  category: def.cat,
  author: Object.values(authors)[index % 3],
  publishDate: new Date(Date.now() - (index * 86400000)).toISOString(),
  readingTime: `${10 + (index % 5)} min read`,
  imageUrl: def.img,
  featuredImage: def.img, // Explicitly set as requested
  authorImage: "https://images.unsplash.com/photo-1493882552576-fce827c6161e", // Set uniform CPA headshot
  categoryIcon: def.icon,
  intro: `<p>A professional deep-dive into ${def.title}. Essential reading for forward-thinking CPAs.</p>`,
  metaDescription: `CPA Guide: ${def.title}. Learn expert strategies for ${def.cat}.`,
  sections: generateCpaContent(def.title, def.cat),
  faqs: [
    { question: `How does ${def.title} impact my firm?`, answer: "It offers a new avenue for high-margin advisory services." },
    { question: "What are the compliance risks?", answer: "Failure to adhere to standards can result in penalties and reputational damage." }
  ],
  relatedGlossaryTerms: ["Audit", "Compliance", "Advisory", "Tax", "Reporting"]
}));

export const cpaCategories = ["Tax Strategy", "Accounting Standards", "Compliance", "Financial Analysis", "Specialized Industries"];

export const getCpaPostBySlug = (slug) => cpaBlogPosts.find(p => p.slug === slug);
export const getCpaPostsByCategory = (cat) => cpaBlogPosts.filter(p => p.category === cat);
export const getRelatedCpaPosts = (post) => {
  if (!post) return [];
  return cpaBlogPosts.filter(p => p.category === post.category && p.id !== post.id).slice(0, 3);
};
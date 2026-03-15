import React from 'react';
import CountryPageLayout from '@/components/CountryPageLayout';
import { FileText, DollarSign, ShieldCheck, Landmark } from 'lucide-react';

const USAPage = () => {
  const services = [
    {
      icon: FileText,
      title: 'GAAP Bookkeeping',
      shortDesc: 'Automated US GAAP compliance',
      description: 'Full automated bookkeeping compliant with US GAAP standards, ensuring your financial statements are audit-ready.'
    },
    {
      icon: Landmark,
      title: 'IRS Tax Workflow',
      shortDesc: '1065, 1120, 1120S automation',
      description: 'Streamlined workflows for Federal tax forms including 1065 (Partnership), 1120 (C-Corp), and 1120S (S-Corp).'
    },
    {
      icon: DollarSign,
      title: 'Sales Tax Nexus',
      shortDesc: 'Multi-state monitoring',
      description: 'Automated monitoring of economic nexus thresholds across all 50 states to ensure sales tax compliance.'
    },
    {
      icon: ShieldCheck,
      title: '1099 Automation',
      shortDesc: 'Contractor filings made easy',
      description: 'Automatically collect W-9s and generate/file 1099-NEC and 1099-MISC forms for your contractors.'
    }
  ];

  const deadlines = [
    {
      category: 'Federal Tax Deadlines',
      items: [
        'March 15: S-Corp (1120S) & Partnership (1065) Returns',
        'April 15: C-Corp (1120) & Individual Returns',
        'October 15: Extended Deadline'
      ]
    },
    {
      category: 'Quarterly & Other',
      items: [
        'Jan 15, Apr 15, Jun 15, Sep 15: Estimated Tax Payments',
        'January 31: 1099-NEC Filing Deadline',
        'April 15: FBAR (Foreign Bank Account Report)'
      ]
    }
  ];

  const testimonials = [
    {
      content: "FinxisAI handles our multi-state sales tax complexity effortlessly. It's a lifesaver for our e-commerce business.",
      author: "Sarah Jenkins",
      role: "CEO, TechRetail Inc.",
      location: "Austin, TX"
    },
    {
      content: "The automated 1099 filing feature alone saved us 20 hours this January. Highly recommended for US startups.",
      author: "Mike Ross",
      role: "Founder",
      location: "New York, NY"
    },
    {
      content: "Finally, a platform that understands S-Corp specific requirements and reasonable compensation tracking.",
      author: "David Chen",
      role: "Principal Architect",
      location: "San Francisco, CA"
    }
  ];

  const meta = {
    title: "US Accounting & Tax Automation Software | FinxisAI",
    description: "Automate your US business finances with FinxisAI. GAAP bookkeeping, IRS tax workflows, sales tax nexus tracking, and 1099 automation.",
    keywords: "US accounting software, IRS tax automation, GAAP bookkeeping, sales tax nexus tracker, 1099 automation software"
  };

  return (
    <CountryPageLayout
      countryName="United States"
      flag="🇺🇸"
      heroTitle="US Financial Compliance & Automation"
      heroDescription="Master US tax complexity with AI-powered bookkeeping, multi-state sales tax tracking, and automated IRS filings."
      services={services}
      deadlines={deadlines}
      testimonials={testimonials}
      meta={meta}
    />
  );
};

export default USAPage;
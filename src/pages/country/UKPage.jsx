import React from 'react';
import CountryPageLayout from '@/components/CountryPageLayout';
import { FileText, PoundSterling, ShieldCheck, Landmark } from 'lucide-react';

const UKPage = () => {
  const services = [
    {
      icon: Landmark,
      title: 'Making Tax Digital (MTD)',
      shortDesc: 'HMRC recognized software',
      description: 'Fully compliant with HMRC\'s Making Tax Digital initiative for VAT and Income Tax Self Assessment.'
    },
    {
      icon: FileText,
      title: 'Corporation Tax (CT600)',
      shortDesc: 'Automated calculations',
      description: 'AI-driven preparation of your Company Tax Return (CT600) and computation of tax liabilities.'
    },
    {
      icon: PoundSterling,
      title: 'VAT Automation',
      shortDesc: 'Quarterly returns',
      description: 'Automated VAT return generation, including adjustments for partial exemption and cross-border trade.'
    },
    {
      icon: ShieldCheck,
      title: 'Companies House',
      shortDesc: 'Direct filing integration',
      description: 'Seamless filing of Confirmation Statements and Annual Accounts directly to Companies House.'
    }
  ];

  const deadlines = [
    {
      category: 'HMRC Deadlines',
      items: [
        'VAT Returns: 1 month + 7 days after quarter end',
        'Corporation Tax Payment: 9 months + 1 day after year end',
        'Company Tax Return (CT600): 12 months after year end'
      ]
    },
    {
      category: 'Companies House & Payroll',
      items: [
        'Annual Accounts: 9 months after year end',
        'Confirmation Statement: Every 12 months (14 day grace)',
        'PAYE & NICs: 22nd of the following month (electronic)'
      ]
    }
  ];

  const testimonials = [
    {
      content: "MTD compliance was a headache until we switched to FinxisAI. Now our VAT returns are submitted in clicks.",
      author: "James Wilson",
      role: "Director",
      location: "London"
    },
    {
      content: "The integration with Companies House for our annual accounts filing is brilliant. Saves us so much admin time.",
      author: "Emma Thompson",
      role: "Managing Partner",
      location: "Manchester"
    },
    {
      content: "Perfect for UK SMEs. It handles everything from payroll to corporation tax estimates automatically.",
      author: "Oliver Smith",
      role: "Founder",
      location: "Edinburgh"
    }
  ];

  const meta = {
    title: "UK Accounting Software & MTD Compliance | FinxisAI",
    description: "HMRC-recognized accounting automation for UK businesses. Making Tax Digital (MTD) for VAT, Corporation Tax, and Companies House filings.",
    keywords: "UK accounting software, MTD for VAT, HMRC compliant, CT600 software, Companies House filing"
  };

  return (
    <CountryPageLayout
      countryName="United Kingdom"
      flag="🇬🇧"
      heroTitle="UK Accounting & Tax Automation"
      heroDescription="Streamline your British business finances with MTD-compliant VAT returns, automated Corporation Tax, and Companies House integration."
      services={services}
      deadlines={deadlines}
      testimonials={testimonials}
      meta={meta}
    />
  );
};

export default UKPage;
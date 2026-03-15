import React from 'react';
import CountryPageLayout from '@/components/CountryPageLayout';
import { FileText, Building2, ShieldCheck, Landmark } from 'lucide-react';

const UAEPage = () => {
  const services = [
    {
      icon: Landmark,
      title: 'Corporate Tax (9%)',
      shortDesc: 'Federal decree-law compliance',
      description: 'Complete support for the new UAE Corporate Tax regime, including registration and return filing via EmaraTax.'
    },
    {
      icon: FileText,
      title: 'VAT Returns',
      shortDesc: 'FTA compliance',
      description: 'Automated VAT 201 return generation for the Federal Tax Authority (FTA), handling 5% standard and 0% rates.'
    },
    {
      icon: ShieldCheck,
      title: 'Economic Substance',
      shortDesc: 'ESR reporting',
      description: 'Guidance and reporting tools for Economic Substance Regulations (ESR) compliance for relevant activities.'
    },
    {
      icon: Building2,
      title: 'Free Zone Management',
      shortDesc: 'Multi-zone support',
      description: ' specialized accounting workflows for entities in DMCC, ADGM, DIFC, and mainland jurisdictions.'
    }
  ];

  const deadlines = [
    {
      category: 'FTA Deadlines',
      items: [
        'VAT Return: 28th day following the tax period end',
        'Corporate Tax Registration: Before first return due date',
        'Corporate Tax Filing: 9 months after financial year end'
      ]
    },
    {
      category: 'Regulatory',
      items: [
        'ESR Notification: 6 months after financial year end',
        'ESR Report: 12 months after financial year end',
        'UBO Declaration: Update within 15 days of changes'
      ]
    }
  ];

  const testimonials = [
    {
      content: "Navigating the new Corporate Tax laws was daunting until we found FinxisAI. It makes compliance straightforward.",
      author: "Omar Al-Futtaim",
      role: "Managing Director",
      location: "Dubai"
    },
    {
      content: "Perfect for handling our VAT refunds. The integration with EmaraTax standards is spot on.",
      author: "Fatima Al-Zahra",
      role: "CFO",
      location: "Abu Dhabi"
    },
    {
      content: "Essential for managing our Free Zone entity's books. Keeps us compliant with minimal effort.",
      author: "James Clarke",
      role: "Founder",
      location: "DIFC"
    }
  ];

  const meta = {
    title: "UAE Accounting Software & Corporate Tax | FinxisAI",
    description: "Automate your UAE business finances. Corporate Tax (9%) compliance, VAT returns, ESR reporting, and Free Zone accounting support.",
    keywords: "UAE accounting software, Dubai corporate tax, UAE VAT, EmaraTax, ESR compliance"
  };

  return (
    <CountryPageLayout
      countryName="United Arab Emirates"
      flag="🇦🇪"
      heroTitle="UAE Tax & Compliance Automation"
      heroDescription="Simplify your UAE business finance with automated Corporate Tax support, VAT return filing, and Free Zone compliance tools."
      services={services}
      deadlines={deadlines}
      testimonials={testimonials}
      meta={meta}
    />
  );
};

export default UAEPage;
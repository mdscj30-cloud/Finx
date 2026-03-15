import React from 'react';
import CountryPageLayout from '@/components/CountryPageLayout';
import { FileText, Euro, ShieldCheck, Landmark } from 'lucide-react';

const NetherlandsPage = () => {
  const services = [
    {
      icon: Euro,
      title: 'BTW (VAT) Returns',
      shortDesc: 'Omzetbelasting automation',
      description: 'Automated calculation and preparation of your quarterly or monthly BTW (VAT) returns for the Belastingdienst.'
    },
    {
      icon: Landmark,
      title: 'Corporate Tax (VPB)',
      shortDesc: 'Vennootschapsbelasting',
      description: 'Streamlined preparation for Corporate Income Tax (VPB) filings with automated profit calculations.'
    },
    {
      icon: FileText,
      title: 'Annual Accounts (KvK)',
      shortDesc: 'Jaarrekening filing',
      description: 'Generate SBR-compliant annual accounts ready for deposition at the Chamber of Commerce (KvK).'
    },
    {
      icon: ShieldCheck,
      title: 'ICP Declarations',
      shortDesc: 'EU trade compliance',
      description: 'Automated Intra-Community Performance (ICP) declarations for businesses trading within the EU.'
    }
  ];

  const deadlines = [
    {
      category: 'Belastingdienst Deadlines',
      items: [
        'BTW (VAT): End of month following the quarter',
        'ICP Declaration: End of month following the quarter',
        'VPB (Corp Tax): June 1 (5 months after year end)'
      ]
    },
    {
      category: 'KvK & Other',
      items: [
        'Annual Accounts (KvK): Within 5 months of year end (extensible)',
        'Loonheffingen (Payroll Tax): End of following month',
        'UBO Register: Keep updated continuously'
      ]
    }
  ];

  const testimonials = [
    {
      content: "Doing our BTW returns used to take a whole day. With FinxisAI, it's done in minutes and always accurate.",
      author: "Pieter Janssen",
      role: "Founder",
      location: "Amsterdam"
    },
    {
      content: "The direct connection for KvK filings is a game changer for our BV. Highly recommended for Dutch startups.",
      author: "Sanne de Vries",
      role: "Director",
      location: "Rotterdam"
    },
    {
      content: "Excellent support for ICP declarations. Essential for our e-commerce business selling across Europe.",
      author: "Lars Bakker",
      role: "CFO",
      location: "Utrecht"
    }
  ];

  const meta = {
    title: "Netherlands Accounting Software & BTW Automation | FinxisAI",
    description: "Automate your Dutch business finances. BTW (VAT) returns, VPB corporate tax, and KvK annual accounts filing support.",
    keywords: "Netherlands accounting software, BTW aangifte software, VPB automation, KvK jaarrekening, Dutch tax software"
  };

  return (
    <CountryPageLayout
      countryName="Netherlands"
      flag="🇳🇱"
      heroTitle="Netherlands Financial Compliance"
      heroDescription="Master Dutch regulations with automated BTW returns, VPB preparation, and seamless KvK annual account filings."
      services={services}
      deadlines={deadlines}
      testimonials={testimonials}
      meta={meta}
    />
  );
};

export default NetherlandsPage;
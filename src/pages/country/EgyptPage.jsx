import React from 'react';
import CountryPageLayout from '@/components/CountryPageLayout';
import { FileText, Coins, ShieldCheck, Landmark } from 'lucide-react';

const EgyptPage = () => {
  const services = [
    {
      icon: FileText,
      title: 'E-Invoicing (ETA)',
      shortDesc: 'Egyptian Tax Authority',
      description: 'Full integration with the ETA portal for mandatory electronic invoicing and receipt submission.'
    },
    {
      icon: Landmark,
      title: 'Corporate Tax',
      shortDesc: 'Annual declaration',
      description: 'Automated preparation of Form 47 for corporate income tax, compliant with Egyptian accounting standards.'
    },
    {
      icon: Coins,
      title: 'VAT Automation',
      shortDesc: 'Monthly returns',
      description: 'Automatic calculation of Value Added Tax (14% standard) and generation of monthly Form 10 filings.'
    },
    {
      icon: ShieldCheck,
      title: 'Payroll Taxes',
      shortDesc: 'Salary tax & social insurance',
      description: 'Calculation of monthly salary tax and social insurance contributions for local and expat employees.'
    }
  ];

  const deadlines = [
    {
      category: 'ETA Deadlines',
      items: [
        'VAT Return: Within 1 month following the tax period',
        'Corporate Tax: April 30 (or 4 months after FY end)',
        'Salary Tax (Quarterly): Jan, Apr, Jul, Oct'
      ]
    },
    {
      category: 'Other Regulatory',
      items: [
        'E-Invoicing: Real-time submission required',
        'Social Insurance: Monthly payment by the 15th',
        'Commercial Register Renewal: Every 5 years'
      ]
    }
  ];

  const testimonials = [
    {
      content: "The ETA e-invoicing integration is flawless. It saves us hours of manual uploading every week.",
      author: "Ahmed Hassan",
      role: "Finance Director",
      location: "Cairo"
    },
    {
      content: "FinxisAI helped us navigate the new payroll tax brackets easily. Essential for any Cairo-based startup.",
      author: "Sara El-Sayed",
      role: "HR Manager",
      location: "Alexandria"
    },
    {
      content: "Automating our monthly VAT returns has reduced our compliance risk significantly.",
      author: "Mohamed Ali",
      role: "CEO",
      location: "Giza"
    }
  ];

  const meta = {
    title: "Egypt Accounting Software & E-Invoicing | FinxisAI",
    description: "Automate your Egyptian business finances. ETA e-invoicing integration, VAT returns, corporate tax, and payroll compliance.",
    keywords: "Egypt accounting software, ETA e-invoicing, Egyptian VAT, corporate tax Egypt, payroll software Cairo"
  };

  return (
    <CountryPageLayout
      countryName="Egypt"
      flag="🇪🇬"
      heroTitle="Egypt Financial Compliance"
      heroDescription="Master Egyptian tax regulations with automated ETA e-invoicing, VAT return generation, and corporate tax filing support."
      services={services}
      deadlines={deadlines}
      testimonials={testimonials}
      meta={meta}
    />
  );
};

export default EgyptPage;
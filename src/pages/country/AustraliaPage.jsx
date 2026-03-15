import React from 'react';
import CountryPageLayout from '@/components/CountryPageLayout';
import { FileText, DollarSign, ShieldCheck, Landmark } from 'lucide-react';

const AustraliaPage = () => {
  const services = [
    {
      icon: FileText,
      title: 'BAS Automation',
      shortDesc: 'Quarterly activity statements',
      description: 'Automate your Business Activity Statements (BAS) including GST, PAYG withholding, and installments.'
    },
    {
      icon: Landmark,
      title: 'ASIC Compliance',
      shortDesc: 'Corporate registry',
      description: 'Stay compliant with ASIC requirements, including annual reviews and solvency resolutions.'
    },
    {
      icon: DollarSign,
      title: 'Single Touch Payroll',
      shortDesc: 'STP Phase 2 ready',
      description: 'ATO-compliant payroll reporting with Single Touch Payroll (STP) integration for real-time reporting.'
    },
    {
      icon: ShieldCheck,
      title: 'SuperStream',
      shortDesc: 'Superannuation compliance',
      description: 'Automated calculation and reporting of Superannuation Guarantee contributions via SuperStream.'
    }
  ];

  const deadlines = [
    {
      category: 'ATO Deadlines',
      items: [
        'BAS (Quarterly): 28th of month following quarter end',
        'Company Tax Return: Oct 31 (or May 15 with tax agent)',
        'FBT Return: May 21'
      ]
    },
    {
      category: 'Payroll & ASIC',
      items: [
        'Super Guarantee: 28th of month following quarter',
        'TPAR (Taxable Payments): August 28',
        'ASIC Annual Review Fee: 2 months after review date'
      ]
    }
  ];

  const testimonials = [
    {
      content: "FinxisAI makes BAS time stress-free. It automatically calculates our GST and PAYG perfectly every quarter.",
      author: "Kylie Minogue",
      role: "Owner, Creative Studio",
      location: "Melbourne, VIC"
    },
    {
      content: "The STP integration is seamless. We know we're always compliant with the latest ATO payroll regulations.",
      author: "Liam Hemsworth",
      role: "Director",
      location: "Sydney, NSW"
    },
    {
      content: "Great for managing our ASIC obligations and keeping track of solvency resolutions.",
      author: "Hugh Jackman",
      role: "CEO",
      location: "Brisbane, QLD"
    }
  ];

  const meta = {
    title: "Australian Accounting & BAS Software | FinxisAI",
    description: "Automate your Australian business finances. BAS & GST automation, Single Touch Payroll (STP), and ASIC compliance tools.",
    keywords: "Australian accounting software, BAS automation, STP software, ASIC compliance, ATO tax software"
  };

  return (
    <CountryPageLayout
      countryName="Australia"
      flag="🇦🇺"
      heroTitle="Australian Tax & BAS Automation"
      heroDescription="Simplify your ATO compliance with automated Business Activity Statements, Single Touch Payroll, and ASIC reporting."
      services={services}
      deadlines={deadlines}
      testimonials={testimonials}
      meta={meta}
    />
  );
};

export default AustraliaPage;
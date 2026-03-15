import { 
  Building2, Globe, MapPin, Calculator, FileText, 
  TrendingUp, ShieldCheck, Users, Banknote, Briefcase 
} from 'lucide-react';

const generateLocationData = (city, region, country, service, specificPainPoints) => {
  const key = `${service.toLowerCase().replace(/\s+/g, '-')}-${city.toLowerCase().replace(/\s+/g, '-')}`;
  const isUS = country === 'USA';
  const isUK = country === 'UK';
  const isCanada = country === 'Canada';

  const complianceBody = isUS ? "IRS and State Dept of Revenue" : isUK ? "HMRC" : "CRA";
  const taxType = isUS ? "Sales Tax" : isUK ? "VAT" : "HST/GST";
  
  return {
    [key]: {
      title: `${service} Services in ${city} | FinxisAI`,
      metaDesc: `Expert ${service.toLowerCase()} for ${city} businesses. We handle ${taxType}, compliance, and financial reporting with AI-driven precision.`,
      serviceType: service,
      location: city,
      region: region,
      country: country,
      hero: {
        headline: `Precision ${service} for ${city} Business`,
        subheading: `Navigate the ${city} market with financials that are always audit-ready and up-to-date.`,
        image: `https://images.unsplash.com/photo-${isUK ? '1513635269975-59663e0ac1ad' : isCanada ? '1507992781348-310259076fe0' : '1496442226666-8d4a0e62e6e9'}?auto=format&fit=crop&q=80`
      },
      intro: `${city} is a hub for innovation and growth. Whether you're a startup or an established enterprise, you need ${service.toLowerCase()} that keeps pace. FinxisAI delivers compliant, accurate financial records tailored to the ${region} regulatory environment.`,
      challenges: [
        { title: `${taxType} Compliance`, desc: `Navigating complex ${taxType} rules in ${region}.` },
        { title: "High Cost of Ops", desc: `Managing cash flow in a competitive ${city} market.` },
        { title: "Regulatory Density", desc: `Compliance with strict local ${country} business laws.` }
      ],
      support: `We combine automated data ingestion with local expert review to ensure every transaction is handled correctly for ${country} tax purposes.`,
      workflow: [
        { step: "Connect", desc: `Securely link ${country} bank accounts.` },
        { step: "Process", desc: "AI categorizes transactions daily." },
        { step: "Review", desc: `${country}-based experts review for anomalies.` },
        { step: "Report", desc: "Delivery of financial statements." }
      ],
      compliance: `We ensure strict adherence to ${complianceBody} requirements.`,
      useCases: [
        { title: "Local Growth", desc: `Streamlined operations for a ${city} service firm.` },
        { title: "Audit Readiness", desc: `Cleaned up records for a client facing a ${complianceBody} review.` }
      ],
      benefits: `Gain the clarity needed to compete in ${city}'s market without overhead.`,
      faqs: [
        { q: `Do you handle ${city} specific taxes?`, a: "Yes, we handle all local and regional filings." },
        { q: "Is my data secure?", a: "Yes, we use bank-level encryption and SOC 2 protocols." },
        { q: "Do you support my currency?", a: `Yes, we fully support ${isUK ? 'GBP' : isCanada ? 'CAD' : 'USD'}.` }
      ],
      internalLinks: [
        { label: "Contact Us", path: "/contact" },
        { label: "Pricing", path: "/pricing" }
      ],
      externalLinks: [
        { label: complianceBody, url: isUS ? "https://www.irs.gov" : isUK ? "https://www.gov.uk/government/organisations/hm-revenue-customs" : "https://www.canada.ca/en/revenue-agency.html" }
      ],
      relatedPages: [
        { title: "Virtual CFO", path: `/services/virtual-cfo-${city.toLowerCase()}` },
        { title: "Tax Prep", path: `/services/tax-preparation-${city.toLowerCase()}` }
      ]
    }
  };
};

const cities = [
  { city: 'London', region: 'UK', country: 'UK', services: ['Bookkeeping', 'Accounting', 'Tax Preparation', 'Payroll', 'Virtual CFO'] },
  { city: 'Manchester', region: 'UK', country: 'UK', services: ['Bookkeeping', 'Accounting', 'Tax Preparation'] },
  { city: 'Birmingham', region: 'UK', country: 'UK', services: ['Bookkeeping', 'Accounting'] },
  { city: 'Toronto', region: 'Ontario', country: 'Canada', services: ['Bookkeeping', 'Accounting', 'Tax Preparation', 'Payroll', 'Virtual CFO'] },
  { city: 'Vancouver', region: 'BC', country: 'Canada', services: ['Bookkeeping', 'Accounting', 'Tax Preparation', 'Payroll', 'Virtual CFO'] },
  { city: 'Calgary', region: 'Alberta', country: 'Canada', services: ['Bookkeeping', 'Accounting', 'Tax Preparation'] },
  { city: 'Montreal', region: 'Quebec', country: 'Canada', services: ['Bookkeeping', 'Accounting'] },
  { city: 'New York', region: 'New York', country: 'USA', services: ['Bookkeeping', 'Accounting', 'Tax Preparation', 'Payroll', 'Virtual CFO'] },
  { city: 'Los Angeles', region: 'California', country: 'USA', services: ['Bookkeeping', 'Accounting', 'Tax Preparation'] },
  { city: 'Chicago', region: 'Illinois', country: 'USA', services: ['Bookkeeping', 'Accounting'] },
  { city: 'Houston', region: 'Texas', country: 'USA', services: ['Bookkeeping', 'Accounting'] },
  { city: 'Miami', region: 'Florida', country: 'USA', services: ['Bookkeeping', 'Accounting'] }
];

let generatedData = {};

cities.forEach(loc => {
  loc.services.forEach(svc => {
    const data = generateLocationData(loc.city, loc.region, loc.country, svc);
    generatedData = { ...generatedData, ...data };
  });
});

export const locationServiceData = generatedData;
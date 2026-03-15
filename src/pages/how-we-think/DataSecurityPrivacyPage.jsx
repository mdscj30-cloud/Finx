import React from 'react';
import HowWeThinkLayout from '@/components/HowWeThinkLayout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from 'react-router-dom';
import { Shield, Lock, Server, FileKey, Globe } from 'lucide-react';

const DataSecurityPrivacyPage = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "FinxisAI Data Security & Privacy Commitment",
    "description": "Enterprise-grade security specifications: AES-256 encryption, SOC 2 compliance, and strict access controls to protect your financial data.",
    "author": { "@type": "Organization", "name": "FinxisAI" },
    "publisher": { "@type": "Organization", "name": "FinxisAI" }
  };

  const toc = [
    { id: "philosophy", label: "Security Philosophy" },
    { id: "encryption", label: "Encryption Standards" },
    { id: "access", label: "Access Controls" },
    { id: "compliance", label: "Compliance & Audit" },
    { id: "faq", label: "FAQs" }
  ];

  const relatedLinks = [
    { title: "AI Responsibility", desc: "How we use data ethically.", path: "/how-we-think/ai-responsibility" },
    { title: "Privacy Policy", desc: "Our legal privacy framework.", path: "/privacy-policy" },
    { title: "Quality Control", desc: "Ensuring accuracy and safety.", path: "/how-we-think/quality-control-framework" }
  ];

  return (
    <HowWeThinkLayout 
      title="Data Security & Privacy Commitment"
      description="Your financial data is your most sensitive asset. We treat it with the protection of a bank and the privacy of a vault."
      toc={toc}
      relatedLinks={relatedLinks}
      schemaData={schemaData}
    >
      <section id="philosophy">
        <p className="lead text-xl text-slate-600 mb-8">
          In the digital age, trust is binary: it's either secure, or it's compromised. FinxisAI was built with a "Security First" architecture. We do not retrofit security onto our systems; we built our systems around security. This page details the technical and procedural safeguards we employ.
        </p>
      </section>

      <section id="encryption">
        <h2>Encryption Standards</h2>
        <p>We use industry-standard encryption protocols that meet or exceed banking requirements.</p>
        <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
          <div className="flex gap-4 p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
            <Server className="w-8 h-8 text-blue-600" />
            <div>
              <h3 className="font-bold text-slate-900">At Rest</h3>
              <p className="text-sm text-slate-600">All data stored in our databases is encrypted using <strong>AES-256</strong>. Even if a hard drive were physically stolen from a data center, the data would be unreadable.</p>
            </div>
          </div>
          <div className="flex gap-4 p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
            <Globe className="w-8 h-8 text-blue-600" />
            <div>
              <h3 className="font-bold text-slate-900">In Transit</h3>
              <p className="text-sm text-slate-600">All data moving between your browser, our servers, and third-party integrations is protected via <strong>TLS 1.3</strong> (Transport Layer Security).</p>
            </div>
          </div>
        </div>
      </section>

      <section id="access">
        <h2>Access Controls & Authentication</h2>
        <p>Security is often compromised by human error. We mitigate this with strict access protocols:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Role-Based Access Control (RBAC):</strong> Employees only have access to the data necessary for their specific role. A customer support agent cannot see your bank account numbers.</li>
          <li><strong>Multi-Factor Authentication (MFA):</strong> Enforced for all internal staff and available for all clients.</li>
          <li><strong>Audit Logging:</strong> Every internal access of client data is logged. We know who looked at what, when, and why.</li>
        </ul>
      </section>

      <section id="compliance">
        <h2>Compliance Certifications</h2>
        <p>We undergo regular third-party audits to verify our security posture.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>SOC 2 Type II:</strong> Verified by independent auditors to meet the AICPA's Trust Service Criteria for Security, Availability, and Confidentiality.</li>
          <li><strong>GDPR/CCPA:</strong> Fully compliant with global data privacy regulations regarding the right to be forgotten and data portability.</li>
          <li><strong>HIPAA:</strong> For healthcare clients, we support HIPAA-compliant workflows for handling protected health information (PHI) within financial records.</li>
        </ul>
      </section>

      <section id="faq">
        <h2>Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full not-prose">
          <AccordionItem value="item-1">
            <AccordionTrigger>Where is my data hosted?</AccordionTrigger>
            <AccordionContent>We use AWS (Amazon Web Services) data centers located exclusively within the United States (us-east-1 and us-west-2 regions).</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Do you sell my data?</AccordionTrigger>
            <AccordionContent>Never. Our business model is subscription-based. We do not monetize, sell, or trade client data to third parties or advertisers.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What happens if I cancel?</AccordionTrigger>
            <AccordionContent>You own your data. Upon cancellation, we provide a full export of your financial records. After 30 days, your data is permanently and irreversibly deleted from our active systems.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <div className="bg-emerald-50 p-8 rounded-2xl mt-12 text-center not-prose border border-emerald-100">
        <h2 className="text-2xl font-bold mb-4 text-emerald-900">Secure by Design</h2>
        <p className="mb-6 text-emerald-700 max-w-2xl mx-auto">Trust isn't given; it's engineered. We've built the safest home for your financial data.</p>
        <Link to="/about/data-security" className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-emerald-500 transition-colors">Read Full Security Policy</Link>
      </div>
    </HowWeThinkLayout>
  );
};

export default DataSecurityPrivacyPage;
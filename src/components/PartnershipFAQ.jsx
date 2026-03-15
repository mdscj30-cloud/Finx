import React, { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const PartnershipFAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    {
      q: "How does the white-label model work?",
      a: "We provide the backend infrastructure, AI automation, and staff. You provide the client relationship. The client portal is branded with your firm's logo, colors, and domain. Your clients never know FinxisAI exists unless you tell them."
    },
    {
      q: "What is the revenue share structure?",
      a: "Partners earn between 30% and 40% of the recurring monthly revenue from each client they onboard. The percentage depends on your partnership tier (Starter, Growth, or Enterprise)."
    },
    {
      q: "Is there any cost to join the partner program?",
      a: "No, there are no upfront costs or monthly fees to become a partner. We only make money when you onboard clients."
    },
    {
      q: "What services are included for my clients?",
      a: "Standard services include AI-driven bookkeeping, monthly reconciliation, financial reporting, and document management. Add-ons like tax prep support and virtual CFO services are also available."
    },
    {
      q: "How long does onboarding take?",
      a: "Once your application is approved, we can set up your white-label portal within 48 hours. Client migration typically takes 3-5 days per batch."
    },
    {
      q: "Do you offer a satisfaction guarantee?",
      a: "Yes. If a client is unhappy with the service in the first 60 days, we refund 100% of the fees, no questions asked."
    },
    {
      q: "Is there a minimum number of clients required?",
      a: "There is no strict minimum to join as a Starter Partner. However, to unlock higher revenue share tiers (35-40%), you'll need to reach volume thresholds (50+ clients)."
    },
    {
      q: "Can I customize the service offering?",
      a: "Yes, Enterprise partners can customize workflows, reports, and service packages to align perfectly with their firm's existing processes."
    },
    {
      q: "How secure is my client data?",
      a: "We use bank-grade 256-bit encryption and are SOC 2 Type II compliant. All data is stored in secure, redundant data centers."
    },
    {
      q: "How do I get started?",
      a: "Simply fill out the application form above. A partner manager will review your application and reach out within 24 hours to schedule an onboarding call."
    }
  ];

  const filteredFaqs = faqs.filter(f => 
    f.q.toLowerCase().includes(searchTerm.toLowerCase()) || 
    f.a.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
        <Input 
          className="pl-10 h-12 text-lg" 
          placeholder="Search questions..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <Accordion type="single" collapsible className="space-y-4">
        {filteredFaqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-slate-200 rounded-lg px-4">
            <AccordionTrigger className="text-left font-semibold text-lg text-slate-900 hover:text-blue-600 hover:no-underline py-4">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 pb-4 text-base leading-relaxed">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      
      {filteredFaqs.length === 0 && (
        <div className="text-center py-8 text-slate-500">
          No questions found matching your search.
        </div>
      )}
    </div>
  );
};

export default PartnershipFAQ;
import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Search, BrainCircuit, ShieldCheck, Zap, UserCheck, ArrowRight, HelpCircle, Briefcase } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateBreadcrumbSchema, generateFAQPageSchema } from '@/lib/seoHelpers';

const FAQAIAccountingPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      question: "What is AI in accounting and financial services?",
      answer: "AI in accounting involves using machine learning algorithms and natural language processing to automate repetitive tasks like data entry, categorization, reconciliation, and report generation. It goes beyond simple automation by learning from patterns, predicting future trends, and identifying anomalies that might indicate errors or fraud."
    },
    {
      question: "Will AI replace human accountants and CPAs?",
      answer: "No, AI is designed to augment, not replace, human accountants. While AI handles 90% of the routine 'grunt work' (processing transactions, matching receipts), human CPAs are essential for high-level strategy, complex tax judgments, client advisory, and ensuring ethical compliance. FinxisAI uses a 'human-in-the-loop' model where AI empowers experts to be more efficient."
    },
    {
      question: "How accurate is AI bookkeeping compared to manual entry?",
      answer: "AI bookkeeping is typically more accurate than manual entry because it eliminates human fatigue and keying errors. FinxisAI's models operate with over 99% accuracy after initial training. Furthermore, our system flags low-confidence transactions for human review, ensuring that accuracy improves over time as the system learns your specific business context."
    },
    {
      question: "Is my financial data safe with AI systems?",
      answer: "Yes, security is a foundational element of modern financial AI. We utilize bank-grade 256-bit encryption for data in transit and at rest. We are SOC 2 Type II compliant, meaning our security controls are independently audited. AI processes data in secure, isolated environments, often with better security protocols than traditional email-based accounting workflows."
    },
    {
      question: "How does AI handle tax preparation and compliance?",
      answer: "AI streamlines tax prep by continuously scanning your financial data throughout the year for deductible expenses and tax credits (like R&D). It categorizes transactions according to tax codes. However, a licensed CPA or Enrolled Agent always reviews and signs the final return to ensure full compliance with current tax laws."
    },
    {
      question: "Can AI detect fraud in my financial records?",
      answer: "Absolutely. One of AI's strengths is anomaly detection. It establishes a baseline of 'normal' activity for your business and instantly flags outliers—such as duplicate payments, unusual vendor names, or spending spikes—that could indicate fraud or errors, often catching issues months before a human audit would."
    },
    {
      question: "What is the role of a human expert in the FinxisAI workflow?",
      answer: "Humans provide the professional judgment that AI cannot. Our dedicated financial experts review complex transactions, handle catch-up work, interpret financial statements for business owners, and manage strategic tax planning. They also validate the AI's output to ensure it aligns with GAAP/IFRS standards."
    },
    {
      question: "Does AI work with both cash and accrual accounting?",
      answer: "Yes. While cash basis is simpler, AI is capable of managing accrual accounting by recognizing revenue when earned and expenses when incurred. It can track Accounts Payable and Receivable, manage prepaid expenses, and handle deferred revenue schedules automatically."
    },
    {
      question: "How does AI handle receipt scanning and matching?",
      answer: "Our AI uses Optical Character Recognition (OCR) to read receipts and invoices instantly. It extracts key data (date, vendor, amount, tax) and automatically matches it to the corresponding bank transaction in your ledger. This eliminates the need for manual receipt data entry."
    },
    {
      question: "Can AI help with cash flow forecasting?",
      answer: "Yes, this is a key benefit of Virtual CFO services. AI analyzes your historical income and expense patterns to predict future cash positions. It can model scenarios (e.g., 'What if sales drop 10%?') to help you make informed decisions about hiring, inventory, and capital investments."
    },
    {
      question: "Is AI compliant with GAAP and IFRS standards?",
      answer: "AI tools themselves are data processors; compliance is determined by the rules they follow. FinxisAI's algorithms are programmed to categorize and report data in accordance with US GAAP (and IFRS where applicable). Our human review process serves as the final check to certify compliance."
    },
    {
      question: "How much time does AI save in the bookkeeping process?",
      answer: "On average, AI reduces the time spent on manual bookkeeping by 80-90%. Tasks that took hours—like reconciling a month of bank statements—can be done in minutes. This frees up business owners to focus on growth and accountants to focus on advisory."
    },
    {
      question: "What accounting software does FinxisAI integrate with?",
      answer: "We integrate seamlessly with major platforms including QuickBooks Online, Xero, Sage Intacct, and NetSuite. Our AI layer sits on top of these ledgers, pushing clean, reconciled data back into your system of record."
    },
    {
      question: "How does AI handle complex or unique transactions?",
      answer: "When the AI encounters a transaction it hasn't seen before or lacks confidence in, it flags it as 'Needs Review.' These are routed to your dedicated human bookkeeper or CPA, who categorizes it correctly. The AI then 'learns' from this correction for future reference."
    },
    {
      question: "What is the difference between automation and AI in accounting?",
      answer: "Automation follows strict, pre-programmed rules (e.g., 'If Vendor = Uber, Category = Travel'). AI uses machine learning to infer rules and adapt. For example, AI can understand that a purchase at 'Shell' is usually 'Fuel', but if the amount is $5.00, it might be 'Snacks/Meals', based on context and history."
    },
    {
      question: "Can AI help prepare for an audit?",
      answer: "Yes. AI maintains a perfect digital audit trail. Every transaction is linked to its source document and categorization history. When an audit occurs, the system can instantly retrieve all substantiating documents, making the process faster and less stressful."
    },
    {
      question: "Is AI expensive for small businesses?",
      answer: "AI actually democratizes access to high-quality accounting. By automating labor-intensive tasks, it lowers the cost of service. FinxisAI offers enterprise-grade bookkeeping and CFO insights at a fraction of the cost of hiring a traditional firm or in-house staff."
    },
    {
      question: "How fast can AI reconcile my books?",
      answer: "Our system processes transactions in real-time or daily batches. Instead of waiting for the end of the month, your books can be reconciled daily, giving you a live view of your financial health at any moment."
    },
    {
      question: "Does the AI learn from my corrections?",
      answer: "Yes, this is called 'supervised learning.' If you or your accountant recategorize a transaction that the AI initially mislabeled, the model updates its understanding for your specific file, improving accuracy with every interaction."
    },
    {
      question: "What is the future of AI in finance?",
      answer: "The future is 'Autonomous Finance' where routine compliance is invisible and automatic. The role of the finance function will shift entirely to strategic foresight—using AI to find growth opportunities, optimize pricing, and manage risk dynamically."
    }
  ];

  const cpaFaqs = [
    {
      question: "How do CPAs use AI safely?",
      answer: "CPAs use AI as a 'co-pilot' rather than a replacement. Safe usage involves verifying AI outputs, maintaining strict data security protocols (like SOC 2 compliance), and ensuring human review for complex judgments. AI handles data processing, while the CPA handles professional skepticism and final validation."
    },
    {
      question: "How can we scale our firm without hiring?",
      answer: "By outsourcing routine tasks (bookkeeping, data entry, initial reconciliations) to an AI-powered partner like FinxisAI, firms can increase capacity without adding headcount. This allows existing staff to manage more clients or focus on higher-margin advisory work."
    },
    {
      question: "What about professional standards and compliance?",
      answer: "Outsourcing partners must adhere to the same professional standards as your firm. FinxisAI's processes are designed to be GAAP compliant, and our human reviewers are trained in US accounting standards. You maintain the final sign-off authority, satisfying AICPA supervision requirements."
    },
    {
      question: "How does human oversight work in your model?",
      answer: "Our 'human-in-the-loop' system ensures that AI never operates unchecked. Every automated entry is assigned a confidence score. Low confidence items are routed to human reviewers. Additionally, senior accountants perform month-end reviews to validate account balances and key reports."
    }
  ];

  const filteredFaqs = useMemo(() => {
    return [...faqs, ...cpaFaqs].filter(faq => 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>AI in Accounting & Financial Services – FAQs | FinxisAI</title>
        <meta name="description" content="Common questions about AI in accounting, accuracy, security, and the future of the CPA profession. Learn how FinxisAI combines automation with human expertise." />
        <link rel="canonical" href="https://finxisai.com/faqs/ai-accounting" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="AI in Accounting & Financial Services – FAQs | FinxisAI" />
        <meta property="og:description" content="Explore the definitive guide to AI in accounting. Answers to top 20 questions about security, automation, and the role of CPAs." />
        
        {/* Schema */}
        <script type="application/ld+json">
          {JSON.stringify(generateFAQPageSchema([...faqs, ...cpaFaqs]))}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(generateBreadcrumbSchema([
            { name: "Home", url: "https://finxisai.com" },
            { name: "Resources", url: "https://finxisai.com/resources" },
            { name: "AI Accounting FAQs", url: "https://finxisai.com/faqs/ai-accounting" }
          ]))}
        </script>
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center"></div>
          <div className="container-max relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-100 font-medium text-sm mb-6">
                <HelpCircle className="w-4 h-4 mr-2 text-blue-300" />
                Knowledge Hub
              </div>
              <h1 className="text-4xl lg:text-6xl font-display font-bold leading-tight mb-6">
                AI in Accounting & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Financial Services</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10">
                Understanding how Artificial Intelligence is transforming the financial landscape—from automated bookkeeping to strategic advisory.
              </p>
              
              <div className="max-w-xl mx-auto relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <Input 
                  type="text" 
                  placeholder="Search questions (e.g., 'security', 'audit', 'CPA')..." 
                  className="pl-12 py-6 bg-white/10 border-slate-700 text-white placeholder:text-slate-400 rounded-full focus:bg-white/20 transition-all backdrop-blur-md"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

               <div className="mt-8 flex justify-center gap-4 text-sm text-slate-300">
                  <span>Quick Links:</span>
                  <a href="#general" className="hover:text-blue-400 underline decoration-blue-400/30 underline-offset-4">General AI</a>
                  <a href="#cpa-specific" className="hover:text-blue-400 underline decoration-blue-400/30 underline-offset-4">For CPA Firms</a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-20 bg-slate-50">
          <div className="container-max max-w-4xl">
            {filteredFaqs.length > 0 ? (
              <div className="space-y-12">
                <div id="general">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                    <BrainCircuit className="w-6 h-6 mr-2 text-blue-600" /> General AI Accounting
                  </h3>
                  <Accordion type="single" collapsible className="space-y-4">
                    {filteredFaqs.filter(f => !cpaFaqs.includes(f)).map((faq, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <AccordionItem value={`item-${index}`} className="bg-white px-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                          <AccordionTrigger className="text-left font-bold text-lg text-slate-800 hover:text-blue-600 hover:no-underline py-6">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-slate-600 leading-relaxed pb-6 text-base">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      </motion.div>
                    ))}
                  </Accordion>
                </div>

                <div id="cpa-specific">
                   <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                    <Briefcase className="w-6 h-6 mr-2 text-indigo-600" /> For CPA Firms & Practitioners
                  </h3>
                  <Accordion type="single" collapsible className="space-y-4">
                    {filteredFaqs.filter(f => cpaFaqs.includes(f)).map((faq, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <AccordionItem value={`cpa-${index}`} className="bg-white px-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                          <AccordionTrigger className="text-left font-bold text-lg text-slate-800 hover:text-indigo-600 hover:no-underline py-6">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-slate-600 leading-relaxed pb-6 text-base">
                            <p className="mb-4">{faq.answer}</p>
                            <div className="flex gap-4 pt-2">
                               <Link to="/services/cpa-bookkeeping" className="text-sm text-indigo-600 font-semibold hover:underline">
                                 Explore CPA Bookkeeping &rarr;
                               </Link>
                               <Link to="/services/cpa-outsourced-support" className="text-sm text-indigo-600 font-semibold hover:underline">
                                 Explore Outsourced Support &rarr;
                               </Link>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </motion.div>
                    ))}
                  </Accordion>
                </div>
              </div>
            ) : (
              <div className="text-center py-20">
                <h3 className="text-xl font-bold text-slate-900 mb-2">No results found</h3>
                <p className="text-slate-500">Try adjusting your search terms.</p>
                <Button variant="link" onClick={() => setSearchQuery('')} className="text-blue-600 mt-2">Clear Search</Button>
              </div>
            )}
          </div>
        </section>

        {/* Explore Services CTA */}
        <section className="py-20 bg-white border-t border-slate-100">
          <div className="container-max text-center">
            <h2 className="text-3xl font-bold mb-12 text-slate-900">See AI in Action Across Our Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link to="/services/ai-bookkeeping" className="group">
                <div className="h-full bg-slate-50 p-6 rounded-xl hover:bg-blue-50 transition-colors border border-slate-100 hover:border-blue-100 shadow-sm hover:shadow-lg">
                  <BrainCircuit className="w-10 h-10 text-blue-600 mb-4 mx-auto group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-lg mb-2 text-slate-900">AI Bookkeeping</h3>
                  <p className="text-sm text-slate-600 mb-4">Automated reconciliation & coding</p>
                  <div className="text-blue-600 text-sm font-semibold flex items-center justify-center">Learn More <ArrowRight className="w-4 h-4 ml-1" /></div>
                </div>
              </Link>
              <Link to="/services/cpa-support" className="group">
                <div className="h-full bg-slate-50 p-6 rounded-xl hover:bg-indigo-50 transition-colors border border-slate-100 hover:border-indigo-100 shadow-sm hover:shadow-lg">
                  <UserCheck className="w-10 h-10 text-indigo-600 mb-4 mx-auto group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-lg mb-2 text-slate-900">CPA Support</h3>
                  <p className="text-sm text-slate-600 mb-4">Back-office leverage for firms</p>
                  <div className="text-indigo-600 text-sm font-semibold flex items-center justify-center">Learn More <ArrowRight className="w-4 h-4 ml-1" /></div>
                </div>
              </Link>
              <Link to="/services/tax-preparation" className="group">
                <div className="h-full bg-slate-50 p-6 rounded-xl hover:bg-emerald-50 transition-colors border border-slate-100 hover:border-emerald-100 shadow-sm hover:shadow-lg">
                  <ShieldCheck className="w-10 h-10 text-emerald-600 mb-4 mx-auto group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-lg mb-2 text-slate-900">Tax Preparation</h3>
                  <p className="text-sm text-slate-600 mb-4">AI-assisted filing & compliance</p>
                  <div className="text-emerald-600 text-sm font-semibold flex items-center justify-center">Learn More <ArrowRight className="w-4 h-4 ml-1" /></div>
                </div>
              </Link>
              <Link to="/services/virtual-cfo" className="group">
                <div className="h-full bg-slate-50 p-6 rounded-xl hover:bg-violet-50 transition-colors border border-slate-100 hover:border-violet-100 shadow-sm hover:shadow-lg">
                  <Zap className="w-10 h-10 text-violet-600 mb-4 mx-auto group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-lg mb-2 text-slate-900">Virtual CFO</h3>
                  <p className="text-sm text-slate-600 mb-4">Strategic forecasting & insights</p>
                  <div className="text-violet-600 text-sm font-semibold flex items-center justify-center">Learn More <ArrowRight className="w-4 h-4 ml-1" /></div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Final Note: Responsible AI */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="container-max max-w-4xl text-center">
            <div className="bg-slate-800 p-8 md:p-12 rounded-3xl border border-slate-700 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-10 pointer-events-none"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6">Our Commitment to Responsible AI</h3>
                <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                  "AI in accounting and financial services works best when used responsibly, transparently, and under professional supervision. Human expertise remains central to accuracy, compliance, and trust."
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link to="/contact">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white border-0">
                      Speak with an Expert
                    </Button>
                  </Link>
                  <Link to="/about">
                    <Button size="lg" variant="outline" className="border-slate-500 text-white hover:bg-white/10 hover:text-white">
                      Learn About Our Team
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default FAQAIAccountingPage;
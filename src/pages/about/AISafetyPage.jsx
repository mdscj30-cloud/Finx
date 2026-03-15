import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation';
import { motion } from 'framer-motion';
import { ShieldAlert, Fingerprint, EyeOff, Bot, Activity, CheckSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { generateOrganizationSchema } from '@/lib/seoHelpers';

const AISafetyPage = () => {
  const breadcrumbs = [
    { label: 'About', path: '/about' },
    { label: 'AI Safety', path: '/about/ai-safety' }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>AI Safety & Responsible Use | FinxisAI</title>
        <meta name="description" content="Read our AI Safety Policy. FinxisAI prioritizes human oversight, data privacy, and deterministic algorithms to ensure responsible financial automation." />
        <link rel="canonical" href="https://finxis.ai/about/ai-safety" />
        <script type="application/ld+json">
          {JSON.stringify(generateOrganizationSchema())}
        </script>
      </Helmet>

      <Header />

      <main className="pt-24 pb-20">
        <div className="container-max">
            <BreadcrumbNavigation items={breadcrumbs} />
            
            <section className="py-12 lg:py-20 text-center max-w-4xl mx-auto">
                 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <div className="inline-flex items-center px-4 py-2 bg-purple-50 rounded-full text-purple-700 font-bold text-sm mb-6 border border-purple-100">
                        <Bot className="w-4 h-4 mr-2" />
                        Responsible Innovation
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-display font-bold text-slate-900 mb-6">
                        AI Safety is <br/><span className="text-purple-600">Non-Negotiable</span>
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed mb-8">
                        We deploy Artificial Intelligence to handle repetitive tasks, not to replace critical judgment. Our safety architecture is designed to prevent errors, bias, and unauthorized data usage.
                    </p>
                 </motion.div>
            </section>

            <section className="grid md:grid-cols-3 gap-8 mb-20">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <EyeOff className="w-10 h-10 text-purple-600 mb-6" />
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Privacy First</h3>
                    <p className="text-slate-600">
                        We utilize private, isolated instances for our AI models. Your financial data is never used to train public foundational models. It remains your property and is siloed from other clients.
                    </p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <Activity className="w-10 h-10 text-purple-600 mb-6" />
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Hallucination Prevention</h3>
                    <p className="text-slate-600">
                        We use Retrieval-Augmented Generation (RAG) and deterministic code execution for calculations. If the AI cannot ground its answer in your provided documents, it is programmed to refuse to answer rather than guess.
                    </p>
                </div>
                 <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <Fingerprint className="w-10 h-10 text-purple-600 mb-6" />
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Human-in-the-Loop</h3>
                    <p className="text-slate-600">
                        High-stakes actions—like filing taxes or sending invoices—always require explicit human approval. The AI suggests; the professional validates.
                    </p>
                </div>
            </section>

            <section className="py-16 bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-slate-100">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Risk-Aware Implementation</h2>
                        <p className="text-slate-600 mb-6 text-lg">
                            Financial data has zero tolerance for error. Our AI implementation follows a strict risk-scoring model.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <ShieldAlert className="w-6 h-6 text-orange-500 mr-4 mt-1" />
                                <div>
                                    <h4 className="font-bold text-slate-900">Low Confidence Flagging</h4>
                                    <p className="text-sm text-slate-600">Any categorization with a confidence score below 90% is automatically routed to a human queue for review.</p>
                                </div>
                            </li>
                             <li className="flex items-start">
                                <CheckSquare className="w-6 h-6 text-emerald-500 mr-4 mt-1" />
                                <div>
                                    <h4 className="font-bold text-slate-900">Auditability</h4>
                                    <p className="text-sm text-slate-600">We maintain a metadata layer that explains <em>why</em> the AI made a decision (e.g., "Matched based on Vendor Name: AWS"). This interpretability is crucial for auditing.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                        <h3 className="text-xl font-bold text-slate-900 mb-4">The Bottom Line</h3>
                        <p className="text-slate-600 mb-6">
                            AI is a tool for efficiency, not a replacement for responsibility. FinxisAI retains full liability for the accuracy of our services, regardless of whether a task was performed by a human or a machine.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/about/our-process">
                                <Button variant="outline" className="w-full">See Our Process</Button>
                            </Link>
                            <Link to="/faqs/ai-accounting">
                                <Button className="w-full bg-purple-600 hover:bg-purple-500">Read FAQs</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AISafetyPage;
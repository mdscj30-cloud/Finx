import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation';
import { motion } from 'framer-motion';
import { ShieldCheck, BrainCircuit, Users, FileCheck, Send, Lock, Eye, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { generateOrganizationSchema } from '@/lib/seoHelpers';

const OurProcessPage = () => {
  const steps = [
    {
      number: "01",
      title: "Secure Data Collection",
      icon: Lock,
      description: "We begin by establishing secure, encrypted connections to your financial institutions. We utilize read-only APIs with bank-grade security protocols (256-bit AES) to aggregate transaction data. No manual upload is required, minimizing human error and data exposure risk.",
      details: [
        "Read-only API access",
        "SOC 2 Type II compliant channels",
        "Automated document retrieval"
      ]
    },
    {
      number: "02",
      title: "AI-Assisted Processing",
      icon: BrainCircuit,
      description: "Our proprietary AI models perform the initial heavy lifting. The system categorizes routine transactions, matches receipts to bank lines, and identifies recurring patterns. Crucially, the AI does not make final judgment calls on ambiguous data—it flags them for review.",
      details: [
        "90% automated categorization",
        "Anomaly detection algorithms",
        "Pattern recognition"
      ]
    },
    {
      number: "03",
      title: "Human Review & Validation",
      icon: Users,
      description: "This is the core of our compliance-first approach. A dedicated financial expert (CPA or Senior Accountant) reviews the AI's work. They handle complex transactions, verify flagged items, and apply professional judgment to ensure GAAP/IFRS compliance.",
      details: [
        "Expert oversight on every file",
        "Complex transaction handling",
        "Strategic adjustment & accruals"
      ]
    },
    {
      number: "04",
      title: "Quality Control & Compliance",
      icon: ShieldCheck,
      description: "Before any data is released, it undergoes a rigorous quality assurance phase. We perform variance analysis to detect outliers and run a comprehensive compliance checklist to ensure tax-readiness and accuracy.",
      details: [
        "Variance analysis checks",
        "30-point QA checklist",
        "Tax-readiness verification"
      ]
    },
    {
      number: "05",
      title: "Delivery & Oversight",
      icon: Send,
      description: "You receive financial reports that are accurate, reviewed, and strategic. We provide not just the 'what' (the numbers) but the 'so what' (the insights). Our team remains available for questions, ensuring you have continuous support.",
      details: [
        "Monthly management reports",
        "Executive summary insights",
        "Ongoing advisory support"
      ]
    }
  ];

  const breadcrumbs = [
    { label: 'About', path: '/about' },
    { label: 'Our Process', path: '/about/our-process' }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>Our Human-Led AI Process | FinxisAI</title>
        <meta name="description" content="Explore FinxisAI's rigorous 5-step financial process. We combine secure data collection and AI efficiency with expert human oversight to ensure accuracy and compliance." />
        <link rel="canonical" href="https://finxis.ai/about/our-process" />
        <script type="application/ld+json">
          {JSON.stringify(generateOrganizationSchema())}
        </script>
      </Helmet>

      <Header />

      <main className="pt-24 pb-20">
        <div className="container-max">
            <BreadcrumbNavigation items={breadcrumbs} />
            
            {/* Hero Section */}
            <section className="py-12 lg:py-20">
                <div className="max-w-4xl">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <h1 className="text-4xl lg:text-6xl font-display font-bold text-slate-900 mb-6 leading-tight">
                            Precision Through <br/>
                            <span className="text-blue-600">Verification.</span>
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mb-8">
                            Artificial Intelligence is a powerful tool, but it is not a replacement for professional judgment. Our process is designed with a "human-in-the-loop" philosophy, ensuring that efficiency never comes at the cost of accuracy or compliance.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* The Process Steps */}
            <section className="py-12">
                <div className="space-y-12 lg:space-y-24 relative">
                    {/* Vertical Line for Desktop */}
                    <div className="hidden lg:block absolute left-[50%] top-0 bottom-0 w-px bg-slate-200 -z-10 transform -translate-x-1/2"></div>

                    {steps.map((step, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className={`flex flex-col lg:flex-row gap-8 lg:gap-24 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                        >
                            <div className="flex-1 w-full">
                                <div className={`bg-white p-8 rounded-2xl shadow-lg border border-slate-100 relative overflow-hidden group hover:shadow-xl transition-all duration-300`}>
                                    <div className="absolute top-0 right-0 p-4 opacity-10 font-display font-bold text-8xl text-slate-900 select-none">
                                        {step.number}
                                    </div>
                                    <div className="relative z-10">
                                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform">
                                            <step.icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                                        <p className="text-slate-600 leading-relaxed mb-6">
                                            {step.description}
                                        </p>
                                        <ul className="space-y-2">
                                            {step.details.map((detail, i) => (
                                                <li key={i} className="flex items-center text-sm text-slate-500 font-medium">
                                                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2" />
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Center Marker */}
                            <div className="hidden lg:flex flex-none w-12 h-12 bg-white border-4 border-blue-100 rounded-full items-center justify-center z-10 shadow-sm">
                                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                            </div>

                            <div className="flex-1 w-full lg:px-8">
                                <div className="prose prose-slate">
                                    <h4 className="text-lg font-bold text-slate-800 mb-2">Why This Matters</h4>
                                    <p className="text-slate-600 text-sm">
                                        By strictly separating the automation phase from the verification phase, we eliminate the "black box" problem often associated with AI. Step {step.number} ensures that {index === 2 ? "a certified professional has eyes on the data" : index === 0 ? "your raw data remains pristine and secure" : "accuracy is mathematically verified"}.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Why This Process Matters */}
            <section className="py-20 mt-12 bg-slate-900 rounded-3xl text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center"></div>
                <div className="container-max relative z-10 text-center max-w-3xl mx-auto">
                    <Eye className="w-12 h-12 text-blue-400 mx-auto mb-6" />
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6">Transparency is Our Default State</h2>
                    <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                        In an industry built on trust, you cannot afford obscurity. Our workflow provides a complete, immutable audit trail. You can see exactly which transactions were auto-categorized, which were manually adjusted, and who performed the final review.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4 justify-center">
                        <Link to="/services/ai-bookkeeping">
                            <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-500 border-0">
                                View AI Bookkeeping
                            </Button>
                        </Link>
                        <Link to="/about/data-security">
                            <Button size="lg" variant="outline" className="w-full border-slate-500 hover:bg-white/10 text-white">
                                Review Data Security
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Related Links */}
            <section className="py-16">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Explore Related Resources</h3>
                <div className="grid md:grid-cols-3 gap-6">
                    <Link to="/services/cpa-support" className="p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all">
                        <h4 className="font-bold text-slate-800 mb-2">CPA Support</h4>
                        <p className="text-sm text-slate-600">How we partner with firms.</p>
                    </Link>
                    <Link to="/faqs/ai-accounting" className="p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all">
                        <h4 className="font-bold text-slate-800 mb-2">AI Accounting FAQs</h4>
                        <p className="text-sm text-slate-600">Common questions answered.</p>
                    </Link>
                    <Link to="/about/ai-safety" className="p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all">
                        <h4 className="font-bold text-slate-800 mb-2">AI Safety</h4>
                        <p className="text-sm text-slate-600">Our safety protocols.</p>
                    </Link>
                </div>
            </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OurProcessPage;
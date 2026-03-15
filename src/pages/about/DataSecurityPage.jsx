import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation';
import { motion } from 'framer-motion';
import { Shield, Lock, Server, FileKey, Eye, Globe, FileCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { generateOrganizationSchema } from '@/lib/seoHelpers';

const DataSecurityPage = () => {
  const breadcrumbs = [
    { label: 'About', path: '/about' },
    { label: 'Data Security', path: '/about/data-security' }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>Data Security & Compliance | FinxisAI</title>
        <meta name="description" content="FinxisAI employs bank-grade security, SOC 2 Type II compliance, and strict data protection protocols. Learn how we safeguard your financial information." />
        <link rel="canonical" href="https://finxisai.com/about/data-security" />
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
                    <div className="inline-flex items-center px-4 py-2 bg-emerald-50 rounded-full text-emerald-700 font-bold text-sm mb-6 border border-emerald-100">
                        <Shield className="w-4 h-4 mr-2" />
                        Enterprise-Grade Protection
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-display font-bold text-slate-900 mb-6">
                        Your Trust is Our <br/><span className="text-emerald-600">Primary Asset</span>
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed mb-8">
                        We operate with the understanding that financial data is sensitive, personal, and critical. Our security infrastructure is built to exceed the standards of traditional financial institutions.
                    </p>
                </motion.div>
            </section>

            <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                    <Lock className="w-10 h-10 text-emerald-600 mb-6" />
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Encryption Everywhere</h3>
                    <p className="text-slate-600">
                        All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption. Your documents and financial records are stored in secure, isolated containers that are inaccessible even to most of our own staff.
                    </p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                    <FileCheck className="w-10 h-10 text-emerald-600 mb-6" />
                    <h3 className="text-xl font-bold text-slate-900 mb-3">SOC 2 Type II</h3>
                    <p className="text-slate-600">
                        We are audited annually by independent third-party firms to ensure our security controls, availability, and confidentiality measures meet strict SOC 2 Type II standards.
                    </p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                    <Server className="w-10 h-10 text-emerald-600 mb-6" />
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Data Sovereignty</h3>
                    <p className="text-slate-600">
                        We respect regional data laws. For our clients in the UK and EU, we ensure data processing aligns with GDPR requirements. US client data is hosted securely within US-based data centers.
                    </p>
                </div>
            </section>

            <section className="py-16 border-t border-slate-200">
                <div className="grid lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Compliance-Focused Practices</h2>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            Security is not just about technology; it's about process. We implement strict governance policies to ensure that our internal practices match our external promises.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <FileKey className="w-6 h-6 text-slate-400 mr-4 mt-1" />
                                <div>
                                    <h4 className="font-bold text-slate-900">Access Control (IAM)</h4>
                                    <p className="text-sm text-slate-600">We utilize a Principle of Least Privilege. Employees act only with the permissions necessary for their role, and access is revoked immediately upon role change or departure.</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <Eye className="w-6 h-6 text-slate-400 mr-4 mt-1" />
                                <div>
                                    <h4 className="font-bold text-slate-900">Activity Logging</h4>
                                    <p className="text-sm text-slate-600">Every interaction with your data—whether by a human agent or our AI—is logged in an immutable audit trail. We monitor these logs for anomalous behavior 24/7.</p>
                                </div>
                            </li>
                             <li className="flex items-start">
                                <Globe className="w-6 h-6 text-slate-400 mr-4 mt-1" />
                                <div>
                                    <h4 className="font-bold text-slate-900">Vendor Risk Management</h4>
                                    <p className="text-sm text-slate-600">We rigorously vet all sub-processors and third-party vendors (e.g., cloud providers) to ensure they meet our high security standards.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-slate-900 rounded-3xl p-8 text-white">
                        <h3 className="text-xl font-bold mb-6">Responsible Use of AI</h3>
                        <p className="text-slate-300 mb-6">
                            We believe that Artificial Intelligence must be used responsibly, especially in finance. Our models are trained to prioritize accuracy over creativity.
                        </p>
                        <div className="space-y-4">
                            <div className="p-4 bg-white/10 rounded-xl border border-white/10">
                                <h5 className="font-bold text-emerald-400 mb-1">No Public Training</h5>
                                <p className="text-xs text-slate-300">We do not use your proprietary financial data to train public AI models (like ChatGPT). Your data remains isolated to your instance or aggregated only for generic, anonymized industry benchmarking if opted-in.</p>
                            </div>
                            <div className="p-4 bg-white/10 rounded-xl border border-white/10">
                                <h5 className="font-bold text-emerald-400 mb-1">Deterministic Outputs</h5>
                                <p className="text-xs text-slate-300">Where possible, we use deterministic algorithms for calculations to avoid AI "hallucinations." If the AI is unsure, it is programmed to ask a human, not guess.</p>
                            </div>
                        </div>
                        <div className="mt-8">
                             <Link to="/about/ai-safety">
                                <Button className="w-full bg-emerald-600 hover:bg-emerald-500">Read our AI Safety Policy</Button>
                             </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 text-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Transparency Commitment</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
                    We are committed to full transparency regarding how your data is collected, processed, and stored. If you have any security concerns, you can reach our dedicated security team directly.
                </p>
                <Link to="/contact">
                    <Button variant="outline" size="lg">Contact Security Team</Button>
                </Link>
            </section>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DataSecurityPage;
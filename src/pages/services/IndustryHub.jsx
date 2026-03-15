import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Briefcase, ShoppingCart, Stethoscope, 
  Rocket, Layers, CheckCircle2 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateBreadcrumbSchema } from '@/lib/seoHelpers';

const IndustryHub = () => {
  const industries = [
    {
      title: "SaaS & Tech",
      icon: Rocket,
      color: "blue",
      desc: "Financial infrastructure for recurring revenue models. Managing MRR, burn rate, and R&D credits.",
      links: [
        { title: "Bookkeeping for SaaS Companies", path: "/industries/bookkeeping/saas-companies" },
        { title: "Accounting for Startups", path: "/industries/accounting/saas-startups" },
        { title: "Virtual CFO for SaaS", path: "/industries/virtual-cfo/saas-businesses" }
      ]
    },
    {
      title: "E-Commerce",
      icon: ShoppingCart,
      color: "emerald",
      desc: "Multi-channel reconciliation and inventory accounting. Know your true margins across Shopify and Amazon.",
      links: [
        { title: "Bookkeeping for E-Commerce", path: "/industries/bookkeeping/ecommerce-businesses" },
        { title: "Accounting for Online Stores", path: "/industries/accounting/online-stores" },
        { title: "Sales Tax Compliance", path: "/industries/sales-tax/ecommerce" },
        { title: "Virtual CFO for Brands", path: "/industries/virtual-cfo/ecommerce-brands" }
      ]
    },
    {
      title: "Healthcare",
      icon: Stethoscope,
      color: "red",
      desc: "HIPAA-compliant financial services for medical practices, dental clinics, and healthcare providers.",
      links: [
        { title: "Bookkeeping for Practices", path: "/industries/bookkeeping/healthcare-practices" },
        { title: "Accounting for Clinics", path: "/industries/accounting/medical-dental-clinics" },
        { title: "Payroll for Providers", path: "/industries/payroll/healthcare-providers" }
      ]
    },
    {
      title: "Agencies",
      icon: Layers,
      color: "purple",
      desc: "Project-based accounting for marketing and creative agencies. Track utilization and client profitability.",
      links: [
        { title: "Bookkeeping for Agencies", path: "/industries/bookkeeping/marketing-creative-agencies" },
        { title: "Accounting for Digital Agencies", path: "/industries/accounting/digital-agencies" },
        { title: "Virtual CFO for Agencies", path: "/industries/virtual-cfo/agencies" }
      ]
    },
    {
      title: "Professional Services",
      icon: Briefcase,
      color: "slate",
      desc: "Precision accounting for law firms, consultants, and architects. Trust accounting and billable hours.",
      links: [
        { title: "Bookkeeping for Firms", path: "/industries/bookkeeping/professional-services" },
        { title: "Accounting for Startups", path: "/industries/accounting/startups" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <Helmet>
        <title>Industry-Specific Financial Services | FinxisAI</title>
        <meta name="description" content="Explore FinxisAI's specialized accounting and bookkeeping services tailored for SaaS, E-Commerce, Healthcare, and Agencies." />
        <link rel="canonical" href="https://finxis.ai/services/by-industry" />
        <script type="application/ld+json">
          {JSON.stringify(generateBreadcrumbSchema([
             { name: "Home", url: "https://finxis.ai" },
             { name: "Services", url: "https://finxis.ai/services" },
             { name: "By Industry", url: "https://finxis.ai/services/by-industry" }
          ]))}
        </script>
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center"></div>
          <div className="container-max relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-8">
                Industry-Specific <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Financial Services</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10">
                Accounting isn't one-size-fits-all. We provide specialized financial infrastructure tailored to the unique business models of SaaS, E-Commerce, Healthcare, and more.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 bg-white">
          <div className="container-max max-w-4xl text-center">
             <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Industry Specialization Matters</h2>
             <p className="text-lg text-slate-600 leading-relaxed mb-8">
               A generalist bookkeeper might treat all revenue the same. But we know that SaaS revenue is recognized over time, E-Commerce revenue has complex fee deductions, and Healthcare revenue involves insurance adjustments. Our industry-specific teams understand your metrics, your tech stack, and your regulatory environment.
             </p>
          </div>
        </section>

        {/* Industry Grid */}
        <section className="py-16 bg-slate-50">
          <div className="container-max">
            <div className="grid gap-12">
              {industries.map((ind, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                  <div className={`bg-${ind.color}-50 p-6 border-b border-${ind.color}-100 flex items-center gap-4`}>
                    <div className={`w-12 h-12 rounded-xl bg-${ind.color}-100 flex items-center justify-center text-${ind.color}-600`}>
                      <ind.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900">{ind.title}</h2>
                      <p className="text-slate-600 text-sm mt-1">{ind.desc}</p>
                    </div>
                  </div>
                  <div className="p-8 grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {ind.links.map((link, lIdx) => (
                      <Link key={lIdx} to={link.path} className="group block h-full">
                        <div className="h-full p-4 rounded-xl border border-slate-100 bg-slate-50 group-hover:bg-white group-hover:shadow-md group-hover:border-blue-200 transition-all flex items-center justify-between">
                          <span className="font-semibold text-slate-800 group-hover:text-blue-600">{link.title}</span>
                          <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 text-blue-500" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-slate-900 text-white text-center">
          <div className="container-max">
            <h2 className="text-3xl font-bold mb-6">Don't See Your Industry?</h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              We work with many other sectors including Construction, Nonprofits, and Real Estate. Contact us to see how we can support your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white border-0 shadow-lg">
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default IndustryHub;
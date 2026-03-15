import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Scale, BookOpen, Calculator, ShieldCheck, 
  Users, BrainCircuit, TrendingUp, CheckCircle2, Globe, Building 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateBreadcrumbSchema } from '@/lib/seoHelpers';

const ComparisonHub = () => {
  const categories = [
    {
      title: "AI vs. Offshore Teams",
      icon: Globe,
      color: "cyan",
      comparisons: [
        {
          title: "AI-Enabled Accounting vs. Offshore Teams",
          desc: "Strategic cost-benefit analysis of domestic AI vs cheap labor.",
          path: "/comparisons/ai-enabled-accounting-vs-offshore-teams"
        },
        {
          title: "AI Bookkeeping vs. Offshore Bookkeeping",
          desc: "Accuracy and speed comparison for data entry solutions.",
          path: "/comparisons/ai-bookkeeping-vs-offshore-bookkeeping"
        },
        {
          title: "Virtual CFO vs. Offshore Finance Teams",
          desc: "Strategic value comparison for growth-stage companies.",
          path: "/comparisons/virtual-cfo-vs-offshore-finance-teams"
        }
      ]
    },
    {
      title: "In-House vs. Outsourced",
      icon: Users,
      color: "blue",
      comparisons: [
        {
          title: "In-House Finance Team vs. Virtual CFO",
          desc: "Building a stack vs hiring a department.",
          path: "/comparisons/in-house-finance-team-vs-virtual-cfo"
        },
        {
          title: "In-House Accountant vs. Outsourced Accounting",
          desc: "Efficiency and cost guide for SMBs.",
          path: "/comparisons/in-house-accountant-vs-outsourced-accounting"
        },
        {
          title: "In-House Bookkeeper vs. Outsourced",
          desc: "The SMB guide to reliable books.",
          path: "/comparisons/in-house-bookkeeper-vs-outsourced-bookkeeping"
        },
        {
          title: "In-House Payroll vs. Outsourced Payroll",
          desc: "Risk and compliance check for employers.",
          path: "/comparisons/in-house-payroll-vs-outsourced-payroll"
        }
      ]
    },
    {
      title: "Big 4 vs. AI-Enabled",
      icon: Building,
      color: "indigo",
      comparisons: [
        {
          title: "Big 4 vs. AI-Enabled Accounting (SMB)",
          desc: "Why modern SMBs are leaving legacy firms.",
          path: "/comparisons/big-4-vs-ai-enabled-accounting-smb"
        },
        {
          title: "Big 4 Tax vs. AI-Enabled Tax",
          desc: "ROI analysis of reactive filing vs proactive planning.",
          path: "/comparisons/big-4-tax-vs-ai-enabled-tax-smb"
        },
        {
          title: "Big 4 Payroll vs. AI-Enabled Payroll",
          desc: "Agility vs Legacy infrastructure comparison.",
          path: "/comparisons/big-4-payroll-vs-ai-enabled-payroll-smb"
        }
      ]
    },
    {
      title: "Strategic Positioning",
      icon: Calculator,
      color: "purple",
      comparisons: [
        {
          title: "DIY Software vs. AI-Enabled Services",
          desc: "The founder's dilemma: Time vs Cost.",
          path: "/comparisons/diy-accounting-software-vs-ai-enabled-services"
        },
        {
          title: "Freelance Accountant vs. AI-Enabled Firm",
          desc: "Reliability and scalability comparison.",
          path: "/comparisons/freelance-accountant-vs-ai-enabled-firm"
        },
        {
          title: "Accounting Firm vs. Bookkeeping vs. AI Hybrid",
          desc: "Understanding the full-stack finance model.",
          path: "/comparisons/accounting-firm-vs-bookkeeping-vs-ai-hybrid"
        },
        {
          title: "Traditional Tax Prep vs. AI Tax Planning",
          desc: "Saving money vs just filing forms.",
          path: "/comparisons/traditional-tax-prep-vs-ai-tax-planning"
        },
        {
          title: "Spreadsheet Accounting vs. AI-Enabled",
          desc: "Moving past Excel to professional ledgers.",
          path: "/comparisons/spreadsheet-accounting-vs-ai-enabled"
        }
      ]
    },
    {
      title: "Core Services",
      icon: BookOpen,
      color: "emerald",
      comparisons: [
        {
          title: "AI-Assisted vs Manual Accounting",
          desc: "Speed, accuracy, and efficiency comparison.",
          path: "/comparisons/ai-assisted-accounting-vs-manual-accounting"
        },
        {
          title: "AI-Assisted vs Manual Reconciliation",
          desc: "Reducing errors in month-end close.",
          path: "/comparisons/ai-assisted-reconciliation-vs-manual"
        },
        {
          title: "AI vs Traditional Bookkeeping",
          desc: "A practical guide for choosing the right model.",
          path: "/comparisons/ai-vs-traditional-bookkeeping"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <Helmet>
        <title>Financial Service Comparisons | AI vs Traditional | FinxisAI</title>
        <meta name="description" content="Comprehensive comparisons of financial service models. Compare AI vs Offshore, In-House vs Outsourced, and Big 4 vs Modern Firms to make data-driven decisions." />
        <link rel="canonical" href="https://finxisai.com/comparisons" />
        <script type="application/ld+json">
          {JSON.stringify(generateBreadcrumbSchema([
             { name: "Home", url: "https://finxisai.com" },
             { name: "Comparisons", url: "https://finxisai.com/comparisons" }
          ]))}
        </script>
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center"></div>
          <div className="container-max relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-100 font-medium text-sm mb-6">
                <Scale className="w-4 h-4 mr-2 text-blue-300" />
                Comparison Hub
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-8">
                Make The Right Financial Choice <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">With Data, Not Guesses</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10">
                Unbiased, deep-dive comparisons of every major financial service model. From offshoring to AI, we break down the true costs and benefits.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white border-0 shadow-lg w-full sm:w-auto">
                    Get A Recommendation
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="bg-white border-b border-slate-200">
          <div className="container-max py-4">
            <nav className="flex items-center text-sm text-slate-500">
               <Link to="/" className="hover:text-blue-600">Home</Link>
               <ArrowRight className="w-4 h-4 mx-2" />
               <span className="text-slate-800 font-medium">Comparisons</span>
            </nav>
          </div>
        </div>

        {/* Categories Grid */}
        <section className="py-16 bg-slate-50">
          <div className="container-max">
            <div className="grid gap-12">
              {categories.map((category, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                  <div className={`bg-${category.color}-50 p-6 border-b border-${category.color}-100 flex items-center gap-4`}>
                    <div className={`w-12 h-12 rounded-xl bg-${category.color}-100 flex items-center justify-center text-${category.color}-600`}>
                      <category.icon className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">{category.title}</h2>
                  </div>
                  <div className="p-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.comparisons.map((comp, cIdx) => (
                      <Link key={cIdx} to={comp.path} className="group block h-full">
                        <motion.div 
                          whileHover={{ y: -5 }}
                          className="h-full p-6 rounded-xl border border-slate-100 bg-slate-50 group-hover:bg-white group-hover:shadow-md group-hover:border-blue-200 transition-all"
                        >
                          <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-blue-600 flex items-center justify-between">
                            {comp.title}
                          </h3>
                          <p className="text-sm text-slate-600 mb-4">{comp.desc}</p>
                          <span className="text-xs font-semibold text-blue-600 flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                            Read Comparison <ArrowRight className="w-3 h-3 ml-1" />
                          </span>
                        </motion.div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="container-max text-center">
            <h2 className="text-3xl font-bold mb-6">Still Analysis Paralysis?</h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Our team helps hundreds of businesses navigate these choices every month. Let's discuss your specific situation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white border-0 shadow-lg w-full sm:w-auto">
                  Talk to an Expert
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

export default ComparisonHub;
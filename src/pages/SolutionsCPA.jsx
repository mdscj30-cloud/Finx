import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LeadForm from '@/components/LeadForm';
import { motion } from 'framer-motion';
import { Users, Clock, TrendingUp, FileText, Brain, ArrowRight, Star, BarChart, UserCheck, Lightbulb, Activity, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import OptimizedImage from '@/components/OptimizedImage';

const SolutionsCPA = () => {
  const challenges = [
    { icon: Clock, title: 'Time-Consuming Manual Work', description: 'Hours lost to data entry, reconciliation, and chasing clients for documents.' },
    { icon: TrendingUp, title: 'Pressure to Provide More Value', description: 'Clients expect strategic advice, not just compliance and bookkeeping.' },
    { icon: Users, title: 'Scaling Your Practice', description: 'Struggling to grow your client base without overwhelming your team.' },
  ];

  const solutions = [
    { icon: Brain, title: 'Automate 90% of Bookkeeping', description: 'Our AI handles transaction coding, reconciliation, and document processing, freeing up your team for high-value work.' },
    { icon: FileText, title: 'Unified Client Workspace', description: 'A single, secure portal for document exchange, communication, and real-time financial dashboards for your clients.' },
    { icon: TrendingUp, title: 'Become a Strategic Advisor', description: 'Leverage AI-powered insights, forecasting, and scenario modeling to provide proactive, data-driven advice.' },
  ];
  
  const featureHighlights = [
    { icon: Clock, title: 'Time Tracking', description: 'Log billable hours against clients and tasks effortlessly.' },
    { icon: UserCheck, title: 'Client Summaries', description: 'Get an at-a-glance overview of each client\'s status and needs.' },
    { icon: Lightbulb, title: 'Financial Insights', description: 'AI-driven alerts for cash flow, expenses, and revenue opportunities.' },
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "CPA Practice Management Software",
    "provider": {
      "@type": "Organization",
      "name": "FinxisAI"
    },
    "areaServed": ["US", "UK"],
    "description": "AI-powered automation and practice management software for CPA firms.",
    "offers": {
      "@type": "Offer",
      "price": "Custom",
      "priceCurrency": "USD"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://finxisai.com/"
    },{
      "@type": "ListItem",
      "position": 2,
      "name": "Solutions for CPAs",
      "item": "https://finxisai.com/solutions/cpa"
    }]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Helmet>
        <title>AI Accounting Software for CPA Firms | FinxisAI</title>
        <meta name="description" content="Empower your CPA firm with FinxisAI. Automate bookkeeping, streamline client management, and scale your advisory services with our AI-powered platform." />
        <meta name="keywords" content="CPA software, accounting practice management, automated bookkeeping for accountants, client portal for CPAs, AI accounting tools" />
        <link rel="canonical" href="https://finxisai.com/solutions/cpa" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://finxisai.com/solutions/cpa" />
        <meta property="og:title" content="FinxisAI for CPAs - Automate Your Practice" />
        <meta property="og:description" content="Stop chasing paperwork. Start driving strategy. The operating system for modern accounting firms." />
        <meta property="og:image" content="https://finxisai.com/images/cpa-dashboard-og.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FinxisAI for CPAs" />
        <meta name="twitter:description" content="Automate 90% of bookkeeping and scale your advisory services." />

        {/* Schema */}
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <Header />
      <main>
        <section className="pt-32 pb-20 section-padding bg-white">
          <div className="container-max grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full text-blue-700 font-medium text-sm mb-6">
                <Users className="w-4 h-4 mr-2" />
                For Modern CPA Firms
              </div>
              <h1 className="text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
                The Operating System for Your <span className="gradient-text">Accounting Practice</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                Stop chasing paperwork and start driving strategy. FinxisAI automates the mundane so you can focus on what matters most: your clients' success.
              </p>
              <Button asChild className="mt-8 btn-primary group">
                <Link to="/contact">
                  Request a Demo
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <div className="p-4 bg-slate-100 rounded-2xl border border-slate-200">
                <OptimizedImage 
                  className="rounded-xl shadow-2xl w-full" 
                  alt="A sleek, futuristic CPA dashboard UI showing multiple client metrics, task lists, and team activity charts." 
                  src="https://images.unsplash.com/photo-1625296276703-3fbc924f07b5" 
                />
              </div>
              <p className="text-center text-sm text-slate-500 mt-4">Built for modern CPAs – manage clients, tasks, and insights in one place.</p>
            </motion.div>
          </div>
        </section>
        
        <section className="section-padding">
          <div className="container-max">
            <div className="grid md:grid-cols-3 gap-8">
              {featureHighlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-2xl bg-white/50 border border-slate-200 text-center"
                >
                  <div className="feature-icon bg-gradient-to-br from-blue-500 to-indigo-600 mb-6 mx-auto">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-slate-800">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold mb-4">Your Firm's Biggest Challenges, Solved.</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">We built FinxisAI to address the core pain points of growing accounting firms.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {challenges.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-2xl bg-white/50 border border-slate-200 text-center"
                >
                  <div className="feature-icon bg-gradient-to-br from-red-500 to-orange-500 mb-6 mx-auto">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-slate-800">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-max">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                <OptimizedImage 
                  className="rounded-2xl shadow-2xl w-full" 
                  alt="A sleek dashboard on a tablet showing automated bookkeeping workflows, with data flowing from bank feeds to financial reports seamlessly." 
                  src="https://images.unsplash.com/photo-1693917000983-3b48d0deff74" 
                />
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                <h2 className="text-4xl font-display font-bold mb-6">The FinxisAI Solution</h2>
                <p className="text-lg text-slate-600 mb-8">Our unified platform empowers your firm to operate with unprecedented efficiency and intelligence.</p>
                <div className="space-y-6">
                  {solutions.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-4 mt-1">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-slate-800">{item.title}</h4>
                        <p className="text-slate-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-max text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <OptimizedImage 
                className="w-20 h-20 rounded-full mx-auto mb-6 object-cover" 
                alt="Portrait of a smiling, confident female CPA firm partner in a modern office." 
                src="https://images.unsplash.com/photo-1493882552576-fce827c6161e" 
              />
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
              </div>
              <blockquote className="text-2xl font-medium text-slate-800 mb-6">
                "FinxisAI has been a game-changer. We've cut our bookkeeping time by 70%, allowing us to triple our advisory services revenue. It's the best investment we've ever made in our practice."
              </blockquote>
              <div>
                <p className="font-bold text-slate-900">Laura Chen</p>
                <p className="text-slate-600">Managing Partner, Chen & Associates</p>
              </div>
            </motion.div>
          </div>
        </section>
        
        <section className="section-padding bg-white">
          <div className="container-max">
            <LeadForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SolutionsCPA;
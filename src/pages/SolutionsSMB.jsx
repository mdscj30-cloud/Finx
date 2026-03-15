import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LeadForm from '@/components/LeadForm';
import { motion } from 'framer-motion';
import { DollarSign, BarChart2, Zap, ArrowRight, Star, CheckCircle, Upload, MessageSquare, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import OptimizedImage from '@/components/OptimizedImage';

const SolutionsSMB = () => {
  const challenges = [
    { icon: DollarSign, title: 'Managing Cash Flow', description: 'Uncertainty about your financial position makes it hard to plan for growth.' },
    { icon: BarChart2, title: 'Lack of Financial Insights', description: 'Struggling to understand your numbers and make data-driven decisions.' },
    { icon: Zap, title: 'Time-Wasting Admin', description: 'Endless hours spent on bookkeeping, invoicing, and chasing payments.' },
  ];

  const solutions = [
    { icon: BarChart2, title: 'Real-Time Financial Dashboard', description: 'Your entire financial picture—cash, revenue, spending—in one simple, visual dashboard.' },
    { icon: Zap, title: 'Automated Bookkeeping & Invoicing', description: 'Connect your accounts and let our AI handle the bookkeeping, from categorizing expenses to sending invoice reminders.' },
    { icon: DollarSign, title: 'AI-Powered Cost Savings', description: 'Our system proactively finds duplicate subscriptions, better vendor pricing, and tax credit opportunities.' },
  ];
  
  const clientPortalFeatures = [
    { icon: CheckCircle, text: 'View Tasks' },
    { icon: Upload, text: 'Upload Documents' },
    { icon: MessageSquare, text: 'Chat with Your CPA' },
    { icon: Activity, text: 'Real-time Status' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Helmet>
        <title>Small Business Financial Automation | FinxisAI</title>
        <meta name="description" content="Get your finances on autopilot with FinxisAI. Real-time dashboards, automated bookkeeping, and AI-powered insights to help your business grow." />
      </Helmet>
      <Header />
      <main>
        <section className="pt-32 pb-20 section-padding bg-white">
          <div className="container-max grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full text-emerald-700 font-medium text-sm mb-6">
                <DollarSign className="w-4 h-4 mr-2" />
                For Small & Medium Businesses
              </div>
              <h1 className="text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
                Your Finances on <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">Autopilot</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                Focus on growing your business, not on bookkeeping. FinxisAI gives you the financial clarity and automation you need to succeed.
              </p>
              <Button asChild className="mt-8 btn-primary group !from-emerald-500 !to-teal-500">
                <Link to="/onboarding">
                  Get Started Free
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <OptimizedImage 
                className="rounded-2xl shadow-2xl w-full" 
                alt="A small business owner confidently looking at a tablet displaying a clean, colorful financial dashboard with growth charts." 
                src="https://images.unsplash.com/photo-1571677246347-5040036b95cc" 
              />
            </motion.div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-max grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <div className="p-4 bg-slate-100 rounded-2xl border border-slate-200">
                <OptimizedImage 
                  className="rounded-xl shadow-2xl w-full" 
                  alt="A clean, user-friendly client portal dashboard showing task lists, a messaging interface, and a document upload area." 
                  src="https://images.unsplash.com/photo-1634084462388-17a2db98cce2" 
                />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-display font-bold mb-6">Empower Your Clients with <span className="gradient-text">Transparency</span></h2>
              <p className="text-lg text-slate-600 mb-8">Our secure client portal provides a single source of truth, fostering collaboration and trust between you and your accountant.</p>
              <div className="grid grid-cols-2 gap-6">
                {clientPortalFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center p-4 bg-white/50 rounded-lg border border-slate-200">
                    <feature.icon className="w-6 h-6 mr-3 text-blue-600" />
                    <span className="font-semibold text-slate-700">{feature.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold mb-4">Stop Drowning in Financial Admin</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">From messy spreadsheets to chasing invoices, we automate the work you hate.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {challenges.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-2xl bg-slate-50/50 border border-slate-200 text-center"
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
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                <h2 className="text-4xl font-display font-bold mb-6">The FinxisAI Solution for SMBs</h2>
                <p className="text-lg text-slate-600 mb-8">Get the financial expertise of a CFO and the efficiency of an AI-powered finance team, all in one platform.</p>
                <div className="space-y-6">
                  {solutions.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center mr-4 mt-1">
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
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                <OptimizedImage 
                  className="rounded-2xl shadow-2xl w-full" 
                  alt="A financial dashboard on a laptop showing real-time cash flow, profit & loss, and a list of AI-suggested cost savings." 
                  src="https://images.unsplash.com/photo-1571677246347-5040036b95cc" 
                />
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
                alt="Portrait of a smiling, successful small business owner in their workshop." 
                src="https://images.unsplash.com/photo-1580128637392-35b81ba47467" 
              />
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
              </div>
              <blockquote className="text-2xl font-medium text-slate-800 mb-6">
                "I used to spend my weekends doing bookkeeping. With FinxisAI, it's all done for me. I finally have the time and the financial clarity to focus on growing my business."
              </blockquote>
              <div>
                <p className="font-bold text-slate-900">Mark Johnson</p>
                <p className="text-slate-600">Founder, Artisan Coffee Co.</p>
              </div>
            </motion.div>
          </div>
        </section>
        
        <section className="section-padding">
          <div className="container-max">
            <LeadForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SolutionsSMB;
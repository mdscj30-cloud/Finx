import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Briefcase, BrainCircuit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const JobOpening = ({ title, location, department, delay }) => {
  const handleApply = () => {
    toast({
      title: `Apply for ${title}`,
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-lg border shadow-sm hover:shadow-lg transition-shadow"
    >
      <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
      <div className="flex items-center space-x-4 text-sm text-slate-500 mb-4">
        <div className="flex items-center"><Briefcase className="w-4 h-4 mr-1.5" /> {department}</div>
        <div className="flex items-center"><MapPin className="w-4 h-4 mr-1.5" /> {location}</div>
      </div>
      <Button onClick={handleApply} variant="outline" className="w-full sm:w-auto group">
        Apply Now <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </Button>
    </motion.div>
  );
};

const CareersPage = () => {
  const jobOpenings = [
    { title: 'Senior Backend Engineer (AI/ML)', department: 'Engineering', location: 'London, UK / Remote' },
    { title: 'Product Manager - Financial Automation', department: 'Product', location: 'New York, USA' },
    { title: 'AI Research Scientist', department: 'AI & Research', location: 'Remote' },
    { title: 'Senior Customer Success Manager', department: 'Customer Success', location: 'New York, USA' },
    { title: 'Content Marketing Lead (Fintech)', department: 'Marketing', location: 'Remote' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Helmet>
        <title>Careers - Join FinxisAI</title>
        <meta name="description" content="Join the FinxisAI team and help us build the future of financial automation. Explore our open positions." />
      </Helmet>
      <Header />
      <main>
        <section className="pt-32 pb-20 section-padding bg-white">
          <div className="container-max text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full text-blue-700 font-medium text-sm mb-6">
                <BrainCircuit className="w-4 h-4 mr-2" />
                Shape the Future of Finance
              </div>
              <h1 className="text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
                Work With Us at <span className="gradient-text">FinxisAI</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                We're a passionate team of innovators, builders, and problem-solvers dedicated to revolutionizing the financial industry.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-3xl font-bold text-center mb-10">Current Openings</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {jobOpenings.map((job, index) => (
                <JobOpening key={index} {...job} delay={index * 0.1} />
              ))}
            </div>
            <div className="text-center mt-12 bg-white p-8 rounded-xl shadow-lg border">
              <h3 className="text-2xl font-bold mb-3">Don't see your role?</h3>
              <p className="text-slate-600 mb-6 max-w-xl mx-auto">We're always looking for talented people. If you believe you're a great fit for our mission, we'd love to hear from you.</p>
              <a href="mailto:hello@finxisai.com">
                <Button className="btn-primary group">
                  Get In Touch <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CareersPage;
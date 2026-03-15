import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'How does FinxisAI ensure data security and compliance?',
      answer: 'FinxisAI employs bank-grade encryption, is SOC 2 compliant, and follows strict data protection protocols like GDPR. All data is encrypted in transit and at rest, with regular security audits to ensure the highest level of security.'
    },
    {
      question: 'Can FinxisAI integrate with existing accounting software?',
      answer: 'Yes, FinxisAI seamlessly integrates with popular accounting platforms like QuickBooks, Xero, Sage, and others. Our API-first approach ensures smooth data synchronization and workflow continuity.'
    },
    {
      question: 'What currencies does FinxisAI support?',
      answer: 'FinxisAI supports all major currencies, including USD, GBP, and EUR, with real-time exchange rates for accurate, global financial management.'
    },
    {
      question: 'How accurate is the document AI and OCR technology?',
      answer: 'Our AI-powered OCR achieves 99.5% accuracy for standard financial documents. The system continuously learns and improves, with manual review options for critical documents to ensure 100% accuracy.'
    },
    {
      question: 'What kind of support and training do you provide?',
      answer: 'We offer comprehensive onboarding, video tutorials, live training sessions, and 24/7 support. Enterprise customers get dedicated account managers and custom training programs for their teams.'
    },
    {
      question: 'Can I try FinxisAI before committing to a paid plan?',
      answer: 'Absolutely! We offer a 14-day free trial with full access to all features. No credit card required. Our team also provides personalized demos to help you understand how FinxisAI can benefit your specific use case.'
    }
  ];

  return (
    <section id="faq" className="section-padding bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
            Frequently Asked{' '}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Get answers to common questions about FinxisAI's features, security, and implementation.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-b border-slate-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 text-left flex items-center justify-between"
              >
                <h3 className="text-lg font-semibold text-slate-800 pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-blue-600 flex-shrink-0" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-slate-600 leading-relaxed pb-6">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-slate-600 mb-6">
            Still have questions? Our team is here to help.
          </p>
          <Button asChild className="btn-primary">
            <Link to="/contact">
              Contact Support
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
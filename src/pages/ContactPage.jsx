import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LeadForm from '@/components/LeadForm';
import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import { generateBreadcrumbSchema, generateServiceSchema } from '@/lib/seoHelpers';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Helmet>
        <title>Contact FinxisAI | Support & Sales</title>
        <meta name="description" content="Get in touch with FinxisAI. Request a demo, get support, or partner with us to transform your financial workflows." />
        <meta name="keywords" content="contact FinxisAI, customer support, sales inquiry, fintech support" />
        <link rel="canonical" href="https://finxis.ai/contact" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://finxis.ai/contact" />
        <meta property="og:title" content="Contact FinxisAI" />
        <meta property="og:description" content="We're here to help. Reach out to our team today." />
        <meta property="og:image" content="https://finxis.ai/images/contact-og.jpg" />

        {/* Schema */}
        <script type="application/ld+json">
          {JSON.stringify(generateBreadcrumbSchema([
             { name: "Home", url: "https://finxis.ai" },
             { name: "Contact", url: "https://finxis.ai/contact" }
          ]))}
        </script>
        <script type="application/ld+json">
           {JSON.stringify(generateServiceSchema("Customer Support & Sales", "Contact FinxisAI for enterprise sales, technical support, and partnership inquiries."))}
        </script>
      </Helmet>
      <Header />
      <main>
        <section aria-label="Contact Hero" className="pt-32 pb-20 section-padding bg-white">
          <div className="container-max text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
                Let's <span className="gradient-text">Connect</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Whether you have a question, want a demo, or are ready to get started, we're here to help.
              </p>
            </motion.div>
          </div>
        </section>

        <section aria-label="Contact Form and Info" className="section-padding">
          <div className="container-max">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <LeadForm />
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h2 className="text-3xl font-bold">Other Ways to Reach Us</h2>
                <div className="flex items-start space-x-4">
                  <div className="feature-icon bg-gradient-to-br from-blue-500 to-indigo-600">
                    <Mail className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email Us</h3>
                    <p className="text-slate-600">For general inquiries and support.</p>
                    <a href="mailto:hello@finxisai.com" className="text-blue-600 font-medium hover:underline">hello@finxisai.com</a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="feature-icon bg-gradient-to-br from-purple-500 to-pink-500">
                    <MapPin className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Mailing Address</h3>
                    <p className="text-slate-600">PO Box 830, Wilmington, Delaware 19801 – 830</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const PrivacyPolicyPage = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy",
    "description": "FinxisAI Privacy Policy",
    "publisher": {
      "@type": "Organization",
      "name": "FinxisAI"
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Privacy Policy | FinxisAI Data Protection</title>
        <meta name="description" content="Read the FinxisAI privacy policy to understand how we collect, use, and protect your personal and financial data. Your security is our priority." />
        <meta name="keywords" content="privacy policy, data protection, GDPR compliance, financial data security" />
        <link rel="canonical" href="https://finxis.ai/privacy-policy" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://finxis.ai/privacy-policy" />
        <meta property="og:title" content="FinxisAI Privacy Policy" />
        <meta property="og:description" content="How we protect your data." />

        {/* Schema */}
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>
      <Header />
      <main className="pt-32 pb-20">
        <div className="container-max max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-5xl font-display font-bold leading-tight mb-4 text-slate-900">Privacy Policy</h1>
            <p className="text-slate-500 mb-10">Last updated: September 21, 2025</p>

            <article className="prose lg:prose-lg max-w-none text-slate-700 leading-relaxed">
              <p>
                FinxisAI ("us", "we", or "our") operates the https://finxis.ai website (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
              </p>

              <h2 className="font-display font-bold mt-12 mb-4 text-3xl">Information Collection and Use</h2>
              <p>
                We collect several different types of information for various purposes to provide and improve our Service to you. This includes personal data, such as email address and name, and usage data collected automatically when using the Service.
              </p>

              <h2 className="font-display font-bold mt-12 mb-4 text-3xl">Use of Data</h2>
              <p>
                FinxisAI uses the collected data for various purposes:
              </p>
              <ul>
                <li>To provide and maintain our Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information so that we can improve our Service</li>
                <li>To monitor the usage of our Service</li>
                <li>To detect, prevent and address technical issues</li>
              </ul>

              <h2 className="font-display font-bold mt-12 mb-4 text-3xl">Data Security</h2>
              <p>
                The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
              </p>

              <h2 className="font-display font-bold mt-12 mb-4 text-3xl">Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
              </p>

              <h2 className="font-display font-bold mt-12 mb-4 text-3xl">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us by visiting the contact page on our website.
              </p>
            </article>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
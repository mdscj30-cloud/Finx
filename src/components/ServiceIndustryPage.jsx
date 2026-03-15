import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, CheckCircle2, ShieldCheck, PieChart, Users, 
  Globe, Briefcase, BrainCircuit, FileCheck 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { industryServiceData } from '@/lib/industryServiceData';
import { generateComprehensiveServiceSchema, generateBreadcrumbSchema } from '@/lib/seoHelpers';

const ServiceIndustryPage = () => {
  // We need to match the route to the data key
  // The route pattern is /services/:slug
  // We can extract the slug from the URL
  const path = window.location.pathname.replace('/services/', '');
  const data = industryServiceData[path];

  if (!data) {
    return <Navigate to="/404" replace />;
  }

  const {
    title, metaDesc, serviceType, industry, hero, intro,
    challenges, support, workflow, compliance, useCases,
    benefits, faqs, internalLinks, externalLinks, relatedPages
  } = data;

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={metaDesc} />
        <link rel="canonical" href={`https://finxis.ai/services/${path}`} />
        <script type="application/ld+json">
          {JSON.stringify(generateComprehensiveServiceSchema(
            hero.headline,
            metaDesc,
            "FinxisAI",
            `https://finxis.ai/services/${path}`
          ))}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(generateBreadcrumbSchema([
             { name: "Home", url: "https://finxis.ai" },
             { name: "Services", url: "https://finxis.ai/services" },
             { name: industry, url: `https://finxis.ai/services/by-industry` },
             { name: hero.headline, url: `https://finxis.ai/services/${path}` }
          ]))}
        </script>
      </Helmet>

      <Header />

      <main>
        {/* Breadcrumb */}
        <div className="bg-slate-900 pt-24 pb-4">
           <div className="container-max text-slate-400 text-sm flex items-center gap-2">
              <Link to="/" className="hover:text-blue-400">Home</Link> / 
              <Link to="/services/by-industry" className="hover:text-blue-400">Services</Link> / 
              <span className="text-white">{industry}</span>
           </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: `url(${hero.image})` }}></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
          <div className="container-max relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-100 font-medium text-sm mb-6">
                <Briefcase className="w-4 h-4 mr-2 text-blue-300" />
                {serviceType} for {industry}
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">
                {hero.headline}
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed mb-8">
                {hero.subheading}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white border-0">
                    Schedule Consultation
                  </Button>
                </Link>
                <Link to="/pricing">
                  <Button size="lg" variant="outline" className="border-slate-500 text-white hover:bg-white/10">
                    View Pricing
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="container-max max-w-4xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Financial Clarity for {industry}</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              {intro}
            </p>
          </div>
        </section>

        {/* Challenges */}
        <section className="py-16 bg-slate-50">
          <div className="container-max">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Common Challenges in {industry}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {challenges.map((challenge, idx) => (
                <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                    <ShieldCheck className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{challenge.title}</h3>
                  <p className="text-slate-600">{challenge.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Support */}
        <section className="py-16 bg-white">
          <div className="container-max grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">How FinxisAI Supports {industry}</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                {support}
              </p>
              <ul className="space-y-4">
                {benefits.split('. ').map((benefit, idx) => (
                   benefit && (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">{benefit}.</span>
                    </li>
                   )
                ))}
              </ul>
            </div>
            <div className="bg-slate-100 rounded-2xl p-8 border border-slate-200">
               <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                 <BrainCircuit className="w-6 h-6 mr-3 text-blue-600" />
                 Human + AI Workflow
               </h3>
               <div className="space-y-6">
                 {workflow.map((step, idx) => (
                   <div key={idx} className="flex gap-4">
                     <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                       {idx + 1}
                     </div>
                     <div>
                       <h4 className="font-bold text-slate-900">{step.step}</h4>
                       <p className="text-sm text-slate-600">{step.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </section>

        {/* Compliance */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container-max text-center max-w-3xl">
            <ShieldCheck className="w-16 h-16 text-blue-300 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">Compliance, Accuracy & Risk</h2>
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              {compliance}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {externalLinks.map((link, idx) => (
                <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-white underline underline-offset-4">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-white">
          <div className="container-max">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Real-World Examples</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, idx) => (
                <div key={idx} className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">{useCase.title}</h3>
                  <p className="text-slate-700">{useCase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-slate-50">
          <div className="container-max max-w-3xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white px-6 rounded-xl border border-slate-200">
                  <AccordionTrigger className="text-left font-semibold text-lg text-slate-800 hover:text-blue-600 hover:no-underline py-6">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Conclusion */}
        <section className="py-16 bg-white text-center">
           <div className="container-max max-w-2xl">
             <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to Streamline Your {industry} Finances?</h2>
             <p className="text-lg text-slate-600 mb-8">
               Join hundreds of {industry} leaders who trust FinxisAI for accurate, compliant, and strategic financial management.
             </p>
             <Link to="/contact">
               <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white">
                 Request Assessment
                 <ArrowRight className="ml-2 w-5 h-5" />
               </Button>
             </Link>
           </div>
        </section>

        {/* Related Pages */}
        <section className="py-12 bg-slate-100 border-t border-slate-200">
          <div className="container-max">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Explore Related Services</h3>
            <div className="grid md:grid-cols-3 gap-6">
               {relatedPages.map((page, idx) => (
                 <Link key={idx} to={page.path} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-blue-600 mb-2">{page.title}</h4>
                    <span className="text-sm text-slate-500 flex items-center">
                      View Service <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                 </Link>
               ))}
               {internalLinks.map((link, idx) => (
                 <Link key={`internal-${idx}`} to={link.path} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-slate-700 mb-2">{link.label}</h4>
                    <span className="text-sm text-slate-500 flex items-center">
                      Learn More <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                 </Link>
               ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default ServiceIndustryPage;
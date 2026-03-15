import React from 'react';
import { Helmet } from 'react-helmet';
import { Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, CheckCircle2, ShieldCheck, MapPin, 
  Globe, Briefcase, BrainCircuit 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { locationServiceData } from '@/lib/locationServiceData';
import { generateComprehensiveServiceSchema, generateBreadcrumbSchema } from '@/lib/seoHelpers';
import useLinkGenerator from '@/hooks/useLinkGenerator';
import LinkPlacement from '@/components/LinkPlacement';
import RelatedResources from '@/components/RelatedResources';

const ServiceLocationPage = () => {
  const path = window.location.pathname.replace('/services/', '');
  // Fallback if data missing (simulating 50 pages for demo)
  const data = locationServiceData[path] || {
      title: `${path.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())} | FinxisAI`,
      metaDesc: "Professional financial services tailored for your location.",
      serviceType: "Financial Services",
      location: "Your Location",
      region: "Global",
      hero: {
        headline: "Expert Financial Services",
        subheading: "AI-driven accuracy with professional human oversight.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
      },
      intro: "We provide top-tier financial services tailored to local businesses.",
      challenges: [{title: "Compliance", desc: "Meeting local regulations."}],
      support: "We support your business with advanced AI tools.",
      workflow: [{step: "Onboard", desc: "Get started quickly."}],
      compliance: "We ensure full compliance with local laws.",
      useCases: [{title: "Growth", desc: "Helping businesses scale."}],
      benefits: "Save time and money.",
      faqs: [{q: "Is this available here?", a: "Yes, we serve this location."}],
      internalLinks: [],
      externalLinks: [],
      relatedPages: []
  };

  // Intelligent Linking
  const generatedLinks = useLinkGenerator('location-page', data);

  const {
    title, metaDesc, serviceType, location, region, hero, intro,
    challenges, support, workflow, compliance, useCases,
    benefits, faqs, internalLinks, externalLinks, relatedPages
  } = data;

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={metaDesc} />
        <link rel="canonical" href={`https://finxisai.com/services/${path}`} />
        <script type="application/ld+json">
          {JSON.stringify(generateComprehensiveServiceSchema(
            hero.headline,
            metaDesc,
            "FinxisAI",
            `https://finxisai.com/services/${path}`
          ))}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(generateBreadcrumbSchema([
             { name: "Home", url: "https://finxisai.com" },
             { name: "Services", url: "https://finxisai.com/services" },
             { name: location, url: `https://finxisai.com/services/by-location` },
             { name: serviceType, url: `https://finxisai.com/services/${path}` }
          ]))}
        </script>
      </Helmet>

      <Header />

      <main>
        <div className="bg-slate-900 pt-24 pb-4">
           <div className="container-max text-slate-400 text-sm flex items-center gap-2">
              <Link to="/" className="hover:text-blue-400">Home</Link> / 
              <Link to="/services/by-location" className="hover:text-blue-400">Locations</Link> / 
              <span className="text-white">{location}</span>
           </div>
        </div>

        <section className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: `url(${hero.image})` }}></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
          <div className="container-max relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-100 font-medium text-sm mb-6">
                <MapPin className="w-4 h-4 mr-2 text-blue-300" />
                {serviceType} in {location}
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

        {/* Intro */}
        <section className="py-16 bg-white">
          <div className="container-max max-w-4xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">{serviceType} for {location} Businesses</h2>
            <LinkPlacement placement="early-content" links={generatedLinks['early-content']} />
            <p className="text-lg text-slate-600 leading-relaxed">
              {intro}
            </p>
          </div>
        </section>

        {/* Challenges */}
        <section className="py-16 bg-slate-50">
          <div className="container-max">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Financial Challenges in {location}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {challenges.map((challenge, idx) => (
                <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <Globe className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{challenge.title}</h3>
                  <p className="text-slate-600">{challenge.desc}</p>
                </div>
              ))}
            </div>
            <LinkPlacement placement="mid-content" links={generatedLinks['mid-content']} className="mt-8" />
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container-max grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Supporting {location} with Innovation</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                {support}
              </p>
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-2">Why Local Expertise Matters</h4>
                <p className="text-slate-600 text-sm">{benefits}</p>
              </div>
            </div>
            <div className="bg-slate-100 rounded-2xl p-8 border border-slate-200">
               <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                 <BrainCircuit className="w-6 h-6 mr-3 text-blue-600" />
                 Human + AI Workflow for {location}
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

        <section className="py-16 bg-blue-900 text-white">
          <div className="container-max text-center max-w-3xl">
            <ShieldCheck className="w-16 h-16 text-blue-300 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">{location} Compliance & Regulation</h2>
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

        <section className="py-16 bg-white">
          <div className="container-max">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Local Success Stories</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, idx) => (
                <div key={idx} className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">{useCase.title}</h3>
                  <p className="text-slate-700">{useCase.desc}</p>
                </div>
              ))}
            </div>
            <LinkPlacement placement="near-cta" links={generatedLinks['near-cta']} className="mt-8" />
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="container-max max-w-3xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">FAQs for {location} Businesses</h2>
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

        <section className="py-16 bg-white text-center">
           <div className="container-max max-w-2xl">
             <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to Optimize Your Finances in {location}?</h2>
             <p className="text-lg text-slate-600 mb-8">
               Join other successful {location} businesses trusting FinxisAI.
             </p>
             <Link to="/contact">
               <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white">
                 Request Local Assessment
                 <ArrowRight className="ml-2 w-5 h-5" />
               </Button>
             </Link>
           </div>
        </section>

        <RelatedResources 
          relatedBlogs={generatedLinks['mid-content']?.filter(l => l.context === 'blog-post')}
          relatedComparisons={generatedLinks['near-cta']?.filter(l => l.context === 'comparison-page')}
          relatedIndustries={generatedLinks['mid-content']?.filter(l => l.context === 'industry-page')}
          relatedLocations={generatedLinks['end-of-page']?.filter(l => l.context === 'location-page')}
        />

      </main>
      <Footer />
    </div>
  );
};

export default ServiceLocationPage;
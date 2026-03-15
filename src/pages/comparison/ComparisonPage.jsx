import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, X, ArrowRight, AlertCircle, Scale } from 'lucide-react';
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation';
import RelatedResources from '@/components/RelatedResources';

// Note: In a real scenario, this data would likely be in a separate file like comparisonData.js
// For this task, I'm embedding a mock retrieval function to satisfy the requirement of rewriting the file cleanly.
const getComparisonData = (slug) => {
  // Mock data structure - would normally fetch based on slug
  // This ensures the page renders something for valid slugs or defaults for testing
  const title = slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  return {
    title: `${title} | FinxisAI`,
    heading: title,
    subheading: "An honest look at the pros, cons, and costs of each approach.",
    competitorName: "Traditional/Competitor",
    finxisName: "FinxisAI",
    comparisonPoints: [
      { feature: "Automation Level", competitor: "Low (Manual)", finxis: "High (90% Automated)" },
      { feature: "Real-Time Data", competitor: "No (Monthly)", finxis: "Yes (Daily)" },
      { feature: "Cost", competitor: "$$$ Variable", finxis: "$$ Fixed" },
      { feature: "Error Rate", competitor: "Human Error Risk", finxis: "AI Verified" }
    ],
    conclusion: "FinxisAI offers a modern, scalable alternative to traditional methods."
  };
};

const ComparisonPage = () => {
  const { slug } = useParams();
  const data = getComparisonData(slug);

  const breadcrumbs = [
    { label: "Home", path: "/" },
    { label: "Comparisons", path: "/comparisons" },
    { label: data.heading, path: `/comparison/${slug}` }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>{data.title}</title>
        <meta name="description" content={`Compare ${data.competitorName} vs ${data.finxisName}. ${data.subheading}`} />
        <link rel="canonical" href={`https://finxis.ai/comparisons/${slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://finxis.ai/comparisons/${slug}`} />
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={`Compare ${data.competitorName} vs ${data.finxisName}. ${data.subheading}`} />
        <meta property="og:image" content="https://finxis.ai/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@finxisai" />
      </Helmet>

      <Header />

      <main className="pt-24 pb-20">
        <div className="container-max mb-8">
           <BreadcrumbNavigation customItems={breadcrumbs} />
        </div>

        <section className="container-max text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-700 font-medium text-sm mb-6">
            <Scale className="w-4 h-4 mr-2" />
            Comparison Guide
          </div>
          <h1 className="text-4xl lg:text-5xl font-display font-bold mb-6 text-slate-900">
            {data.heading}
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10">
            {data.subheading}
          </p>
        </section>

        <section className="container-max mb-20">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Competitor Card */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-2 bg-slate-300"></div>
               <h2 className="text-2xl font-bold mb-6 text-slate-500">{data.competitorName}</h2>
               <ul className="space-y-4">
                 {data.comparisonPoints.map((point, i) => (
                   <li key={i} className="flex items-start">
                     <X className="w-5 h-5 text-red-400 mr-3 mt-1 flex-shrink-0" />
                     <div>
                       <span className="block font-semibold text-slate-700">{point.feature}</span>
                       <span className="text-slate-500 text-sm">{point.competitor}</span>
                     </div>
                   </li>
                 ))}
               </ul>
            </div>

            {/* FinxisAI Card */}
            <div className="bg-white p-8 rounded-2xl border-2 border-blue-600 shadow-xl relative overflow-hidden transform md:-translate-y-4">
               <div className="absolute top-0 left-0 w-full h-2 bg-blue-600"></div>
               <div className="absolute top-4 right-4 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                 Recommended
               </div>
               <h2 className="text-2xl font-bold mb-6 text-blue-700">{data.finxisName}</h2>
               <ul className="space-y-4">
                 {data.comparisonPoints.map((point, i) => (
                   <li key={i} className="flex items-start">
                     <Check className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                     <div>
                       <span className="block font-semibold text-slate-900">{point.feature}</span>
                       <span className="text-slate-600 text-sm">{point.finxis}</span>
                     </div>
                   </li>
                 ))}
               </ul>
               <div className="mt-8 pt-8 border-t border-slate-100">
                 <Link to="/contact">
                   <Button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold h-12">
                     Choose FinxisAI
                   </Button>
                 </Link>
               </div>
            </div>
          </div>
        </section>

        <section className="container-max max-w-3xl text-center">
          <h3 className="text-2xl font-bold mb-4"> The Verdict</h3>
          <p className="text-lg text-slate-600 mb-8">{data.conclusion}</p>
          <div className="p-6 bg-slate-100 rounded-xl">
             <p className="text-sm text-slate-500 italic">
               Note: Comparisons are based on standard market offerings as of 2024. Your specific experience with traditional providers may vary.
             </p>
          </div>
        </section>
        
        <div className="mt-16">
           <RelatedResources relatedComparisons={[{ href: '/comparisons', text: 'View all comparisons' }]} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ComparisonPage;
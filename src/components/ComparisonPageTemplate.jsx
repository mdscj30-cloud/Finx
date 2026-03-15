import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, XCircle, BrainCircuit, Users, FileText, 
  ShieldCheck, Clock, TrendingUp, Scale, AlertTriangle, 
  HelpCircle, ArrowRight, BookOpen, ExternalLink, Calculator, ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQPageSchema } from '@/lib/seoHelpers';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import useLinkGenerator from '@/hooks/useLinkGenerator';
import LinkPlacement from '@/components/LinkPlacement';
import RelatedResources from '@/components/RelatedResources';

const ComparisonPageTemplate = ({ 
  pageTitle, 
  pageDesc,
  canonicalUrl,
  publishedDate = "2024-02-15T08:00:00+00:00",
  introduction, 
  whatsDifference, 
  comparisonTableData, 
  howEachWorks, 
  prosAndCons, 
  pricingComparison, 
  whoIsBestFor, 
  accuracySafetyCompliance, 
  faqs, 
  decisionFactors, 
  misconceptions, 
  implementationConsiderations, 
  conclusion,
  relatedPages,
  internalLinks
}) => {
  // Intelligent Linking
  const pageData = { title: pageTitle, content: introduction };
  const generatedLinks = useLinkGenerator('comparison-page', pageData);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="article:published_time" content={publishedDate} />
        <meta property="article:author" content="FinxisAI Editorial Team" />
        
        <script type="application/ld+json">
          {JSON.stringify(generateArticleSchema(pageTitle, pageDesc, "https://finxis.ai/og-image.jpg", publishedDate, "FinxisAI", canonicalUrl))}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(generateBreadcrumbSchema([
             { name: "Home", url: "https://finxis.ai" },
             { name: "Comparisons", url: "https://finxis.ai/comparisons" },
             { name: pageTitle, url: canonicalUrl }
          ]))}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(generateFAQPageSchema(faqs.map(f => ({ question: f.q, answer: f.a }))))}
        </script>
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center"></div>
          <div className="container-max relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-100 font-medium text-sm mb-6">
                <Scale className="w-4 h-4 mr-2 text-blue-300" />
                Comparative Guide
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-8 max-w-5xl mx-auto">
                {pageTitle}
              </h1>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-10 font-light">
                {pageDesc}
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm font-medium text-slate-400">
                <span className="flex items-center"><Clock className="w-4 h-4 mr-2" /> 10-12 min read</span>
                <span className="hidden sm:inline">•</span>
                <span>Published: {new Date(publishedDate).toLocaleDateString()}</span>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="bg-white border-b border-slate-200">
          <div className="container-max py-4">
            <nav className="flex items-center text-sm text-slate-500">
               <Link to="/" className="hover:text-blue-600">Home</Link>
               <ChevronRight className="w-4 h-4 mx-2" />
               <Link to="/comparisons" className="hover:text-blue-600">Comparisons</Link>
               <ChevronRight className="w-4 h-4 mx-2" />
               <span className="text-slate-800 font-medium truncate max-w-[200px] sm:max-w-md">{pageTitle}</span>
            </nav>
          </div>
        </div>

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="container-max max-w-4xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Why Compare These Approaches?</h2>
            <LinkPlacement placement="early-content" links={generatedLinks['early-content']} />
            <div className="prose prose-lg prose-slate max-w-none text-slate-600 leading-relaxed">
              {introduction}
            </div>
          </div>
        </section>

        {/* At a Glance */}
        <section className="py-16 bg-slate-50">
          <div className="container-max">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">What's the Difference at a Glance?</h2>
            <div className="max-w-4xl mx-auto mb-12 text-center text-slate-600 prose-lg">
               {whatsDifference.intro}
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-6">
                  <FileText className="w-6 h-6 text-slate-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{whatsDifference.option1.title}</h3>
                <p className="text-slate-600 mb-6">{whatsDifference.option1.description}</p>
                <div className="flex items-center text-sm font-semibold text-slate-500">
                  <CheckCircle2 className="w-4 h-4 mr-2 text-slate-400" /> {whatsDifference.option1.tag}
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-blue-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-bl-full"></div>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <BrainCircuit className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{whatsDifference.option2.title}</h3>
                <p className="text-slate-600 mb-6">{whatsDifference.option2.description}</p>
                <div className="flex items-center text-sm font-semibold text-blue-600">
                  <CheckCircle2 className="w-4 h-4 mr-2" /> {whatsDifference.option2.tag}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Comparison Table */}
        <section className="py-16 bg-white">
          <div className="container-max">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-6">Detailed Feature Comparison</h2>
            <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">
              A side-by-side look at how each model handles critical aspects.
            </p>
            
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-lg">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="p-6 font-bold text-slate-900 w-1/4">Feature</th>
                    <th className="p-6 font-bold text-slate-700 w-1/3">{comparisonTableData.headers.option1}</th>
                    <th className="p-6 font-bold text-blue-700 w-1/3 bg-blue-50/50">{comparisonTableData.headers.option2}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {comparisonTableData.rows.map((row, index) => (
                    <tr key={index} className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-6 font-semibold text-slate-900">{row.feature}</td>
                      <td className="p-6 text-slate-600">{row.option1}</td>
                      <td className="p-6 text-slate-700 bg-blue-50/10 font-medium">{row.option2}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-slate-50">
          <div className="container-max max-w-4xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">How Each Approach Works</h2>
            <LinkPlacement placement="mid-content" links={generatedLinks['mid-content']} />
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-600">1</div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{howEachWorks.option1.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{howEachWorks.option1.description}</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{howEachWorks.option2.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{howEachWorks.option2.description}</p>
                  <div className="mt-6">
                    <Link to="/contact">
                      <Button variant="outline" size="sm" className="text-blue-600 border-blue-200 hover:bg-blue-50">
                        Discuss this approach <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pros & Cons */}
        <section className="py-16 bg-white">
          <div className="container-max">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Pros and Cons</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Option 1 */}
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
                  <FileText className="w-5 h-5 mr-2" /> {prosAndCons.option1.title}
                </h3>
                <div className="space-y-6">
                  <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                    <h4 className="font-bold text-green-800 mb-3 flex items-center"><CheckCircle2 className="w-4 h-4 mr-2" /> Pros</h4>
                    <ul className="space-y-2 text-sm text-green-900">
                      {prosAndCons.option1.pros.map((pro, i) => (
                        <li key={i}>• {pro}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                    <h4 className="font-bold text-red-800 mb-3 flex items-center"><XCircle className="w-4 h-4 mr-2" /> Cons</h4>
                    <ul className="space-y-2 text-sm text-red-900">
                       {prosAndCons.option1.cons.map((con, i) => (
                        <li key={i}>• {con}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Option 2 */}
              <div>
                <h3 className="text-xl font-bold text-blue-800 mb-6 flex items-center">
                  <BrainCircuit className="w-5 h-5 mr-2" /> {prosAndCons.option2.title}
                </h3>
                <div className="space-y-6">
                  <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                    <h4 className="font-bold text-green-800 mb-3 flex items-center"><CheckCircle2 className="w-4 h-4 mr-2" /> Pros</h4>
                    <ul className="space-y-2 text-sm text-green-900">
                      {prosAndCons.option2.pros.map((pro, i) => (
                        <li key={i}>• {pro}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
                    <h4 className="font-bold text-amber-800 mb-3 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" /> Cons (Limitations)</h4>
                    <ul className="space-y-2 text-sm text-amber-900">
                       {prosAndCons.option2.cons.map((con, i) => (
                        <li key={i}>• {con}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="container-max max-w-4xl text-center">
            <Calculator className="w-12 h-12 text-blue-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-8">Pricing Comparison</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-10 text-left">
              <div className="bg-white/10 p-8 rounded-2xl border border-white/10">
                <h3 className="font-bold text-xl mb-2">{pricingComparison.option1.title}</h3>
                <div className="text-3xl font-bold text-blue-400 mb-4">{pricingComparison.option1.priceRange}</div>
                <p className="text-slate-300 text-sm">{pricingComparison.option1.description}</p>
              </div>
              <div className="bg-blue-600/20 p-8 rounded-2xl border border-blue-500/30">
                <h3 className="font-bold text-xl mb-2">{pricingComparison.option2.title}</h3>
                <div className="text-3xl font-bold text-blue-400 mb-4">{pricingComparison.option2.priceRange}</div>
                <p className="text-slate-300 text-sm">{pricingComparison.option2.description}</p>
              </div>
            </div>
            <Link to="/pricing">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                View Detailed Pricing
              </Button>
            </Link>
          </div>
        </section>

        {/* Who is it best for? */}
        <section className="py-16 bg-white">
          <div className="container-max">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Who Each Option Is Best For</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-slate-50 rounded-xl border border-slate-100">
                <h3 className="font-bold text-xl mb-4 text-slate-900">{whoIsBestFor.option1.title}</h3>
                <ul className="space-y-2">
                  {whoIsBestFor.option1.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-slate-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 bg-blue-50 rounded-xl border border-blue-100">
                <h3 className="font-bold text-xl mb-4 text-blue-900">{whoIsBestFor.option2.title}</h3>
                 <ul className="space-y-2">
                  {whoIsBestFor.option2.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Accuracy & Safety */}
        <section className="py-16 bg-slate-50">
           <div className="container-max max-w-4xl text-center">
             <ShieldCheck className="w-12 h-12 text-emerald-600 mx-auto mb-6" />
             <h2 className="text-3xl font-bold text-slate-900 mb-6">Accuracy, Safety, and Compliance Considerations</h2>
             <div className="prose prose-lg prose-slate mx-auto text-left">
               {accuracySafetyCompliance}
             </div>
           </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-white">
          <div className="container-max max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-10">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white px-6 rounded-xl border border-slate-200 shadow-sm">
                  <AccordionTrigger className="text-left font-bold text-lg text-slate-800 hover:text-blue-600 hover:no-underline py-6">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed pb-6 text-base">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="text-center mt-8">
               <Link to="/faqs/ai-accounting" className="text-blue-600 font-semibold hover:underline">View full FAQ Hub &rarr;</Link>
            </div>
          </div>
        </section>

        {/* Misconceptions */}
        <section className="py-16 bg-white">
           <div className="container-max">
             <h2 className="text-2xl font-bold text-center text-slate-900 mb-8">Common Misconceptions</h2>
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               {misconceptions.map((item, i) => (
                 <div key={i} className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                   <p className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                     <AlertTriangle className="w-4 h-4 text-amber-500" />
                     {item.misconception}
                   </p>
                   <p className="text-sm text-slate-600">
                     <span className="font-bold text-blue-600">Reality:</span> {item.reality}
                   </p>
                 </div>
               ))}
             </div>
           </div>
        </section>

        {/* Decision Factors */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container-max max-w-3xl">
            <h2 className="text-2xl font-bold mb-6 text-center">Key Decision Factors Checklist</h2>
            <div className="bg-white/10 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
               <ul className="space-y-4">
                 {decisionFactors.map((factor, i) => (
                   <li key={i} className="flex items-start">
                     <CheckCircle2 className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" /> 
                     <span className="text-slate-200">{factor}</span>
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </section>

        {/* Implementation */}
        <section className="py-16 bg-white">
          <div className="container-max max-w-4xl text-center">
             <h2 className="text-2xl font-bold text-slate-900 mb-4">Implementation Considerations</h2>
             <div className="prose prose-lg prose-slate mx-auto mb-10 text-slate-600">
               {implementationConsiderations}
             </div>
             
             {/* Conclusion */}
             <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
               <h3 className="font-bold text-xl text-slate-900 mb-4">Conclusion</h3>
               <p className="text-slate-600 mb-8">{conclusion}</p>
               <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link to="/contact">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/20">
                      Schedule a Consultation
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline" className="border-slate-300 hover:bg-white text-slate-700">
                    Download Comparison Guide
                  </Button>
               </div>
             </div>
          </div>
        </section>

        {/* External Resources */}
        <section className="py-12 bg-white border-t border-slate-200">
          <div className="container-max">
             <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-6">External Resources &amp; Standards</h3>
             <div className="flex flex-wrap gap-6">
                <a href="https://us.aicpa.org/" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-slate-600 hover:text-blue-600">
                  <ExternalLink className="w-4 h-4 mr-2" /> AICPA Standards
                </a>
                <a href="https://www.fasb.org/" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-slate-600 hover:text-blue-600">
                  <ExternalLink className="w-4 h-4 mr-2" /> GAAP Guidelines
                </a>
                <a href="https://www.sba.gov/business-guide/manage-your-business/finances" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-slate-600 hover:text-blue-600">
                  <ExternalLink className="w-4 h-4 mr-2" /> SBA Financial Guide
                </a>
             </div>
          </div>
        </section>

        <RelatedResources 
          relatedBlogs={generatedLinks['mid-content']?.filter(l => l.context === 'blog-post')}
          relatedLocations={generatedLinks['end-of-page']?.filter(l => l.context === 'location-page')}
          relatedComparisons={generatedLinks['end-of-page']?.filter(l => l.context === 'comparison-page')}
          relatedCaseStudies={generatedLinks['results-section']?.filter(l => l.context === 'case-study')}
        />

        {/* Related Pages */}
        <section className="py-12 bg-slate-50 border-t border-slate-200">
          <div className="container-max">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Explore Related Comparisons</h2>
            <div className="grid md:grid-cols-3 gap-6">
               {relatedPages.map((page, index) => (
                 <Link key={index} to={page.path} className="p-4 bg-white rounded-lg border border-slate-200 hover:border-blue-300 transition-colors">
                    <h3 className="font-bold text-slate-900 mb-1">{page.title}</h3>
                    <p className="text-xs text-slate-500">Compare features & costs.</p>
                 </Link>
               ))}
            </div>
            
            <div className="mt-8 pt-8 border-t border-slate-200">
               <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Internal Resources</h3>
               <div className="flex flex-wrap gap-4">
                 {internalLinks.map((link, i) => (
                   <Link key={i} to={link.path} className="text-sm text-blue-600 hover:underline">
                     {link.label}
                   </Link>
                 ))}
               </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default ComparisonPageTemplate;
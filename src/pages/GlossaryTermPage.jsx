import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { glossaryTerms } from '@/lib/glossaryTermsData';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft, BookOpen, Share2 } from 'lucide-react';
import GlossaryRelatedTerms from '@/components/GlossaryRelatedTerms';
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation';
import RelatedResources from '@/components/RelatedResources';

const GlossaryTermPage = () => {
  const { slug } = useParams();
  const term = glossaryTerms.find(t => t.slug === slug);

  if (!term) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Term Not Found</h1>
            <Link to="/glossary">
              <Button>Back to Glossary</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Find related terms in same category
  const relatedTerms = glossaryTerms
    .filter(t => t.category === term.category && t.id !== term.id)
    .slice(0, 3);

  // Generate breadcrumb path
  const breadcrumbs = [
    { label: "Home", path: "/" },
    { label: "Glossary", path: "/glossary" },
    { label: term.title, path: `/glossary/${term.slug}` }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>{term.seoTitle || `${term.title} Definition`} | FinxisAI Glossary</title>
        <meta name="description" content={term.seoDescription || term.definition} />
        <meta name="keywords" content={term.seoKeywords} />
        <link rel="canonical" href={`https://finxisai.com/glossary/${term.slug}`} />
      </Helmet>

      <Header />

      <main className="pt-24 pb-20">
        <div className="container-max">
          <div className="mb-8">
             <BreadcrumbNavigation customItems={breadcrumbs} />
          </div>

          <div className="grid lg:grid-cols-12 gap-12">
            <article className="lg:col-span-8">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                    {term.category}
                  </span>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-8">
                  {term.title}
                </h1>

                <div className="prose prose-lg max-w-none text-slate-700">
                  <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-blue-600 mb-8">
                    <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center">
                      <BookOpen className="w-5 h-5 mr-2" /> Definition
                    </h3>
                    <p className="m-0 italic">{term.definition}</p>
                  </div>

                  <h2>Detailed Explanation</h2>
                  <p>{term.detailedExplanation}</p>

                  <h2>Practical Example</h2>
                  <p>{term.practicalExample}</p>

                  <h2>Why It Matters</h2>
                  <p>{term.whyItMatters}</p>
                </div>
              </div>
            </article>

            <aside className="lg:col-span-4 space-y-8">
              <div className="bg-slate-900 text-white rounded-xl p-6">
                <h3 className="font-bold text-lg mb-4">Master Your Finances</h3>
                <p className="text-slate-300 mb-6 text-sm">
                  Understanding terms is just the start. Let FinxisAI handle the complexity for you.
                </p>
                <Link to="/contact">
                  <Button className="w-full bg-blue-600 hover:bg-blue-500">Get a Demo</Button>
                </Link>
              </div>

              <GlossaryRelatedTerms terms={relatedTerms} />
            </aside>
          </div>
        </div>
        
        <div className="mt-12">
           <RelatedResources relatedBlogs={[{ href: '/blog', text: 'View all finance articles' }]} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GlossaryTermPage;
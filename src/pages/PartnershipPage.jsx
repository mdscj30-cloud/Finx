import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getPartnershipPageBySlug, generatePartnershipSchema } from '@/lib/partnershipPagesData';
import { Button } from '@/components/ui/button';
import { AlertCircle, CheckCircle, ArrowRight } from 'lucide-react';
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation';

const PartnershipPage = () => {
  const { slug } = useParams();
  const page = getPartnershipPageBySlug(slug);

  if (!page) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Header />
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
          <AlertCircle className="w-16 h-16 text-slate-300 mb-6" />
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Partnership Program Not Found</h1>
          <Link to="/contact">
            <Button>Contact Partnerships</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>{page.title} | FinxisAI Partner Program</title>
        <meta name="description" content={page.description} />
        <script type="application/ld+json">
          {JSON.stringify(generatePartnershipSchema(page))}
        </script>
      </Helmet>

      <Header />

      <main className="pt-24 pb-20">
        <div className="container-max mb-8">
           <BreadcrumbNavigation />
        </div>

        <section className="container-max">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl lg:text-5xl font-display font-bold mb-6 text-slate-900">
              {page.title}
            </h1>
            <p className="text-xl text-slate-600">
              {page.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <h2 className="text-2xl font-bold mb-4">Program Overview</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {page.programOverview}
              </p>
              
              <h3 className="font-bold text-lg mb-3">Key Benefits</h3>
              <ul className="space-y-3 mb-8">
                {page.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-8 border-t border-slate-100">
                <Link to="/contact">
                  <Button size="lg" className="w-full btn-primary">
                    {page.cta} <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="space-y-8">
              {page.requirements.length > 0 && (
                <div className="bg-slate-100 p-8 rounded-2xl">
                  <h3 className="font-bold text-lg mb-4">Requirements</h3>
                  <ul className="space-y-2">
                    {page.requirements.map((req, i) => (
                      <li key={i} className="flex items-center text-slate-700">
                        <div className="w-2 h-2 bg-slate-400 rounded-full mr-3" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {page.revenueModel && (
                <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
                  <h3 className="font-bold text-lg mb-2 text-blue-900">Revenue Model</h3>
                  <p className="text-blue-800">{page.revenueModel}</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PartnershipPage;
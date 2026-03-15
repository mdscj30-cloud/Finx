import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getCaseStudyBySlug, getRelatedStudies, generateCaseStudySchema } from '@/lib/caseStudiesData';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, TrendingUp, AlertCircle, Quote } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import OptimizedImage from '@/components/OptimizedImage';
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation';
import RelatedResources from '@/components/RelatedResources';

const CaseStudyPage = () => {
  const { slug } = useParams();
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Header />
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
          <AlertCircle className="w-16 h-16 text-slate-300 mb-6" />
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Case Study Not Found</h1>
          <Link to="/case-studies">
            <Button>View All Case Studies</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const related = getRelatedStudies(study.id);
  const relatedResources = related.map(s => ({
    href: `/case-studies/${s.slug}`,
    text: s.title
  }));

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>{study.title} | FinxisAI Case Study</title>
        <meta name="description" content={study.metaDescription} />
        <script type="application/ld+json">
          {JSON.stringify(generateCaseStudySchema(study))}
        </script>
      </Helmet>

      <Header />

      <main className="pt-24 pb-20">
        <div className="container-max mb-8">
           <BreadcrumbNavigation />
        </div>

        <article className="container-max max-w-4xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200 border-none px-3 py-1 text-sm">
              {study.industry}
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-display font-bold mb-6 text-slate-900 leading-tight">
              {study.title}
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              How {study.companyName} used FinxisAI to solve "{study.challenge}" and achieve {study.results}
            </p>
          </div>

          {/* Results Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
              <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Revenue</div>
              <div className="text-2xl font-bold text-slate-900">{study.revenue}</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
              <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Outcome</div>
              <div className="text-2xl font-bold text-emerald-600">{study.results}</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
              <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Solution</div>
              <div className="text-lg font-bold text-blue-600">{study.solution}</div>
            </div>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 lg:p-12 mb-12 shadow-sm">
            <div className="prose prose-lg max-w-none text-slate-700">
              <h3 className="flex items-center text-slate-900">
                <AlertCircle className="w-6 h-6 mr-2 text-red-500" /> The Challenge
              </h3>
              <p>{study.challenge}</p>
              
              <h3 className="flex items-center text-slate-900 mt-8">
                <TrendingUp className="w-6 h-6 mr-2 text-blue-500" /> The Solution
              </h3>
              <p>{study.solution}</p>
              
              <h3 className="flex items-center text-slate-900 mt-8">
                <CheckCircle className="w-6 h-6 mr-2 text-emerald-500" /> The Results
              </h3>
              <p>{study.results}</p>
            </div>

            {/* Quote */}
            <div className="mt-12 p-8 bg-slate-50 rounded-xl border-l-4 border-blue-600 relative">
              <Quote className="absolute top-4 left-4 w-8 h-8 text-blue-200" />
              <blockquote className="text-xl font-medium text-slate-800 italic pl-8 relative z-10">
                "{study.testimonial}"
              </blockquote>
              <div className="mt-4 pl-8 font-bold text-slate-900">— {study.author}</div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-slate-900 rounded-2xl p-8 lg:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Achieve Similar Results</h2>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto">
              See how FinxisAI can transform financial operations for your {study.industry} business.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white">
                Schedule a Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </article>
        
        <div className="mt-16">
           <RelatedResources relatedCaseStudies={relatedResources} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudyPage;
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getFunnelPageBySlug, generateFunnelSchema } from '@/lib/funnelPagesData';
import SegmentLandingPageTemplate from '@/components/SegmentLandingPageTemplate';
import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation';

const FunnelPage = () => {
  const { slug } = useParams();
  const pageData = getFunnelPageBySlug(slug);

  if (!pageData) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Header />
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
          <AlertCircle className="w-16 h-16 text-slate-300 mb-6" />
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Solution Not Found</h1>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{pageData.title} | FinxisAI</title>
        <meta name="description" content={pageData.heroSubhead} />
        <script type="application/ld+json">
          {JSON.stringify(generateFunnelSchema(pageData))}
        </script>
      </Helmet>
      
      <div className="bg-white pt-20">
         <div className="container-max">
            <BreadcrumbNavigation />
         </div>
      </div>

      <SegmentLandingPageTemplate data={pageData} />
    </>
  );
};

export default FunnelPage;
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import IndustryServiceHero from '@/components/IndustryServiceHero';
import IndustryServiceBenefits from '@/components/IndustryServiceBenefits';
import IndustryServiceFeatures from '@/components/IndustryServiceFeatures';
import IndustryServiceCTA from '@/components/IndustryServiceCTA';
import IndustryServiceRelatedResources from '@/components/IndustryServiceRelatedResources';
import { industryServicePageData } from '@/lib/industryServicePageData';

const ServiceIndustryPage = () => {
  const { service, industry } = useParams();
  
  // Create slug from params to match our data structure keys
  const slug = `${service}-${industry}`;
  const data = industryServicePageData[slug];

  // If no data exists for this combination, show 404/redirect
  if (!data) {
    return (
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Header />
        <main className="flex-grow flex flex-col items-center justify-center py-32 px-4 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Service Not Found</h1>
          <p className="text-lg text-slate-600 mb-8 max-w-md">
            We couldn't find the specific service and industry combination you're looking for.
          </p>
          <a href="/services/by-industry" className="text-blue-600 hover:text-blue-700 font-medium bg-blue-50 px-6 py-3 rounded-lg">
            View All Industries
          </a>
        </main>
        <Footer />
      </div>
    );
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": data.title,
    "provider": {
      "@type": "Organization",
      "name": "FinxisAI"
    },
    "description": data.overview
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>{data.title} | FinxisAI</title>
        <meta name="description" content={data.tagline} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <Header />
      
      <main>
        <IndustryServiceHero 
          title={data.title}
          headline={data.headline}
          tagline={data.tagline}
          serviceSlug={service}
          industrySlug={industry}
        />
        
        <IndustryServiceBenefits 
          overview={data.overview}
          benefits={data.benefits}
        />
        
        <IndustryServiceFeatures 
          features={data.features}
        />
        
        <IndustryServiceCTA />
        
        <IndustryServiceRelatedResources 
          resources={data.relatedResources}
        />
      </main>

      <Footer />
    </div>
  );
};

export default ServiceIndustryPage;
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceIndustryHero from '@/components/ServiceIndustryHero';
import ServiceIndustryDescription from '@/components/ServiceIndustryDescription';
import IndustryPainPoints from '@/components/IndustryPainPoints';
import ServiceSolutions from '@/components/ServiceSolutions';
import IndustryExamples from '@/components/IndustryExamples';
import IndustryBenefits from '@/components/IndustryBenefits';
import IndustryCompliance from '@/components/IndustryCompliance';
import IndustryImplementation from '@/components/IndustryImplementation';
import ServiceIndustryFAQ from '@/components/ServiceIndustryFAQ';
import ServiceIndustryCTA from '@/components/ServiceIndustryCTA';
import IndustryCaseStudy from '@/components/IndustryCaseStudy';
import { serviceIndustryData } from '@/lib/serviceIndustryData';
import { Button } from '@/components/ui/button';
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation';

const ServiceIndustryTemplate = () => {
  const { serviceType, industryType, industry, segment } = useParams();
  
  // Handle both route parameter styles: /services/:serviceType/:industryType and /industries/:industry/:segment
  const sType = serviceType || industry;
  const iType = industryType || segment;
  const slug = `${sType}-${iType}`;
  
  const data = serviceIndustryData[slug];

  if (!data) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Header />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
          <p className="mb-8">We couldn't find the specific service/industry combination you requested. ({slug})</p>
          <Link to="/services/by-industry"><Button>View All Industries</Button></Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Schema for Service
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": data.serviceType,
    "provider": {
      "@type": "Organization",
      "name": "FinxisAI"
    },
    "areaServed": "US",
    "description": data.metaDesc || data.heroSubheading
  };

  const breadcrumbs = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: data.industryName, path: `/services/by-industry` },
    { label: data.serviceType, path: `/industries/${sType}/${iType}` }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>{data.heroHeadline} | FinxisAI</title>
        <meta name="description" content={data.heroSubheading} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <Header />
      
      <main>
        <div className="pt-24 bg-slate-900 pb-4">
           <div className="container-max">
              <div className="text-white/80 text-sm">
                 <BreadcrumbNavigation customItems={breadcrumbs} />
              </div>
           </div>
        </div>

        <ServiceIndustryHero 
          headline={data.heroHeadline}
          subheading={data.heroSubheading}
          image={data.heroImage}
        />
        
        <ServiceIndustryDescription 
          description={data.serviceDescription} 
          industryName={data.industryName}
        />

        <IndustryPainPoints points={data.industryPainPoints} />
        
        <ServiceSolutions solutions={data.solutions} />
        
        {data.caseStudy && <IndustryCaseStudy study={data.caseStudy} />}

        <IndustryExamples examples={data.examples} />
        
        <IndustryBenefits benefits={data.benefits} />
        
        <IndustryCompliance compliance={data.compliance} />
        
        <IndustryImplementation steps={data.implementation} />
        
        <ServiceIndustryFAQ faqs={data.faqs} />
        
        <ServiceIndustryCTA />
      </main>

      <Footer />
    </div>
  );
};

export default ServiceIndustryTemplate;
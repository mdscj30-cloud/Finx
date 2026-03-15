import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SegmentHero from '@/components/SegmentHero';
import SegmentProblem from '@/components/SegmentProblem';
import SegmentSolution from '@/components/SegmentSolution';
import SegmentCaseStudy from '@/components/SegmentCaseStudy';
import SegmentSocialProof from '@/components/SegmentSocialProof';
import SegmentPricing from '@/components/SegmentPricing';
import SegmentFAQ from '@/components/SegmentFAQ';
import SegmentCTA from '@/components/SegmentCTA';

const SegmentLandingPageTemplate = ({ segment }) => {
  const ctaRef = useRef(null);

  const scrollToCTA = () => {
    ctaRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const metaInfo = {
    smb: { title: "AI Accounting for Small Business", desc: "Automate your bookkeeping and save 15+ hours a month." },
    cpa: { title: "White-Label Bookkeeping for CPA Firms", desc: "Scale your firm without hiring more staff." },
    startup: { title: "Accounting for Startups | Investor Ready", desc: "Get GAAP-compliant financials for your next fundraise." },
    saas: { title: "SaaS Accounting & Revenue Recognition", desc: "Automate ASC 606 and subscription metrics." },
    ecommerce: { title: "E-Commerce Accounting & Sales Tax", desc: "Multi-channel reconciliation for Shopify and Amazon sellers." }
  };

  const meta = metaInfo[segment] || metaInfo.smb;

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{meta.title} | FinxisAI</title>
        <meta name="description" content={meta.desc} />
      </Helmet>
      
      <Header />
      
      <main>
        <SegmentHero segment={segment} scrollToCTA={scrollToCTA} />
        <SegmentSocialProof segment={segment} />
        <SegmentProblem segment={segment} />
        <SegmentSolution segment={segment} />
        <SegmentCaseStudy segment={segment} />
        <SegmentPricing segment={segment} scrollToCTA={scrollToCTA} />
        <SegmentFAQ segment={segment} />
        
        <div ref={ctaRef}>
          <SegmentCTA segment={segment} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SegmentLandingPageTemplate;
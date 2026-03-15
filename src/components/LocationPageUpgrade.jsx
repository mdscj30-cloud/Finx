import React from 'react';
import AIAnswerBox from '@/components/AIAnswerBox';
import WhoIsThisFor from '@/components/WhoIsThisFor';
import WhenNotToUse from '@/components/WhenNotToUse';
import { useSchemaMarkup } from '@/hooks/useSchemaMarkup';
import { MapPin, Building } from 'lucide-react';

const LocationPageUpgrade = ({ location, serviceName, children }) => {
  // Generate generic content for location pages to enhance them
  useSchemaMarkup({
    localBusiness: {
      name: `FinxisAI ${location}`,
      description: `${serviceName} services for businesses in ${location}.`,
      areaServed: location
    },
    service: {
      name: `${serviceName} in ${location}`,
      serviceType: "Financial Services",
      areaServed: location
    }
  });

  return (
    <>
      <div className="bg-white">
        <div className="container-max pt-8 pb-16">
          <AIAnswerBox 
            serviceName={`${serviceName} in ${location}`}
            definition={`Specialized ${serviceName.toLowerCase()} services tailored for businesses operating in ${location}, ensuring compliance with local regulations and tax laws.`}
            bestFor={`SMBs and Startups based in ${location}.`}
            cost="Local Market Competitive"
            timeline="Fast Local Onboarding"
            icon={MapPin}
          />
        </div>
      </div>

      {children}

      <WhoIsThisFor 
        title={`Who in ${location} Needs This?`}
        profiles={[
          {
            title: "Local Retailers",
            description: `Brick-and-mortar shops in ${location} needing precise inventory and sales tax management.`
          },
          {
            title: "Professional Services",
            description: `Law firms, agencies, and consultants in ${location} requiring project-based accounting.`
          },
          {
            title: "Remote Teams",
            description: `${location}-based HQs with distributed teams needing multi-state payroll compliance.`
          }
        ]}
      />

      <WhenNotToUse 
        scenarios={[
          {
            title: "One-Off Projects",
            description: "If you just need a single hour of consulting without ongoing support.",
            alternative: "Local hourly consultant"
          },
          {
            title: "Personal Finance Only",
            description: "If you have no business entity and just need personal budgeting.",
            alternative: "Personal Finance Apps"
          }
        ]}
      />
    </>
  );
};

export default LocationPageUpgrade;
import React from 'react';
import AIAnswerBox from '@/components/AIAnswerBox';
import WhoIsThisFor from '@/components/WhoIsThisFor';
import WhenNotToUse from '@/components/WhenNotToUse';
import { useSchemaMarkup } from '@/hooks/useSchemaMarkup';
import { Briefcase } from 'lucide-react';

const IndustryPageUpgrade = ({ industry, serviceName, children }) => {
  useSchemaMarkup({
    service: {
      name: `${serviceName} for ${industry}`,
      serviceType: "Specialized Accounting",
      audience: industry
    }
  });

  return (
    <>
      <div className="bg-white">
        <div className="container-max pt-8 pb-16">
          <AIAnswerBox 
            serviceName={`${serviceName} for ${industry}`}
            definition={`Industry-specialized ${serviceName.toLowerCase()} that understands the specific KPIs, revenue recognition rules, and compliance needs of ${industry} businesses.`}
            bestFor={`${industry} companies scaling past $1M revenue.`}
            cost="Industry Standard Pricing"
            timeline="Industry-Specific Setup"
            icon={Briefcase}
          />
        </div>
      </div>

      {children}

      <WhoIsThisFor 
        title={`Is This Right for Your ${industry} Business?`}
        profiles={[
          {
            title: "High-Growth Scaleups",
            description: `Fast-growing ${industry} companies that have outgrown generic bookkeeping solutions.`
          },
          {
            title: "Compliance-Heavy Sectors",
            description: `${industry} businesses facing strict regulatory reporting requirements.`
          },
          {
            title: "Data-Driven Leaders",
            description: `Founders in ${industry} who need real-time unit economics (CAC, LTV, margins).`
          }
        ]}
      />

      <WhenNotToUse 
        scenarios={[
          {
            title: "Pre-Revenue Ideas",
            description: "If you are still in the concept phase without transactions.",
            alternative: "DIY Spreadsheet"
          },
          {
            title: "Hobby Businesses",
            description: "If your ${industry} venture is a side hustle with low volume.",
            alternative: "Basic Software"
          }
        ]}
      />
    </>
  );
};

export default IndustryPageUpgrade;
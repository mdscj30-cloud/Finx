import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';

const PartnershipTiers = () => {
  const tiers = [
    {
      name: "Starter Partner",
      range: "10-50 Clients",
      share: "30% Revenue Share",
      features: [
        "White-label Client Portal",
        "Automated Bookkeeping",
        "Email Support (24h SLA)",
        "Standard Onboarding",
        "Marketing Assets Kit"
      ],
      color: "bg-slate-50 border-slate-200",
      btnVariant: "outline"
    },
    {
      name: "Growth Partner",
      range: "50-200 Clients",
      share: "35% Revenue Share",
      features: [
        "Everything in Starter",
        "Dedicated Account Manager",
        "Priority Support (4h SLA)",
        "Custom Workflow Setup",
        "Co-Branded Webinars"
      ],
      popular: true,
      color: "bg-white border-blue-500 shadow-xl",
      btnVariant: "default"
    },
    {
      name: "Enterprise Partner",
      range: "200+ Clients",
      share: "40% Revenue Share",
      features: [
        "Everything in Growth",
        "Custom API Integration",
        "Dedicated Slack Channel",
        "Quarterly Business Review",
        "Strategic Growth Consulting"
      ],
      color: "bg-slate-900 text-white border-slate-800",
      btnVariant: "secondary",
      checkColor: "text-blue-400"
    }
  ];

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {tiers.map((tier, index) => (
        <Card key={index} className={`relative flex flex-col ${tier.color} transition-transform hover:-translate-y-2 duration-300`}>
          {tier.popular && (
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              Most Popular
            </div>
          )}
          <CardHeader>
            <CardTitle className={`text-2xl font-bold ${tier.name === 'Enterprise Partner' ? 'text-white' : 'text-slate-900'}`}>{tier.name}</CardTitle>
            <CardDescription className={`font-medium ${tier.name === 'Enterprise Partner' ? 'text-slate-300' : 'text-slate-500'}`}>
              {tier.range}
            </CardDescription>
            <div className={`mt-4 text-3xl font-bold ${tier.name === 'Enterprise Partner' ? 'text-blue-400' : 'text-blue-600'}`}>
              {tier.share}
            </div>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-4">
              {tier.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <Check className={`w-5 h-5 mr-3 flex-shrink-0 ${tier.checkColor || 'text-green-500'}`} />
                  <span className={`text-sm ${tier.name === 'Enterprise Partner' ? 'text-slate-300' : 'text-slate-600'}`}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant={tier.btnVariant === 'default' ? 'default' : tier.btnVariant === 'secondary' ? 'secondary' : 'outline'}>
              Get Started <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default PartnershipTiers;
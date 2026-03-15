import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote, TrendingUp } from 'lucide-react';

const PartnershipSuccessStories = () => {
  const stories = [
    {
      firm: "Apex Financial Group",
      type: "Regional CPA Firm",
      stats: {
        cpas: "15 CPAs",
        growth: "200 → 400 Clients",
        revenue: "+$315K / Year"
      },
      quote: "FinxisAI allowed us to double our client base without hiring a single new staff member. The white-label portal is seamless.",
      author: "Robert Chen, Managing Partner"
    },
    {
      firm: "Summit & Associates",
      type: "Mid-Size Firm",
      stats: {
        cpas: "30 CPAs",
        growth: "500 → 1,000 Clients",
        revenue: "+$840K / Year"
      },
      quote: "We were drowning in low-margin bookkeeping work. This partnership transformed our firm into a high-margin advisory powerhouse.",
      author: "Sarah Jenkins, Partner"
    },
    {
      firm: "Modern Accounting Co.",
      type: "Boutique Firm",
      stats: {
        cpas: "8 CPAs",
        growth: "100 → 250 Clients",
        revenue: "+$210K / Year"
      },
      quote: "The revenue share model covers our software costs entirely. It's essentially free money that also improves client satisfaction.",
      author: "David Miller, Founder"
    }
  ];

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {stories.map((story, index) => (
        <Card key={index} className="bg-white border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300">
          <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-600 w-full"></div>
          <CardContent className="p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h4 className="font-bold text-lg text-slate-900">{story.firm}</h4>
                <p className="text-sm text-slate-500">{story.type}</p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-500 opacity-20" />
            </div>

            <div className="bg-slate-50 rounded-lg p-4 mb-6 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Team Size:</span>
                <span className="font-semibold text-slate-900">{story.stats.cpas}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Client Growth:</span>
                <span className="font-semibold text-blue-600">{story.stats.growth}</span>
              </div>
              <div className="flex justify-between text-sm border-t border-slate-200 pt-2 mt-2">
                <span className="text-slate-500 font-medium">Revenue Increase:</span>
                <span className="font-bold text-green-600">{story.stats.revenue}</span>
              </div>
            </div>

            <div className="relative">
              <Quote className="w-8 h-8 text-blue-100 absolute -top-4 -left-2" />
              <p className="text-slate-600 italic relative z-10 mb-4 pl-4">"{story.quote}"</p>
              <p className="text-sm font-bold text-slate-900 pl-4">— {story.author}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PartnershipSuccessStories;
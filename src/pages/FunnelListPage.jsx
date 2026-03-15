import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { funnelPages } from '@/lib/funnelPagesData';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Search, Filter } from 'lucide-react';
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation';

const FunnelListPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAudience, setSelectedAudience] = useState('All');

  const audiences = ['All', ...new Set(funnelPages.map(page => page.targetAudience))];

  const filteredFunnels = funnelPages.filter(page => {
    const matchesSearch = page.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          page.heroHeadline.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesAudience = selectedAudience === 'All' || page.targetAudience === selectedAudience;
    return matchesSearch && matchesAudience;
  });

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>Industry Solutions & Funnels | FinxisAI</title>
        <meta name="description" content="Explore our specialized financial solutions for SaaS, E-Commerce, Startups, CPA Firms, and Small Businesses." />
      </Helmet>
      
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="bg-white border-b border-slate-200 py-2">
           <div className="container-max">
             <BreadcrumbNavigation />
           </div>
        </div>

        {/* Hero */}
        <section className="bg-slate-900 text-white py-16 mb-12">
          <div className="container-max text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Tailored Financial Solutions</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              Discover how FinxisAI adapts to your specific industry needs with our specialized solution stacks.
            </p>
            
            <div className="max-w-xl mx-auto relative">
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
               <Input 
                 type="text" 
                 placeholder="Search solutions..." 
                 value={searchQuery}
                 onChange={(e) => setSearchQuery(e.target.value)}
                 className="pl-12 h-12 bg-white/10 border-slate-600 text-white placeholder:text-slate-400 focus:bg-white/20"
               />
            </div>
          </div>
        </section>

        <div className="container-max">
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            <Filter className="w-5 h-5 text-slate-500 mr-2" />
            {audiences.map(audience => (
              <Button
                key={audience}
                variant={selectedAudience === audience ? "default" : "outline"}
                onClick={() => setSelectedAudience(audience)}
                className={`rounded-full ${selectedAudience === audience ? 'bg-blue-600 hover:bg-blue-700' : 'bg-white'}`}
              >
                {audience}
              </Button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFunnels.map((funnel, index) => (
              <Card key={index} className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden border-slate-200">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 border-b border-slate-100">
                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-blue-200 mb-3">
                    {funnel.targetAudience}
                  </Badge>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{funnel.title}</h3>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-slate-600 mb-6 flex-grow">{funnel.heroSubhead}</p>
                  
                  <div className="space-y-3 mb-6">
                    {funnel.benefits.slice(0, 2).map((benefit, i) => (
                       <div key={i} className="flex items-center text-sm text-slate-700">
                         <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                         <span className="font-semibold mr-1">{benefit.metric}</span> {benefit.desc}
                       </div>
                    ))}
                  </div>

                  <Link to={`/funnels/${funnel.slug}`}>
                    <Button className="w-full bg-slate-900 hover:bg-blue-600 transition-colors group">
                      View Solution <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          {filteredFunnels.length === 0 && (
            <div className="text-center py-20 bg-white rounded-xl border border-dashed border-slate-300">
               <h3 className="text-lg font-semibold text-slate-900">No solutions found</h3>
               <p className="text-slate-500">Try adjusting your filters.</p>
               <Button variant="link" onClick={() => {setSearchQuery(''); setSelectedAudience('All');}} className="mt-2 text-blue-600">
                 View all solutions
               </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FunnelListPage;
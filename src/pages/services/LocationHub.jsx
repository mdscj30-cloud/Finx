import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Globe, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateBreadcrumbSchema } from '@/lib/seoHelpers';
import { regions, usStates, services } from '@/lib/usStateLocationData';

const LocationHub = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <Helmet>
        <title>Local Financial Services Expertise Across the USA | FinxisAI</title>
        <meta name="description" content="Find specialized accounting, bookkeeping, and tax services in your state. Comprehensive coverage across all 50 US states." />
        <link rel="canonical" href="https://finxis.ai/services/by-location" />
        <script type="application/ld+json">
          {JSON.stringify(generateBreadcrumbSchema([
             { name: "Home", url: "https://finxis.ai" },
             { name: "Services", url: "https://finxis.ai/services" },
             { name: "By Location", url: "https://finxis.ai/services/by-location" }
          ]))}
        </script>
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center"></div>
          <div className="container-max relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-8">
                Local Financial Services <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Expertise Across the USA</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10">
                Specialized accounting, bookkeeping, and tax services tailored to your state's regulations, economy, and business environment.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white border-0 shadow-lg">
                    Find Your Solution
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Local Expertise Matters */}
        <section className="py-16 bg-white">
          <div className="container-max max-w-4xl text-center">
             <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Compass className="w-8 h-8 text-blue-600" />
             </div>
             <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Local Expertise Matters</h2>
             <p className="text-lg text-slate-600 leading-relaxed mb-8">
               Business isn't just global; it's local. From New York's specific corporate franchise taxes to Texas's franchise tax thresholds and California's complex labor laws, where you operate defines your compliance needs. Our state-specific services ensure you meet every local requirement while benefiting from world-class AI efficiency. We understand the regulatory bodies, the economic climate, and the specific challenges of your region.
             </p>
          </div>
        </section>

        {/* Regions Grid */}
        <section className="py-16 bg-slate-50">
          <div className="container-max">
            {Object.keys(regions).map((regionName) => (
              <div key={regionName} className="mb-20">
                <h2 className="text-3xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">{regionName} Region</h2>
                <p className="text-slate-600 mb-8 max-w-3xl">
                  Serving businesses across the {regionName} with tailored financial solutions. From tech hubs to manufacturing centers, we cover every state.
                </p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {regions[regionName].map((stateName) => {
                    const stateData = usStates.find(s => s.name === stateName);
                    if (!stateData) return null;
                    
                    return (
                      <div key={stateData.slug} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-2 mb-4">
                          <MapPin className="w-5 h-5 text-blue-600" />
                          <h3 className="text-xl font-bold text-slate-900">{stateData.name}</h3>
                        </div>
                        <div className="space-y-2">
                          {services.map((service) => (
                            <Link 
                              key={service.slug} 
                              to={`/locations/${service.slug}/${stateData.slug}`} 
                              className="flex items-center justify-between text-slate-600 hover:text-blue-600 group py-1 border-b border-slate-50 last:border-0"
                            >
                              <span className="text-sm font-medium">{service.name}</span>
                              <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* International Section */}
        <section className="py-16 bg-slate-900 text-white">
           <div className="container-max">
              <h2 className="text-3xl font-bold mb-8 text-center">International Services</h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                 <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
                    <div className="flex items-center gap-3 mb-4">
                       <span className="text-3xl">🇬🇧</span>
                       <h3 className="text-2xl font-bold">United Kingdom</h3>
                    </div>
                    <p className="text-slate-300 mb-6">Expert VAT, MTD, and payroll services for UK businesses.</p>
                    <div className="space-y-2">
                       <Link to="/locations/bookkeeping/london" className="block text-blue-300 hover:text-white">London Services</Link>
                       <Link to="/locations/bookkeeping/manchester" className="block text-blue-300 hover:text-white">Manchester Services</Link>
                    </div>
                 </div>
                 <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
                    <div className="flex items-center gap-3 mb-4">
                       <span className="text-3xl">🇨🇦</span>
                       <h3 className="text-2xl font-bold">Canada</h3>
                    </div>
                    <p className="text-slate-300 mb-6">Comprehensive HST, payroll, and accounting for Canadian firms.</p>
                    <div className="space-y-2">
                       <Link to="/locations/bookkeeping/toronto" className="block text-blue-300 hover:text-white">Toronto Services</Link>
                       <Link to="/locations/bookkeeping/vancouver" className="block text-blue-300 hover:text-white">Vancouver Services</Link>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-blue-600 text-white text-center">
          <div className="container-max">
            <h2 className="text-3xl font-bold mb-6">Ready to Scale?</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Contact us today for a personalized consultation tailored to your specific location and industry.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100 border-0 shadow-lg">
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default LocationHub;
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { locationPages } from '@/lib/locationPagesData';
import { Button } from '@/components/ui/button';
import { MapPin, ArrowRight, ShieldCheck, BadgeCheck } from 'lucide-react';
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation';

const StateLocationPage = () => {
  const { slug } = useParams();
  const locationData = locationPages.find(p => p.slug === slug);

  if (!locationData) {
    return (
        <div className="min-h-screen bg-slate-50">
        <Header />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Location Not Found</h1>
          <Link to="/services/by-location"><Button>View All Locations</Button></Link>
        </div>
        <Footer />
      </div>
    );
  }

  const breadcrumbs = [
    { label: "Home", path: "/" },
    { label: "Locations", path: "/services/by-location" },
    { label: locationData.city, path: `/locations/${slug}` }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>{locationData.title}</title>
        <meta name="description" content={locationData.metaDescription} />
      </Helmet>

      <Header />

      <main className="pt-24 pb-20">
        <div className="container-max mb-8">
           <BreadcrumbNavigation customItems={breadcrumbs} />
        </div>

        <section className="container-max text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-medium text-sm mb-6">
            <MapPin className="w-4 h-4 mr-2" />
            Serving {locationData.city}, {locationData.state}
          </div>
          <h1 className="text-5xl lg:text-6xl font-display font-bold mb-6 text-slate-900">
            {locationData.heroHeadline}
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10">
            {locationData.heroSubhead}
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-500">
              Get a Local Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </section>

        <section className="bg-white py-16">
          <div className="container-max">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Local Expertise, National Power</h2>
                <p className="text-slate-600 text-lg mb-6">
                  {locationData.localContext}
                </p>
                <div className="space-y-4">
                  {locationData.services.map((service, i) => (
                    <div key={i} className="flex items-start">
                      <BadgeCheck className="w-6 h-6 text-green-500 mr-3 mt-1" />
                      <div>
                        <h4 className="font-bold text-slate-900">{service}</h4>
                        <p className="text-sm text-slate-500">Available in {locationData.city}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-slate-100 rounded-2xl p-8 border border-slate-200">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <ShieldCheck className="w-6 h-6 text-blue-600 mr-2" /> 
                  State Compliance
                </h3>
                <p className="text-slate-600 mb-4">
                  We handle all {locationData.state} specific filings including:
                </p>
                <ul className="list-disc pl-5 text-slate-600 space-y-2">
                  <li>Sales & Use Tax</li>
                  <li>Franchise Tax Reports</li>
                  <li>Unemployment Insurance</li>
                  <li>Local City Business Licenses</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default StateLocationPage;
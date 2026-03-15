import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Navigate, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { getLocationPageBySlug, generateLocationSchema } from '@/lib/locationPagesData';
import { MapPin, ShieldCheck, Briefcase, Star, Building2 } from 'lucide-react';

const LocationPage = () => {
  const { slug } = useParams();
  const page = getLocationPageBySlug(slug);

  if (!page) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>{page.title} | FinxisAI</title>
        <meta name="description" content={page.description} />
        <script type="application/ld+json">
          {JSON.stringify(generateLocationSchema(page))}
        </script>
      </Helmet>
      <Header />
      <main className="pt-24 pb-20">
        <div className="container-max">
          
          {/* Hero */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
             <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-6 font-semibold">
               <MapPin className="w-4 h-4 mr-2" /> Serving {page.name}
             </div>
             <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">{page.title}</h1>
             <p className="text-xl text-slate-600 mb-8">{page.description}</p>
             <Link to="/contact">
               <Button size="lg" className="btn-primary text-lg px-8">Get Local Support</Button>
             </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <Card className="p-8">
               <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                 <ShieldCheck className="w-6 h-6 text-green-500 mr-2" />
                 Local Compliance & Tax
               </h2>
               <p className="text-slate-700 text-lg leading-relaxed">{page.taxInfo}</p>
            </Card>
            <Card className="p-8">
               <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                 <Building2 className="w-6 h-6 text-blue-500 mr-2" />
                 Business Requirements
               </h2>
               <p className="text-slate-700 text-lg leading-relaxed">{page.requirements}</p>
            </Card>
          </div>

          <div className="bg-white rounded-2xl p-10 shadow-sm border border-slate-200 mb-20">
            <div className="grid md:grid-cols-2 gap-10 items-center">
               <div>
                 <h2 className="text-3xl font-bold text-slate-900 mb-4">Success in {page.name}</h2>
                 <h3 className="text-xl font-bold text-blue-600 mb-2">{page.successStory.title}</h3>
                 <p className="text-slate-600 text-lg mb-6">{page.successStory.desc}</p>
                 <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                    <div className="flex text-yellow-400 mb-2">
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                    </div>
                    <p className="italic text-slate-700 mb-2">"{page.testimonial.quote}"</p>
                    <p className="font-bold text-slate-900">— {page.testimonial.author}</p>
                 </div>
               </div>
               <div className="grid grid-cols-2 gap-4">
                 {page.industries.map((ind, i) => (
                   <div key={i} className="bg-slate-50 p-6 rounded-xl text-center">
                     <Briefcase className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                     <span className="font-bold text-slate-800">{ind}</span>
                   </div>
                 ))}
               </div>
            </div>
          </div>

          <div className="text-center bg-slate-900 text-white p-12 rounded-3xl">
             <h2 className="text-3xl font-bold mb-4">Start Growing in {page.name} Today</h2>
             <p className="text-slate-300 mb-8 max-w-2xl mx-auto">Join hundreds of other businesses in your area using FinxisAI to automate their finances.</p>
             <Link to="/contact">
               <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 font-bold px-8">
                 Schedule a Demo
               </Button>
             </Link>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LocationPage;
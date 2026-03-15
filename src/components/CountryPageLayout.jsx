import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LeadForm from '@/components/LeadForm';
import { motion } from 'framer-motion';
import { CheckCircle, Calendar, Star, ArrowRight, Shield, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CountryPageLayout = ({ 
  countryName, 
  flag, 
  heroTitle, 
  heroDescription, 
  services, 
  deadlines, 
  testimonials, 
  meta 
}) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `FinxisAI for ${countryName}`,
    "description": heroDescription,
    "brand": {
      "@type": "Organization",
      "name": "FinxisAI"
    },
    "areaServed": countryName
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <link rel="canonical" href={`https://finxisai.com/${countryName.toLowerCase().replace(/\s+/g, '-')}`} />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 section-padding bg-white">
          <div className="container-max grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full text-blue-700 font-medium text-sm mb-6">
                <Globe className="w-4 h-4 mr-2" />
                {countryName} Compliance & Automation
              </div>
              <h1 className="text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
                {heroTitle} <span className="text-4xl align-top ml-2">{flag}</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                {heroDescription}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild className="btn-primary group">
                  <Link to="/contact">
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="group">
                  <Link to="/pricing">
                    View Pricing
                  </Link>
                </Button>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200 shadow-xl">
                <div className="space-y-4">
                  {services.slice(0, 3).map((service, idx) => (
                    <div key={idx} className="flex items-start p-4 bg-white rounded-xl shadow-sm">
                      <div className="p-2 bg-blue-100 rounded-lg mr-4 text-blue-600">
                        <service.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800">{service.title}</h3>
                        <p className="text-sm text-slate-600">{service.shortDesc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-display font-bold mb-4">Tailored for {countryName} Regulations</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Our platform is built to handle the specific accounting standards and tax requirements of {countryName}.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-md border border-slate-100 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{service.title}</h3>
                  <p className="text-slate-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Deadlines Section */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-red-50 text-red-700 rounded-full font-medium text-sm mb-6">
                <Calendar className="w-4 h-4 mr-2" />
                Key Dates
              </div>
              <h2 className="text-3xl font-display font-bold mb-4">{countryName} Compliance Calendar</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Never miss a filing deadline. FinxisAI automatically tracks these dates for your entity type.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {deadlines.map((group, idx) => (
                <div key={idx} className="border border-slate-200 rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-blue-500" />
                    {group.category}
                  </h3>
                  <ul className="space-y-3">
                    {group.items.map((item, i) => (
                      <li key={i} className="flex items-start text-slate-600">
                        <CheckCircle className="w-5 h-5 mr-3 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section-padding bg-slate-50">
          <div className="container-max">
            <h2 className="text-3xl font-display font-bold text-center mb-12">Trusted by Businesses in {countryName}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((review, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
                >
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-6 italic">"{review.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                      {review.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{review.author}</p>
                      <p className="text-sm text-slate-500">{review.role}, {review.location}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding">
          <div className="container-max">
            <LeadForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CountryPageLayout;
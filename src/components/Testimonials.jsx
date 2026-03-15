import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Smith',
      role: 'Senior Partner, Smith & Co.',
      location: 'London, UK',
      content: 'FinxisAI has revolutionized our practice. We\'ve reduced manual work by 70% and can now serve more clients with the same team. The AI insights are incredibly accurate.',
      rating: 5,
    },
    {
      name: 'Emily Johnson',
      role: 'Founder, Innovate Tech',
      location: 'New York, USA',
      content: 'As a small business owner, FinxisAI gives me the financial clarity I need to make informed decisions. The automated compliance features have saved us from costly mistakes.',
      rating: 5,
    },
    {
      name: 'David Williams',
      role: 'Managing Director, Williams Accounting',
      location: 'Manchester, UK',
      content: 'The document AI is phenomenal. What used to take hours of manual data entry now happens in minutes. Our clients love the real-time dashboard access.',
      rating: 5,
    },
    {
      name: 'Sarah Brown',
      role: 'CFO, Future Solutions Inc.',
      location: 'San Francisco, USA',
      content: 'FinxisAI\'s predictive analytics helped us identify cash flow issues before they became problems. The ROI has been exceptional - we\'ve saved over $100k annually.',
      rating: 5,
    },
    {
      name: 'Michael Davis',
      role: 'Tax Consultant, Davis & Partners',
      location: 'Chicago, USA',
      content: 'The tax advisory assistant is like having a senior tax expert available 24/7. It\'s helped us stay compliant with IRS regulations effortlessly.',
      rating: 5,
    },
    {
      name: 'Jessica Wilson',
      role: 'Owner, The Artisan Boutique',
      location: 'Bristol, UK',
      content: 'Before FinxisAI, I was drowning in paperwork. Now everything is automated and I can focus on growing my business. The cost savings alone justify the investment.',
      rating: 5,
    }
  ];
  
  const testimonialImages = [
    <img key="0" className="w-12 h-12 rounded-full object-cover" alt="Professional Caucasian male CPA in business attire smiling confidently" src="https://images.unsplash.com/photo-1585734333426-b96221fbb2bb?auto=format&fit=crop&w=96&q=80" />,
    <img key="1" className="w-12 h-12 rounded-full object-cover" alt="Young female entrepreneur in a modern office setting" src="https://images.unsplash.com/photo-1590650467980-8eadfa86ff48?auto=format&fit=crop&w=96&q=80" />,
    <img key="2" className="w-12 h-12 rounded-full object-cover" alt="Professional accountant working with financial documents in a UK office" src="https://images.unsplash.com/photo-1554224155-a1487473ffd9?auto=format&fit=crop&w=96&q=80" />,
    <img key="3" className="w-12 h-12 rounded-full object-cover" alt="Confident female CFO in a corporate American environment" src="https://images.unsplash.com/photo-1573496130141-209d200cebd8?auto=format&fit=crop&w=96&q=80" />,
    <img key="4" className="w-12 h-12 rounded-full object-cover" alt="Professional tax consultant reviewing financial reports in a US city" src="https://images.unsplash.com/photo-1554425930-4d8de8b3fdd2?auto=format&fit=crop&w=96&q=80" />,
    <img key="5" className="w-12 h-12 rounded-full object-cover" alt="UK-based small business owner in her boutique shop" src="https://images.unsplash.com/photo-1649192155955-a2961de16fb5?auto=format&fit=crop&w=96&q=80" />
  ];

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
            Trusted by{' '}
            <span className="gradient-text">Leaders</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See what CPAs and business owners across the US and UK are saying about FinxisAI.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg card-hover relative"
            >
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-white" />
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-slate-600 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center space-x-4">
                {testimonialImages[index]}
                <div>
                  <h4 className="font-semibold text-slate-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-slate-600">
                    {testimonial.role}
                  </p>
                  <p className="text-xs text-slate-500">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-3xl font-display font-bold gradient-text mb-2">
                4.9/5
              </div>
              <div className="text-slate-600">
                Average Rating
              </div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-display font-bold gradient-text mb-2">
                98%
              </div>
              <div className="text-slate-600">
                Customer Satisfaction
              </div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-display font-bold gradient-text mb-2">
                24/7
              </div>
              <div className="text-slate-600">
                Support Available
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
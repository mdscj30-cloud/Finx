import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
            Pricing That <span className="gradient-text">Scales With You</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12">
            Our pricing is simple and transparent, based on your monthly expenses. No hidden fees, no surprises.
          </p>
          <Link to="/pricing">
            <Button className="btn-primary group">
              See Detailed Pricing
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
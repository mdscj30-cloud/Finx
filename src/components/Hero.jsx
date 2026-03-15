import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Shield, Zap, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = ({ onWatchDemo }) => { // onWatchDemo prop is still kept as requested
  return (
    <section id="hero" className="pt-32 pb-20 section-padding overflow-hidden bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full text-blue-700 font-medium text-sm"
            >
              <Zap className="w-4 h-4 mr-2" />
              AI-Powered Financial Automation
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-6xl font-display font-bold leading-tight"
            >
              Grow Your Business with AI-Powered Accounting
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-slate-600 leading-relaxed max-w-lg"
            >
              Empower CPAs and small businesses with intelligent automation, document AI, and real-time dashboards that streamline financial workflows.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center space-x-6 text-sm text-slate-500"
            >
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2 text-green-500" />
                Bank-grade Security
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2 text-blue-500" />
                Trusted by 1,000+ Firms
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild className="btn-primary group">
                <Link to="/onboarding">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button onClick={onWatchDemo} className="btn-secondary group">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-sm text-slate-500"
            >
              Join leading firms already using FinxisAI.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 p-4">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-3xl transform -rotate-3"></div>
              <img className="w-full h-auto rounded-2xl shadow-2xl relative transform rotate-1 hover:rotate-0 transition-transform duration-500" alt="A futuristic, holographic financial dashboard interface displaying complex data visualizations and analytics." src="https://images.unsplash.com/photo-1571677246347-5040036b95cc?auto=format&fit=crop&w=900&q=80" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
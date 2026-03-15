import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, DollarSign, Users, TrendingUp, Shield } from 'lucide-react';
const Benefits = () => {
  const cpaeBenefits = [{
    icon: Clock,
    title: 'Save 15+ Hours Weekly',
    description: 'Automate routine tasks and focus on high-value advisory services.',
    color: 'from-blue-500 to-indigo-600'
  }, {
    icon: Users,
    title: 'Scale Client Base',
    description: 'Handle 3x more clients with the same team through automation.',
    color: 'from-purple-500 to-violet-600'
  }, {
    icon: TrendingUp,
    title: 'Increase Revenue',
    description: 'Boost profitability by 40% with efficient workflows and premium services.',
    color: 'from-sky-500 to-cyan-600'
  }];
  const smbBenefits = [{
    icon: DollarSign,
    title: 'Reduce Costs by 60%',
    description: 'Cut accounting expenses while improving accuracy and compliance.',
    color: 'from-emerald-500 to-teal-600'
  }, {
    icon: CheckCircle,
    title: 'Real-time Insights',
    description: 'Make informed decisions with up-to-date financial data and analytics.',
    color: 'from-lime-500 to-green-600'
  }, {
    icon: Shield,
    title: 'Stay Compliant',
    description: 'Automated compliance checks and tax preparation reduce audit risks.',
    color: 'from-amber-500 to-orange-600'
  }];
  return <section id="benefits" className="section-padding bg-gradient-to-br from-slate-50 to-blue-50">
    <div className="container-max">
      <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }} className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
          Benefits That{' '}
          <span className="gradient-text">Drive Results</span>
        </h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">Discover how FinxisAI transforms financial operations for CPAs and SME businesses</p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16">
        <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="space-y-8">
          <div className="text-center lg:text-left">
            <h3 className="text-3xl font-display font-bold mb-4 text-slate-800">
              For CPAs & Accountants
            </h3>
            <p className="text-lg text-slate-600">
              Empower your practice with AI-driven tools that enhance efficiency and client satisfaction.
            </p>
          </div>

          <div className="space-y-6">
            {cpaeBenefits.map((benefit, index) => <motion.div key={benefit.title} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: index * 0.1
            }} viewport={{
              once: true
            }} className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg card-hover">
              <div className={`feature-icon bg-gradient-to-br ${benefit.color}`}>
                <benefit.icon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2 text-slate-800">
                  {benefit.title}
                </h4>
                <p className="text-slate-600">
                  {benefit.description}
                </p>
              </div>
            </motion.div>)}
          </div>
        </motion.div>

        <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="space-y-8">
          <div className="text-center lg:text-left">
            <h3 className="text-3xl font-display font-bold mb-4 text-slate-800">
              For Small Business Owners
            </h3>
            <p className="text-lg text-slate-600">
              Streamline your financial operations and gain insights that drive business growth.
            </p>
          </div>

          <div className="space-y-6">
            {smbBenefits.map((benefit, index) => <motion.div key={benefit.title} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: index * 0.1
            }} viewport={{
              once: true
            }} className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg card-hover">
              <div className={`feature-icon bg-gradient-to-br ${benefit.color}`}>
                <benefit.icon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2 text-slate-800">
                  {benefit.title}
                </h4>
                <p className="text-slate-600">
                  {benefit.description}
                </p>
              </div>
            </motion.div>)}
          </div>
        </motion.div>
      </div>

      <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.4
      }} viewport={{
        once: true
      }} className="mt-20 grid md:grid-cols-4 gap-8 text-center">
        {[{
          number: '1,000+',
          label: 'Firms Trust Us'
        }, {
          number: '50,000+',
          label: 'Businesses Powered'
        }, {
          number: '$25M+',
          label: 'In Client Savings'
        }, {
          number: '99.9%',
          label: 'Uptime SLA'
        }].map((stat, index) => <div key={stat.label} className="p-6">
          <div className="text-4xl font-display font-bold gradient-text mb-2">
            {stat.number}
          </div>
          <div className="text-slate-600 font-medium">
            {stat.label}
          </div>
        </div>)}
      </motion.div>
    </div>
  </section>;
};
export default Benefits;
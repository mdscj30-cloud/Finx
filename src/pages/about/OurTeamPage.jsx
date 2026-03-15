import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation';
import { motion } from 'framer-motion';
import { Users, GraduationCap, Award, Briefcase, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { generateOrganizationSchema } from '@/lib/seoHelpers';

const OurTeamPage = () => {
  const breadcrumbs = [
    { label: 'About', path: '/about' },
    { label: 'Our Team', path: '/about/team' }
  ];

  const leaders = [
    {
        name: "Sarah Jenkins, CPA",
        role: "Head of Tax Advisory",
        bio: "Sarah brings 15+ years of experience from Big 4 accounting firms. She ensures all AI tax models align with current IRS code and oversees complex filing strategies.",
        img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80"
    },
    {
        name: "Michael Chen",
        role: "Chief Financial Officer",
        bio: "Former CFO of two successful fintech startups. Michael leads our Virtual CFO division, designing the financial modeling frameworks used by our clients.",
        img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200&q=80"
    },
    {
        name: "Dr. Elena Rodriguez",
        role: "Head of AI Strategy",
        bio: "With a PhD in Computational Finance, Elena bridges the gap between machine learning capabilities and strict financial regulatory requirements.",
        img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200&q=80"
    },
     {
        name: "David Kim",
        role: "VP of Operations",
        bio: "David ensures operational excellence across our bookkeeping teams, implementing rigorous QC standards and efficient human-in-the-loop workflows.",
        img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>Our Team & Advisors | Human Accountability | FinxisAI</title>
        <meta name="description" content="Meet the CPAs, financial experts, and technologists behind FinxisAI. We combine AI efficiency with human accountability to deliver superior financial services." />
        <link rel="canonical" href="https://finxisai.com/about/team" />
        <script type="application/ld+json">
          {JSON.stringify(generateOrganizationSchema())}
        </script>
      </Helmet>

      <Header />

      <main className="pt-24 pb-20">
        <div className="container-max">
            <BreadcrumbNavigation items={breadcrumbs} />
            
            <section className="py-12 lg:py-20 text-center max-w-4xl mx-auto">
                 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <h1 className="text-4xl lg:text-6xl font-display font-bold text-slate-900 mb-6">
                        Expertise You Can <br/><span className="text-blue-600">Count On</span>
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed mb-8">
                        While our technology is advanced, our service is human. FinxisAI is led by seasoned CPAs, tax attorneys, and financial strategists who understand that behind every data point is a business decision.
                    </p>
                 </motion.div>
            </section>

            <section className="mb-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {leaders.map((leader, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-slate-100 group"
                        >
                            <div className="aspect-square overflow-hidden relative">
                                <img src={leader.img} alt={leader.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                    <span className="text-white font-medium text-sm">View Profile</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="font-bold text-lg text-slate-900">{leader.name}</h3>
                                <p className="text-blue-600 font-medium text-sm mb-3">{leader.role}</p>
                                <p className="text-slate-600 text-sm leading-relaxed">{leader.bio}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="py-16 border-t border-slate-200">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Human Accountability</h2>
                        <p className="text-slate-600 mb-6 text-lg">
                            We believe that AI should support professionals, not replace accountability. At FinxisAI, a human expert is always the final authority on your financials.
                        </p>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="bg-blue-100 p-3 rounded-full h-fit"><GraduationCap className="w-6 h-6 text-blue-600"/></div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-lg">Continuous Learning</h4>
                                    <p className="text-slate-600">Our team undergoes mandatory monthly training on the latest tax law changes, GAAP updates, and AI ethics to ensure we stay ahead of the curve.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-blue-100 p-3 rounded-full h-fit"><Award className="w-6 h-6 text-blue-600"/></div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-lg">Professional Certification</h4>
                                    <p className="text-slate-600">All final reviews are conducted by licensed CPAs or Enrolled Agents. We maintain strict professional standards in line with AICPA guidelines.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-blue-100 p-3 rounded-full h-fit"><Briefcase className="w-6 h-6 text-blue-600"/></div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-lg">Advisory Oversight</h4>
                                    <p className="text-slate-600">Our advisory board includes veterans from the SEC, major fintechs, and top accounting firms, guiding our strategic direction and compliance frameworks.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Why This Matters</h3>
                        <p className="text-slate-600 mb-6">
                            When you work with FinxisAI, you aren't just getting software; you are getting a partner. In the event of an audit or a complex financial event (like an acquisition), you need a human who understands the nuance of the law, not just an algorithm.
                        </p>
                        <Link to="/contact">
                            <Button className="w-full bg-slate-900 text-white hover:bg-slate-800">
                                Schedule a Consultation
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OurTeamPage;
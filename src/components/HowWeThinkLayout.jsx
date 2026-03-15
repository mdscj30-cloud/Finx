import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, ArrowRight, BookOpen, Shield, Cpu, Lock, FileText, Users } from 'lucide-react';

const SidebarLink = ({ to, children, icon: Icon }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link to={to} className={`flex items-center p-3 rounded-lg transition-all mb-2 ${isActive ? 'bg-blue-50 text-blue-700 font-semibold border-l-4 border-blue-600' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}>
      {Icon && <Icon className={`w-4 h-4 mr-3 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />}
      <span className="text-sm">{children}</span>
      {isActive && <ChevronRight className="w-4 h-4 ml-auto text-blue-600" />}
    </Link>
  );
};

const HowWeThinkLayout = ({ children, title, description, toc, relatedLinks, schemaData }) => {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <Helmet>
        <title>{title} | How FinxisAI Thinks</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={currentUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        {schemaData && <script type="application/ld+json">{JSON.stringify(schemaData)}</script>}
      </Helmet>

      <Header />

      <main className="pt-24 pb-20">
        <div className="bg-slate-900 text-white py-16 mb-12 relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-indigo-900/50 z-0"></div>
           <div className="container-max relative z-10">
             <BreadcrumbNavigation items={[{ label: 'Home', path: '/' }, { label: 'How We Think', path: '/how-we-think' }, { label: title, path: '#' }]} />
             <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 mt-4">{title}</h1>
             <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">{description}</p>
           </div>
        </div>

        <div className="container-max">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Sidebar Navigation */}
            <aside className="lg:col-span-3 hidden lg:block">
              <div className="sticky top-24 space-y-8">
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 px-2">Core Philosophy</h3>
                  <nav>
                    <SidebarLink to="/how-we-think/ai-responsibility" icon={Cpu}>AI Responsibility</SidebarLink>
                    <SidebarLink to="/how-we-think/what-we-automate" icon={BookOpen}>What We Automate</SidebarLink>
                    <SidebarLink to="/how-we-think/quality-control-framework" icon={Shield}>Quality Control</SidebarLink>
                  </nav>
                  
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 mt-6 px-2">Operational Excellence</h3>
                  <nav>
                    <SidebarLink to="/how-we-think/professional-oversight" icon={Users}>Professional Oversight</SidebarLink>
                    <SidebarLink to="/how-we-think/data-security-privacy" icon={Lock}>Data Security</SidebarLink>
                    <SidebarLink to="/how-we-think/regulatory-compliance" icon={FileText}>Regulatory Compliance</SidebarLink>
                  </nav>

                   <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 mt-6 px-2">Thought Leadership</h3>
                  <nav>
                    <SidebarLink to="/how-we-think/future-of-ai-accounting" icon={ArrowRight}>Future of AI Accounting</SidebarLink>
                    <SidebarLink to="/how-we-think/our-story-philosophy" icon={BookOpen}>Origin Story</SidebarLink>
                  </nav>
                </div>

                {toc && toc.length > 0 && (
                  <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                    <h3 className="text-sm font-bold text-slate-800 mb-4">On This Page</h3>
                    <nav className="space-y-2 text-sm">
                      {toc.map((item, idx) => (
                        <a key={idx} href={`#${item.id}`} className="block text-slate-500 hover:text-blue-600 transition-colors pl-2 border-l-2 border-transparent hover:border-blue-300">
                          {item.label}
                        </a>
                      ))}
                    </nav>
                  </div>
                )}
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-9">
              <motion.article 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 }}
                className="prose prose-lg prose-slate max-w-none prose-headings:font-display prose-a:text-blue-600 hover:prose-a:text-blue-500"
              >
                {children}
              </motion.article>

              {/* Related Links Footer */}
              {relatedLinks && (
                <div className="mt-16 pt-8 border-t border-slate-200">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Related Reading</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {relatedLinks.map((link, idx) => (
                      <Link key={idx} to={link.path} className="group block bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all">
                        <h4 className="font-bold text-lg text-slate-900 group-hover:text-blue-600 mb-2">{link.title}</h4>
                        <p className="text-sm text-slate-600">{link.desc}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HowWeThinkLayout;
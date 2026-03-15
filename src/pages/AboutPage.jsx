import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OptimizedImage from '@/components/OptimizedImage';
import { motion } from 'framer-motion';
import { Check, Target, Users, BrainCircuit, ShieldCheck, Zap, BarChart3, Globe } from 'lucide-react';

const AboutPage = () => {
    const roles = [
        { role: "Executive Leadership", description: "Strategic direction and industry compliance oversight by seasoned financial experts.", imgPlaceholder: "Professional business executive in a modern office setting" },
        { role: "Engineering Team", description: "Developing secure, scalable AI infrastructure and seamless integrations.", imgPlaceholder: "Software developers working on complex code in a tech environment" },
        { role: "Operations & Success", description: "Ensuring smooth service delivery and dedicated support for every client.", imgPlaceholder: "Operations manager coordinating tasks in a sleek workspace" },
        { role: "Data Science Division", description: "Advancing our proprietary financial models and predictive analytics.", imgPlaceholder: "Data scientist analyzing complex financial charts and algorithms" },
    ];

    const values = [
        { icon: BrainCircuit, title: "Innovation", description: "We are driven by a relentless pursuit of innovation, constantly exploring new technologies to solve complex financial problems." },
        { icon: Target, title: "Customer Centricity", description: "Our customers are at the heart of everything we do. We build solutions that are intuitive, effective, and tailored to their needs." },
        { icon: ShieldCheck, title: "Security & Integrity", description: "We uphold the highest standards of data privacy and transparency, ensuring enterprise-grade security across all platforms." },
        { icon: Users, title: "Collaborative Excellence", description: "We foster a high-performance environment where technology and human expertise work in perfect harmony." },
    ];

    const stats = [
        { icon: Zap, label: "Processing Speed", value: "Real-time" },
        { icon: BarChart3, label: "Accuracy Rate", value: "99.9%" },
        { icon: Globe, label: "Global Reach", value: "24/7" },
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            <Helmet>
                <title>About FinxisAI | Company Mission & Expertise</title>
                <meta name="description" content="Discover the mission behind FinxisAI. We combine expert financial oversight with advanced AI to revolutionize operations for businesses worldwide." />
            </Helmet>
            <Header />
            <main>
                {/* Hero Section */}
                <section className="pt-32 pb-20 section-padding bg-white">
                    <div className="container-max text-center">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-blue-600 uppercase bg-blue-50 rounded-full">
                                Our Mission
                            </div>
                            <h1 className="text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
                                The Future of <span className="gradient-text">Financial Intelligence</span>
                            </h1>
                            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                                FinxisAI provides intelligent financial infrastructure designed to automate complexity. We empower organizations with high-precision tools that transform raw data into actionable growth strategies.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Company Background Section */}
                <section className="py-20 bg-slate-50">
                    <div className="container-max">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl font-display font-bold mb-6">Built for Modern Enterprise</h2>
                                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                    Our platform was engineered to bridge the gap between traditional financial practices and the speed of modern business. By integrating advanced machine learning with professional oversight, we provide a robust foundation for scaling companies.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Automated high-volume transaction reconciliation",
                                        "Real-time cash flow and burn rate monitoring",
                                        "Seamless multi-platform data integration",
                                        "Audit-ready financial reporting and compliance"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center text-slate-700">
                                            <div className="mr-3 p-1 bg-blue-100 rounded-full text-blue-600">
                                                <Check className="w-4 h-4" />
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="grid grid-cols-1 gap-4 sm:grid-cols-2"
                            >
                                {stats.map((stat, i) => (
                                    <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                                        <stat.icon className="w-10 h-10 text-blue-600 mb-4" />
                                        <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                                        <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">{stat.label}</div>
                                    </div>
                                ))}
                                <div className="bg-blue-600 p-8 rounded-2xl shadow-xl flex flex-col items-center text-center text-white">
                                    <ShieldCheck className="w-10 h-10 mb-4" />
                                    <div className="text-xl font-bold mb-1">Secure</div>
                                    <div className="text-sm text-blue-100">Enterprise Ready</div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="section-padding">
                    <div className="container-max">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-display font-bold mb-4">Our Core Values</h2>
                            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                                These principles guide our technical architecture, our internal culture, and our commitment to service excellence.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {values.map((value, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 transition-all hover:shadow-md"
                                >
                                    <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                                        <value.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-3">{value.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{value.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Role-Based Expertise Section */}
                <section className="section-padding bg-white">
                    <div className="container-max">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-display font-bold mb-4">Our Expertise</h2>
                            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                                FinxisAI is built on a multidisciplinary foundation of finance, technology, and operational excellence.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {roles.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="group"
                                >
                                    <div className="relative aspect-square overflow-hidden rounded-2xl mb-6 bg-slate-100">
                                        <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-blue-600/0 transition-colors z-10" />
                                        <OptimizedImage 
                                          src={`https://images.unsplash.com/photo-1573161158521-8034a83d447e?auto=format&fit=crop&q=80&w=800&sig=${index}`}
                                          alt={item.imgPlaceholder}
                                          className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.role}</h3>
                                    <p className="text-slate-600 leading-relaxed">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-blue-600">
                    <div className="container-max text-center">
                        <h2 className="text-3xl font-display font-bold text-white mb-6">Ready to Experience Intelligent Accounting?</h2>
                        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                            Join hundreds of growth-oriented companies using FinxisAI to streamline their financial operations.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a href="/contact" className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors">
                                Contact Sales
                            </a>
                            <a href="/pricing" className="px-8 py-4 bg-blue-700 text-white font-bold rounded-xl hover:bg-blue-800 transition-colors">
                                View Pricing
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default AboutPage;
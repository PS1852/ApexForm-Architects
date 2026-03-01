import HeroSection from '../components/HeroSection';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const featuredProjects = [
    {
        id: 1,
        title: 'The Obsidian Tower',
        category: 'Commercial • High-Rise',
        image: 'https://images.unsplash.com/photo-1541884053363-931056501255?q=80&w=2070&auto=format&fit=crop',
    },
    {
        id: 2,
        title: 'Aura Waterfront Villa',
        category: 'Residential • Luxury',
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop',
    },
];

export default function Home() {
    return (
        <div className="min-h-screen bg-dark-900">
            <SEO
                title="Home"
                description="ApexForm Architects - Dubai's leading luxury architecture firm specializing in iconic skyscrapers, premium villas, and cutting-edge design."
                keywords="architects dubai, luxury architecture, modern design, top architect firm UAE"
            />
            <HeroSection />

            {/* Intro Section */}
            <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-light text-light-100 mb-8 leading-tight">
                            A Legacy of <br />
                            <span className="font-bold text-primary-500">Uncompromising Design</span>
                        </h2>
                        <p className="text-light-300 text-lg leading-relaxed mb-8">
                            Based in the heart of Dubai, ApexForm Architects redefines the boundaries of modern architecture. We specialize in creating high-end residential, commercial, and hospitality spaces that are as functional as they are breathtaking.
                        </p>
                        <p className="text-light-300 text-lg leading-relaxed mb-10">
                            Our approach marries timeless elegance with cutting-edge engineering, resulting in structures that stand as testaments to human ambition and aesthetic perfection.
                        </p>
                        <Link to="/about" className="inline-flex items-center gap-3 text-primary-500 uppercase tracking-widest font-medium hover:gap-5 transition-all">
                            Discover Our Firm <ArrowRight size={18} />
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[600px]"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop"
                            alt="Interior Architecture"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute -bottom-8 -left-8 bg-dark-800 p-8 border-l-4 border-primary-500 shadow-2xl">
                            <p className="text-4xl font-light text-light-100 mb-2">15+</p>
                            <p className="text-primary-500 uppercase tracking-widest text-sm">Years of Excellence</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Featured Projects Highlight */}
            <section className="py-32 bg-dark-800">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div>
                            <p className="uppercase tracking-[0.2em] text-primary-500 text-sm mb-4">Selected Works</p>
                            <h2 className="text-4xl md:text-5xl font-light text-light-100">Featured Projects</h2>
                        </div>
                        <Link to="/portfolio" className="inline-flex items-center gap-3 text-light-100 uppercase tracking-widest text-sm hover:text-primary-500 transition-colors">
                            View All Projects <ArrowRight size={16} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {featuredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="group cursor-pointer"
                            >
                                <div className="relative h-[500px] overflow-hidden mb-6">
                                    <div className="absolute inset-0 bg-dark-900/20 group-hover:bg-dark-900/0 transition-colors duration-500 z-10"></div>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div>
                                    <p className="text-primary-500 text-sm uppercase tracking-widest mb-2">{project.category}</p>
                                    <h3 className="text-2xl font-light text-light-100 group-hover:text-primary-500 transition-colors">{project.title}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

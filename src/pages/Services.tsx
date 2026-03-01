import { motion } from 'framer-motion';
import { Building2, Home, Landmark, Ruler, Lightbulb, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';

const services = [
    {
        id: 1,
        title: 'Architectural Design',
        description: 'From master planning to skyline-defining supertall towers, we create iconic structures that shape the future of urban landscapes.',
        icon: Building2,
    },
    {
        id: 2,
        title: 'Luxury Residential',
        description: 'Bespoke private villas, penthouses, and estates crafted with unparalleled attention to detail and premium materials.',
        icon: Home,
    },
    {
        id: 3,
        title: 'Interior Architecture',
        description: 'Seamless integration of exterior vision and interior spatial flow, creating cohesive environments of ultimate luxury.',
        icon: Landmark,
    },
    {
        id: 4,
        title: 'Precision Engineering',
        description: 'State-of-the-art structural engineering ensuring total structural integrity while enabling gravity-defying designs.',
        icon: Ruler,
    },
    {
        id: 5,
        title: 'Sustainable Innovation',
        description: 'Integrating next-generation eco-friendly technologies into high-end architecture without compromising on aesthetic impact.',
        icon: Lightbulb,
    },
    {
        id: 6,
        title: 'Project Management',
        description: 'End-to-end oversight ensuring every milestone is achieved with exact precision and flawless execution.',
        icon: ShieldCheck,
    },
];

export default function Services() {
    return (
        <div className="min-h-screen bg-dark-900 pt-32 pb-24">
            <SEO title="Services" description="ApexForm Architects provides comprehensive architectural, interior design, and master-planning services for high-end luxury projects." />
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24 max-w-3xl mx-auto"
                >
                    <p className="uppercase tracking-[0.2em] text-primary-500 text-sm mb-4">What We Do</p>
                    <h1 className="text-4xl md:text-6xl font-light text-light-100 mb-6">Our Expertise</h1>
                    <p className="text-light-300 text-lg leading-relaxed">
                        Delivering holistic, visionary solutions across the entire lifecycle of luxury architecture. We blur the lines between art and engineering.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="group bg-dark-800 p-10 border border-dark-700 hover:border-primary-500/50 transition-colors relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-primary-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>

                            <service.icon size={40} className="text-primary-500 mb-8 font-light" strokeWidth={1} />
                            <h3 className="text-2xl font-light text-light-100 mb-4">{service.title}</h3>
                            <p className="text-light-300 leading-relaxed group-hover:text-light-100 transition-colors">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

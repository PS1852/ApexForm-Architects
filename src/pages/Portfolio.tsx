import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectModal from '../components/ProjectModal';
import SEO from '../components/SEO';

export const portfolioProjects = [
    {
        id: 1,
        title: 'The Obsidian Tower',
        category: 'Commercial',
        location: 'Downtown Dubai',
        year: '2025',
        image: 'https://images.unsplash.com/photo-1541884053363-931056501255?q=80&w=2070&auto=format&fit=crop',
        description: 'A 65-story supertall commercial skyscraper featuring a monolithic black glass facade that reflects the desert sun. It redefines the corporate skyline with intelligent climate-responsive shielding.'
    },
    {
        id: 2,
        title: 'Aura Waterfront Villa',
        category: 'Residential',
        location: 'Palm Jumeirah',
        year: '2024',
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop',
        description: 'An ultra-luxury waterfront estate featuring sweeping cantilevers, infinity edge pools, and seamless indoor-outdoor living spaces engineered to maximize panoramic Gulf views.'
    },
    {
        id: 3,
        title: 'Lumina Cultural Center',
        category: 'Cultural',
        location: 'Abu Dhabi',
        year: '2026',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
        description: 'A sprawling geometric masterpiece dedicated to contemporary art. The parametric roof structure filters natural light mimicking traditional Islamic architectural patterns.'
    },
    {
        id: 4,
        title: 'Crescent Heights',
        category: 'Residential',
        location: 'Dubai Marina',
        year: '2023',
        image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop',
        description: 'Twin residential towers joined by an aerodynamic sky-bridge. Offering unparalleled luxury living with vertical gardens that naturally cool the structure.'
    },
    {
        id: 5,
        title: 'Oasis Resort & Spa',
        category: 'Hospitality',
        location: 'Desert Conservatory',
        year: '2025',
        image: 'https://images.unsplash.com/photo-1582610116397-edb318620f90?q=80&w=2070&auto=format&fit=crop',
        description: 'A low-impact eco-luxury resort seamlessly integrated into the rolling dunes. Crafted using rammed earth walls and hyper-efficient thermodynamic engineering.'
    },
    {
        id: 6,
        title: 'The Vertex Pavilion',
        category: 'Commercial',
        location: 'DIFC',
        year: '2024',
        image: 'https://images.unsplash.com/photo-1466099859206-b51fb264f51e?q=80&w=2062&auto=format&fit=crop',
        description: 'A striking asymmetrical corporate headquarters wrapped in a bronze exoskeleton. The dynamic form minimizes wind load while maximizing interior volumetric space.'
    }
];

export default function Portfolio() {
    const [selectedProject, setSelectedProject] = useState<typeof portfolioProjects[0] | null>(null);

    return (
        <div className="min-h-screen bg-dark-900 pt-32 pb-24">
            <SEO title="Portfolio" description="Explore the selected works of ApexForm Architects, featuring luxury residential, commercial, and cultural masterpieces." />
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 pt-10"
                >
                    <div className="max-w-2xl">
                        <p className="uppercase tracking-[0.2em] text-primary-500 text-sm mb-4">Our Masterpieces</p>
                        <h1 className="text-4xl md:text-6xl font-light text-light-100 mb-6">Selected Works</h1>
                        <p className="text-light-300 text-lg leading-relaxed">
                            Explore our curated portfolio of completed projects and architectural visions.
                            Each structure embodies our pursuit of total perfection.
                        </p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {portfolioProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group cursor-pointer relative overflow-hidden h-[400px] md:h-[500px]"
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="absolute inset-0 bg-dark-900/40 group-hover:bg-dark-900/10 transition-colors duration-500 z-10"></div>
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <p className="text-primary-500 font-medium text-xs uppercase tracking-widest mb-2">{project.category}</p>
                                    <h3 className="text-2xl font-light text-light-100 mb-2">{project.title}</h3>
                                    <div className="flex gap-4 text-xs tracking-wider uppercase text-light-300 transform opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        <span>{project.location}</span>
                                        <span>•</span>
                                        <span>{project.year}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </div>
    );
}

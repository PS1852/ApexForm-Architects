import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface Project {
    id: number;
    title: string;
    category: string;
    image: string;
    location: string;
    year: string;
    description: string;
}

interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    useEffect(() => {
        if (project) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [project]);

    return (
        <AnimatePresence>
            {project && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-dark-900/90 backdrop-blur-sm cursor-pointer"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="relative w-full max-w-5xl max-h-[90vh] bg-dark-800 border border-dark-700 shadow-2xl overflow-y-auto z-10 mx-4"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 z-20 w-10 h-10 bg-dark-900/50 hover:bg-primary-500 hover:text-dark-900 rounded-full flex items-center justify-center transition-colors backdrop-blur-md"
                        >
                            <X size={20} />
                        </button>

                        <div className="relative h-[40vh] md:h-[50vh] w-full">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-800 to-transparent"></div>
                        </div>

                        <div className="px-8 py-12 md:px-16 md:py-16">
                            <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12 border-b border-dark-700 pb-12">
                                <div className="max-w-xl">
                                    <p className="uppercase tracking-[0.2em] text-primary-500 text-sm mb-4">{project.category}</p>
                                    <h2 className="text-4xl md:text-5xl font-light text-light-100 leading-tight">
                                        {project.title}
                                    </h2>
                                </div>

                                <div className="flex flex-col gap-4 text-sm tracking-wider uppercase">
                                    <div>
                                        <span className="text-light-300">Location: </span>
                                        <span className="text-light-100">{project.location}</span>
                                    </div>
                                    <div>
                                        <span className="text-light-300">Completion: </span>
                                        <span className="text-light-100">{project.year}</span>
                                    </div>
                                    <div>
                                        <span className="text-light-300">Firm: </span>
                                        <span className="text-light-100">ApexForm Architects</span>
                                    </div>
                                </div>
                            </div>

                            <div className="prose prose-invert prose-lg max-w-none text-light-300 leading-relaxed font-light">
                                <p>{project.description}</p>
                                <p className="mt-6">
                                    The design language reflects the surrounding urban topology while establishing a distinct identity.
                                    Extensive use of glass and steel creates a sleek profile, while custom bronze brise-soleil mitigates
                                    solar gain, adhering to our commitment to sustainability in luxury spaces.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

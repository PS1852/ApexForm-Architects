import { motion } from 'framer-motion';

export default function HeroSection() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 w-full h-full">
                <div className="absolute inset-0 bg-dark-900/60 z-10"></div>
                <img
                    src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop"
                    alt="Dubai Skyline Architecture"
                    className="w-full h-full object-cover object-center scale-105"
                />
            </div>

            {/* Content */}
            <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="uppercase tracking-[0.3em] text-primary-500 text-sm md:text-base mb-6"
                >
                    Visionary Architecture
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-light text-light-100 mb-8 tracking-wide text-balance leading-tight"
                >
                    Shaping the <br className="hidden md:block" />
                    <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
                        Skyline of Tomorrow
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="max-w-2xl text-light-300 text-lg md:text-xl font-light leading-relaxed mb-12 text-balance"
                >
                    ApexForm Architects combines unparalleled luxury with structural ingenuity to create iconic masterpieces inspired by the spirit of Dubai.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="flex flex-col sm:flex-row gap-6"
                >
                    <a href="/portfolio" className="px-8 py-4 bg-primary-500 text-dark-900 font-medium uppercase tracking-widest hover:bg-light-100 transition-colors">
                        View Our Work
                    </a>
                    <a href="/contact" className="px-8 py-4 border border-light-100/30 text-light-100 font-medium uppercase tracking-widest hover:border-primary-500 hover:text-primary-500 transition-colors">
                        Start a Project
                    </a>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
            >
                <div className="w-[1px] h-16 bg-light-100/20 relative overflow-hidden">
                    <motion.div
                        animate={{ y: [0, 64] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
                        className="w-full h-1/2 bg-primary-500 absolute top-0"
                    ></motion.div>
                </div>
            </motion.div>
        </section>
    );
}

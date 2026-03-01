import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        // Simulate API call to backend
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', phone: '', service: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <div className="min-h-screen bg-dark-900 pt-32 pb-24">
            <SEO title="Contact" description="Get in touch with ApexForm Architects to commission your next visionary architecture project. Our offices are located in DIFC, Dubai." />
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Contact Info & Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="uppercase tracking-[0.2em] text-primary-500 text-sm mb-4">Inquire</p>
                        <h1 className="text-4xl md:text-6xl font-light text-light-100 mb-8">Start a Dialogue</h1>
                        <p className="text-light-300 text-lg leading-relaxed mb-12">
                            Whether you are looking to commission a landmark tower or a private estate, our partners are ready to discuss your vision.
                        </p>

                        <div className="flex flex-col gap-6 mb-12 border-l border-dark-700 pl-6">
                            <div className="flex items-center gap-4 text-light-300">
                                <MapPin className="text-primary-500" />
                                <span>Level 42, ICD Brookfield Place, DIFC, Dubai, UAE</span>
                            </div>
                            <div className="flex items-center gap-4 text-light-300">
                                <Phone className="text-primary-500" />
                                <a href="tel:+9715550188" className="hover:text-primary-500 transition-colors">+971 555 0188</a>
                            </div>
                            <div className="flex items-center gap-4 text-light-300">
                                <Mail className="text-primary-500" />
                                <a href="mailto:apexformarchitects@gmail.com" className="hover:text-primary-500 transition-colors">apexformarchitects@gmail.com</a>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="name" className="text-sm tracking-widest uppercase text-light-300">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="bg-transparent border-b border-dark-700 py-3 text-light-100 focus:outline-none focus:border-primary-500 transition-colors"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="email" className="text-sm tracking-widest uppercase text-light-300">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="bg-transparent border-b border-dark-700 py-3 text-light-100 focus:outline-none focus:border-primary-500 transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="phone" className="text-sm tracking-widest uppercase text-light-300">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="bg-transparent border-b border-dark-700 py-3 text-light-100 focus:outline-none focus:border-primary-500 transition-colors"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="service" className="text-sm tracking-widest uppercase text-light-300">Service Required</label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="bg-transparent border-b border-dark-700 py-3 text-light-100 focus:outline-none focus:border-primary-500 transition-colors appearance-none"
                                    >
                                        <option value="" className="bg-dark-900">Select a Service</option>
                                        <option value="commercial" className="bg-dark-900">Commercial Architecture</option>
                                        <option value="residential" className="bg-dark-900">Luxury Residential</option>
                                        <option value="interior" className="bg-dark-900">Interior Architecture</option>
                                        <option value="other" className="bg-dark-900">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-sm tracking-widest uppercase text-light-300">Project Details</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="bg-transparent border-b border-dark-700 py-3 text-light-100 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status !== 'idle'}
                                className="mt-4 px-8 py-4 bg-primary-500 text-dark-900 font-medium uppercase tracking-widest hover:bg-light-100 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                            >
                                {status === 'idle' && <><Send size={18} /> Send Inquiry</>}
                                {status === 'submitting' && <span className="animate-pulse">Sending...</span>}
                                {status === 'success' && <><CheckCircle size={18} /> Inquiry Sent</>}
                            </button>
                        </form>
                    </motion.div>

                    {/* Map Embed */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="h-[600px] lg:h-auto w-full border border-dark-700 relative group overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-dark-900/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none z-10"></div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14438.381395898314!2d55.271816!3d25.1972105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sBurj%20Khalifa!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
                            className="w-full h-full grayscale-[50%] contrast-[1.2] invert-[0.9] hue-rotate-[180deg]"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

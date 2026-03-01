import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-dark-900 border-t border-dark-700 pt-16 pb-8 text-light-100/80">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand */}
                    <div className="flex flex-col gap-6">
                        <Link to="/" className="text-2xl font-light tracking-widest text-primary-500 uppercase flex items-center gap-2">
                            <span className="font-bold">Apex</span>Form
                        </Link>
                        <p className="text-sm leading-relaxed text-light-300">
                            Redefining luxury architecture with iconic designs inspired by the modern skyline of Dubai.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-light-100 font-medium uppercase tracking-widest mb-2">Explore</h4>
                        <Link to="/portfolio" className="hover:text-primary-500 transition-colors w-max">Portfolio</Link>
                        <Link to="/services" className="hover:text-primary-500 transition-colors w-max">Services</Link>
                        <Link to="/contact" className="hover:text-primary-500 transition-colors w-max">Contact</Link>
                    </div>

                    {/* Contact Details */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-light-100 font-medium uppercase tracking-widest mb-2">Connect</h4>
                        <div className="flex items-center gap-3">
                            <Mail size={18} className="text-primary-500" />
                            <a href="mailto:apexformarchitects@gmail.com" className="hover:text-primary-500 transition-colors">
                                apexformarchitects@gmail.com
                            </a>
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone size={18} className="text-primary-500" />
                            <a href="tel:+9715550188" className="hover:text-primary-500 transition-colors">
                                +971 555 0188
                            </a>
                        </div>
                        <div className="flex items-center gap-3">
                            <MapPin size={18} className="text-primary-500" />
                            <span className="text-light-300">DIFC, Dubai, UAE</span>
                        </div>
                    </div>

                    {/* Socials */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-light-100 font-medium uppercase tracking-widest mb-2">Follow Us</h4>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full border border-dark-700 flex items-center justify-center hover:bg-primary-500 hover:text-dark-900 transition-all">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-dark-700 flex items-center justify-center hover:bg-primary-500 hover:text-dark-900 transition-all">
                                <Linkedin size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-dark-700 flex items-center justify-center hover:bg-primary-500 hover:text-dark-900 transition-all">
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>

                </div>

                <div className="border-t border-dark-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-light-300">
                    <p>&copy; {new Date().getFullYear()} ApexForm Architects. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-primary-500 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-primary-500 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

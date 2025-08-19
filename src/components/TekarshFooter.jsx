import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Mail,
    Phone,
    MapPin,
    Linkedin,
    Facebook,
    ArrowRight,
    Send,
} from 'lucide-react';

export const TekarshFooter = () => {
    const navigate = useNavigate();

    const handleNavigation = (href) => {
        if (href.startsWith('/')) {
            navigate(href);
        } else {
            window.open(href, '_blank', 'noopener noreferrer');
        }
    };

    return (
        <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-8">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
                    
                    {/* Company Info - Takes more space */}
                    <div className="lg:col-span-5">
                        <div className="mb-6">
                            <img
                                className="w-[300px] h-[90px] object-contain cursor-pointer mb-6"
                                alt="Tekarsh Logo"
                                src="/logo.png"
                                onClick={() => navigate('/')}
                            />
                            <p className="text-gray-300 text-lg leading-relaxed max-w-lg mb-6">
                                A fully integrated software development company delivering the highest quality custom software, 
                                elite QA, and partner-centric client services.
                            </p>
                        </div>
                        
                        {/* Contact Info */}
                        <div className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <div className="bg-green-600 p-3 rounded-full">
                                    <Mail className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">Email us</p>
                                    <a href="mailto:info@tekarsh.com" className="text-white hover:text-green-400 transition-colors font-medium">
                                        info@tekarsh.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="bg-green-600 p-3 rounded-full">
                                    <MapPin className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">Visit us</p>
                                    <span className="text-white font-medium">
                                        Dhaka, Bangladesh
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="lg:col-span-3">
                        <h3 className="text-2xl font-bold text-white mb-6 relative">
                            Services
                            <div className="absolute bottom-0 left-0 w-12 h-1 bg-green-500 rounded-full"></div>
                        </h3>
                        <ul className="space-y-4">
                            {[
                                { name: 'Software Development', href: '/software-development' },
                                { name: 'Quality Assurance', href: '/quality-assurance' },
                                { name: 'Client Services', href: '/client-services' },
                                { name: 'Data Processing', href: '/data-processing' },
                            ].map((service, index) => (
                                <li key={index}>
                                    <button
                                        onClick={() => handleNavigation(service.href)}
                                        className="text-gray-300 hover:text-green-400 transition-all duration-300 flex items-center group text-left"
                                    >
                                        <ArrowRight className="w-4 h-4 mr-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                                        <span className="group-hover:translate-x-1 transition-transform duration-300">{service.name}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="lg:col-span-2">
                        <h3 className="text-2xl font-bold text-white mb-6 relative">
                            Company
                            <div className="absolute bottom-0 left-0 w-12 h-1 bg-green-500 rounded-full"></div>
                        </h3>
                        <ul className="space-y-4">
                            {[
                                { name: 'About Us', href: '/about' },
                                { name: 'Our Team', href: '/team' },
                                { name: 'Careers', href: '/careers' },
                                { name: 'Contact', href: '/contacts' },
                            ].map((item, index) => (
                                <li key={index}>
                                    <button
                                        onClick={() => handleNavigation(item.href)}
                                        className="text-gray-300 hover:text-green-400 transition-all duration-300 flex items-center group text-left"
                                    >
                                        <ArrowRight className="w-4 h-4 mr-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                                        <span className="group-hover:translate-x-1 transition-transform duration-300">{item.name}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="lg:col-span-2">
                        <h3 className="text-2xl font-bold text-white mb-6 relative">
                            Newsletter
                            <div className="absolute bottom-0 left-0 w-12 h-1 bg-green-500 rounded-full"></div>
                        </h3>
                        <p className="text-gray-300 mb-6">
                            Stay updated with our latest news and insights.
                        </p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-green-500 text-white placeholder-gray-400"
                            />
                            <button className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-r-lg transition-colors duration-300">
                                <Send className="w-5 h-5 text-white" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-700 pt-4">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                        
                        {/* Social Links */}
                        <div className="flex space-x-4">
                            {[
                                { icon: Linkedin, href: 'https://www.linkedin.com/company/tekarsh/', label: 'LinkedIn' },
                                { icon: Facebook, href: 'https://www.facebook.com/Tekarsh/', label: 'Facebook' },
                            ].map((social, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleNavigation(social.href)}
                                    aria-label={social.label}
                                    className="bg-gray-800 p-3 rounded-full hover:bg-green-600 transition-all duration-300 hover:scale-110"
                                >
                                    <social.icon className="w-5 h-5" />
                                </button>
                            ))}
                        </div>

                        {/* Legal Links */}
                        <div className="flex flex-wrap justify-center gap-8 text-sm">
                            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleNavigation(`/${item.toLowerCase().replace(/\s+/g, '-')}`)}
                                    className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>

                        {/* Copyright */}
                        <div className="text-gray-400 text-sm">
                            © {new Date().getFullYear()} Tekarsh. All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default TekarshFooter;
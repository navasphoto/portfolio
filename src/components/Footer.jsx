import React from 'react';

const Footer = () => {
    return (
        <footer id="contact" className="bg-white pt-20 pb-10 border-t border-gray-100">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <a href="#" className="text-2xl font-bold font-pacifico mb-6 inline-block">
                            Navas
                        </a>
                        <p className="text-gray-600 mb-6">
                            Capturing life's most precious moments with passion and creativity.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-colors">
                                <i className="ri-instagram-line"></i>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-colors">
                                <i className="ri-twitter-x-line"></i>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-colors">
                                <i className="ri-linkedin-fill"></i>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Home</a></li>
                            <li><a href="#about" className="text-gray-600 hover:text-black transition-colors">About</a></li>
                            <li><a href="#portfolio" className="text-gray-600 hover:text-black transition-colors">Portfolio</a></li>
                            <li><a href="#services" className="text-gray-600 hover:text-black transition-colors">Services</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-bold text-lg mb-6">Services</h3>
                        <ul className="space-y-4">
                            <li className="text-gray-600">Wedding Photography</li>
                            <li className="text-gray-600">Portrait Sessions</li>
                            <li className="text-gray-600">Event Coverage</li>
                            <li className="text-gray-600">Commercial Shoots</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-bold text-lg mb-6">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-600">
                                <i className="ri-map-pin-line mt-1"></i>
                                <span>123 Photography Lane,<br />Creative City, ST 12345</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-600">
                                <i className="ri-mail-line"></i>
                                <a href="mailto:hello@navasphoto.com" className="hover:text-black transition-colors">hello@navasphoto.com</a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-600">
                                <i className="ri-phone-line"></i>
                                <a href="tel:+1234567890" className="hover:text-black transition-colors">+1 (234) 567-890</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Navas Photography. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-gray-500">
                        <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

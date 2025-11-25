import React, { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#about' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Services', href: '#services' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="text-2xl font-bold font-pacifico">
                    Navas
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-600 hover:text-black transition-colors font-medium"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="bg-black text-white px-6 py-2.5 rounded-full font-medium hover:bg-gray-800 transition-colors"
                    >
                        Contact Me
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-gray-600"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <i className="ri-close-line text-2xl"></i>
                    ) : (
                        <i className="ri-menu-line text-2xl"></i>
                    )}
                </button>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="absolute top-20 left-0 right-0 bg-white border-b border-gray-100 p-4 md:hidden shadow-lg">
                        <nav className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-600 hover:text-black font-medium py-2"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                className="bg-black text-white px-6 py-2.5 rounded-full font-medium hover:bg-gray-800 transition-colors text-center"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact Me
                            </a>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;

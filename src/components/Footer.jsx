import React from 'react';

const Footer = () => {
    return (
        <footer className="py-12 mt-12 border-t border-gray-100">
            <div className="container mx-auto flex flex-col items-center gap-6">
                <div className="flex gap-6">
                    <a href="#" className="text-gray-400 hover:text-black transition-colors">
                        <i className="ri-instagram-line text-xl"></i>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-black transition-colors">
                        <i className="ri-twitter-x-line text-xl"></i>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-black transition-colors">
                        <i className="ri-linkedin-fill text-xl"></i>
                    </a>
                </div>
                <p className="text-gray-400 text-sm">
                    © {new Date().getFullYear()} Navas Photography
                </p>
            </div>
        </footer>
    );
};

export default Footer;

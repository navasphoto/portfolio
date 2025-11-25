import React from 'react';

const Header = () => {
    return (
        <header className="py-8 mb-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <a href="#" className="text-2xl tracking-widest font-light uppercase hover:opacity-70 transition-opacity">
                    NAVAS
                </a>

                <nav className="flex gap-8">
                    <a href="#" className="nav-link">Home</a>
                    <a href="#" className="nav-link">Portfolio</a>
                    <a href="#" className="nav-link">Contact</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;

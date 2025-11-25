import React from 'react';

const Header = () => {
    return (
        <header className="site-header">
            <div className="container header-container">
                <a href="#" className="logo">
                    NAVAS
                </a>

                <nav className="main-nav">
                    <a href="#" className="nav-link">Home</a>
                    <a href="#about" className="nav-link">About</a>
                    <a href="#portfolio" className="nav-link">Portfolio</a>
                    <a href="#contact" className="nav-link">Contact</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;

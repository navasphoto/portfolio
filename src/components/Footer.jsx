import React from 'react';

const Footer = () => {
    return (
        <footer id="contact" className="site-footer">
            <div className="container footer-container">
                <div className="social-links">
                    <a href="#" className="social-link">
                        <i className="ri-instagram-line"></i>
                    </a>
                    <a href="#" className="social-link">
                        <i className="ri-twitter-x-line"></i>
                    </a>
                    <a href="#" className="social-link">
                        <i className="ri-linkedin-fill"></i>
                    </a>
                </div>
                <p className="copyright">
                    © {new Date().getFullYear()} Navas Photography
                </p>
            </div>
        </footer>
    );
};

export default Footer;

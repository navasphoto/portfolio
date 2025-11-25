import React from 'react';

const About = () => {
    return (
        <section id="about" className="section-padding bg-gray">
            <div className="container">
                <div className="about-content">

                    {/* Left Images */}
                    <div className="about-images">
                        <div className="about-images-grid">
                            <div className="about-img-wrapper mt-offset">
                                <img
                                    src="https://firebasestorage.googleapis.com/v0/b/codeless-app.appspot.com/o/projects%2F0SDUO2HsZYY8cbOWNMe7%2F12800d21a19eac29ff19bdef8dd7199ce403bd77About%20Image.png?alt=media&token=ebab1f5c-a58e-4f97-ac68-659ff9a4659e"
                                    alt="About Me 1"
                                />
                            </div>
                            <div className="about-img-wrapper">
                                <img
                                    src="https://firebasestorage.googleapis.com/v0/b/codeless-app.appspot.com/o/projects%2F0SDUO2HsZYY8cbOWNMe7%2Fa040855293bfe595c00dc7f08051032a6b8503eaAbout%20Image.png?alt=media&token=1b33d6ec-77d7-46f8-98cc-38b2be147654"
                                    alt="About Me 2"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="about-text">
                        <div className="badge">
                            <span>About Me</span>
                        </div>

                        <h2 className="section-title">
                            From Your First Challenge<br />
                            to a Decade Achievement,<br />
                            We Turn Every Milestone<br />
                            into a Lasting Masterpiece
                        </h2>

                        <p className="section-description">
                            With over a decade of experience in photography, I specialize in capturing
                            life's most precious moments. From intimate weddings to grand celebrations,
                            my passion is to create timeless visual stories that you'll cherish forever. Every
                            click of my camera is dedicated to preserving your memories in their most
                            beautiful form.
                        </p>

                        {/* Stats */}
                        <div className="stats-grid">
                            <div className="stat-item">
                                <h3>500+</h3>
                                <p>Projects Completed</p>
                            </div>
                            <div className="stat-item">
                                <h3>10+</h3>
                                <p>Years Experience</p>
                            </div>
                            <div className="stat-item">
                                <h3>450+</h3>
                                <p>Happy Clients</p>
                            </div>
                        </div>

                        <a href="#contact" className="btn btn-primary">
                            Learn More
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;

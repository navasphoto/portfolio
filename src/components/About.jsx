import React from 'react';

const About = () => {
    return (
        <section id="about" className="section-padding bg-[#F9FAFB]">
            <div className="container">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left Images */}
                    <div className="flex-1 relative">
                        <div className="flex gap-4">
                            <div className="w-1/2 pt-8">
                                <img
                                    src="https://firebasestorage.googleapis.com/v0/b/codeless-app.appspot.com/o/projects%2F0SDUO2HsZYY8cbOWNMe7%2F12800d21a19eac29ff19bdef8dd7199ce403bd77About%20Image.png?alt=media&token=ebab1f5c-a58e-4f97-ac68-659ff9a4659e"
                                    alt="About Me 1"
                                    className="w-full rounded-2xl shadow-md object-cover aspect-[3/4]"
                                />
                            </div>
                            <div className="w-1/2">
                                <img
                                    src="https://firebasestorage.googleapis.com/v0/b/codeless-app.appspot.com/o/projects%2F0SDUO2HsZYY8cbOWNMe7%2Fa040855293bfe595c00dc7f08051032a6b8503eaAbout%20Image.png?alt=media&token=1b33d6ec-77d7-46f8-98cc-38b2be147654"
                                    alt="About Me 2"
                                    className="w-full rounded-2xl shadow-md object-cover aspect-[3/4]"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="flex-1">
                        <div className="inline-block px-4 py-2 border border-[#E5E7EB] rounded-full bg-white mb-6">
                            <span className="text-sm font-medium">About Me</span>
                        </div>

                        <h2 className="text-3xl lg:text-5xl font-bold leading-tight mb-8">
                            From Your First Challenge<br />
                            to a Decade Achievement,<br />
                            We Turn Every Milestone<br />
                            into a Lasting Masterpiece
                        </h2>

                        <p className="text-lg text-[#4B5563] leading-relaxed mb-10">
                            With over a decade of experience in photography, I specialize in capturing
                            life's most precious moments. From intimate weddings to grand celebrations,
                            my passion is to create timeless visual stories that you'll cherish forever. Every
                            click of my camera is dedicated to preserving your memories in their most
                            beautiful form.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-8 mb-10">
                            <div>
                                <h3 className="text-3xl font-bold mb-1">500+</h3>
                                <p className="text-[#4B5563] text-sm">Projects Completed</p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold mb-1">10+</h3>
                                <p className="text-[#4B5563] text-sm">Years Experience</p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold mb-1">450+</h3>
                                <p className="text-[#4B5563] text-sm">Happy Clients</p>
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

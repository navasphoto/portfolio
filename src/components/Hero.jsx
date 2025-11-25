import React from 'react';

const Hero = () => {
    return (
        <section className="pt-32 pb-16 md:pt-48 md:pb-32 px-4">
            <div className="container mx-auto text-center max-w-4xl">
                <span className="inline-block mb-4 text-gray-600 font-medium tracking-wide">
                    👋 Welcome to my portfolio
                </span>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    Capturing Life's Moments, <br className="hidden md:block" />
                    Turning Memories into <br className="hidden md:block" />
                    <span className="font-pacifico text-gray-900 mt-2 inline-block">Timeless Visual Masterpieces</span>
                </h1>
                <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                    From your first challenge to a decade achievement, we turn every milestone into a lasting masterpiece, crafting timeless art that tells your unique story.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                    <a
                        href="#portfolio"
                        className="w-full md:w-auto bg-black text-white px-8 py-3.5 rounded-full font-medium hover:bg-gray-800 transition-colors"
                    >
                        View Portfolio
                    </a>
                    <a
                        href="#contact"
                        className="w-full md:w-auto bg-gray-100 text-gray-900 px-8 py-3.5 rounded-full font-medium hover:bg-gray-200 transition-colors"
                    >
                        Contact Me
                    </a>
                </div>

                {/* Stats or Social Proof could go here */}
                <div className="mt-16 flex items-center justify-center gap-8 md:gap-16 text-gray-500">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-black mb-1">10+</div>
                        <div className="text-sm">Years Experience</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-black mb-1">500+</div>
                        <div className="text-sm">Happy Clients</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-black mb-1">50+</div>
                        <div className="text-sm">Awards Won</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

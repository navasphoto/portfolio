import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                    <div className="w-full md:w-1/2">
                        <div className="relative">
                            <div className="aspect-[4/5] rounded-3xl overflow-hidden">
                                <img
                                    src="https://placehold.co/800x1000/e5e7eb/1f2937?text=Photographer"
                                    alt="Photographer"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden md:block">
                                <p className="font-pacifico text-xl mb-2">"Photography is the story I fail to put into words."</p>
                                <p className="text-sm text-gray-500">- Destin Sparks</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2">
                        <span className="text-gray-600 font-medium tracking-wide uppercase text-sm">About Me</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                            Hello, I'm <span className="font-pacifico text-gray-900">Navas</span>
                        </h2>
                        <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                            I am a professional photographer with over 10 years of experience in capturing life's most precious moments. My passion lies in storytelling through the lens, creating timeless visual masterpieces that you will cherish forever.
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Whether it's a wedding, a portrait session, or a commercial project, I approach every shoot with creativity, dedication, and a keen eye for detail. I believe that every image should evoke emotion and tell a unique story.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <div className="bg-gray-50 px-6 py-3 rounded-full text-sm font-medium">
                                Wedding Photography
                            </div>
                            <div className="bg-gray-50 px-6 py-3 rounded-full text-sm font-medium">
                                Portraiture
                            </div>
                            <div className="bg-gray-50 px-6 py-3 rounded-full text-sm font-medium">
                                Event Coverage
                            </div>
                        </div>

                        <div className="mt-10">
                            <img src="https://placehold.co/200x80/ffffff/000000?text=Signature" alt="Signature" className="h-12 opacity-60" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

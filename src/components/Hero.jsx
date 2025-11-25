import React from 'react';

const Hero = () => {
    return (
        <section className="section-padding pt-20 lg:pt-32 pb-0 overflow-hidden">
            <div className="container">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Content */}
                    <div className="flex-1 text-center lg:text-left z-10">
                        <h1 className="text-4xl lg:text-[60px] font-bold leading-tight mb-8">
                            Capturing Life's<br />
                            Moments,<br />
                            Turning Memories<br />
                            into<br />
                            Timeless Visual<br />
                            Masterpieces
                        </h1>
                        <p className="text-lg text-[#4B5563] leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
                            From your first challenge to a decade achievement, we turn every milestone
                            into a lasting masterpiece, crafting timeless art that tells your unique story.
                        </p>
                        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                            <a href="#portfolio" className="btn btn-primary">
                                Explore
                            </a>
                            <a href="#contact" className="btn btn-outline">
                                Contact
                            </a>
                        </div>
                    </div>

                    {/* Right Images Grid */}
                    <div className="flex-1 relative w-full max-w-[600px] lg:max-w-none">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4 mt-8 lg:mt-12">
                                <img
                                    src="https://firebasestorage.googleapis.com/v0/b/codeless-app.appspot.com/o/projects%2F0SDUO2HsZYY8cbOWNMe7%2Fff42252df7351c5efe540a4ebd1cba56d9f62324Hero%20Image.png?alt=media&token=10fdf371-6f18-45c3-b7d8-4311f8e883e0"
                                    alt="Hero 1"
                                    className="w-full rounded-2xl shadow-lg object-cover h-[250px]"
                                />
                                <img
                                    src="https://firebasestorage.googleapis.com/v0/b/codeless-app.appspot.com/o/projects%2F0SDUO2HsZYY8cbOWNMe7%2F6cf330b8e14d019f5bce0418dd57303391f50d58Hero%20Image.png?alt=media&token=1bccb0bd-cf24-48c7-b2b2-7272a0c2f81c"
                                    alt="Hero 2"
                                    className="w-full rounded-2xl shadow-lg object-cover h-[250px]"
                                />
                            </div>
                            <div className="space-y-4">
                                <img
                                    src="https://firebasestorage.googleapis.com/v0/b/codeless-app.appspot.com/o/projects%2F0SDUO2HsZYY8cbOWNMe7%2Fc0745686627d80768855a892db716f094711861aHero%20Image.png?alt=media&token=bcef7241-3216-47c6-81e0-a80104c794c8"
                                    alt="Hero 3"
                                    className="w-full rounded-2xl shadow-lg object-cover h-[250px]"
                                />
                                <img
                                    src="https://firebasestorage.googleapis.com/v0/b/codeless-app.appspot.com/o/projects%2F0SDUO2HsZYY8cbOWNMe7%2Ff57c668b997ec45ed0ba6ac02796d89cf09852f7Hero%20Image.png?alt=media&token=ec2fff1c-59e3-416a-a22c-a052d8ac29aa"
                                    alt="Hero 4"
                                    className="w-full rounded-2xl shadow-lg object-cover h-[250px]"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;

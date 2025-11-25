import React from 'react';

const Services = () => {
    const services = [
        {
            icon: 'ri-camera-lens-line',
            title: 'Wedding Photography',
            description: 'Capturing the magic of your special day with a blend of candid and posed shots.',
        },
        {
            icon: 'ri-user-smile-line',
            title: 'Portrait Sessions',
            description: 'Professional portraits for individuals, families, and corporate profiles.',
        },
        {
            icon: 'ri-calendar-event-line',
            title: 'Event Coverage',
            description: 'Comprehensive coverage for corporate events, parties, and celebrations.',
        },
        {
            icon: 'ri-store-2-line',
            title: 'Commercial',
            description: 'High-quality images for your business, products, and marketing materials.',
        },
    ];

    return (
        <section id="services" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-gray-600 font-medium tracking-wide uppercase text-sm">What I Do</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">My Services</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        I offer a wide range of photography services tailored to your specific needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="p-8 rounded-2xl border border-gray-100 hover:border-black hover:shadow-lg transition-all duration-300 group">
                            <div className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-black transition-colors">
                                <i className={`${service.icon} text-2xl text-black group-hover:text-white transition-colors`}></i>
                            </div>
                            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

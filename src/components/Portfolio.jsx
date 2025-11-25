import React, { useState } from 'react';

const Portfolio = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const filters = ['All', 'Wedding', 'Portrait', 'Event', 'Commercial'];

    const portfolioItems = [
        {
            id: 1,
            title: 'Traditional Wedding',
            category: 'Wedding',
            subtitle: 'Elegant ceremony',
            image: 'https://firebasestorage.googleapis.com/v0/b/codeless-app.appspot.com/o/projects%2F0SDUO2HsZYY8cbOWNMe7%2F1a60c5377add62c728147b138a4c516ce3f3a70dTraditional%20Wedding.png?alt=media&token=5f5a5824-6354-4b90-b4bf-77ff0c48498e'
        },
        {
            id: 2,
            title: 'Product Photography',
            category: 'Commercial',
            subtitle: 'Food & Beverage',
            image: 'https://firebasestorage.googleapis.com/v0/b/codeless-app.appspot.com/o/projects%2F0SDUO2HsZYY8cbOWNMe7%2Fd4df525b6cb126db1feb73facfb322a0b6982cbaProduct%20Photography.png?alt=media&token=9076d08d-df88-4221-bf19-768fdad0c719'
        },
        {
            id: 3,
            title: 'Cultural Festival',
            category: 'Event',
            subtitle: 'Live Event',
            image: 'https://firebasestorage.googleapis.com/v0/b/codeless-app.appspot.com/o/projects%2F0SDUO2HsZYY8cbOWNMe7%2F748f7c749a10456f215b56eb7da63793173351c8Cultural%20Festival.png?alt=media&token=afff9bd8-ec09-481d-a85b-d516924dc38c'
        },
        {
            id: 4,
            title: 'Corporate Portrait',
            category: 'Portrait',
            subtitle: 'Business Professional',
            image: 'https://firebasestorage.googleapis.com/v0/b/codeless-app.appspot.com/o/projects%2F0SDUO2HsZYY8cbOWNMe7%2F23553db143994e3af115cb7238160af89b21a890Corporate%20Portrait.png?alt=media&token=4bc4224c-b6e3-4a3e-bb99-82e8fffe606e'
        },
    ];

    const filteredItems = activeFilter === 'All'
        ? portfolioItems
        : portfolioItems.filter(item => item.category === activeFilter);

    return (
        <section id="portfolio" className="section-padding">
            <div className="container">

                {/* Header */}
                <div className="flex flex-col items-center text-center mb-12">
                    <div className="inline-block px-4 py-2 border border-transparent rounded-full bg-[#F3F4F6] mb-6">
                        <span className="text-sm font-medium">My Work</span>
                    </div>
                    <h2 className="text-3xl lg:text-5xl font-bold leading-tight mb-4">
                        Visual Magic - Where<br />
                        Creativity Meets Frames
                    </h2>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-6 py-2 rounded-full text-base transition-all ${activeFilter === filter
                                    ? 'bg-black text-white'
                                    : 'bg-[#F3F4F6] text-[#374151] hover:bg-gray-200'
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredItems.map((item) => (
                        <div key={item.id} className="group relative rounded-2xl overflow-hidden cursor-pointer">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-[384px] object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                <h3 className="text-white text-xl font-bold mb-1">{item.title}</h3>
                                <p className="text-gray-200 text-sm">{item.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Portfolio;

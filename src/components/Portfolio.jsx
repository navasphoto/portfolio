import React from 'react';

const Portfolio = () => {
    const portfolioItems = [
        {
            id: 1,
            title: 'Wedding Bliss',
            category: 'Wedding',
            image: 'https://placehold.co/600x800/f3f4f6/1f2937?text=Wedding+1',
        },
        {
            id: 2,
            title: 'Urban Portraits',
            category: 'Portrait',
            image: 'https://placehold.co/600x800/f3f4f6/1f2937?text=Portrait+1',
        },
        {
            id: 3,
            title: 'Nature\'s Beauty',
            category: 'Nature',
            image: 'https://placehold.co/600x800/f3f4f6/1f2937?text=Nature+1',
        },
        {
            id: 4,
            title: 'Corporate Events',
            category: 'Event',
            image: 'https://placehold.co/600x800/f3f4f6/1f2937?text=Event+1',
        },
        {
            id: 5,
            title: 'Studio Session',
            category: 'Portrait',
            image: 'https://placehold.co/600x800/f3f4f6/1f2937?text=Studio+1',
        },
        {
            id: 6,
            title: 'Travel Diaries',
            category: 'Travel',
            image: 'https://placehold.co/600x800/f3f4f6/1f2937?text=Travel+1',
        },
    ];

    return (
        <section id="portfolio" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-gray-600 font-medium tracking-wide uppercase text-sm">My Work</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Featured Portfolio</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        A collection of my best work across different categories. Each image tells a unique story.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioItems.map((item) => (
                        <div key={item.id} className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 bg-white">
                            <div className="aspect-[3/4] overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="text-white/80 text-sm font-medium mb-1">{item.category}</span>
                                <h3 className="text-white text-xl font-bold">{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="#"
                        className="inline-block border-2 border-black text-black px-8 py-3 rounded-full font-medium hover:bg-black hover:text-white transition-colors"
                    >
                        View All Projects
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;

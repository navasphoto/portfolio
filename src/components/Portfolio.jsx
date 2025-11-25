import React from 'react';

const Portfolio = () => {
    const portfolioItems = [
        { id: 1, image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80', title: 'Wedding' },
        { id: 2, image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80', title: 'Portrait' },
        { id: 3, image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80', title: 'Fashion' },
        { id: 4, image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80', title: 'Wedding' },
        { id: 5, image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80', title: 'Portrait' },
        { id: 6, image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80', title: 'Nature' },
        { id: 7, image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80', title: 'Camera' },
        { id: 8, image: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?w=800&q=80', title: 'Event' },
        { id: 9, image: 'https://images.unsplash.com/photo-1554080353-a576cf803bda?w=800&q=80', title: 'Studio' },
    ];

    return (
        <section className="grid-gallery">
            {portfolioItems.map((item) => (
                <div key={item.id} className="group relative cursor-pointer">
                    <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            loading="lazy"
                        />
                    </div>
                    <div className="mt-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-sm tracking-widest uppercase">{item.title}</span>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Portfolio;

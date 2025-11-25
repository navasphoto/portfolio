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
                <div className="portfolio-header">
                    <div className="badge">
                        <span>My Work</span>
                    </div>
                    <h2 className="section-title">
                        Visual Magic - Where<br />
                        Creativity Meets Frames
                    </h2>
                </div>

                {/* Filters */}
                <div className="portfolio-filters">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="portfolio-grid">
                    {filteredItems.map((item) => (
                        <div key={item.id} className="portfolio-item">
                            <img
                                src={item.image}
                                alt={item.title}
                            />
                            {/* Overlay */}
                            <div className="portfolio-overlay">
                                <h3>{item.title}</h3>
                                <p>{item.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Portfolio;

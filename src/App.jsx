import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'

function App() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main>
                <Hero />
                <About />
                <Portfolio />
            </main>
            <Footer />
        </div>
    )
}

export default App

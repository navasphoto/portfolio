import React from 'react'
import Header from './components/Header'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'

function App() {
    return (
        <div className="app-container">
            <Header />
            <main className="container">
                <Portfolio />
            </main>
            <Footer />
        </div>
    )
}

export default App

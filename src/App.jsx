import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Manifesto from './components/Manifesto'
import Services from './components/Services'
import Insights from './components/Insights'
import Footer from './components/Footer'
import Visuals from './components/Visuals'

function App() {
  return (
    <div className="bg-white text-black">
      <Visuals />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Manifesto />
        <Services />
        <Insights />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  )
}

export default App

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
      <main>
        <Hero />
        <Manifesto />
        <Services />
        <Insights />
      </main>
      <Footer />
    </div>
  )
}

export default App

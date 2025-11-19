import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Manifesto from './components/Manifesto'
import Services from './components/Services'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-white text-black">
      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <Services />
      </main>
      <Footer />
    </div>
  )
}

export default App

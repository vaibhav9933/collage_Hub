import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative overflow-hidden bg-slate-950/5">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-20%] top-10 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl animate-blob"></div>
        <div className="absolute right-[-10%] top-40 h-80 w-80 rounded-full bg-fuchsia-500/25 blur-3xl animate-blob animation-delay-3000"></div>
        <div className="absolute left-1/2 top-1/3 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl animate-blob animation-delay-5000"></div>
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-slate-950/10 to-transparent"></div>
      </div>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

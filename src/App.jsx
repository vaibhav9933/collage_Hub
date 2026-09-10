import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Legal from './components/Legal'

function App() {
  const [legalDocument, setLegalDocument] = useState(null)

  return (
    <div className="overflow-hidden bg-[#f8f7f3]">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Testimonials />
      <About />
      <Contact onOpenLegal={setLegalDocument} />
      <Legal documentType={legalDocument} onClose={() => setLegalDocument(null)} />
      <Footer onOpenLegal={setLegalDocument} />
    </div>
  )
}

export default App

import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-200/80 bg-[#f8f7f3]/90 shadow-sm backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <a href="#home" className="text-2xl font-extrabold tracking-tight text-[#172033]">
            <span className="text-[#ef6f61]">✦</span> College Hub
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-slate-700 hover:text-sky-600 transition">Home</a>
            <a href="#services" className="text-slate-700 hover:text-sky-600 transition">Services</a>
            <a href="#projects" className="text-slate-700 hover:text-sky-600 transition">Projects</a>
            <a href="#about" className="text-slate-700 hover:text-sky-600 transition">About</a>
            <a href="#contact" className="rounded-full bg-[#172033] px-6 py-2 font-semibold text-white shadow-lg transition hover:bg-[#ef6f61]">
              Get Started
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button aria-label="Toggle navigation menu" aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)} className="text-slate-700 transition hover:text-[#ef6f61]">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#home" className="block rounded-2xl px-4 py-2 text-slate-700 hover:bg-slate-100 hover:text-sky-600 transition">Home</a>
            <a href="#services" className="block rounded-2xl px-4 py-2 text-slate-700 hover:bg-slate-100 hover:text-sky-600 transition">Services</a>
            <a href="#projects" className="block rounded-2xl px-4 py-2 text-slate-700 hover:bg-slate-100 hover:text-sky-600 transition">Projects</a>
            <a href="#about" className="block rounded-2xl px-4 py-2 text-slate-700 hover:bg-slate-100 hover:text-sky-600 transition">About</a>
            <a href="#contact" className="block rounded-full bg-gradient-to-r from-sky-600 to-fuchsia-600 text-white px-4 py-2 text-center">Get Started</a>
          </div>
        )}
      </div>
    </nav>
  )
}

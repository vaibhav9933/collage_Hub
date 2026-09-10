import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-[#d8d8d0] bg-[#f5f4ef]/95 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <a href="#home" className="flex items-center text-xl font-extrabold tracking-tight text-[#111318]">
            <img src="/college-hub-logo.svg" alt="College Hub" className="mr-3 h-9 w-9 object-cover" />
            College Hub
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-sm font-semibold text-slate-600 transition hover:text-[#ff6b5e]">Home</a>
            <a href="#services" className="text-sm font-semibold text-slate-600 transition hover:text-[#ff6b5e]">Services</a>
            <a href="#projects" className="text-sm font-semibold text-slate-600 transition hover:text-[#ff6b5e]">Projects</a>
            <a href="#about" className="text-sm font-semibold text-slate-600 transition hover:text-[#ff6b5e]">About</a>
            <a href="#contact" className="rounded-lg bg-[#111318] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#ff6b5e]">
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
            <a href="#home" className="block border-b border-[#d8d8d0] px-2 py-2 text-slate-700 transition hover:text-[#ff6b5e]">Home</a>
            <a href="#services" className="block border-b border-[#d8d8d0] px-2 py-2 text-slate-700 transition hover:text-[#ff6b5e]">Services</a>
            <a href="#projects" className="block border-b border-[#d8d8d0] px-2 py-2 text-slate-700 transition hover:text-[#ff6b5e]">Projects</a>
            <a href="#about" className="block border-b border-[#d8d8d0] px-2 py-2 text-slate-700 transition hover:text-[#ff6b5e]">About</a>
            <a href="#contact" className="block rounded-lg bg-[#111318] px-4 py-2 text-center text-white">Get Started</a>
          </div>
        )}
      </div>
    </nav>
  )
}

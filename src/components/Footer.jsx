export default function Footer({ onOpenLegal }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#111318] px-4 py-12 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="mb-4 flex items-center text-2xl font-bold text-[#c6f04a]">
              <img src="/college-hub-logo.svg" alt="College Hub" className="mr-3 h-10 w-10 object-cover" />
              College Hub
            </h3>
            <p className="text-gray-400">
              Your trusted platform for college project solutions and freelancing.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="transition hover:text-[#c6f04a]">Web Development</a></li>
              <li><a href="#services" className="transition hover:text-[#c6f04a]">Mobile Apps</a></li>
              <li><a href="#services" className="transition hover:text-[#c6f04a]">AI & ML</a></li>
              <li><a href="#services" className="transition hover:text-[#c6f04a]">Database Design</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-blue-400 transition">Home</a></li>
              <li><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition">About Us</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/project-hub-204a94435/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Vaibhav Rahane on LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2a3853] transition hover:bg-[#ef6f61]"
              >
                in
              </a>
              <a
                href="https://wa.me/919552839935"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact us on WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2a3853] transition hover:bg-[#ef6f61]"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
                  <path d="M12.04 2a9.93 9.93 0 0 0-8.55 15l-1.05 3.84 3.93-1.03A9.97 9.97 0 1 0 12.04 2Zm0 18.16a8.16 8.16 0 0 1-4.16-1.14l-.3-.18-2.33.61.62-2.27-.2-.31a8.17 8.17 0 1 1 6.37 3.29Zm4.48-6.13c-.25-.13-1.47-.73-1.7-.81-.23-.08-.39-.13-.56.13-.16.25-.64.81-.79.98-.14.16-.29.19-.54.06-1.47-.73-2.44-1.31-3.42-2.98-.26-.45.26-.42.74-1.39.08-.16.04-.3-.02-.43-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.43.06-.65.3-.22.25-.85.83-.85 2.02 0 1.19.87 2.34.99 2.5.12.16 1.71 2.61 4.15 3.66.58.25 1.03.4 1.38.51.58.18 1.11.15 1.53.09.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.11-.22-.17-.47-.3Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © {currentYear} College Project Hub. All rights reserved.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-gray-400 md:mt-0 md:justify-end">
              <button type="button" onClick={() => onOpenLegal('privacy')} className="hover:text-blue-400 transition">Privacy Policy</button>
              <button type="button" onClick={() => onOpenLegal('terms')} className="hover:text-blue-400 transition">Terms of Service</button>
              <a href="#contact" className="hover:text-blue-400 transition">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

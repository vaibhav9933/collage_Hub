export default function Footer({ onOpenLegal }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#172033] px-4 py-12 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              🎓 College Hub
            </h3>
            <p className="text-gray-400">
              Your trusted platform for college project solutions and freelancing.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-blue-400 transition">Web Development</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition">Mobile Apps</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition">AI & ML</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition">Database Design</a></li>
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
              <a href="#" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2a3853] transition hover:bg-[#ef6f61]">
                f
              </a>
              <a href="#" aria-label="X" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2a3853] transition hover:bg-[#ef6f61]">
                𝕏
              </a>
              <a
                href="https://www.linkedin.com/in/vaibhav-rahane-2871052a5/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Vaibhav Rahane on LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2a3853] transition hover:bg-[#ef6f61]"
              >
                in
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

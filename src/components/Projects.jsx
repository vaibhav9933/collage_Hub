import { useState } from 'react'

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'web',
      tech: 'React, Node.js',
      image: '🛍️',
      description: 'Full-stack e-commerce with payment gateway'
    },
    {
      id: 2,
      title: 'AI Chat Bot',
      category: 'ai',
      tech: 'Python, TensorFlow',
      image: '🤖',
      description: 'Smart chatbot using NLP'
    },
    {
      id: 3,
      title: 'Mobile Banking App',
      category: 'mobile',
      tech: 'React Native',
      image: '📱',
      description: 'Secure mobile banking application'
    },
    {
      id: 4,
      title: 'Data Analytics Dashboard',
      category: 'web',
      tech: 'Vue.js, Django',
      image: '📊',
      description: 'Real-time analytics and reporting'
    },
    {
      id: 5,
      title: 'IoT Weather Station',
      category: 'hardware',
      tech: 'Arduino, Python',
      image: '🌤️',
      description: 'Smart weather monitoring system'
    },
    {
      id: 6,
      title: 'Game - Space Adventure',
      category: 'game',
      tech: 'Unity, C#',
      image: '🎮',
      description: '3D space exploration game'
    }
  ]

  const categories = [
    { name: 'all', label: 'All Technologies' },
    { name: 'web', label: 'Web Development' },
    { name: 'mobile', label: 'Mobile Apps' },
    { name: 'ai', label: 'AI & ML' },
    { name: 'game', label: 'Game Dev' },
    { name: 'hardware', label: 'IoT' }
  ]

  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="bg-[#f5f4ef] px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#ff6b5e]">Portfolio / 02</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#111318] mb-4">
            Project showcase built for impact.
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Browse recent academic and freelancing projects that are polished, secure, and fast to deploy.
          </p>
        </div>

        <div className="mb-12 flex gap-2 overflow-x-auto pb-2 md:flex-wrap md:justify-center">
          {categories.map(cat => (
            <button
              key={cat.name}
              onClick={() => setFilter(cat.name)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                filter === cat.name
                  ? 'bg-[#172033] text-white'
                    : 'border border-slate-300 bg-white text-gray-700 hover:border-[#ef6f61]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {filtered.map(project => (
            <div
              key={project.id}
              className="group overflow-hidden border border-[#d8d8d0] bg-white transition duration-300 hover:border-[#ff6b5e]"
            >
              <div className="relative overflow-hidden bg-[#111318] p-8 text-6xl text-white">
                <div className="relative z-10 flex h-40 items-center justify-center">{project.image}</div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold text-slate-950 mb-2">{project.title}</h3>
                <p className="mb-3 text-sm font-semibold text-[#117c72]">{project.tech}</p>
                <p className="text-slate-600 mb-6">{project.description}</p>
                <div className="rounded-xl border border-[#f3c2ba] bg-[#fff4f0] px-4 py-3 text-center text-sm font-semibold text-[#9b4038]">
                  <p>Project sample coming soon</p>
                  <p className="mt-1 font-normal text-[#9b4038]">We are preparing this showcase. Contact us for project details.</p>
                  <a href="#contact" className="mt-3 inline-flex rounded-full bg-slate-950 px-4 py-2 text-xs font-semibold text-white transition hover:bg-slate-800">
                    Ask for help
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

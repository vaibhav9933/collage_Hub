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
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-slate-500">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-950 mb-4">
            Project showcase built for impact.
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Browse recent academic and freelancing projects that are polished, secure, and fast to deploy.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat.name}
              onClick={() => setFilter(cat.name)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                filter === cat.name
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-white border-2 border-gray-300 text-gray-700 hover:border-blue-600'
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
              className="group overflow-hidden rounded-[2rem] border border-slate-200/80 bg-slate-950/5 shadow-lg shadow-slate-200/30 transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative overflow-hidden bg-gradient-to-br from-sky-500 via-purple-500 to-fuchsia-500 p-8 text-6xl text-white transition duration-500 group-hover:scale-105">
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.35),_transparent_25%)]"></div>
                <div className="relative z-10 flex h-40 items-center justify-center">{project.image}</div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold text-slate-950 mb-2">{project.title}</h3>
                <p className="text-sm text-sky-600 font-semibold mb-3">{project.tech}</p>
                <p className="text-slate-600 mb-6">{project.description}</p>
                <button className="w-full rounded-full bg-slate-950 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/20 transition hover:bg-slate-800">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

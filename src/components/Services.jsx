export default function Services() {
  const services = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'React, Vue, Angular, PHP, Node.js projects'
    },
    {
      icon: '🔐',
      title: 'Database Design',
      description: 'MySQL, MongoDB, PostgreSQL, Firebase solutions'
    },
    {
      icon: '🤖',
      title: 'AI & Machine Learning',
      description: 'Python, TensorFlow, NLP, and ML projects'
    },
    {
      icon: '📱',
      title: 'Mobile Apps',
      description: 'React Native, Flutter, iOS, Android development'
    },
    {
      icon: '☁️',
      title: 'Cloud & DevOps',
      description: 'AWS, Azure, Docker, Kubernetes solutions'
    },
    {
      icon: '🎮',
      title: 'Game Development',
      description: 'Unity, Unreal Engine, C#, C++ projects'
    }
  ]

  return (
    <section id="services" className="bg-[#111318] px-4 py-20 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#c6f04a]">Services / 01</p>
          <h2 className="text-4xl font-extrabold text-white md:text-5xl mb-4">
            Modern solutions for every college project.
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            Choose your area of expertise and let us deliver clean, secure, and deployable project work.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden border border-slate-700 bg-[#191c22] p-6 text-white transition duration-300 hover:border-[#c6f04a]"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#c6f04a] text-2xl text-[#111318]">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-slate-400 mb-6">{service.description}</p>
              <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-[#c6f04a] transition hover:text-white">
                <span>Get help</span>
                <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

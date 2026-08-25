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
    <section id="services" className="bg-[#eef4f1] px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#137c80]">Services</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-950 mb-4">
            Modern solutions for every college project.
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Choose your area of expertise and let us deliver clean, secure, and deployable project work.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-white bg-white p-7 text-slate-950 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e7f3f1] text-3xl text-[#137c80] shadow-sm transition group-hover:scale-105">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-6">{service.description}</p>
              <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-[#137c80] transition hover:text-[#ef6f61]">
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

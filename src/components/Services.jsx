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
    <section id="services" className="py-20 px-4 bg-slate-950/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-sky-600">Services</p>
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
              className="group relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/90 p-8 text-slate-950 shadow-xl shadow-slate-200/40 transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-sky-600/10 text-4xl text-sky-600 shadow-sm transition group-hover:scale-105">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-6">{service.description}</p>
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-sky-600">
                <span>Get help</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

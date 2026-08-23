export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Rahul Kumar',
      role: 'Computer Science Student',
      text: 'The team delivered my project on time with excellent quality. It helped me score an A+ in my major project!',
      rating: 5
    },
    {
      id: 2,
      name: 'Priya Singh',
      role: 'Engineering Student',
      text: 'Professional developers who understand academic requirements. Highly recommended for college projects.',
      rating: 5
    },
    {
      id: 3,
      name: 'Aditya Patel',
      role: 'IT Department',
      text: 'Great communication and transparent workflow. They explained every part of the code to me.',
      rating: 5
    }
  ]

  return (
    <section className="py-20 px-4 bg-slate-950/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-slate-500">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-950 mb-4">
            Trusted by students across departments.
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            See how our service helped learners complete projects with confidence and clarity.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map(testimonial => (
            <div
              key={testimonial.id}
              className="group relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/95 p-8 shadow-2xl shadow-slate-200/40 transition duration-500 hover:-translate-y-2"
            >
              <div className="absolute -right-8 top-8 h-24 w-24 rounded-full bg-sky-500/10 blur-2xl"></div>
              <div className="absolute -left-8 bottom-8 h-24 w-24 rounded-full bg-fuchsia-500/10 blur-2xl"></div>
              <div className="relative z-10">
                <div className="mb-4 flex items-center gap-1 text-xl text-amber-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-slate-700 mb-6 text-lg leading-8">{testimonial.text}</p>
                <div className="border-t border-slate-200 pt-4">
                  <p className="font-bold text-slate-950">{testimonial.name}</p>
                  <p className="text-sky-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

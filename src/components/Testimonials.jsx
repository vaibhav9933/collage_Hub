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
    <section className="bg-[#ff6b5e] px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#111318]">Testimonials / 03</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#111318] mb-4">
            Trusted by students across departments.
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[#111318]/70">
            See how our service helped learners complete projects with confidence and clarity.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map(testimonial => (
            <div
              key={testimonial.id}
              className="group relative overflow-hidden border border-[#111318]/15 bg-[#f5f4ef] p-8 transition duration-300 hover:-translate-y-1"
            >
              <div className="relative z-10">
                <div className="mb-4 flex items-center gap-1 text-xl text-amber-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="mb-6 text-lg leading-8 text-slate-700">{testimonial.text}</p>
                <div className="border-t border-slate-300 pt-4">
                  <p className="font-bold text-[#111318]">{testimonial.name}</p>
                  <p className="text-[#117c72] text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

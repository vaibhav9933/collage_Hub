export default function About() {
  return (
    <section id="about" className="bg-[#f5f4ef] px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#117c72]">About / 04</p>
            <h2 className="mb-6 text-4xl font-bold text-[#111318] md:text-5xl">
              About College Project Hub
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              We are a dedicated team of experienced developers and engineers passionate about helping students succeed in their academic projects.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              With over 5 years of experience in education technology, we've helped hundreds of students complete their college projects with professional-quality solutions.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#c6f04a] font-bold text-[#111318]">
                  ✓
                </div>
                <p className="text-gray-700">Expert developers with 10+ years experience</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#c6f04a] font-bold text-[#111318]">
                  ✓
                </div>
                <p className="text-gray-700">Affordable pricing for students</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#c6f04a] font-bold text-[#111318]">
                  ✓
                </div>
                <p className="text-gray-700">24/7 support and communication</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#c6f04a] font-bold text-[#111318]">
                  ✓
                </div>
                <p className="text-gray-700">On-time delivery, always</p>
              </div>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-6">
              <div className="border-t-2 border-[#111318] bg-white p-8 text-center">
                <p className="mb-2 text-4xl font-bold text-[#137c80]">
                  200+
                </p>
                <p className="text-gray-600 font-semibold">Projects Done</p>
              </div>
              <div className="border-t-2 border-[#111318] bg-white p-8 text-center">
                <p className="mb-2 text-4xl font-bold text-[#137c80]">
                  100%
                </p>
                <p className="text-gray-600 font-semibold">Satisfaction Rate</p>
              </div>
              <div className="border-t-2 border-[#111318] bg-white p-8 text-center">
                <p className="mb-2 text-4xl font-bold text-[#137c80]">
                  24/7
                </p>
                <p className="text-gray-600 font-semibold">Support</p>
              </div>
              <div className="border-t-2 border-[#111318] bg-white p-8 text-center">
                <p className="mb-2 text-4xl font-bold text-[#137c80]">
                  30+
                </p>
                <p className="text-gray-600 font-semibold">Technologies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#f5f4ef] px-4 pb-20 pt-28 sm:pt-36 lg:pb-28">
      <div className="max-w-7xl mx-auto relative">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 border-l-4 border-[#ff6b5e] bg-white px-4 py-2 text-sm font-semibold text-[#111318]">
              <span className="text-[#ff6b5e]">01</span>
              Trusted by 500+ students for college projects
            </div>
            <div className="space-y-6">
              <div>
                <h1 className="max-w-3xl text-5xl font-extrabold tracking-tight text-[#111318] md:text-7xl">
                  Build stunning college projects with
                  <span className="text-[#ff6b5e]"> premium support</span>
                </h1>
              </div>
              <p className="max-w-2xl text-xl leading-9 text-slate-700">
                Simple, fast and deployable for free. Get professional project work for major, minor, and departmental assignments with clean code and reliable delivery.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a href="#projects" className="inline-flex items-center justify-center rounded-lg bg-[#111318] px-8 py-4 text-base font-semibold text-white transition hover:bg-[#ff6b5e]">
                  Explore Projects
                </a>
                <a href="#contact" className="inline-flex items-center justify-center rounded-lg border border-[#c7cbd2] bg-white px-8 py-4 text-base font-semibold text-[#111318] transition hover:border-[#ff6b5e] hover:text-[#ff6b5e]">
                  Request a Quote
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="border-t-2 border-[#111318] pt-4">
                <p className="text-3xl font-bold text-[#117c72]">24h</p>
                <p className="mt-2 text-sm text-slate-600">Fast response time</p>
              </div>
              <div className="border-t-2 border-[#111318] pt-4">
                <p className="text-3xl font-bold text-[#ff6b5e]">99%</p>
                <p className="mt-2 text-sm text-slate-600">Student satisfaction</p>
              </div>
              <div className="border-t-2 border-[#111318] pt-4">
                <p className="text-3xl font-bold text-[#117c72]">30+</p>
                <p className="mt-2 text-sm text-slate-600">Tech skills covered</p>
              </div>
            </div>
          </div>

          <div className="relative border-8 border-[#111318] bg-[#111318] p-5 text-white shadow-[12px_12px_0_#c6f04a] sm:p-8">
            <div className="space-y-5 relative z-10">
              <div className="flex items-center justify-between text-sm text-slate-300">
                <span className="bg-[#c6f04a] px-3 py-1 font-semibold text-[#111318]">Live support</span>
                <span className="text-slate-300">₹ 0 setup</span>
              </div>
              <div className="border border-slate-700 bg-[#191c22] p-6">
                <div className="mb-8 space-y-4">
                  <div className="h-3 w-24 bg-slate-700"></div>
                  <div className="h-3 w-32 bg-slate-700"></div>
                  <div className="h-3 w-20 bg-slate-700"></div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm text-slate-400">
                    <span>Project plan</span>
                    <span>AI-assisted</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-slate-400">
                    <span>Code review</span>
                    <span>24/7</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-slate-400">
                    <span>Fast delivery</span>
                    <span>On time</span>
                  </div>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="border border-slate-700 bg-[#191c22] p-4 text-center">
                  <p className="text-3xl font-semibold text-[#c6f04a]">500+</p>
                  <p className="text-sm text-slate-400">Projects</p>
                </div>
                <div className="border border-slate-700 bg-[#191c22] p-4 text-center">
                  <p className="text-3xl font-semibold text-[#ff6b5e]">4.9★</p>
                  <p className="text-sm text-slate-400">Ratings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

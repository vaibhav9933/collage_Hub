export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-4 pb-20 pt-28 sm:pt-36 lg:pb-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-15%] top-16 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl animate-blob"></div>
        <div className="absolute right-[-10%] top-32 h-80 w-80 rounded-full bg-fuchsia-500/25 blur-3xl animate-blob animation-delay-3000"></div>
        <div className="absolute left-1/2 top-1/4 h-64 w-64 rounded-full bg-cyan-400/15 blur-3xl animate-blob animation-delay-5000"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.15),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.12),_transparent_30%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-[#f3c2ba] bg-[#fff4f0] px-4 py-2 text-sm font-semibold text-[#9b4038] shadow-sm">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#ef6f61] text-white">✦</span>
              Trusted by 500+ students for college projects
            </div>
            <div className="space-y-6">
              <div>
                <h1 className="text-5xl font-extrabold tracking-tight text-[#172033] md:text-7xl">
                  Build stunning college projects with
                  <span className="text-[#ef6f61]"> premium support</span>
                </h1>
              </div>
              <p className="max-w-2xl text-xl leading-9 text-slate-700">
                Simple, fast and deployable for free. Get professional project work for major, minor, and departmental assignments with clean code and reliable delivery.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-[#172033] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-slate-900/15 transition hover:-translate-y-0.5 hover:bg-[#26324a]">
                  Explore Projects
                </a>
                <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-[#c7cbd2] bg-white px-8 py-4 text-base font-semibold text-[#172033] transition hover:-translate-y-0.5 hover:border-[#ef6f61] hover:text-[#b94d43]">
                  Request a Quote
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm">
                <p className="text-3xl font-bold text-[#137c80]">24h</p>
                <p className="mt-2 text-sm text-slate-600">Fast response time</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm">
                <p className="text-3xl font-bold text-[#ef6f61]">99%</p>
                <p className="mt-2 text-sm text-slate-600">Student satisfaction</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm">
                <p className="text-3xl font-bold text-[#137c80]">30+</p>
                <p className="mt-2 text-sm text-slate-600">Tech skills covered</p>
              </div>
            </div>
          </div>

          <div className="relative rounded-[2rem] border border-white/70 bg-slate-950/95 p-8 shadow-2xl shadow-slate-900/20 backdrop-blur-xl text-white">
            <div className="absolute -left-10 top-10 h-24 w-24 rounded-full bg-sky-500/30 blur-2xl"></div>
            <div className="absolute -right-10 bottom-10 h-24 w-24 rounded-full bg-fuchsia-500/30 blur-2xl"></div>
            <div className="space-y-5 relative z-10">
              <div className="flex items-center justify-between text-sm text-slate-300">
                <span className="rounded-full bg-slate-800/80 px-3 py-1">Live support</span>
                <span>₹ 0 setup</span>
              </div>
              <div className="rounded-3xl border border-slate-800/80 bg-slate-950/95 p-6">
                <div className="mb-8 space-y-4">
                  <div className="h-3 w-24 rounded-full bg-slate-800"></div>
                  <div className="h-3 w-32 rounded-full bg-slate-800"></div>
                  <div className="h-3 w-20 rounded-full bg-slate-800"></div>
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
                <div className="rounded-3xl border border-slate-800/80 bg-slate-950/90 p-4 text-center">
                  <p className="text-3xl font-semibold text-sky-400">500+</p>
                  <p className="text-sm text-slate-400">Projects</p>
                </div>
                <div className="rounded-3xl border border-slate-800/80 bg-slate-950/90 p-4 text-center">
                  <p className="text-3xl font-semibold text-fuchsia-400">4.9★</p>
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

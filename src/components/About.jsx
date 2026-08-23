export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
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
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <p className="text-gray-700">Expert developers with 10+ years experience</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <p className="text-gray-700">Affordable pricing for students</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <p className="text-gray-700">24/7 support and communication</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <p className="text-gray-700">On-time delivery, always</p>
              </div>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-8 rounded-xl bg-white shadow-lg text-center">
                <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  500+
                </p>
                <p className="text-gray-600 font-semibold">Projects Done</p>
              </div>
              <div className="p-8 rounded-xl bg-white shadow-lg text-center">
                <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  100%
                </p>
                <p className="text-gray-600 font-semibold">Satisfaction Rate</p>
              </div>
              <div className="p-8 rounded-xl bg-white shadow-lg text-center">
                <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  24/7
                </p>
                <p className="text-gray-600 font-semibold">Support</p>
              </div>
              <div className="p-8 rounded-xl bg-white shadow-lg text-center">
                <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
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

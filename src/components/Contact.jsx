import { useState } from 'react'

const recipientEmail = import.meta.env.VITE_FORMSUBMIT_EMAIL

export default function Contact({ onOpenLegal }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    budget: '',
    message: '',
    termsAccepted: false
  })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!recipientEmail) {
      setStatus('missing-config')
      return
    }

    setStatus('sending')

    const body = new URLSearchParams()
    body.append('_captcha', 'false')
    body.append('_subject', 'New College Hub Request')
    body.append('name', formData.name)
    body.append('email', formData.email)
    body.append('project', formData.project)
    body.append('budget', formData.budget)
    body.append('message', formData.message)
    body.append('reply_to', formData.email)
    body.append('terms_accepted', 'Yes')

    try {
      const response = await fetch(`https://formsubmit.co/${recipientEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json'
        },
        body: body.toString()
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      setStatus('success')
      setFormData({ name: '', email: '', project: '', budget: '', message: '', termsAccepted: false })
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="bg-[#117c72] px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#c6f04a]">Contact / 05</p>
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Get Your Project Done
          </h2>
          <p className="text-xl text-white/75">
            Fill out the form below and we'll get back to you within 24 hours
          </p>
        </div>

        <div className="border border-white/20 bg-[#f5f4ef] p-6 sm:p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            {status === 'missing-config' && (
              <div className="rounded-2xl border border-rose-300 bg-rose-50 p-4 text-sm text-rose-700">
                Email sending is not configured yet. Please add your FormSubmit email address to `.env`.
              </div>
            )}
            {status === 'success' && (
              <div className="rounded-2xl border border-emerald-300 bg-emerald-50 p-4 text-sm text-emerald-700">
                Message sent successfully! We will contact you soon.
              </div>
            )}
            {status === 'error' && (
              <div className="rounded-2xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-700">
                Something went wrong while sending your request. Please try again later.
              </div>
            )}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 focus:border-[#117c72] focus:outline-none transition"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 focus:border-[#117c72] focus:outline-none transition"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Project Type</label>
                <select
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 focus:border-[#117c72] focus:outline-none transition"
                  required
                >
                  <option value="">Select a project type</option>
                  <option value="web">Web Development</option>
                  <option value="mobile">Mobile App</option>
                  <option value="ai">AI & Machine Learning</option>
                  <option value="database">Database Design</option>
                  <option value="game">Game Development</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Budget Range</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 focus:border-[#117c72] focus:outline-none transition"
                  required
                >
                  <option value="">Select budget</option>
                  <option value="1000-2000">₹1000 - ₹2000</option>
                  <option value="2000-2500">₹2000 - ₹2500</option>
                  <option value="2500-30000">₹2500 - ₹30000</option>
                  <option value="30000+">₹30000+</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Project Description</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project requirements..."
                rows="5"
                className="w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-3 focus:border-[#117c72] focus:outline-none transition"
                required
              ></textarea>
            </div>

            <label className="flex items-start gap-3 text-sm text-gray-600">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                className="mt-1 h-4 w-4 accent-blue-600"
                required
              />
              <span>
                I agree to the{' '}
                <button type="button" onClick={() => onOpenLegal('terms')} className="font-semibold text-[#117c72] underline hover:text-[#ff6b5e]">
                  Terms and Conditions
                </button>
                {' '}and confirm that the information provided is accurate.
              </span>
            </label>

            <button
              type="submit"
                className="w-full rounded-lg bg-[#111318] py-4 text-lg font-bold text-white transition hover:bg-[#ff6b5e]"
            >
              Send Request
            </button>
          </form>

          <div className="mt-12 grid md:grid-cols-3 gap-6 border-t pt-12">
            <div className="text-center">
              <p className="text-3xl mb-2">✉️</p>
              <p className="text-gray-600 font-semibold">Email</p>
              <p className="text-[#117c72]">vaibhavrahane37@gmail.com</p>
            </div>
            <div className="text-center">
              <p className="text-3xl mb-2">📱</p>
              <p className="text-gray-600 font-semibold">Phone</p>
              <p className="text-[#117c72]">+91 9552839935</p>
            </div>
            <div className="text-center">
              <p className="text-3xl mb-2">💬</p>
              <p className="text-gray-600 font-semibold">Chat</p>
              <p className="text-[#117c72]">24/7 Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

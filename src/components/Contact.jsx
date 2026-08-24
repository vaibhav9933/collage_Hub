import { useState } from 'react'

const recipientEmail = import.meta.env.VITE_FORMSUBMIT_EMAIL

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    budget: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
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
      setFormData({ name: '', email: '', project: '', budget: '', message: '' })
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get Your Project Done
          </h2>
          <p className="text-xl text-gray-600">
            Fill out the form below and we'll get back to you within 24 hours
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
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
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-600 focus:outline-none transition"
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
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-600 focus:outline-none transition"
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
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-600 focus:outline-none transition"
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
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-600 focus:outline-none transition"
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
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-600 focus:outline-none transition resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-bold text-lg hover:shadow-xl transition transform hover:-translate-y-1"
            >
              Send Request
            </button>
          </form>

          <div className="mt-12 grid md:grid-cols-3 gap-6 border-t pt-12">
            <div className="text-center">
              <p className="text-3xl mb-2">✉️</p>
              <p className="text-gray-600 font-semibold">Email</p>
              <p className="text-blue-600">vaibhavrahane37@gmail.com</p>
            </div>
            <div className="text-center">
              <p className="text-3xl mb-2">📱</p>
              <p className="text-gray-600 font-semibold">Phone</p>
              <p className="text-blue-600">+91 9552839935</p>
            </div>
            <div className="text-center">
              <p className="text-3xl mb-2">💬</p>
              <p className="text-gray-600 font-semibold">Chat</p>
              <p className="text-blue-600">24/7 Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState({ state: 'idle' })

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus({ state: 'loading' })

    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Request failed')
      const data = await res.json()
      setStatus({ state: 'success', message: data.message })
      e.currentTarget.reset()
    } catch (e) {
      setStatus({ state: 'error', message: 'Something went wrong. Please try again.' })
    }
  }

  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Let’s talk</h2>
          <p className="mt-3 text-slate-300">Tell us about your project and we’ll get back within 24 hours.</p>
        </div>

        <form onSubmit={onSubmit} className="mt-10 grid md:grid-cols-2 gap-6 max-w-3xl">
          <div className="md:col-span-1">
            <label className="block text-sm text-slate-300 mb-2">Name</label>
            <input name="name" required className="w-full rounded-md bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your name" />
          </div>
          <div className="md:col-span-1">
            <label className="block text-sm text-slate-300 mb-2">Email</label>
            <input type="email" name="email" required className="w-full rounded-md bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@company.com" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm text-slate-300 mb-2">Subject</label>
            <input name="subject" required className="w-full rounded-md bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="How can we help?" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm text-slate-300 mb-2">Message</label>
            <textarea name="message" required rows="5" className="w-full rounded-md bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Share a bit about your goals..." />
          </div>
          <div className="md:col-span-2">
            <button type="submit" className="px-5 py-3 rounded-md bg-white text-slate-900 font-medium hover:bg-slate-200 transition-colors">
              {status.state === 'loading' ? 'Sending…' : 'Send message'}
            </button>
            {status.state === 'success' && (
              <span className="ml-3 text-emerald-400">{status.message}</span>
            )}
            {status.state === 'error' && (
              <span className="ml-3 text-rose-400">{status.message}</span>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}

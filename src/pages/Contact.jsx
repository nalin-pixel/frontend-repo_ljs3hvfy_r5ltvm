import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    const formData = new FormData(e.currentTarget)
    const payload = Object.fromEntries(formData.entries())

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (res.ok) {
        setStatus({ ok: true, message: data.message })
        e.currentTarget.reset()
      } else {
        setStatus({ ok: false, message: data.detail || 'Something went wrong' })
      }
    } catch (err) {
      setStatus({ ok: false, message: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Get a Quote / Contact</h1>
      <p className="text-gray-600 mb-8">Share your shipment details and we’ll get back within 24 hours.</p>
      <form onSubmit={submit} className="grid gap-4 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <div className="grid md:grid-cols-2 gap-4">
          <input name="name" required placeholder="Full Name" className="input" />
          <input name="email" type="email" required placeholder="Email" className="input" />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <input name="phone" placeholder="Phone / WhatsApp" className="input" />
          <input name="company" placeholder="Company" className="input" />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <input name="origin" placeholder="Origin City / Country" className="input" />
          <input name="destination" placeholder="Destination City / Country" className="input" />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <input name="service" placeholder="Service Category (e.g., Sea Freight)" className="input" />
        </div>
        <textarea name="details" placeholder="Shipment details" rows={5} className="input" />
        <button disabled={loading} className="bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-semibold px-4 py-2 rounded-md">
          {loading ? 'Sending...' : 'Submit Inquiry'}
        </button>
        {status && (
          <div className={`rounded-md p-3 text-sm ${status.ok ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
            {status.message}
          </div>
        )}
      </form>

      <div className="mt-10 grid md:grid-cols-2 gap-6 text-sm text-gray-700">
        <div className="rounded-xl border border-gray-200 p-6 bg-white">
          <h3 className="font-semibold text-gray-900 mb-2">Offices</h3>
          <p>Pakistan 🇵🇰 — Karachi</p>
          <p>USA 🇺🇸 — Houston</p>
        </div>
        <div className="rounded-xl border border-gray-200 p-6 bg-white">
          <h3 className="font-semibold text-gray-900 mb-2">Direct</h3>
          <p>Email: info@moventra.com</p>
          <p>Phone: +92 300 0000000 · +1 (555) 123-4567</p>
          <a href="https://wa.me/15551234567" target="_blank" className="text-blue-600 underline mt-2 inline-block">Chat on WhatsApp</a>
        </div>
      </div>
    </main>
  )
}

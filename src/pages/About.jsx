export default function About() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">About Moventra Global Solutions</h1>
      <p className="text-gray-700 leading-7 mb-6">
        Founded with a global vision, Moventra Global Solutions connects businesses across continents with end-to-end logistics expertise. We believe in reliability, transparency, and efficiency.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="rounded-xl border border-gray-200 p-6 bg-white shadow-sm">
          <h3 className="font-semibold text-blue-700 mb-2">Our Presence</h3>
          <p className="text-gray-600">Pakistan 🇵🇰 — Karachi | USA 🇺🇸 — Houston | Global partner network</p>
        </div>
        <div className="rounded-xl border border-gray-200 p-6 bg-white shadow-sm">
          <h3 className="font-semibold text-blue-700 mb-2">Mission & Values</h3>
          <ul className="list-disc pl-5 text-gray-600 space-y-1">
            <li>Reliability: on-time deliveries with visibility</li>
            <li>Transparency: clear pricing & proactive updates</li>
            <li>Efficiency: optimized routes and costs</li>
          </ul>
        </div>
      </div>
    </main>
  )
}

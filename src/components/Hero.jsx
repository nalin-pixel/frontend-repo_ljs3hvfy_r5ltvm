export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-blue-100" />
      <div className="max-w-6xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">Your Global Freight Partner</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Connecting Trade Across Continents
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Moventra Global Solutions delivers reliable, transparent, and efficient logistics across sea, air, and land. From customs to warehousing, we keep your cargo moving.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="/contact" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors">Request a Quote</a>
            <a href="/services" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-white text-blue-700 border border-blue-200 font-semibold hover:bg-blue-50 transition-colors">Explore Services</a>
          </div>
          <div className="mt-6 text-sm text-gray-600">
            Global coverage: Pakistan 🇵🇰 · USA 🇺🇸 · Worldwide partners
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 shadow-2xl" />
          <div className="absolute -bottom-4 -left-4 bg-white shadow-lg rounded-lg p-4 border border-gray-100">
            <p className="text-sm font-medium text-gray-800">Sea & Air Freight</p>
            <p className="text-xs text-gray-500">On-time, end-to-end visibility</p>
          </div>
        </div>
      </div>
    </section>
  )
}

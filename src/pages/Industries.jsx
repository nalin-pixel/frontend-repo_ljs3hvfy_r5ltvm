export default function Industries() {
  const industries = ['Textiles & garments', 'Machinery & industrial goods', 'Automotive exports', 'Consumer goods', 'E-Commerce Accounts']
  return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Industries We Serve</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map((i) => (
          <div key={i} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900">{i}</h3>
            <p className="text-gray-600 text-sm mt-2">Tailored solutions to meet unique industry needs with reliability and efficiency.</p>
          </div>
        ))}
      </div>
    </main>
  )
}

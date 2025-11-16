export default function ServicesOverview() {
  const services = [
    { title: 'International Freight Forwarding', points: ['Sea & Air Freight', 'Import/Export logistics', 'Customs documentation support', 'IT Support / Social Media Marketing', 'Amazon/Walmart Virtual Assistance'] },
    { title: 'USA Services', points: ['Drayage & port trucking', 'FTL / LTL transportation', 'Warehousing & transloading', 'Customs compliance & clearance support', 'Social Media Account Handling', 'E-commerce Service'] },
    { title: 'Pakistan Services', points: ['Export forwarding (FCL/LCL)', 'Origin handling', 'Vendor coordination', 'Documentation assistance', 'Social Media Account Handling', 'Amazon/Walmart Virtual Assistance'] },
  ]

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Services</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">{s.title}</h3>
            <ul className="space-y-2 text-gray-600 text-sm list-disc pl-5">
              {s.points.map(p => (<li key={p}>{p}</li>))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

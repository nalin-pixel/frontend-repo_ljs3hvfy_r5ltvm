export default function Services() {
  const sections = [
    {
      title: 'International Freight Forwarding',
      items: ['Sea & Air Freight', 'Import/Export logistics', 'Customs documentation support', 'IT Support / Social Media Marketing', 'Amazon/Walmart Virtual Assistance']
    },
    {
      title: 'USA Services',
      items: ['Drayage & port trucking', 'FTL / LTL transportation', 'Warehousing & transloading', 'Customs compliance & clearance support', 'Social Media Account Handling', 'E-commerce Service']
    },
    {
      title: 'Pakistan Services',
      items: ['Export forwarding (FCL/LCL)', 'Origin handling', 'Vendor coordination', 'Documentation assistance', 'Social Media Account Handling', 'Amazon/Walmart Virtual Assistance']
    }
  ]

  return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Services</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {sections.map((s) => (
          <div key={s.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-blue-700 mb-3">{s.title}</h2>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              {s.items.map(i => <li key={i}>{i}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </main>
  )
}

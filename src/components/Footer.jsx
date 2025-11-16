export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8 text-sm text-gray-600">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="h-8 w-8 rounded bg-blue-600 text-white grid place-items-center font-bold">M</div>
            <span className="font-semibold text-gray-900">Moventra Global Solutions</span>
          </div>
          <p>Reliable, transparent, and efficient logistics across the globe.</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Offices</h4>
          <p>Pakistan 🇵🇰 — Karachi</p>
          <p>USA 🇺🇸 — Houston</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Contact</h4>
          <p>Email: info@moventra.com</p>
          <p>Phone: +92 300 0000000 · +1 (555) 123-4567</p>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 py-4 border-t border-gray-100">© {new Date().getFullYear()} Moventra Global Solutions. All rights reserved.</div>
    </footer>
  )
}

import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navItem = (to, label) => (
    <NavLink
      to={to}
      className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
      onClick={() => setOpen(false)}
    >
      {label}
    </NavLink>
  )

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur bg-white/80 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-blue-600 text-white grid place-items-center font-bold">M</div>
            <span className="font-semibold text-gray-900">Moventra Global Solutions</span>
          </Link>
          <nav className="hidden md:flex items-center gap-2">
            {navItem('/', 'Home')}
            {navItem('/about', 'About Us')}
            {navItem('/services', 'Services')}
            {navItem('/industries', 'Industries')}
            {navItem('/contact', 'Get a Quote')}
          </nav>
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)} className="p-2 rounded-md hover:bg-gray-100">
              <Menu size={22} />
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden pb-4 grid gap-2">
            {navItem('/', 'Home')}
            {navItem('/about', 'About Us')}
            {navItem('/services', 'Services')}
            {navItem('/industries', 'Industries')}
            {navItem('/contact', 'Get a Quote')}
          </div>
        )}
      </div>
    </header>
  )
}

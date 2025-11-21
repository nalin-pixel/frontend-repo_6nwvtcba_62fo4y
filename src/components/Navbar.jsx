import { useState } from 'react'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  const LinkItem = ({ id, label }) => (
    <button
      onClick={() => scrollTo(id)}
      className="text-slate-300 hover:text-white transition-colors"
    >
      {label}
    </button>
  )

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 bg-slate-900/60 border-b border-white/10">
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center gap-3">
          <img src="/flame-icon.svg" alt="Logo" className="w-7 h-7" />
          <span className="text-white font-semibold tracking-tight">Synthetica</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <LinkItem id="pricing" label="Pricing" />
          <LinkItem id="blog" label="Blog" />
          <LinkItem id="contact" label="Contact" />
          <a href="/test" className="text-slate-400 hover:text-white text-sm">Status</a>
          <a href="#contact" onClick={(e)=>{e.preventDefault();scrollTo('contact')}} className="px-4 py-2 rounded-md bg-white text-slate-900 font-medium hover:bg-slate-200 transition-colors">Get started</a>
        </div>

        <button onClick={()=>setOpen(!open)} className="md:hidden text-white p-2">
          <Menu />
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-white/10 px-6 pb-6">
          <div className="flex flex-col gap-4 pt-4">
            <LinkItem id="pricing" label="Pricing" />
            <LinkItem id="blog" label="Blog" />
            <LinkItem id="contact" label="Contact" />
            <a href="/test" className="text-slate-400 hover:text-white">Status</a>
          </div>
        </div>
      )}
    </header>
  )
}

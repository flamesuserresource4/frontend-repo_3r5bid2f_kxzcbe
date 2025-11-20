import { useState } from 'react'

export default function Navbar({ categories = [], onSearch, onSelectCategory }) {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-slate-900/70 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 gap-4">
          <div className="flex items-center gap-3">
            <img src="/flame-icon.svg" alt="Logo" className="w-8 h-8" />
            <span className="text-white font-semibold tracking-tight">BlueWear</span>
          </div>

          <div className="hidden md:flex items-center gap-3 flex-1 max-w-xl">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e)=>{ if(e.key==='Enter') onSearch?.(query) }}
              placeholder="Search clothes..."
              className="w-full bg-slate-800/80 text-slate-200 placeholder-slate-400 px-4 py-2 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            />
            <button onClick={() => onSearch?.(query)} className="px-3 py-2 bg-blue-500/90 hover:bg-blue-500 text-white rounded-lg transition">Search</button>
          </div>

          <button className="md:hidden text-slate-200" onClick={()=>setOpen(v=>!v)}>
            <span className="i-lucide-menu"/>
            ☰
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex gap-2 mb-3">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search clothes..."
                className="w-full bg-slate-800/80 text-slate-200 placeholder-slate-400 px-4 py-2 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              />
              <button onClick={() => onSearch?.(query)} className="px-3 py-2 bg-blue-500/90 hover:bg-blue-500 text-white rounded-lg transition">Go</button>
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {categories.map((c) => (
                <button key={c} onClick={()=>onSelectCategory?.(c)} className="px-3 py-1.5 rounded-full bg-slate-800/70 text-slate-200 border border-white/10 hover:bg-slate-700/70 whitespace-nowrap">
                  {c}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

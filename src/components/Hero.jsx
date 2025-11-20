export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(59,130,246,0.12),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.12),transparent_35%)]" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">Elevate your everyday</h1>
            <p className="text-slate-300 text-lg mb-6">Modern essentials crafted for comfort. Build a wardrobe that works from weekday to weekend.</p>
            <div className="flex gap-3 justify-center md:justify-start">
              <a href="#products" className="px-5 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition">Shop new arrivals</a>
              <a href="#categories" className="px-5 py-3 rounded-lg border border-white/20 text-slate-200 hover:bg-white/10 transition">Browse categories</a>
            </div>
          </div>
          <div className="flex-1 relative">
            <img className="rounded-2xl border border-white/10 shadow-2xl w-full object-cover aspect-[4/3]" src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop" alt="Hero" />
          </div>
        </div>
      </div>
    </section>
  )
}

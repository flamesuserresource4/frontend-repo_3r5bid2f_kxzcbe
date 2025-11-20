import { useEffect, useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import ProductModal from './components/ProductModal'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function App() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [activeCategory, setActiveCategory] = useState('')
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(null)
  const [loading, setLoading] = useState(false)

  const filteredProducts = useMemo(()=>{
    return products
  },[products])

  async function loadProducts(params = {}) {
    setLoading(true)
    try {
      const qs = new URLSearchParams(params).toString()
      const res = await fetch(`${API_BASE}/api/products${qs ? `?${qs}` : ''}`)
      const data = await res.json()
      setProducts(data)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  async function loadCategories() {
    try {
      const res = await fetch(`${API_BASE}/api/categories`)
      const data = await res.json()
      setCategories(data)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    loadProducts()
    loadCategories()
  }, [])

  useEffect(() => {
    const params = {}
    if (activeCategory) params.category = activeCategory
    if (query) params.q = query
    loadProducts(params)
  }, [activeCategory, query])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200">
      <Navbar
        categories={categories}
        onSearch={setQuery}
        onSelectCategory={setActiveCategory}
      />

      <Hero />

      <section id="categories" className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-white text-xl font-semibold">Categories</h2>
          {activeCategory && (
            <button onClick={()=> setActiveCategory('')} className="text-sm text-blue-300 hover:underline">Clear</button>
          )}
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((c) => (
            <button key={c} onClick={()=>setActiveCategory(c)} className={`px-3 py-1.5 rounded-full border ${activeCategory===c? 'bg-blue-500 text-white border-blue-500' : 'bg-slate-800/70 text-slate-200 border-white/10'} hover:bg-slate-700/70 whitespace-nowrap`}>
              {c}
            </button>
          ))}
        </div>
      </section>

      <section id="products" className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white text-2xl font-bold">New arrivals</h2>
          {loading && <span className="text-sm text-slate-400">Loading...</span>}
        </div>
        <ProductGrid products={filteredProducts} onSelect={setSelected} />
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-slate-400">
        © {new Date().getFullYear()} BlueWear. All rights reserved.
      </footer>

      <ProductModal product={selected} onClose={()=> setSelected(null)} />
    </div>
  )
}

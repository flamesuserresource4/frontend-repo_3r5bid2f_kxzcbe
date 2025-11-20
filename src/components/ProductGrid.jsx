import ProductCard from './ProductCard'

export default function ProductGrid({ products = [], onSelect }) {
  if (!products.length) {
    return (
      <div className="text-center text-slate-300 py-16">No products found.</div>
    )
  }
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onClick={onSelect} />
      ))}
    </div>
  )
}

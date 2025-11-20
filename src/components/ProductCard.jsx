export default function ProductCard({ product, onClick }) {
  return (
    <button onClick={() => onClick?.(product)} className="group text-left w-full">
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-slate-800/40">
        <img src={product.image || 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=1200&auto=format&fit=crop'} alt={product.title} className="aspect-square w-full object-cover group-hover:scale-105 transition-transform" />
        <div className="p-4">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="text-white font-medium truncate">{product.title}</h3>
            <span className="text-blue-300 font-semibold">${product.price?.toFixed(2)}</span>
          </div>
          <p className="text-slate-300/80 text-sm mt-1 line-clamp-2">{product.description}</p>
          <div className="mt-3 text-xs text-slate-400">{product.category}</div>
        </div>
      </div>
    </button>
  )
}

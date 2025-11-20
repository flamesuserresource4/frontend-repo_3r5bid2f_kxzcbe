export default function ProductModal({ product, onClose }) {
  if (!product) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative bg-slate-900 border border-white/10 rounded-2xl max-w-2xl w-full overflow-hidden" onClick={(e)=>e.stopPropagation()}>
        <div className="grid md:grid-cols-2 gap-0">
          <img src={product.image} alt={product.title} className="w-full h-full object-cover aspect-square" />
          <div className="p-6">
            <h3 className="text-white text-2xl font-semibold mb-2">{product.title}</h3>
            <div className="text-blue-300 font-bold text-xl mb-4">${product.price?.toFixed(2)}</div>
            <p className="text-slate-300 mb-6 leading-relaxed">{product.description}</p>
            <div className="flex items-center gap-3">
              <button className="px-5 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition">Add to cart</button>
              <button onClick={onClose} className="px-5 py-3 rounded-lg border border-white/20 text-slate-200 hover:bg-white/10 transition">Close</button>
            </div>
            <div className="mt-4 text-xs text-slate-400">Category: {product.category}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

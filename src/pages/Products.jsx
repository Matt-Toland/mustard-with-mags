import { products } from '../data/products';
import { Card } from '../components/ui/Card';

export function Products() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20">
      {/* Page heading */}
      <div className="text-center mb-12">
        <h1 className="font-display text-4xl md:text-5xl text-charcoal mb-4">
          Our Mustards
        </h1>
        <div className="w-24 h-1 bg-blue-bright mx-auto mb-6 rounded-full" />
        <p className="font-body text-lg text-slate-medium max-w-xl mx-auto">
          Each flavour is handcrafted in small batches. Bold, honest, and made to make your food better.
        </p>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {products.map((product) => (
          <Card key={product.id} className="relative">
            {/* Status badge */}
            <div className={`
              absolute -top-3 -right-3 px-3 py-1 rounded-full font-display text-xs font-bold
              border-2 border-charcoal
              ${product.status === 'Available'
                ? 'bg-green-fresh text-white'
                : 'bg-blue-soft text-charcoal'
              }
            `}>
              {product.status}
            </div>

            {/* Product image */}
            <div className="bg-ice-dark rounded-2xl border-2 border-charcoal/10 h-64 mb-4 flex items-center justify-center overflow-hidden p-4">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className={`max-h-full w-auto object-contain ${product.comingSoon ? 'grayscale opacity-50' : ''}`}
                  style={product.imageScale !== 1 ? { transform: `scale(${product.imageScale})` } : undefined}
                />
              ) : (
                <span className="text-5xl">🫙</span>
              )}
            </div>

            <h3 className="font-display text-2xl text-charcoal mb-2">
              {product.name}
            </h3>
            <p className="font-body text-slate-medium">
              {product.description}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}

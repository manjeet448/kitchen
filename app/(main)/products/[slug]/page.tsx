import { products } from '@/data/products';
import { notFound } from 'next/navigation';
import Button from '@/components/common/Button';
import { Check, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-32">
      <Link href="/products" className="inline-flex items-center gap-2 text-primary hover:text-primary-hover font-medium mb-8 transition-colors">
        <ArrowLeft size={20} />
        Back to Products
      </Link>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Product Image */}
        <div className="bg-gray-50 rounded-3xl p-8 lg:p-12 flex justify-center items-center border border-gray-100 shadow-sm sticky top-32">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full max-w-lg object-contain mix-blend-multiply"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col pt-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-6">{product.name}</h1>
          
          <div className="w-20 h-1 bg-primary mb-8 rounded-full"></div>
          
          <p className="text-gray-600 mb-10 text-lg leading-relaxed">
            {product.description}
          </p>

          <div className="mb-12 bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100">
            <h3 className="font-bold text-dark text-xl mb-6">Key Features</h3>
            <ul className="space-y-4">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1 bg-white p-1 rounded-full text-primary shadow-sm border border-gray-100 flex-shrink-0">
                    <Check size={16} strokeWidth={3} />
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href={`/quote?productName=${encodeURIComponent(product.name)}&productImage=${encodeURIComponent(product.image)}`}
              className="flex-1"
            >
              <Button variant="primary" size="lg" className="w-full bg-[#25D366] hover:bg-[#128C7E] border-none text-white">Purchase on WhatsApp</Button>
            </Link>
            <Button variant="outline" size="lg" className="flex-1">Download Brochure</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

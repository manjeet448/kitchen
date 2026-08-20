import Image from 'next/image';
import { Edit, Trash2 } from 'lucide-react';

const products = [
  { id: 1, name: 'Double Door Refrigerator', category: 'Refrigeration', price: '₹92,000', status: 'Active', img: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?q=80&w=200&auto=format&fit=crop' },
  { id: 2, name: 'Planetary Mixer', category: 'Cooking Equipment', price: '₹45,000', status: 'Active', img: 'https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?q=80&w=200&auto=format&fit=crop' },
  { id: 3, name: 'Display Counter', category: 'Display Equipment', price: '₹95,000', status: 'Active', img: 'https://images.unsplash.com/photo-1621217319523-26f58f504f76?q=80&w=200&auto=format&fit=crop' },
];

export default function RecentProducts() {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm flex flex-col h-full">
      <div className="p-5 flex justify-between items-center border-b border-gray-50">
        <h3 className="font-bold text-gray-900">Recent Products</h3>
        <button className="text-xs text-gray-400 border px-2 py-1 rounded">View All</button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-600">
          <thead className="text-xs uppercase text-gray-400 bg-gray-50/50">
            <tr>
              <th className="px-5 py-3 font-medium">Image</th>
              <th className="px-5 py-3 font-medium">Product Name</th>
              <th className="px-5 py-3 font-medium">Category</th>
              <th className="px-5 py-3 font-medium">Price</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-5 py-3">
                  <div className="w-10 h-10 rounded overflow-hidden relative bg-gray-100 border border-gray-200">
                    <Image src={product.img} alt={product.name} fill className="object-cover" />
                  </div>
                </td>
                <td className="px-5 py-3 font-medium text-gray-900">{product.name}</td>
                <td className="px-5 py-3">{product.category}</td>
                <td className="px-5 py-3 font-medium">{product.price}</td>
                <td className="px-5 py-3">
                  <span className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-green-50 text-green-600 border border-green-100">
                    {product.status}
                  </span>
                </td>
                <td className="px-5 py-3 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-1.5 text-blue-500 bg-blue-50 hover:bg-blue-100 rounded transition-colors">
                      <Edit size={14} />
                    </button>
                    <button className="p-1.5 text-red-500 bg-red-50 hover:bg-red-100 rounded transition-colors">
                      <Trash2 size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

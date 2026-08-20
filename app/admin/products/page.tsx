'use client';
import { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Image as ImageIcon, X } from 'lucide-react';
import Image from 'next/image';

interface Category {
  id: string;
  name: string;
}

interface Product {
  id: string;
  name: string;
  sku: string;
  price: number;
  stock: number;
  status: string;
  category: Category;
  images: { url: string; isPrimary: boolean }[];
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  
  const [formData, setFormData] = useState({ 
    id: '', name: '', sku: '', categoryId: '', 
    price: '', stock: '', status: 'ACTIVE', primaryImage: '' 
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const [prodRes, catRes] = await Promise.all([
        fetch('/api/products'),
        fetch('/api/categories')
      ]);
      if (prodRes.ok) setProducts(await prodRes.json());
      if (catRes.ok) setCategories(await catRes.json());
    } catch (error) {
      console.error('Failed to fetch', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    
    const file = e.target.files[0];
    if (file.size > 4 * 1024 * 1024) {
      alert('File size exceeds 4MB. Please choose a smaller image.');
      return;
    }

    setIsUploading(true);
    const data = new FormData();
    data.append('file', file);

    try {
      const res = await fetch('/api/upload', { method: 'POST', body: data });
      const result = await res.json();
      if (result.success) setFormData({ ...formData, primaryImage: result.url });
    } catch (error) {
      alert('Upload failed');
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.categoryId) return alert("Please select a category");
    
    const isEdit = !!formData.id;
    const url = isEdit ? `/api/products/${formData.id}` : '/api/products';
    
    try {
      const res = await fetch(url, {
        method: isEdit ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, price: Number(formData.price), stock: Number(formData.stock) }),
      });

      if (res.ok) {
        setIsModalOpen(false);
        fetchData();
        alert(`Product ${isEdit ? 'updated' : 'created'} successfully!`);
      } else {
        const err = await res.json();
        alert(`Error: ${err.error}`);
      }
    } catch (error) {
      alert('Failed to save product');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this product?')) return;
    try {
      const res = await fetch(`/api/products/${id}`, { method: 'DELETE' });
      if (res.ok) fetchData();
    } catch (error) {
      alert('Delete failed');
    }
  };

  const openModal = (prod?: Product) => {
    if (prod) {
      setFormData({
        id: prod.id, name: prod.name, sku: prod.sku, categoryId: prod.category?.id || '',
        price: prod.price.toString(), stock: prod.stock.toString(), status: prod.status,
        primaryImage: prod.images?.find(i => i.isPrimary)?.url || ''
      });
    } else {
      setFormData({ id: '', name: '', sku: '', categoryId: '', price: '', stock: '', status: 'ACTIVE', primaryImage: '' });
    }
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col gap-6 max-w-[1600px] mx-auto pb-10">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Product Management</h1>
          <p className="text-gray-500 text-sm mt-1">Manage inventory, pricing, and product details.</p>
        </div>
        <button onClick={() => openModal()} className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-hover">
          <Plus size={16} /> Add Product
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left text-sm text-gray-600">
          <thead className="text-xs uppercase text-gray-400 bg-gray-50/50">
            <tr>
              <th className="px-6 py-4 font-medium">Image</th>
              <th className="px-6 py-4 font-medium">Name & SKU</th>
              <th className="px-6 py-4 font-medium">Category</th>
              <th className="px-6 py-4 font-medium">Price</th>
              <th className="px-6 py-4 font-medium">Stock</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {isLoading ? <tr><td colSpan={7} className="p-8 text-center">Loading...</td></tr> : 
             products.length === 0 ? <tr><td colSpan={7} className="p-8 text-center">No products found.</td></tr> :
             products.map(p => {
               const primaryImg = p.images?.find(i => i.isPrimary)?.url;
               return (
                 <tr key={p.id} className="hover:bg-gray-50/50">
                   <td className="px-6 py-3">
                     <div className="w-12 h-12 rounded bg-gray-100 border relative overflow-hidden flex items-center justify-center">
                       {primaryImg ? <Image src={primaryImg} alt="" fill className="object-cover" /> : <ImageIcon className="text-gray-400" size={20}/>}
                     </div>
                   </td>
                   <td className="px-6 py-3"><p className="font-bold text-gray-900">{p.name}</p><p className="text-xs text-gray-400">{p.sku}</p></td>
                   <td className="px-6 py-3">{p.category?.name || '-'}</td>
                   <td className="px-6 py-3 font-medium">₹{p.price.toLocaleString()}</td>
                   <td className="px-6 py-3">{p.stock}</td>
                   <td className="px-6 py-3"><span className="px-2 py-1 text-[11px] bg-green-50 text-green-600 rounded border border-green-100">{p.status}</span></td>
                   <td className="px-6 py-3 text-right">
                     <button onClick={() => openModal(p)} className="p-1.5 text-blue-500 bg-blue-50 hover:bg-blue-100 rounded mr-2"><Edit size={16}/></button>
                     <button onClick={() => handleDelete(p.id)} className="p-1.5 text-red-500 bg-red-50 hover:bg-red-100 rounded"><Trash2 size={16}/></button>
                   </td>
                 </tr>
               )
             })}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl overflow-hidden">
            <div className="flex justify-between items-center p-5 border-b border-gray-100">
              <h3 className="font-bold text-gray-900">{formData.id ? 'Edit Product' : 'Add New Product'}</h3>
              <button onClick={() => setIsModalOpen(false)}><X size={20} className="text-gray-400"/></button>
            </div>
            <form onSubmit={handleSubmit} className="p-5 grid grid-cols-2 gap-4">
              <div className="col-span-2 flex items-center gap-4 mb-2">
                <div className="w-20 h-20 rounded bg-gray-50 border flex items-center justify-center relative overflow-hidden">
                  {formData.primaryImage ? <Image src={formData.primaryImage} alt="" fill className="object-cover" /> : <ImageIcon className="text-gray-300" />}
                </div>
                <div>
                  <input type="file" id="prod-img" accept="image/*" className="hidden" onChange={handleImageUpload} disabled={isUploading}/>
                  <label htmlFor="prod-img" className="cursor-pointer border px-3 py-1.5 rounded text-sm">{isUploading ? 'Uploading...' : 'Upload Image'}</label>
                </div>
              </div>
              
              <div><label className="text-sm font-medium mb-1 block">Product Name *</label><input required value={formData.name} onChange={e=>setFormData({...formData, name: e.target.value})} className="w-full border rounded-lg px-3 py-2 text-sm" /></div>
              <div><label className="text-sm font-medium mb-1 block">SKU Code *</label><input required value={formData.sku} onChange={e=>setFormData({...formData, sku: e.target.value})} className="w-full border rounded-lg px-3 py-2 text-sm" /></div>
              <div><label className="text-sm font-medium mb-1 block">Price (₹) *</label><input required type="number" value={formData.price} onChange={e=>setFormData({...formData, price: e.target.value})} className="w-full border rounded-lg px-3 py-2 text-sm" /></div>
              <div><label className="text-sm font-medium mb-1 block">Stock *</label><input required type="number" value={formData.stock} onChange={e=>setFormData({...formData, stock: e.target.value})} className="w-full border rounded-lg px-3 py-2 text-sm" /></div>
              
              <div>
                <label className="text-sm font-medium mb-1 block">Category *</label>
                <select required value={formData.categoryId} onChange={e=>setFormData({...formData, categoryId: e.target.value})} className="w-full border rounded-lg px-3 py-2 text-sm">
                  <option value="">Select Category</option>
                  {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Status</label>
                <select value={formData.status} onChange={e=>setFormData({...formData, status: e.target.value})} className="w-full border rounded-lg px-3 py-2 text-sm">
                  <option value="ACTIVE">Active</option><option value="INACTIVE">Inactive</option>
                </select>
              </div>

              <div className="col-span-2 flex justify-end gap-2 mt-4">
                <button type="button" onClick={()=>setIsModalOpen(false)} className="px-4 py-2 border rounded-lg text-sm">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-primary text-white rounded-lg text-sm">Save Product</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

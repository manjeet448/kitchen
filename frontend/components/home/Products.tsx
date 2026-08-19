'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Button from '@/components/common/Button';

interface DbProduct {
  id: string;
  name: string;
  slug: string;
  category: { id: string; name: string; slug: string };
  images: { url: string; isPrimary: boolean }[];
  price: number;
  status: string;
}

interface DbCategory {
  id: string;
  name: string;
  slug: string;
}

const Products = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [products, setProducts] = useState<DbProduct[]>([]);
  const [categories, setCategories] = useState<DbCategory[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [prodRes, catRes] = await Promise.all([
          fetch('/api/products'),
          fetch('/api/categories'),
        ]);
        if (prodRes.ok) {
          const data: DbProduct[] = await prodRes.json();
          setProducts(data.filter(p => p.status === 'ACTIVE'));
        }
        if (catRes.ok) setCategories(await catRes.json());
      } catch (e) {
        console.error('Failed to fetch products', e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && categories.length > 0) {
      const params = new URLSearchParams(window.location.search);
      const categoryParam = params.get('category');
      if (categoryParam) {
        const found = categories.find(c => c.slug === categoryParam);
        if (found) setActiveTab(found.id);
      }
    }
  }, [categories]);

  const filteredProducts = activeTab === 'all'
    ? products
    : products.filter(p => p.category?.id === activeTab);

  return (
    /* --- PRODUCTS SECTION START --- */
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-dark mb-4"
          >
            Featured <span className="text-primary">Products</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600"
          >
            Browse our selection of top-tier commercial kitchen equipment, meticulously engineered for performance, durability, and innovation.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        {categories.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === 'all' ? 'bg-primary text-white shadow-md' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'}`}
            >
              All
            </button>
            {categories.slice(0, 5).map(category => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === category.id ? 'bg-primary text-white shadow-md' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'}`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>
        )}

        {/* Loading */}
        {isLoading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden animate-pulse">
                <div className="h-64 bg-gray-100" />
                <div className="p-6 space-y-3">
                  <div className="h-4 bg-gray-100 rounded w-3/4" />
                  <div className="h-4 bg-gray-100 rounded w-1/2" />
                  <div className="h-9 bg-gray-100 rounded mt-4" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!isLoading && filteredProducts.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <p className="text-lg">Abhi koi product available nahi hai.</p>
          </div>
        )}

        {/* Product Grid */}
        {!isLoading && filteredProducts.length > 0 && (
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product, index) => {
                const primaryImg = product.images?.find(i => i.isPrimary)?.url || product.images?.[0]?.url;
                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    key={product.id}
                    className="bg-white rounded-2xl overflow-hidden border border-border group hover:shadow-elevated transition-all duration-300 flex flex-col h-full"
                  >
                    <Link href={`/products/${product.slug}`} className="flex flex-col h-full cursor-pointer">
                      <div className="relative h-64 overflow-hidden bg-white p-6 flex items-center justify-center border-b border-gray-100">
                        {primaryImg ? (
                          <img
                            src={primaryImg}
                            alt={product.name}
                            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 ease-in-out"
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-300 text-sm">No Image</div>
                        )}
                      </div>
                      <div className="p-6 flex flex-col flex-grow bg-white">
                        <h3 className="font-bold text-lg text-dark mb-4 line-clamp-2 group-hover:text-primary transition-colors">{product.name}</h3>
                        <div className="mt-auto">
                          <Button variant="outline" className="w-full pointer-events-none">View Details</Button>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}

        <div className="mt-16 text-center">
          <Link href="/products"><Button variant="primary" size="lg">View Complete Catalog</Button></Link>
        </div>
      </div>
    </section>
    /* --- PRODUCTS SECTION END --- */
  );
};

export default Products;

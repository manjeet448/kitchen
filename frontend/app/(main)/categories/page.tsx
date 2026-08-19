'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { categories } from '@/data/categories';
import Button from '@/components/common/Button';

export default function CategoriesPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Banner */}
      <div className="bg-dark text-white py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80')] bg-cover bg-center" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-4"
          >
            Equipment <span className="text-primary">Categories</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            Explore our comprehensive range of high-performance commercial kitchen equipment, tailored for every culinary need.
          </motion.p>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                id={category.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-2xl overflow-hidden border border-border bg-white shadow-sm hover:shadow-elevated transition-all duration-300 relative flex flex-col h-full scroll-mt-24"
              >
                <Link href={`/products?category=${category.slug}`} className="h-56 overflow-hidden relative block">
                  <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/40 transition-colors z-10" />
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 z-20 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-primary shadow-soft">
                    <Icon size={24} />
                  </div>
                </Link>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-semibold text-dark mb-3 group-hover:text-primary transition-colors">{category.title}</h3>
                  <p className="text-gray-500 text-sm mb-6 flex-grow">{category.description}</p>
                  <Link href={`/products?category=${category.slug}`} className="w-full block">
                    <Button variant="outline" className="w-full">View Products</Button>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom Feature Strip */}
      <div className="bg-primary/10 py-12 border-y border-primary/20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-dark mb-2">Need a custom kitchen setup?</h3>
          <p className="text-gray-600 mb-6">Our experts are ready to help you design the perfect commercial kitchen.</p>
          <Button variant="primary" size="lg">Get Free Consultation</Button>
        </div>
      </div>
    </div>
  );
}

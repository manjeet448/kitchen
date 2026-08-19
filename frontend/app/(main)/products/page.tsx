'use client';

import React from 'react';
import ProductsComponent from '@/components/home/Products';

export default function ProductsPage() {
  return (
    <div className="pt-24 pb-20">
      {/* We reuse the extremely robust Products component we built for the homepage */}
      <div className="py-12">
        <ProductsComponent />
      </div>
    </div>
  );
}

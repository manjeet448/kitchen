import React from 'react';
import Hero from '@/components/hero/Hero';
import Categories from '@/components/home/Categories';
import Products from '@/components/home/Products';

export default function Home() {
  return (
    <>
      {/* Home page composed of various sections to demonstrate structure */}
      <Hero />
      <div className="md:mt-24"></div> {/* Spacer for the absolute floating bar from Hero */}
      <Categories />
      <Products />
    </>
  );
}

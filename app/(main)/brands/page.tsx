import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Brands | HHE EQUIPMENT',
  description: 'Explore the premium brands we offer at HHE EQUIPMENT.',
};

const brandsList = [
  { name: 'RATIONAL', tagline: 'Smart Cooking Systems' },
  { name: 'HOBART', tagline: 'Premium Food Equipment' },
  { name: 'SCOTSMAN', tagline: 'Ice Systems' },
  { name: 'MANITOWOC', tagline: 'Engineered for Ease' },
  { name: 'ROBOT COUPE', tagline: 'Food Preparation' },
  { name: 'SIRMAN', tagline: 'Professional Machines' },
  { name: 'ELECTROLUX', tagline: 'Professional Solutions' },
  { name: 'UNOX', tagline: 'Intelligent Ovens' },
  { name: 'HATCO', tagline: 'Innovative Warming' },
  { name: 'OZTI', tagline: 'Complete Kitchens' },
];

export default function BrandsPage() {
  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="bg-dark text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Our <span className="text-primary">Brands</span></h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We partner with the world's most trusted manufacturers to bring you premium quality equipment built for rigorous professional use.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-dark mb-4">Premium Partners</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {brandsList.map((brand) => (
            <div 
              key={brand.name}
              className="group bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-elevated transition-all duration-300 flex flex-col items-center justify-center text-center h-48 cursor-pointer relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <h3 className="text-2xl font-black tracking-wider text-dark group-hover:text-primary transition-colors duration-300 relative z-10">
                {brand.name}
              </h3>
              <p className="text-xs text-gray-400 mt-2 font-medium tracking-wide relative z-10">
                {brand.tagline}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center bg-white p-12 rounded-3xl border border-primary/20 shadow-sm max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-dark mb-4">Looking for a specific brand?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our catalog features thousands of products from these premium manufacturers. If you need a specific model, we can source it for you at the best price.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-colors">
            Request Brand Catalog <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}

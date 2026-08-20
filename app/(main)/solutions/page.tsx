import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/common/Button';

export const metadata: Metadata = {
  title: 'Our Solutions | HHE EQUIPMENT',
  description: 'Customized commercial kitchen solutions for hotels, restaurants, and industrial applications.',
};

export default function SolutionsPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="bg-dark text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Our <span className="text-primary">Solutions</span></h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Tailored equipment setups for every culinary environment.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center">
            <h3 className="text-2xl font-bold text-dark mb-4">Hotel Kitchens</h3>
            <p className="text-gray-600 mb-6">Complete heavy-duty setups designed for large scale operations and 24/7 reliability in premium hospitality environments.</p>
            <Link href="/quote"><Button variant="outline">Consult Expert</Button></Link>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center">
            <h3 className="text-2xl font-bold text-dark mb-4">Restaurant Kitchens</h3>
            <p className="text-gray-600 mb-6">Space-efficient, high-performance equipment that maximizes output and streamlines the workflow for busy dining establishments.</p>
            <Link href="/quote"><Button variant="outline">Consult Expert</Button></Link>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center">
            <h3 className="text-2xl font-bold text-dark mb-4">Industrial Kitchens</h3>
            <p className="text-gray-600 mb-6">Mass-catering solutions built for extreme durability, speed, and efficiency in hospitals, cafeterias, and corporate campuses.</p>
            <Link href="/quote"><Button variant="outline">Consult Expert</Button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

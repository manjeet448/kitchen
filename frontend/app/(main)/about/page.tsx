import React from 'react';
import { Metadata } from 'next';
import About from '@/components/home/About';
import Clients from '@/components/home/Clients';

export const metadata: Metadata = {
  title: 'About Us | HHE EQUIPMENT',
  description: 'Learn more about HHE EQUIPMENT, our mission, vision, and the expert team behind our premium commercial kitchen equipment.',
};

export default function AboutPage() {
  return (
    /* --- ABOUT PAGE START --- */
    <div className="pt-24 pb-0">
      {/* Page Header */}
      <div className="bg-dark text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">About <span className="text-primary">HHE EQUIPMENT</span></h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            15+ Years of excellence in providing innovative commercial kitchen solutions.
          </p>
        </div>
      </div>

      {/* About Section */}
      <About />
      
      {/* Clients Section */}
      <Clients />
    </div>
    /* --- ABOUT PAGE END --- */
  );
}

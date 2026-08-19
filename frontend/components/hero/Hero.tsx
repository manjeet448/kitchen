'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '@/components/common/Button';
import { ShieldCheck, Award, Headset, PenTool } from 'lucide-react';

const Hero = () => {
  return (
    /* --- HERO SECTION START --- */
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax effect could be added here, for now absolute positioning */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80')" }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-dark/80" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
          >
            Innovative Equipment.<br/>
            <span className="text-primary">Exceptional Performance.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
          >
            Empowering culinary professionals with premium, highly durable, and state-of-the-art commercial kitchen solutions globally.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/services"><Button variant="primary" size="lg">Explore Services</Button></Link>
            <Link href="/products"><Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-dark">View Products</Button></Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom Floating Feature Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 z-30 translate-y-1/2 hidden md:block"
      >
        <div className="container mx-auto px-4">
          <div className="glass-dark rounded-2xl p-6 grid grid-cols-4 gap-4 shadow-elevated">
            <div className="flex items-center gap-4 border-r border-white/10 last:border-0">
              <Award className="text-primary" size={32} />
              <div>
                <h4 className="text-white font-semibold">Premium Quality</h4>
                <p className="text-gray-400 text-sm">Top-tier materials</p>
              </div>
            </div>
            <div className="flex items-center gap-4 border-r border-white/10 last:border-0 pl-4">
              <Headset className="text-primary" size={32} />
              <div>
                <h4 className="text-white font-semibold">Expert Support</h4>
                <p className="text-gray-400 text-sm">24/7 dedicated team</p>
              </div>
            </div>
            <div className="flex items-center gap-4 border-r border-white/10 last:border-0 pl-4">
              <PenTool className="text-primary" size={32} />
              <div>
                <h4 className="text-white font-semibold">Custom Solutions</h4>
                <p className="text-gray-400 text-sm">Tailored for you</p>
              </div>
            </div>
            <div className="flex items-center gap-4 pl-4">
              <ShieldCheck className="text-primary" size={32} />
              <div>
                <h4 className="text-white font-semibold">After Sales Care</h4>
                <p className="text-gray-400 text-sm">Comprehensive AMC</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
    /* --- HERO SECTION END --- */
  );
};

export default Hero;

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { services } from '@/data/services';

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Banner */}
      <div className="bg-dark text-white py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&q=80')] bg-cover bg-center" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-4"
          >
            Our <span className="text-primary">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            From conceptual kitchen design to full-scale installation and after-sales support, we offer end-to-end solutions.
          </motion.p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-24 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                id={service.slug}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 border border-border hover:border-primary/50 shadow-sm hover:shadow-elevated transition-all duration-300 group scroll-mt-24 overflow-hidden"
              >
                <div className="h-48 -mx-8 -mt-8 mb-6 overflow-hidden relative">
                  <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/10 transition-colors z-10" />
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-4 left-8 z-20 w-12 h-12 bg-white rounded-xl text-primary flex items-center justify-center shadow-md">
                    <Icon size={24} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-dark mb-4">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

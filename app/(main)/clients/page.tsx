'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { clients } from '@/data/clients';

export default function ClientsPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Banner */}
      <div className="bg-dark text-white py-24 text-center">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-4"
          >
            Our <span className="text-primary">Trusted Partners</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            We take pride in outfitting the kitchens of some of the most prestigious brands in the hospitality and culinary industry.
          </motion.p>
        </div>
      </div>

      {/* Achievement Strip */}
      <div className="bg-primary py-10 shadow-soft">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <h3 className="text-4xl font-bold mb-2">500+</h3>
              <p className="font-medium text-white/80 uppercase tracking-wider text-sm">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">200+</h3>
              <p className="font-medium text-white/80 uppercase tracking-wider text-sm">Active Clients</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">15+</h3>
              <p className="font-medium text-white/80 uppercase tracking-wider text-sm">Years Experience</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">30+</h3>
              <p className="font-medium text-white/80 uppercase tracking-wider text-sm">Global Partners</p>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Logo Grid */}
      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white border border-border rounded-xl p-8 flex flex-col items-center justify-center hover:shadow-elevated transition-all duration-300 hover:border-primary/30 group gap-4"
            >
              <img 
                src={client.logo} 
                alt={client.name}
                className="max-h-16 rounded-full transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-base font-semibold text-gray-800 text-center">{client.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

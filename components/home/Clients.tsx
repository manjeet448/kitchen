'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { clients } from '@/data/clients';

const Clients = () => {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-semibold text-gray-400 mb-10 uppercase tracking-widest">
          Our Valued Clients & Partners
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {clients.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="transition-all duration-300 hover:scale-110 cursor-pointer flex flex-col items-center gap-3"
            >
              <img 
                src={client.logo} 
                alt={client.name} 
                className="h-12 md:h-16 object-contain rounded-full shadow-sm"
                title={client.name}
              />
              <span className="text-sm font-medium text-gray-700 text-center">{client.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '@/data/testimonials';
import { Star, Quote } from 'lucide-react';

export default function TestimonialsPage() {
  return (
    <div className="pt-24 pb-20 bg-gray-50">
      {/* Header */}
      <div className="container mx-auto px-4 text-center py-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-dark mb-4"
        >
          Client <span className="text-primary">Success Stories</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 max-w-2xl mx-auto"
        >
          Don't just take our word for it. Hear from the culinary professionals who rely on our equipment every day.
        </motion.p>
      </div>

      {/* Testimonials Grid */}
      <div className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-border shadow-sm hover:shadow-elevated transition-shadow relative"
            >
              <Quote className="absolute top-6 right-8 text-primary/10" size={64} />
              
              <div className="flex text-primary mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-gray-600 italic mb-8 relative z-10 text-lg leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <h4 className="font-bold text-dark">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.position}, <span className="font-medium">{testimonial.company}</span></p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

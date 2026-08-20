'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { categories } from '@/data/categories';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Button from '@/components/common/Button';

const Categories = () => {
  return (
    /* --- CATEGORIES SECTION START --- */
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl font-bold text-dark mb-4">
              Explore Our <span className="text-primary">Categories</span>
            </h2>
            <p className="text-gray-600">
              Discover our comprehensive range of commercial kitchen equipment, designed to elevate your culinary operations with unmatched efficiency.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-6 md:mt-0"
          >
            <Link href="/categories"><Button variant="outline">View All Categories</Button></Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="pb-16"
          >
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <SwiperSlide key={category.id}>
                  <Link href={`/products?category=${category.slug}`} className="block group rounded-2xl overflow-hidden border border-border bg-white shadow-sm hover:shadow-elevated transition-all duration-300 relative">
                    <div className="h-48 overflow-hidden relative">
                      {/* Image Overlay */}
                      <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/40 transition-colors z-10" />
                      <img 
                        src={category.image} 
                        alt={category.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-primary">
                        <Icon size={20} />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-dark mb-2 group-hover:text-primary transition-colors">{category.title}</h3>
                      <p className="text-gray-500 text-sm line-clamp-2">{category.description}</p>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </motion.div>
      </div>
    </section>
    /* --- CATEGORIES SECTION END --- */
  );
};

export default Categories;

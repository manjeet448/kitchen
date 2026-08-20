'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, UserCheck, ShieldCheck, ThumbsUp, Headset } from 'lucide-react';
import Image from 'next/image';

const About = () => {
  const features = [
    { icon: <Award size={32} strokeWidth={1.5} />, label: "Quality assurance" },
    { icon: <UserCheck size={32} strokeWidth={1.5} />, label: "Expertise" },
    { icon: <ShieldCheck size={32} strokeWidth={1.5} />, label: "Reliability" },
    { icon: <ThumbsUp size={32} strokeWidth={1.5} />, label: "Customer satisfaction" },
    { icon: <Headset size={32} strokeWidth={1.5} />, label: "Technical support" },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Top Section: Why Choose Us */}
      <div className="container mx-auto px-4 pt-20 pb-16 relative">
        {/* Background "ABOUT US" Text */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full text-center select-none pointer-events-none z-0">
          <h1 className="text-[120px] md:text-[200px] font-black text-gray-50/80 leading-none uppercase tracking-widest whitespace-nowrap">
            About Us
          </h1>
        </div>

        {/* Floating Badge (Top Right) */}
        <div className="absolute top-12 right-12 md:right-24 hidden md:flex items-center justify-center w-24 h-24 rounded-full border border-gray-200 z-10 bg-white shadow-sm">
          <div className="text-[10px] font-bold text-gray-400 text-center uppercase tracking-widest animate-spin-slow" style={{ animationDuration: '10s' }}>
            Best Quality Foods
          </div>
          <div className="absolute w-2 h-2 rounded-full bg-primary" />
        </div>

        {/* Heading Content */}
        <div className="relative z-10 text-center flex flex-col items-center mt-12 mb-16">
          <h3 className="text-3xl md:text-4xl font-normal text-primary mb-2 tracking-wide">
            why choose us
          </h3>
          <p className="text-gray-700 text-lg md:text-xl">
            High-Quality Kitchen Equipment and Service Provider
          </p>
        </div>

        {/* Feature Icons */}
        <div className="relative z-10 grid grid-cols-2 md:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center gap-4 group"
            >
              <div className="w-20 h-20 rounded-2xl bg-white border-2 border-gray-100 flex items-center justify-center text-dark group-hover:border-primary group-hover:text-primary transition-colors duration-300 shadow-sm">
                {feature.icon}
              </div>
              <span className="text-sm md:text-base font-medium text-gray-800">
                {feature.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Section: Experience and Image */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center max-w-6xl mx-auto">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1 pr-0 lg:pr-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-dark mb-6 leading-tight">
              15 Years Of Experience In Kitchen Services
            </h2>
            <p className="text-gray-500 leading-loose text-lg">
              Our company specializes in providing top-notch commercial kitchen equipment and spare parts to our esteemed clientele. We pride ourselves on our team of seasoned professionals who go above and beyond to ensure exceptional service and customer satisfaction. Our product range spans from ovens and stoves to refrigerators and dishwashers, all sourced from reputable manufacturers and well-known brands. Additionally, we offer installation, repair, and preventive maintenance services to keep our customers' kitchen equipment in optimal condition.
            </p>
          </div>

          {/* Image Content */}
          <div className="order-1 lg:order-2 relative">
            {/* Beige background block */}
            <div className="absolute -inset-4 md:-inset-8 -top-8 md:-top-12 bg-[#F9F7F3] -z-10 rounded-sm"></div>
            
            <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&q=80" 
                alt="Delicious appetizers"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
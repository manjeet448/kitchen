'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/common/Button';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function QuotePage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    category: '',
    details: ''
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const productName = params.get('productName');
      const productImage = params.get('productImage');
      if (productName) {
        setFormData(prev => ({
          ...prev,
          details: `Hi, I am interested in purchasing the *${productName}*.\n\nProduct Link: https://frontend-3-ivory.vercel.app/products/${encodeURIComponent(productName.toLowerCase().replace(/ /g, '-'))}\nImage: https://frontend-3-ivory.vercel.app${productImage}\n\n`
        }));
      }
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { firstName, lastName, email, phone, company, category, details } = formData;
    
    const message = `*New Quote Request*\n\n*Name:* ${firstName} ${lastName}\n*Email:* ${email}\n*Phone:* ${phone}\n*Company:* ${company}\n*Category:* ${category}\n*Details:* ${details}`;
    
    const whatsappUrl = `https://wa.me/917065775520?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <div className="bg-dark text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-4"
          >
            Request a <span className="text-primary">Quote</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            Fill out the form below with your requirements, and our team of experts will get back to you with a customized proposal within 24 hours.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-2/3 bg-white p-8 md:p-12 rounded-2xl border border-border shadow-elevated"
          >
            <h2 className="text-3xl font-bold text-dark mb-8">Send Us Your Requirements</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Doe" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="john@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="+91 82357 17524" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Your Restaurant / Hotel Name" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Equipment Category Interest</label>
                <select name="category" value={formData.category} onChange={handleChange} className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-white">
                  <option value="">Select a category...</option>
                  <option value="Cooking Equipment">Cooking Equipment</option>
                  <option value="Refrigeration">Refrigeration</option>
                  <option value="Bakery Equipment">Bakery Equipment</option>
                  <option value="Full Kitchen Setup">Full Kitchen Setup</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Details *</label>
                <textarea 
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  required
                  rows={5} 
                  className="w-full p-4 rounded-xl border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none" 
                  placeholder="Please describe your requirements, timeline, and any specific equipment you are looking for..."
                ></textarea>
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full md:w-auto">Submit Request</Button>
            </form>
          </motion.div>

          {/* Contact Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-1/3 flex flex-col gap-8"
          >
            <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20">
              <h3 className="text-xl font-bold text-dark mb-6">Contact Information</h3>
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary shadow-sm shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark mb-1">Our Headquarters</h4>
                    <p className="text-gray-600 text-sm">2, Shalimar Gdns Ext, Block B, Janak Puri, Sahibabad, Ghaziabad, Uttar Pradesh 201006</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary shadow-sm shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark mb-1">Call Us</h4>
                    <p className="text-gray-600 text-sm">070657 75520</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary shadow-sm shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark mb-1">Email Us</h4>
                    <p className="text-gray-600 text-sm">hheequipment@gmail.com<br/>Service.hheequipment@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-dark text-white rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">Business Hours</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between text-primary font-medium pt-2 border-t border-white/20 mt-2">
                  <span>Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

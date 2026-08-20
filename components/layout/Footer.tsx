import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Button from '@/components/common/Button';

const Footer = () => {
  return (
    <footer className="bg-dark text-white/80 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">

          {/* Column 1: Company */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">HHE</span>
              </div>
              <span className="text-2xl font-bold text-white">
                HHE <span className="text-primary">EQUIPMENT</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Premium commercial kitchen equipment company providing innovative solutions and exceptional performance for culinary professionals worldwide.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/projects" className="hover:text-primary transition-colors">Our Projects</Link></li>
              <li><Link href="/clients" className="hover:text-primary transition-colors">Clients</Link></li>
              <li><Link href="/testimonials" className="hover:text-primary transition-colors">Testimonials</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Categories & Services */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-bold text-white">Categories</h3>
            <ul className="flex flex-col gap-3">
              <li><Link href="/categories" className="hover:text-primary transition-colors">Cooking Equipment</Link></li>
              <li><Link href="/categories" className="hover:text-primary transition-colors">Bakery Equipment</Link></li>
              <li><Link href="/categories" className="hover:text-primary transition-colors">Refrigeration</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Kitchen Design</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Installation & Repair</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-bold text-white">Contact Info</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary shrink-0" size={20} />
                <span>2, Shalimar Gdns Ext, Block B, Janak Puri, Sahibabad, Ghaziabad, Uttar Pradesh 201006</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={20} />
                <span>070657 75520</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-primary shrink-0" size={20} />
                <div className="flex flex-col">
                  <span>hheequipment@gmail.com</span>
                  <span>Service.hheequipment@gmail.com</span>
                </div>
              </li>
            </ul>
            <div className="mt-2">
              <h4 className="text-white font-medium mb-3">Subscribe to Newsletter</h4>
              <div className="flex bg-white/10 rounded-xl overflow-hidden p-1">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="bg-transparent border-none outline-none text-white px-4 w-full text-sm"
                />
                <Button variant="primary" size="sm" className="shrink-0">Subscribe</Button>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} HHE EQUIPMENT. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

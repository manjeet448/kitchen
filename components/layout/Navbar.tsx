'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/utils/helper';
import Button from '@/components/common/Button';
import { navigation } from '@/data/navigation';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdowns, setOpenMobileDropdowns] = useState<string[]>([]);
  const pathname = usePathname();

  const toggleMobileDropdown = (label: string) => {
    setOpenMobileDropdowns(prev => 
      prev.includes(label) ? prev.filter(l => l !== label) : [...prev, label]
    );
  };
  
  const isHomePage = pathname === '/';
  const shouldBeSolid = !isHomePage || isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling on the body when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        shouldBeSolid ? 'bg-white/90 backdrop-blur-md shadow-soft py-4' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo Left */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0 lg:mr-8">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-xl">HHE</span>
          </div>
          <span className={cn('text-2xl font-bold transition-colors', shouldBeSolid ? 'text-dark' : 'text-white')}>
            HHE <span className="text-primary">EQUIPMENT</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 flex-grow justify-center">
          {navigation.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
            const isContact = link.label.toUpperCase() === 'CONTACT';
            
            return (
              <div key={link.label} className="relative group flex items-center">
                {isContact ? (
                  <Link href={link.href} prefetch={true}>
                    <Button variant="primary" className="ml-2">{link.label}</Button>
                  </Link>
                ) : (
                  <Link 
                    href={link.href}
                    prefetch={true}
                    className={cn(
                      'flex items-center gap-1 font-medium transition-colors text-sm uppercase tracking-wide whitespace-nowrap py-4',
                      isActive ? 'text-primary' : (shouldBeSolid ? 'text-text hover:text-primary' : 'text-white/90 hover:text-white')
                    )}
                  >
                    {link.label}
                    {link.dropdown && <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />}
                  </Link>
                )}
                
                {/* Dropdown Menu */}
                {link.dropdown && (
                  <div className="absolute top-full left-0 w-64 bg-white shadow-elevated rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left translate-y-2 group-hover:translate-y-0 border border-gray-100 z-50">
                    <div className="p-3 flex flex-col gap-1">
                      {link.dropdown.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          prefetch={true}
                          className="px-4 py-2 text-sm text-text hover:text-primary hover:bg-gray-50 rounded-lg transition-colors whitespace-nowrap flex items-center"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>



        {/* Mobile Menu Toggle */}
        <button 
          className={cn('lg:hidden', shouldBeSolid ? 'text-dark' : 'text-white')}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 max-h-[80vh] overflow-y-auto bg-white shadow-elevated border-t border-gray-100 py-4 px-4 flex flex-col gap-2">
          {navigation.map((link) => {
            const isDropdownOpen = openMobileDropdowns.includes(link.label);
            const isContact = link.label.toUpperCase() === 'CONTACT';
            
            return (
              <div key={link.label} className="flex flex-col border-b border-gray-50 pb-2">
                {isContact ? (
                  <div className="pt-2 pb-1">
                    <Link href={link.href} prefetch={true} onClick={() => setIsMobileMenuOpen(false)}>
                      <Button variant="primary" className="w-full">{link.label}</Button>
                    </Link>
                  </div>
                ) : (
                  <div className="flex justify-between items-center text-dark font-medium text-lg py-1">
                    <Link 
                      href={link.href}
                      prefetch={true}
                      className="flex-grow py-1"
                      onClick={() => !link.dropdown && setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                    {link.dropdown && (
                      <button 
                        onClick={() => toggleMobileDropdown(link.label)}
                        className="p-2 -mr-2 bg-gray-50 rounded-lg text-primary"
                      >
                        <ChevronDown size={18} className={cn("transition-transform duration-200", isDropdownOpen && "rotate-180")} />
                      </button>
                    )}
                  </div>
                )}
                
                {/* Mobile Submenu */}
                {link.dropdown && isDropdownOpen && (
                  <div className="pl-4 flex flex-col gap-2 mt-1 mb-2">
                    {link.dropdown.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        prefetch={true}
                        className="text-text hover:text-primary text-base py-1.5"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

        </div>
      )}
    </header>
  );
};

export default Navbar;

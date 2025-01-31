"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import NavItem from './NavItem';
import MobileMenu from './MobileMenu';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed border-2 border-b border-henna-200 top-0 left-0 w-full bg-white/95 backdrop-blur-md transition-shadow z-50  flex justify-center ${
        isScrolled ? 'shadow-lg' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavItem label="Home" href="/" />
            <NavItem label="About" href="/about" />
            <NavItem label="Services" href="/mehandi-services" />
            <NavItem label="Gallery" href="/mehandi-design-gallery" />
            <NavItem label="Testimonials" href="/client-feedback" />
            <NavItem label="Book Now" href="/booknow" />
          </div>

          {/* Mobile Navigation */}
          <MobileMenu
            isOpen={isMobileMenuOpen}
            onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="space-y-4 text-lg font-medium text-gray-800 ps-5">
              <Link href="/" className="block py-2 hover:text-henna-700 transition-colors">Home</Link>
              <Link href="/about" className="block py-2 hover:text-henna-700 transition-colors">About</Link>
              <Link href="/services" className="block py-2 hover:text-henna-700 transition-colors">Services</Link>
              <Link href="/gallery" className="block py-2 hover:text-henna-700 transition-colors">Gallery</Link>
              <Link href="/testimonials" className="block py-2 hover:text-henna-700 transition-colors">Testimonials</Link>
              <Link href="/contact" className="block py-2 hover:text-henna-700 transition-colors">Contact</Link>
            </div>
          </MobileMenu>
        </div>
      </div>
    </nav>
  );
}

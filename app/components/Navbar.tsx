'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Anchor } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const currentPath = usePathname();

  const navigationItems = [
    { label: 'Flotta', href: '/fleet' },
    { label: 'Team', href: '/team' },
    { label: 'Sponsor', href: '/sponsor' },
    { label: 'Contatti', href: '/contact' },
  ];

  const isCurrentPath = (path: string) => currentPath === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-3 ">
      <div className={` bg-white text-black font-bold mx-auto max-w-7xl rounded-full shadow-lg hover:shadow-xl  transition-all duration-0 ${isMobileMenuOpen ? 'rounded-lg' : 'rounded-full'}`}>
        <div className="flex items-center justify-between px-6 py-3">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center space-x-2 transition-transform duration-300 hover:scale-105">
            <Anchor className="w-6 h-6" />
            <span className="text-lg font-bold">Sapienza Sailing Team</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-full transition-all duration-300 hover:bg-gray-100 ${
                  isCurrentPath(item.href) ? 'bg-gray-100' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/login"
              className="ml-4 px-6 py-2 bg-blue-600 text-white rounded-full transition-all duration-300 hover:bg-blue-700 hover:shadow-md"
            >
              Join Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden px-4 py-2">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-gray-100 ${
                  isCurrentPath(item.href) ? 'bg-gray-100' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/joinus"
              className="block mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-center transition-all duration-300 hover:bg-blue-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Join Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
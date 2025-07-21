'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Contact Me", href: "/contact" },
    
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-amber-300 via-orange-400 to-rose-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer tracking-tight">
              My Portfolio
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex space-x-8 lg:space-x-12">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="relative text-white/90 text-sm lg:text-base font-medium uppercase tracking-wider hover:text-white transition-colors duration-300 group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200 w-10 h-10 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                {/* Hamburger Icon */}
                <div className={`absolute inset-0 flex flex-col justify-center space-y-1 transition-all duration-300 ${isOpen ? 'opacity-0 rotate-45' : 'opacity-100 rotate-0'}`}>
                  <span className="block w-6 h-0.5 bg-white transition-all duration-300"></span>
                  <span className="block w-6 h-0.5 bg-white transition-all duration-300"></span>
                  <span className="block w-6 h-0.5 bg-white transition-all duration-300"></span>
                </div>
                {/* X Icon */}
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-45'}`}>
                  <span className="absolute w-6 h-0.5 bg-white transform rotate-45"></span>
                  <span className="absolute w-6 h-0.5 bg-white transform -rotate-45"></span>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="pb-6 pt-2 space-y-1">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-white/90 text-base font-medium uppercase tracking-wider hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

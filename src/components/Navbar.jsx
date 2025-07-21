import React, { useState, useEffect } from 'react';
import Logo from '../assets/logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);
    document.body.style.overflow = newState ? 'hidden' : '';
  };

  return (
    <header 
      className={`fixed w-full z-50 backdrop-blur-md transition-all duration-300 ${
        isScrolled 
          ? 'top-0 bg-black/40 shadow-lg py-4' 
          : 'bottom-0 bg-black/20 py-3.5'
      }`}
    >
      {/* Desktop Navigation */}
      <div className="w-full">
        <div className="transition-all duration-300">
          <div className="w-full px-4 flex justify-between items-center">
            {/* Logo */}
            <div className="h-16 flex items-center">
              <a className="h-full flex items-center" aria-label="Cresco Home" href="/">
                <img 
                  src={Logo} 
                  alt="Cresco" 
                  className="h-15 w-auto max-w-[200px] object-contain drop-shadow-md"
                />
              </a>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:block ml-auto" aria-label="Main">
              <ul className="flex items-center space-x-8">
                <li>
                  <a className="text-white uppercase text-sm tracking-wider hover:text-gray-300 transition-colors" href="/location">Hours & Location</a>
                </li>
                <li>
                  <a className="text-white uppercase text-sm tracking-wider hover:text-gray-300 transition-colors" href="/menus">Menus</a>
                </li>
                <li className="relative group">
                  <div className="relative">
                    <button className="text-white uppercase text-sm tracking-wider hover:text-gray-300 transition-colors flex items-center">
                      About <span className={`ml-1 text-xs ${isScrolled ? '' : 'transform rotate-180'}`}>▼</span>
                    </button>
                  </div>
                  <div className={`absolute left-0 ${isScrolled ? 'mt-2' : 'bottom-full mb-2'} w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out`}>
                    <ul>
                      <li><a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="/about">About</a></li>
                      <li><a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="/story">Our Story</a></li>
                      <li><a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="/chef">Chef</a></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a className="text-white uppercase text-sm tracking-wider hover:text-gray-300 transition-colors" href="/events">Private Events</a>
                </li>
                <li>
                  <a className="text-white uppercase text-sm tracking-wider hover:text-gray-300 transition-colors" href="/catering">Catering</a>
                </li>
                <li>
                  <a className="text-white uppercase text-sm tracking-wider hover:text-gray-300 transition-colors" href="/gift-cards">Gift Cards</a>
                </li>
                <li>
                  <a className="text-white uppercase text-sm tracking-wider hover:text-gray-300 transition-colors" href="/contact">Contact</a>
                </li>
                <li>
                  <a className="ml-4 bg-[#a52a2a] text-white uppercase text-sm tracking-wider px-5 py-2 rounded hover:bg-[#8c2323] transition-colors" href="/reservations">Reservations</a>
                </li>
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden relative z-50 w-8 h-8 flex flex-col justify-between items-center" 
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <span className="sr-only">Toggle Navigation</span>
              <span className={`block w-8 h-0.5 bg-white transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-3.5' : ''}`}></span>
              <span className={`block w-8 h-0.5 bg-white transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-8 h-0.5 bg-white transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-3.5' : ''}`}></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div 
        className={`fixed inset-0 bg-black/95 z-40 flex items-center justify-center transition-all duration-300 ease-in-out transform ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="w-full max-w-md px-4 py-20">
          <nav className="text-center" aria-label="Mobile main">
            <ul className="space-y-6">
              <li><a className="block text-white text-xl py-3 hover:text-gray-300 transition-colors" href="/location">Hours & Location</a></li>
              <li><a className="block text-white text-xl py-3 hover:text-gray-300 transition-colors" href="/menus">Menus</a></li>
              <li><a className="block text-white text-xl py-3 hover:text-gray-300 transition-colors" href="/about">About</a></li>
              <li><a className="block text-white text-xl py-3 hover:text-gray-300 transition-colors" href="/events">Private Events</a></li>
              <li><a className="block text-white text-xl py-3 hover:text-gray-300 transition-colors" href="/catering">Catering</a></li>
              <li><a className="block text-white text-xl py-3 hover:text-gray-300 transition-colors" href="/gift-cards">Gift Cards</a></li>
              <li><a className="block text-white text-xl py-3 hover:text-gray-300 transition-colors" href="/contact">Contact</a></li>
              <li className="mt-8">
                <a className="inline-block bg-[#a52a2a] text-white text-xl px-8 py-3 rounded hover:bg-[#8c2323] transition-colors" href="/reservations">Reservations</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

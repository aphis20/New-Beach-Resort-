import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiMenuAlt3 } from 'react-icons/hi';
import { FaUmbrellaBeach } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-black/80 backdrop-blur-md py-2' : 'bg-black/50 backdrop-blur-sm py-4'
    }`}>
      <div className="max-w-[1100px] mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <FaUmbrellaBeach className="text-amber-500 text-3xl animate-pulse" />
            <Link to="/" className="text-2xl font-bold text-white hover:text-amber-500 transition-colors duration-300">
              Beach<span className="text-amber-500">Resort</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link
                to="/"
                className="text-white hover:text-amber-500 transition-colors duration-300 relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                to="/rooms"
                className="text-white hover:text-amber-500 transition-colors duration-300 relative group"
              >
                Rooms
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                to="/offers"
                className="text-white hover:text-amber-500 transition-colors duration-300 relative group"
              >
                Amenities
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                to="/contact"
                className="text-white hover:text-amber-500 transition-colors duration-300 relative group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                to="/book"
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/25"
              >
                Book Now
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-amber-500 focus:outline-none transition-colors duration-300"
            >
              <HiMenuAlt3 className={`h-8 w-8 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-2 pt-4 pb-6 space-y-4">
          <Link
            to="/"
            className="block text-white hover:text-amber-500 transition-colors duration-300 text-lg"
          >
            Home
          </Link>
          <Link
            to="/rooms"
            className="block text-white hover:text-amber-500 transition-colors duration-300 text-lg"
          >
            Rooms
          </Link>
          <Link
            to="/offers"
            className="block text-white hover:text-amber-500 transition-colors duration-300 text-lg"
          >
            Amenities
          </Link>
          <Link
            to="/contact"
            className="block text-white hover:text-amber-500 transition-colors duration-300 text-lg"
          >
            Contact
          </Link>
          <Link
            to="/book"
            className="block w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 text-center text-lg font-semibold"
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

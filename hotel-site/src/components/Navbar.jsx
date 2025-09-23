import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
   { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Rooms', href: '/rooms' },
  { name: 'Facilities', href: '/facilities' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="z-50 w-full mt-[10px] mb-10 bg-white shadow-md">
      <div className="max-w-6xl px-4 mx-auto">
        <div className="flex items-center justify-between py-4">
          
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600">
            HotelOpal
          </div>

          {/* Desktop Menu */}
          <div className="hidden space-x-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-medium text-gray-700 hover:text-blue-600"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Book Now Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="text-gray-700 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="pb-4 md:hidden">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block px-4 py-2 mt-4 text-center text-white bg-blue-600 rounded hover:bg-blue-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Now
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
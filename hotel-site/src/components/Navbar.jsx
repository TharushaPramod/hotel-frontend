import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Rooms", href: "/rooms" },
    { name: "Facilities", href: "/facilities" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="z-50 w-full mt-2 bg-white shadow-xl">
      <div className="px-4 mx-auto max-w-[90%] sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
         
          <div
            className="text-2xl font-bold text-blue-600 cursor-pointer"
            onClick={() => navigate("/")}
          >
            HotelOpal
          </div>

          
          <div className="md:hidden">
            <IconButton onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <Close fontSize="medium" /> : <Menu fontSize="medium" />}
            </IconButton>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                onClick={() => navigate(item.href)}
                className={`cursor-pointer text-lg font-medium transition-transform duration-200 ${
                  isActive(item.href)
                    ? "text-blue-600 scale-105"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {item.name}
              </a>
            ))}
         
            <a
              href="/contact"
              className="px-6 py-2 text-white transition-colors duration-200 bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Book Now
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col items-center py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  onClick={() => {
                    navigate(item.href);
                    setIsMenuOpen(false);
                  }}
                  className={`cursor-pointer text-lg font-medium ${
                    isActive(item.href)
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="/contact"
                className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
              >
                Book Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

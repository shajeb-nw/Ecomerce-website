import React, { useState } from "react";
import { FaShoppingCart, FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../Utility/Logo";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
         <Logo></Logo>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="text-gray-700 hover:text-indigo-600 transition"
              >
                {link.name}
              </a>
            ))}

            {/* Search Bar */}
            <input
              type="text"
              placeholder="Search products..."
              className="border rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            {/* Cart Icon */}
            <div className="relative cursor-pointer">
              <FaShoppingCart
                size={24}
                className="text-gray-700 hover:text-indigo-600"
              />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </div>

            {/* User Profile */}
            <div className="relative">
              <FaUserCircle
                size={28}
                className="text-gray-700 cursor-pointer hover:text-indigo-600"
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              />
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg py-2">
                  <a
                    href="/profile"
                    className="block px-4 py-2 hover:bg-indigo-100"
                  >
                    Profile
                  </a>
                  <a
                    href="/orders"
                    className="block px-4 py-2 hover:bg-indigo-100"
                  >
                    Orders
                  </a>
                  <a
                    href="/logout"
                    className="block px-4 py-2 hover:bg-indigo-100"
                  >
                    Logout
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="block text-gray-700 hover:text-indigo-600"
              >
                {link.name}
              </a>
            ))}

            {/* Mobile Search */}
            <input
              type="text"
              placeholder="Search products..."
              className="w-full border rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-2"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

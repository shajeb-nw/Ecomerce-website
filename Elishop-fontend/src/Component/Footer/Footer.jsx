import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Logo from "../../Utility/Logo";

const Footer = () => {
  return (
    <footer className="bg-base-100 text-gray-700 pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Logo & About */}
          <div className="flex flex-col items-start">
            <Logo></Logo>
            <p className="mt-4 text-gray-600">
              Your one-stop shop for all your favorite products. Quality and service guaranteed.
            </p>
            <div className="flex space-x-3 mt-4">
              <a href="#" className="hover:text-indigo-600"><FaFacebookF /></a>
              <a href="#" className="hover:text-indigo-600"><FaTwitter /></a>
              <a href="#" className="hover:text-indigo-600"><FaInstagram /></a>
              <a href="#" className="hover:text-indigo-600"><FaLinkedinIn /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="/" className="hover:text-indigo-600">Home</a></li>
              <li><a href="/shop" className="hover:text-indigo-600">Shop</a></li>
              <li><a href="/about" className="hover:text-indigo-600">About Us</a></li>
              <li><a href="/contact" className="hover:text-indigo-600">Contact</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Customer Service</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="/faq" className="hover:text-indigo-600">FAQ</a></li>
              <li><a href="/shipping" className="hover:text-indigo-600">Shipping</a></li>
              <li><a href="/returns" className="hover:text-indigo-600">Returns</a></li>
              <li><a href="/privacy" className="hover:text-indigo-600">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Subscribe</h3>
            <p className="text-gray-600 mb-4">
              Get the latest updates and offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 pt-4 text-center text-gray-500 text-sm border-t border-gray-300">
          &copy; {new Date().getFullYear()} EliShop. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
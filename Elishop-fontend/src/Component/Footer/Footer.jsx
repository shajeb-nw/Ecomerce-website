import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Logo from "../../Utility/Logo";
import Container from "../../Utility/Container";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-gray-200 dark:border-white/10 
    bg-white dark:bg-[#0b0f1a] text-gray-800 dark:text-gray-300">

      {/* 🌈 Static gradient glow */}
      <div className="absolute w-[400px] h-[400px] bg-indigo-400 dark:bg-purple-500 blur-[140px] opacity-20 top-0 left-0" />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10 py-12">

          {/* Logo */}
          <div>
            <Logo />

            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Your one-stop shop for all your favorite products.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-5 text-lg">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="hover:text-indigo-500 transition transform hover:scale-110"
                  >
                    <Icon />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "Shop", "About Us", "Contact"].map((item, i) => (
                <li
                  key={i}
                  className="cursor-pointer text-gray-600 dark:text-gray-400 hover:text-indigo-500 transition transform hover:translate-x-1"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Service */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Customer Service</h3>
            <ul className="space-y-3">
              {["FAQ", "Shipping", "Returns", "Privacy Policy"].map(
                (item, i) => (
                  <li
                    key={i}
                    className="cursor-pointer text-gray-600 dark:text-gray-400 hover:text-indigo-500 transition transform hover:translate-x-1"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Newsletter */}
          <div
            className="p-5 rounded-2xl border border-gray-200 dark:border-white/10 
            bg-gray-100 dark:bg-white/5 backdrop-blur-md"
          >
            <h3 className="font-semibold text-lg mb-4">Subscribe</h3>
            <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
              Get updates and offers.
            </p>

            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 rounded-md 
                bg-white dark:bg-black/30 
                border border-gray-300 dark:border-white/10 
                focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <button
                className="px-4  py-2 rounded-md 
                background-color
                text-white font-semibold transition transform hover:scale-105"
              >
                <span className="pr-20">Subscribe</span>
              </button>
            </form>
          </div>
        </div>
      </Container>

      {/* Bottom */}
      <div
        className="py-5 text-center text-sm border-t border-gray-200 dark:border-white/10 
        text-gray-600 dark:text-gray-400"
      >
        © {new Date().getFullYear()} EliShop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
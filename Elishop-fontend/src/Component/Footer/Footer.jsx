import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Logo from "../../Utility/Logo";
import Container from "../../Utility/Container";
import { motion } from "framer-motion";

const Footer = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <footer className="relative overflow-hidden border-t border-gray-200 dark:border-white/10 
    bg-white dark:bg-[#0b0f1a] text-gray-800 dark:text-gray-300">

      {/* 🌈 Animated gradient glow */}
      <motion.div
        animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute w-[400px] h-[400px] bg-indigo-400 dark:bg-purple-500 blur-[140px] opacity-20 top-0 left-0"
      />

      <Container>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
          className="grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10 py-12"
        >

          {/* Logo */}
          <motion.div variants={fadeUp}>
            <Logo />

            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Your one-stop shop for all your favorite products.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-5 text-lg">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
                (Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ scale: 1.2, y: -4 }}
                    whileTap={{ scale: 0.9 }}
                    className="hover:text-indigo-500 transition"
                  >
                    <Icon />
                  </motion.a>
                )
              )}
            </div>
          </motion.div>

          {/* Links */}
          <motion.div variants={fadeUp}>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "Shop", "About Us", "Contact"].map((item, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 6 }}
                  className="cursor-pointer text-gray-600 dark:text-gray-400 hover:text-indigo-500 transition"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Service */}
          <motion.div variants={fadeUp}>
            <h3 className="font-semibold text-lg mb-4">Customer Service</h3>
            <ul className="space-y-3">
              {["FAQ", "Shipping", "Returns", "Privacy Policy"].map(
                (item, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ x: 6 }}
                    className="cursor-pointer text-gray-600 dark:text-gray-400 hover:text-indigo-500 transition"
                  >
                    {item}
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.02 }}
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

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 15px rgba(99,102,241,0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-md 
                bg-gradient-to-r from-indigo-500 to-purple-500 
                text-white font-semibold"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </Container>

      {/* Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="py-5 text-center text-sm border-t border-gray-200 dark:border-white/10 
        text-gray-600 dark:text-gray-400"
      >
        © {new Date().getFullYear()} EliShop. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
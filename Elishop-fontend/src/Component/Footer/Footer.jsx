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
    <footer className="bg-base-100  pt-10">
      <Container className="">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="flex flex-col items-start">
            <Logo></Logo>
            <p className="mt-4 ">
              Your one-stop shop for all your favorite products. Quality and
              service guaranteed.
            </p>
            <div className="flex space-x-3 mt-4">
              <a href="#" className="hover:text-indigo-600">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-indigo-600">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-indigo-600">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-indigo-600">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 ">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Shop</a>
              </li>
              <li>
                <a>About Us</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <a>FAQ</a>
              </li>
              <li>
                <a>Shipping</a>
              </li>
              <li>
                <a>Returns</a>
              </li>
              <li>
                <a>Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Subscribe</h3>
            <p className=" mb-4">Get the latest updates and offers.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button className="px-4  py-2 text-white rounded-md background-color ">
                <span>Subscribe</span>
              </button>
            </form>
          </div>
        </div>

      </Container>
        {/* Footer Bottom */}
        <div className="py-4 text-center text-gray-500 text-sm border-t border-gray-200">
          &copy; {new Date().getFullYear()} EliShop. All rights reserved.
        </div>
    </footer>
  );
};

export default Footer;

import React, { useContext, useState } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../Utility/Logo";
import Container from "../../Utility/Container";
import UserMenu from "../../Utility/UserMenu ";
import { NavLink } from "react-router";
import { AuthContext } from "../../Context/registerContext/AuthContext";
import { ScaleLoader } from "react-spinners";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { loading } = useContext(AuthContext);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/70 dark:bg-[#0b0f1a]/70 backdrop-blur-xl border-b border-gray-200 dark:border-white/10">
      <Container>
        <div className="flex items-center justify-between h-16">
          
          {/* LEFT - LOGO */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* CENTER - NAV (Desktop only) */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex gap-8 items-center">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm font-medium transition ${
                      isActive
                        ? "text-indigo-500"
                        : "text-gray-700 dark:text-gray-300"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* RIGHT - ICONS (Desktop) */}
          <div className="hidden md:flex items-center gap-5">
            {/* Cart */}
            <div className="relative">
              <FaShoppingCart size={22} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                3
              </span>
            </div>

            {/* User */}
            {loading ? (
              <ScaleLoader color="#fff" width={2} height={20} />
            ) : (
              <UserMenu />
            )}
          </div>

          {/* MOBILE RIGHT SIDE */}
          <div className="flex items-center gap-4 md:hidden">
            <UserMenu />

            {/* Cart */}
            <div className="relative">
              <FaShoppingCart size={22} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                3
              </span>
            </div>

            {/* Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </Container>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-[#0b0f1a] border-t border-gray-200 dark:border-white/10">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-700 dark:text-gray-300 hover:text-indigo-500"
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/images/logo.webp";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: "Home", path: "/", lineColor: "bg-gradient-to-r from-gold-500 to-white" },
    { title: "Accommodations", path: "/accomodationpage", lineColor: "bg-gradient-to-r from-gold-500 to-white" },
    { title: "Booking", path: "/booking", lineColor: "bg-gradient-to-r from-gold-500 to-white" },
    { title: "Contact", path: "/contact", lineColor: "bg-gradient-to-r from-gold-500 to-white" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-gray-900/90 backdrop-blur-md shadow-md" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Left Side Menu */}
          <div className="hidden md:flex flex-1 justify-start space-x-8">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.title}
                to={link.path}
                className="relative text-white text-base font-light hover:font-medium tracking-wide transition-all duration-300 group"
              >
                {link.title}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${link.lineColor} transition-all duration-300 group-hover:w-full`}></span>
              </Link>
            ))}
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 transform transition-all duration-300 hover:scale-105">
            <Link to="/">
              <img src={Logo} alt="Residencia del Hamor" className="h-16 w-auto" />
            </Link>
          </div>

          {/* Right Side Menu */}
          <div className="hidden md:flex flex-1 justify-end space-x-8">
            {navLinks.slice(2).map((link) => (
              <Link
                key={link.title}
                to={link.path}
                className="relative text-white text-base font-light hover:font-medium tracking-wide transition-all duration-300 group"
              >
                {link.title}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${link.lineColor} transition-all duration-300 group-hover:w-full`}></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2 focus:outline-none transform transition-all duration-300 hover:scale-105"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/90 backdrop-blur-md transition-all duration-300 ease-in-out">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.path}
                className="relative text-white block px-3 py-2 text-base font-light tracking-wide transition-all duration-300 group"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.title}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${link.lineColor} transition-all duration-300 group-hover:w-full`}></span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
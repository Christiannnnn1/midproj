import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      {/* Top section with logo and contact info */}
      <div className="container mx-auto pt-16 pb-8 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Resort Info */}
          <div className="mb-6">
            <div className="flex items-center mb-6">
              <img src="/src/assets/images/logo.webp" alt="Del Hamor" className="h-12 mr-3" />
              <h3 className="text-xl font-bold">Residencia Del Hamor</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Experience luxury and tranquility at our exclusive beachfront resort. 
              Indulge in paradise with our world-class amenities and personalized services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-teal-600 hover:bg-teal-700 h-10 w-10 flex items-center justify-center rounded-full transition-colors duration-300">
                <FaFacebookF />
              </a>
              <a href="#" className="bg-teal-600 hover:bg-teal-700 h-10 w-10 flex items-center justify-center rounded-full transition-colors duration-300">
                <FaInstagram />
              </a>
              <a href="#" className="bg-teal-600 hover:bg-teal-700 h-10 w-10 flex items-center justify-center rounded-full transition-colors duration-300">
                <FaTwitter />
              </a>
              <a href="#" className="bg-teal-600 hover:bg-teal-700 h-10 w-10 flex items-center justify-center rounded-full transition-colors duration-300">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-6">
            <h4 className="text-lg font-bold mb-6 border-b border-teal-600 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-teal-400 transition-colors duration-300">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-teal-400 transition-colors duration-300">Accommodations</a></li>
              <li><a href="#" className="text-gray-300 hover:text-teal-400 transition-colors duration-300">Amenities</a></li>
              <li><a href="#" className="text-gray-300 hover:text-teal-400 transition-colors duration-300">Activities</a></li>
              <li><a href="#" className="text-gray-300 hover:text-teal-400 transition-colors duration-300">Gallery</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mb-6">
            <h4 className="text-lg font-bold mb-6 border-b border-teal-600 pb-2 inline-block">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MdLocationOn className="text-teal-400 text-xl mt-1 mr-3" />
                <span className="text-gray-300">
                  123 Beachfront Avenue,<br />
                  Coastal Paradise,<br />
                  Tropical Islands
                </span>
              </li>
              <li className="flex items-center">
                <MdPhone className="text-teal-400 text-xl mr-3" />
                <span className="text-gray-300">+1 (234) 567-8900</span>
              </li>
              <li className="flex items-center">
                <MdEmail className="text-teal-400 text-xl mr-3" />
                <span className="text-gray-300">info@residenciadelhamor.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="mb-6">
            <h4 className="text-lg font-bold mb-6 border-b border-teal-600 pb-2 inline-block">Subscribe</h4>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for special offers, news and upcoming events
            </p>
            <form className="flex flex-col">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-gray-800 text-white border border-gray-700 px-4 py-2 rounded-lg mb-3 focus:outline-none focus:border-teal-500"
              />
              <button 
                type="submit"
                className="bg-teal-600 hover:bg-teal-700 text-white font-medium px-4 py-2 rounded-lg transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom section with copyright and policies */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto py-6 px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Residencia Del Hamor. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center">
            <a href="#" className="text-gray-400 hover:text-teal-400 text-sm mx-3 mb-2 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-teal-400 text-sm mx-3 mb-2 transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-teal-400 text-sm mx-3 mb-2 transition-colors duration-300">Booking Policy</a>
            <a href="#" className="text-gray-400 hover:text-teal-400 text-sm mx-3 mb-2 transition-colors duration-300">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
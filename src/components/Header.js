import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-10 py-6 px-20 transition-colors duration-300 ${
        isScrolled ? 'bg-gray-200 text-blue-700 shadow-md' : 'bg-blue-700 text-white'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-semibold">FINMAZ</h1>

        {/* Hamburger Icon for Small Screens */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Navigation Links for Larger Screens */}
        <div className="hidden lg:flex lg:items-center lg:space-x-10 flex-grow ml-4">
          <ul className="flex space-x-6 flex-grow">
            <li><a href="#home" className="hover:text-gray-200">Home</a></li>
            <li><a href="#sales-app" className="hover:text-gray-200">Sales App</a></li>
            <li><a href="#core-banking" className="hover:text-gray-200">Core Banking</a></li>
            <li><a href="#mobile-banking" className="hover:text-gray-200">Mobile Banking</a></li>
            <li><a href="#tab-banking" className="hover:text-gray-200">Tab Banking</a></li>
            <li><a href="#tab-banking" className="hover:text-gray-200">Conservative Banking</a></li>
          </ul>
          
          {/* Contact Us Button with Icon */}
          <a
            href="#contact-us"
            className={`ml-auto font-semibold py-2 px-4 rounded-full shadow-md flex items-center space-x-2 transition duration-300 ${
              isScrolled ? 'bg-blue-800 text-white hover:bg-blue-900' : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            <FontAwesomeIcon icon={faUser} className="text-lg" />
            <span>Contact Us</span>
          </a>
        </div>
      </div>

      {/* Full-Screen Hamburger Menu Overlay (only for small screens) */}
      {isMenuOpen && (
        <div className="lg:hidden fixed top-0 left-0 right-0 bg-white shadow-lg flex flex-col items-start p-4 z-20">
          {/* Close Button */}
          <button onClick={toggleMenu} className="text-blue-700 text-3xl self-end mb-4 focus:outline-none">
            &times;
          </button>

          {/* Navigation Items */}
          <ul className="space-y-4 text-blue-700 w-full">
            <li><a href="#home" className="hover:text-gray-600">Home</a></li>
            <li><a href="#sales-app" className="hover:text-gray-600">Sales App</a></li>
            <li><a href="#core-banking" className="hover:text-gray-600">Core Banking</a></li>
            <li><a href="#mobile-banking" className="hover:text-gray-600">Mobile Banking</a></li>
            <li><a href="#tab-banking" className="hover:text-gray-600">Tab Banking</a></li>
            <li><a href="#tab-banking" className="hover:text-gray-600">Conservative Banking</a></li>
            <li>
              <a href="#contact-us" className="block bg-blue-700 text-white font-semibold py-2 px-4 rounded-full text-center">
                <FontAwesomeIcon icon={faUser} className="mr-2" /> Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

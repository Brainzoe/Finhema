import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white py-6 mt-auto">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; 2024 Banking App. All rights reserved.</p>
        <div className="mt-2">
          <a href="#privacy-policy" className="hover:text-gray-200 text-sm mx-2">Privacy Policy</a>
          <a href="#terms-of-service" className="hover:text-gray-200 text-sm mx-2">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaYelp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Hours */}
          <div>
            <h3 className="text-lg font-medium mb-4 uppercase tracking-wider">Hours</h3>
            <div className="space-y-2 text-gray-300">
              <p>Monday - Thursday: 5:00 PM - 10:00 PM</p>
              <p>Friday - Saturday: 5:00 PM - 11:00 PM</p>
              <p>Sunday: 5:00 PM - 9:00 PM</p>
            </div>
          </div>
          
          {/* Location */}
          <div>
            <h3 className="text-lg font-medium mb-4 uppercase tracking-wider">Location</h3>
            <address className="not-italic text-gray-300">
              <p>123 Restaurant Row</p>
              <p>New York, NY 10001</p>
              <p className="mt-2">
                <a href="tel:+12125551234" className="hover:text-white transition-colors">
                  (212) 555-1234
                </a>
              </p>
              <p>
                <a href="mailto:info@cresco.com" className="hover:text-white transition-colors">
                  info@cresco.com
                </a>
              </p>
            </address>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/menus" className="text-gray-300 hover:text-white transition-colors">Menus</a></li>
              <li><a href="/private-events" className="text-gray-300 hover:text-white transition-colors">Private Events</a></li>
              <li><a href="/gift-cards" className="text-gray-300 hover:text-white transition-colors">Gift Cards</a></li>
              <li><a href="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-medium mb-4 uppercase tracking-wider">Newsletter</h3>
            <p className="text-gray-300 mb-4">Subscribe for updates and special offers</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 w-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              />
              <button 
                type="submit" 
                className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>
        
        {/* Social Media & Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <FaInstagram size={20} />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <FaFacebook size={20} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <FaTwitter size={20} />
            </a>
            <a href="https://www.yelp.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <FaYelp size={20} />
            </a>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © {currentYear} Cresco. All rights reserved.
            </p>
            <div className="flex justify-center md:justify-end space-x-4 mt-2">
              <a href="/privacy-policy" className="text-gray-500 hover:text-white text-xs transition-colors">
                Privacy Policy
              </a>
              <span className="text-gray-600">|</span>
              <a href="/terms-of-service" className="text-gray-500 hover:text-white text-xs transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
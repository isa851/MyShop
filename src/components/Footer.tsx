import React, { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, CreditCard, Shield, Truck, RotateCcw, ChevronDown, ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  // State to manage which section is open (null means no section is open)
  const [openSection, setOpenSection] = useState<string | null>(null);

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              TechStore Islam
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Your trusted destination for premium electronics and cutting-edge technology. 
              We bring you the latest innovations from the world's leading brands.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links - Collapsible on mobile with accordion behavior */}
          <div className="space-y-4">
            <button
              onClick={() => setOpenSection(openSection === 'quickLinks' ? null : 'quickLinks')}
              className="flex items-center justify-between w-full text-lg font-semibold focus:outline-none md:hidden"
            >
              <span>Quick Links</span>
              {openSection === 'quickLinks' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
            <ul className={`space-y-2 ${openSection === 'quickLinks' ? 'block' : 'hidden'} md:block`}>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Support</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Returns</a></li>
            </ul>
          </div>

          {/* Categories - Collapsible on mobile with accordion behavior */}
          <div className="space-y-4">
            <button
              onClick={() => setOpenSection(openSection === 'categories' ? null : 'categories')}
              className="flex items-center justify-between w-full text-lg font-semibold focus:outline-none md:hidden"
            >
              <span>Categories</span>
              {openSection === 'categories' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
            <ul className={`space-y-2 ${openSection === 'categories' ? 'block' : 'hidden'} md:block`}>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Smartphones</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Laptops</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Tablets</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Audio</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Gaming</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Accessories</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">базарова 39а</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">+996 501 15 50 95</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">support@techstorepro.com</span>
              </div>
            </div>
            
          
          </div>
        </div>
      </div>

      {/* Features Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <Truck className="w-6 h-6 text-blue-400" />
              <div>
                <div className="font-medium">Free Shipping</div>
                <div className="text-sm text-gray-400">On orders over $99</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-blue-400" />
              <div>
                <div className="font-medium">Warranty</div>
                <div className="text-sm text-gray-400">1-3 years coverage</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <RotateCcw className="w-6 h-6 text-blue-400" />
              <div>
                <div className="font-medium">Easy Returns</div>
                <div className="text-sm text-gray-400">30-day return policy</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CreditCard className="w-6 h-6 text-blue-400" />
              <div>
                <div className="font-medium">Secure Payment</div>
                <div className="text-sm text-gray-400">SSL encrypted</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 TechStore Islam. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-400 text-sm">We accept:</span>
              <div className="flex gap-2">
                <div className="w-8 h-5 bg-blue-600 rounded text-xs flex items-center justify-center font-bold">VISA</div>
                <div className="w-8 h-5 bg-red-600 rounded text-xs flex items-center justify-center font-bold">MC</div>
                <div className="w-8 h-5 bg-blue-500 rounded text-xs flex items-center justify-center font-bold">AMEX</div>
                <div className="w-8 h-5 bg-yellow-500 rounded text-xs flex items-center justify-center font-bold text-black">PP</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
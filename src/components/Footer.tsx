
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube 
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-grocery-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Shree Balaji Traders</h3>
            <p className="mb-4 text-gray-300">
              Your trusted local grocery store providing fresh produce, quality products, and exceptional service to our community since 2005.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-grocery-green transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-grocery-green transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-grocery-green transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-grocery-green transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-grocery-green transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-grocery-green transition-colors">Shop Products</Link>
              </li>
              <li>
                <Link to="/offers" className="text-gray-300 hover:text-grocery-green transition-colors">Special Offers</Link>
              </li>
              <li>
                <Link to="/track-order" className="text-gray-300 hover:text-grocery-green transition-colors">Track Order</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-grocery-green transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-grocery-green transition-colors">FAQs</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-3 mt-1 text-grocery-green" size={18} />
                <span className="text-gray-300">123 Main Street, City, State, Pincode</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-grocery-green" size={18} />
                <span className="text-gray-300">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-grocery-green" size={18} />
                <span className="text-gray-300">info@balaji-traders.com</span>
              </li>
              <li className="flex items-start">
                <Clock className="mr-3 mt-1 text-grocery-green" size={18} />
                <div className="text-gray-300">
                  <p>Mon - Sat: 8:00 AM - 9:00 PM</p>
                  <p>Sunday: 9:00 AM - 6:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4 text-gray-300">
              Subscribe to our newsletter for weekly updates on offers and new arrivals.
            </p>
            <div className="flex flex-col space-y-2">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button className="bg-grocery-green hover:bg-grocery-green/90 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm mb-4 md:mb-0">
            © 2023 Shree Balaji Traders. All Rights Reserved.
          </p>
          <div className="flex space-x-4">
            <Link to="/privacy" className="text-gray-300 hover:text-grocery-green text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-300 hover:text-grocery-green text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/shipping" className="text-gray-300 hover:text-grocery-green text-sm transition-colors">
              Shipping Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

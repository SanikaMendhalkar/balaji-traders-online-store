
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingCart, 
  User, 
  Search, 
  Menu, 
  X,
  Home,
  Package,
  Clock,
  MapPin,
  Phone,
  Heart
} from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(3);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      {/* Top bar with contact info */}
      <div className="hidden md:flex justify-between items-center px-4 py-2 bg-grocery-dark text-white text-sm">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <Phone className="h-3 w-3 mr-1" />
            <span>+91 9876543210</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-3 w-3 mr-1" />
            <span>123 Main Street, City, State</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/track-order" className="hover:text-grocery-orange">Track Order</Link>
          <Link to="/help" className="hover:text-grocery-orange">Help</Link>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-grocery-green">Shree Balaji <span className="text-grocery-orange">Traders</span></h1>
          </Link>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 mx-8">
            <div className="relative w-full max-w-xl">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input 
                type="text" 
                placeholder="Search for products..." 
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:border-grocery-green focus:ring-1 focus:ring-grocery-green"
              />
              <Button 
                className="absolute right-0 top-0 h-full rounded-r-full bg-grocery-green hover:bg-grocery-green/90"
              >
                Search
              </Button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/wishlist" className="flex items-center text-grocery-dark hover:text-grocery-green transition-colors">
              <Heart size={24} />
            </Link>
            <Link to="/account" className="flex items-center text-grocery-dark hover:text-grocery-green transition-colors">
              <User size={24} />
            </Link>
            <Link to="/cart" className="flex items-center text-grocery-dark hover:text-grocery-green transition-colors relative">
              <ShoppingCart size={24} />
              {cartItemCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-grocery-orange text-white">{cartItemCount}</Badge>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-grocery-dark p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Navigation Links - Desktop */}
        <nav className="hidden md:flex items-center justify-center mt-4 space-x-8">
          <Link to="/" className="text-grocery-dark hover:text-grocery-green font-medium transition-colors">Home</Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="text-grocery-dark hover:text-grocery-green font-medium transition-colors">Categories</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link to="/categories" className="w-full">All Categories</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/categories" className="w-full">Fruits & Vegetables</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/categories" className="w-full">Dairy & Bakery</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/categories" className="w-full">Staples & Grains</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/categories" className="w-full">Snacks & Beverages</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/categories" className="w-full">Household Items</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link to="/offers" className="text-grocery-dark hover:text-grocery-green font-medium transition-colors">Offers</Link>
          <Link to="/about" className="text-grocery-dark hover:text-grocery-green font-medium transition-colors">About Us</Link>
          <Link to="/contact" className="text-grocery-dark hover:text-grocery-green font-medium transition-colors">Contact</Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 animate-fade-in">
          <div className="px-4 py-2">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input 
                type="text" 
                placeholder="Search for products..." 
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300"
              />
            </div>
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="flex items-center p-2 hover:bg-gray-100 rounded" onClick={() => setIsMenuOpen(false)}>
                <Home size={20} className="mr-3 text-grocery-green" />
                <span>Home</span>
              </Link>
              <Link to="/categories" className="flex items-center p-2 hover:bg-gray-100 rounded" onClick={() => setIsMenuOpen(false)}>
                <Package size={20} className="mr-3 text-grocery-green" />
                <span>Categories</span>
              </Link>
              <Link to="/offers" className="flex items-center p-2 hover:bg-gray-100 rounded" onClick={() => setIsMenuOpen(false)}>
                <Package size={20} className="mr-3 text-grocery-green" />
                <span>Offers</span>
              </Link>
              <Link to="/track-order" className="flex items-center p-2 hover:bg-gray-100 rounded" onClick={() => setIsMenuOpen(false)}>
                <Clock size={20} className="mr-3 text-grocery-green" />
                <span>Track Order</span>
              </Link>
              <Link to="/account" className="flex items-center p-2 hover:bg-gray-100 rounded" onClick={() => setIsMenuOpen(false)}>
                <User size={20} className="mr-3 text-grocery-green" />
                <span>My Account</span>
              </Link>
              <Link to="/wishlist" className="flex items-center p-2 hover:bg-gray-100 rounded" onClick={() => setIsMenuOpen(false)}>
                <Heart size={20} className="mr-3 text-grocery-green" />
                <span>Wishlist</span>
              </Link>
              <Link to="/cart" className="flex items-center p-2 hover:bg-gray-100 rounded" onClick={() => setIsMenuOpen(false)}>
                <ShoppingCart size={20} className="mr-3 text-grocery-green" />
                <span>Cart</span>
                {cartItemCount > 0 && (
                  <Badge className="ml-auto bg-grocery-orange text-white">{cartItemCount}</Badge>
                )}
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

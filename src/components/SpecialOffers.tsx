
import React from 'react';
import { Button } from "@/components/ui/button";
import { Clock } from 'lucide-react';

const SpecialOffers = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-grocery-dark text-center mb-8">Special Offers</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Offer Card 1 */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-grocery-green/10 to-grocery-green/30 shadow-sm">
            <div className="flex flex-col md:flex-row items-center">
              {/* Image Container */}
              <div className="p-6 md:w-1/3 flex justify-center">
                {/* This would be an image */}
                <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center">
                  <span className="text-gray-400 text-xs">Fruits Image</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 md:w-2/3">
                <div className="mb-2 inline-flex items-center bg-grocery-green/20 rounded-full px-3 py-1 text-sm font-medium text-grocery-green">
                  <Clock className="mr-1" size={14} />
                  <span>Limited Time Offer</span>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-grocery-dark mb-2">
                  Fresh Fruits Bundle
                </h3>
                
                <p className="text-gray-600 mb-4">
                  Get 5 seasonal fruits at the price of 3. Fresh from local farms.
                </p>
                
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-2xl font-bold text-grocery-orange">₹399</span>
                  <span className="text-gray-500 line-through">₹599</span>
                  <span className="bg-grocery-orange/10 text-grocery-orange text-sm font-medium px-2 py-1 rounded">
                    33% OFF
                  </span>
                </div>
                
                <Button className="bg-grocery-green hover:bg-grocery-green/90">
                  Shop Now
                </Button>
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-grocery-green/10 rounded-full" />
          </div>
          
          {/* Offer Card 2 */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-grocery-orange/10 to-grocery-orange/30 shadow-sm">
            <div className="flex flex-col md:flex-row items-center">
              {/* Image Container */}
              <div className="p-6 md:w-1/3 flex justify-center">
                {/* This would be an image */}
                <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center">
                  <span className="text-gray-400 text-xs">Groceries Image</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 md:w-2/3">
                <div className="mb-2 inline-flex items-center bg-grocery-orange/20 rounded-full px-3 py-1 text-sm font-medium text-grocery-orange">
                  <Clock className="mr-1" size={14} />
                  <span>Weekend Special</span>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-grocery-dark mb-2">
                  Monthly Essentials Pack
                </h3>
                
                <p className="text-gray-600 mb-4">
                  All your daily essentials in one convenient pack. Save time and money!
                </p>
                
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-2xl font-bold text-grocery-orange">₹1,499</span>
                  <span className="text-gray-500 line-through">₹1,899</span>
                  <span className="bg-grocery-orange/10 text-grocery-orange text-sm font-medium px-2 py-1 rounded">
                    21% OFF
                  </span>
                </div>
                
                <Button className="bg-grocery-orange hover:bg-grocery-orange/90">
                  Shop Now
                </Button>
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-grocery-orange/10 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;

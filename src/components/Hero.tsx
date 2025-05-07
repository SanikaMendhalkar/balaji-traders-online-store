
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-grocery-light py-16 md:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSIjMjdhZTYwIiBmaWxsLW9wYWNpdHk9IjAuNCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00TTI0IDI0YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNC00LTQtMS44LTQtNCIvPjwvZz48L3N2Zz4=')] bg-repeat" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-grocery-dark leading-tight mb-4">
              Fresh Groceries <br />
              <span className="text-grocery-green">Delivered to</span> Your Doorstep
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Shop from Shree Balaji Traders for high-quality local produce, pantry essentials, and household items at competitive prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-grocery-green hover:bg-grocery-green/90 text-white px-8 py-6 text-lg">
                Shop Now <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button variant="outline" className="border-grocery-orange text-grocery-orange hover:bg-grocery-orange hover:text-white px-8 py-6 text-lg">
                View Offers
              </Button>
            </div>
          </div>
          
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              {/* This would be an image of fresh groceries */}
              <div className="rounded-2xl bg-gradient-to-br from-grocery-green/20 to-grocery-orange/20 h-[400px] flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <p className="font-medium">Fresh Grocery Image</p>
                  <p className="text-sm">(Replace with your grocery image)</p>
                </div>
              </div>
              
              {/* Feature Badge - Special Offer */}
              <div className="absolute -top-4 -right-4 bg-grocery-orange text-white rounded-full py-2 px-4 shadow-lg transform rotate-12">
                <span className="font-bold">Up to 25% OFF</span>
              </div>
              
              {/* Feature Badge - Free Delivery */}
              <div className="absolute -bottom-4 -left-4 bg-grocery-green text-white rounded-full py-2 px-4 shadow-lg">
                <span className="font-bold">Free Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

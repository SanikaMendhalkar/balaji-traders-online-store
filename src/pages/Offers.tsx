
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SpecialOffers from '@/components/SpecialOffers';

const Offers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-grocery-dark mb-6">Special Offers</h1>
          <p className="text-gray-600 mb-8">Take advantage of these limited-time deals on our products</p>
          
          {/* Hero Banner for Offers Page */}
          <div className="bg-grocery-light rounded-xl p-6 mb-8 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
              <h2 className="text-2xl font-bold text-grocery-dark mb-3">Limited Time Offers</h2>
              <p className="text-gray-600">Explore our exclusive deals and promotions on fresh produce, pantry essentials, and more.</p>
            </div>
            <div className="md:w-1/2">
              <img src="/offers-banner.jpg" alt="Special Offers" className="rounded-lg w-full h-auto shadow-md" />
            </div>
          </div>
        </div>
        
        <SpecialOffers />
      </main>
      
      <Footer />
    </div>
  );
};

export default Offers;


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
        </div>
        
        <SpecialOffers />
      </main>
      
      <Footer />
    </div>
  );
};

export default Offers;

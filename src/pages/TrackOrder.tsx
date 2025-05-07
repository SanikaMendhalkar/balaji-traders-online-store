
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OrderTracking from '@/components/OrderTracking';

const TrackOrder = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-grocery-dark mb-6">Track Your Order</h1>
          <p className="text-gray-600 mb-8">Enter your order number to track the status of your delivery</p>
        </div>
        
        <OrderTracking />
      </main>
      
      <Footer />
    </div>
  );
};

export default TrackOrder;


import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import FeaturedCategories from '@/components/FeaturedCategories';
import FeaturedProducts from '@/components/FeaturedProducts';
import SpecialOffers from '@/components/SpecialOffers';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import OrderTracking from '@/components/OrderTracking';
import CustomerDetails from '@/components/CustomerDetails';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <Hero />
        <Features />
        <FeaturedCategories />
        <FeaturedProducts />
        <SpecialOffers />
        <OrderTracking />
        <CustomerDetails />
        <Testimonials />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

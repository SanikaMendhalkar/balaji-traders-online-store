
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';
import { Package, Truck, ShieldCheck, Clock, Users } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-grocery-light py-12 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-grocery-dark mb-4">About Shree Balaji Traders</h1>
              <p className="text-xl text-gray-600">Your trusted neighborhood grocery store since 1995</p>
            </div>
          </div>
        </section>
        
        {/* Story Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-grocery-dark mb-4">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Shree Balaji Traders was established in 1995 by Mr. Ramesh Patel with a small shop in the heart of the city.
                  What started as a modest grocery store has now grown into a trusted neighborhood supermarket loved by the entire community.
                </p>
                <p className="text-gray-600 mb-4">
                  For over 25 years, we've been committed to providing fresh, high-quality products to our customers.
                  We work directly with local farmers and suppliers to ensure that you get the best produce and groceries.
                </p>
                <p className="text-gray-600">
                  Our family-run business has now expanded to include online ordering and home delivery,
                  making shopping more convenient for our valued customers.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/placeholder.svg" 
                  alt="Shree Balaji Traders Store" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="py-12 md:py-16 bg-grocery-light">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-grocery-dark text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-grocery-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="text-grocery-green" size={32} />
                </div>
                <h3 className="text-xl font-bold text-grocery-dark mb-3">Quality Products</h3>
                <p className="text-gray-600">
                  We carefully select all our products to ensure the highest quality and freshness for our customers.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-grocery-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="text-grocery-green" size={32} />
                </div>
                <h3 className="text-xl font-bold text-grocery-dark mb-3">Trust & Reliability</h3>
                <p className="text-gray-600">
                  We build long-lasting relationships with our customers through trust, transparency, and reliable service.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-grocery-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-grocery-green" size={32} />
                </div>
                <h3 className="text-xl font-bold text-grocery-dark mb-3">Community Focus</h3>
                <p className="text-gray-600">
                  We are proud to be part of this community and support local producers and businesses.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-grocery-dark text-center mb-12">Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <img 
                  src="/placeholder.svg" 
                  alt="Ramesh Patel" 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-bold text-grocery-dark">Ramesh Patel</h3>
                <p className="text-grocery-green">Founder & CEO</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <img 
                  src="/placeholder.svg" 
                  alt="Sunita Patel" 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-bold text-grocery-dark">Sunita Patel</h3>
                <p className="text-grocery-green">Operations Manager</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <img 
                  src="/placeholder.svg" 
                  alt="Rahul Patel" 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-bold text-grocery-dark">Rahul Patel</h3>
                <p className="text-grocery-green">Procurement Manager</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <img 
                  src="/placeholder.svg" 
                  alt="Anita Sharma" 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-bold text-grocery-dark">Anita Sharma</h3>
                <p className="text-grocery-green">Customer Service Manager</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <Testimonials />
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUs;

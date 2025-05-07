
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Categories = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-grocery-dark mb-6">Product Categories</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="/placeholder.svg" 
              alt="Fruits & Vegetables" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-grocery-dark">Fruits & Vegetables</h3>
              <p className="text-gray-600 mt-2">Fresh produce from local farms</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="/placeholder.svg" 
              alt="Dairy & Bakery" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-grocery-dark">Dairy & Bakery</h3>
              <p className="text-gray-600 mt-2">Fresh dairy products and baked goods</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="/placeholder.svg" 
              alt="Staples & Grains" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-grocery-dark">Staples & Grains</h3>
              <p className="text-gray-600 mt-2">Essential pantry items and grains</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="/placeholder.svg" 
              alt="Snacks & Beverages" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-grocery-dark">Snacks & Beverages</h3>
              <p className="text-gray-600 mt-2">Refreshing drinks and tasty snacks</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="/placeholder.svg" 
              alt="Household Items" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-grocery-dark">Household Items</h3>
              <p className="text-gray-600 mt-2">Cleaning supplies and home essentials</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Categories;

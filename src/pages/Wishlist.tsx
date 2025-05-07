
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Heart, ShoppingCart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Wishlist = () => {
  // Sample wishlist data
  const wishlistItems = [
    {
      id: 1,
      name: 'Organic Bananas',
      price: 80,
      image: '/placeholder.svg',
      category: 'Fruits & Vegetables'
    },
    {
      id: 2,
      name: 'Premium Basmati Rice (5kg)',
      price: 450,
      image: '/placeholder.svg',
      category: 'Staples & Grains'
    },
    {
      id: 3,
      name: 'Natural Honey (500g)',
      price: 220,
      image: '/placeholder.svg',
      category: 'Breakfast & Dairy'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-grocery-dark mb-6">My Wishlist</h1>
        
        {wishlistItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlistItems.map(item => (
              <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-48 object-cover"
                  />
                  <button className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <Heart size={18} className="text-red-500 fill-red-500" />
                  </button>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-500">{item.category}</p>
                  <h3 className="text-lg font-medium text-grocery-dark mt-1">{item.name}</h3>
                  <p className="text-grocery-green font-bold mt-2">₹{item.price}</p>
                  <Button className="w-full mt-4 bg-grocery-green hover:bg-grocery-green/90 flex items-center justify-center gap-2">
                    <ShoppingCart size={18} />
                    Add to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Heart size={64} className="mx-auto text-gray-300 mb-4" />
            <h2 className="text-2xl font-bold text-grocery-dark mb-2">Your wishlist is empty</h2>
            <p className="text-gray-600 mb-6">You haven't added any items to your wishlist yet.</p>
            <Button asChild className="bg-grocery-green hover:bg-grocery-green/90">
              <Link to="/">Continue Shopping</Link>
            </Button>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Wishlist;

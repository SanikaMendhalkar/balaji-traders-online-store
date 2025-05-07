
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Trash2, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = () => {
  // Sample cart data - would be state in a real app
  const cartItems = [
    { id: 1, name: 'Fresh Apples (1kg)', price: 120, quantity: 2, image: '/placeholder.svg' },
    { id: 2, name: 'Organic Milk (500ml)', price: 35, quantity: 1, image: '/placeholder.svg' },
    { id: 3, name: 'Whole Wheat Bread', price: 40, quantity: 1, image: '/placeholder.svg' },
  ];

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const deliveryCharge = 50;
  const total = subtotal + deliveryCharge;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-grocery-dark mb-6">Your Shopping Cart</h1>
        
        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {cartItems.map(item => (
                <div key={item.id} className="flex items-center border-b py-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded mr-4" />
                  <div className="flex-grow">
                    <h3 className="font-medium text-grocery-dark">{item.name}</h3>
                    <p className="text-grocery-green font-medium">₹{item.price}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">-</button>
                    <span>{item.quantity}</span>
                    <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">+</button>
                  </div>
                  <p className="font-medium text-grocery-dark mx-4">₹{item.price * item.quantity}</p>
                  <button className="text-red-500">
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md h-fit">
              <h2 className="text-xl font-bold text-grocery-dark mb-4">Order Summary</h2>
              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Charge</span>
                  <span>₹{deliveryCharge}</span>
                </div>
                <div className="border-t pt-3 mt-3 flex justify-between font-bold">
                  <span>Total</span>
                  <span className="text-grocery-green">₹{total}</span>
                </div>
              </div>
              <Button className="w-full bg-grocery-green hover:bg-grocery-green/90">
                Proceed to Checkout
              </Button>
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <ShoppingBag size={64} className="mx-auto text-gray-300 mb-4" />
            <h2 className="text-2xl font-bold text-grocery-dark mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Looks like you haven't added any products to your cart yet.</p>
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

export default Cart;

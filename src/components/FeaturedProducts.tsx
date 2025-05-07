
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from './ProductCard';

// Sample product data
const products = [
  {
    id: 1,
    name: "Fresh Organic Apples (1 kg)",
    price: 120,
    originalPrice: 150,
    image: "apple",
    discountPercentage: 20,
    rating: 4.5,
    isNew: false,
    category: "Fruits & Vegetables",
    inStock: true
  },
  {
    id: 2,
    name: "Whole Wheat Bread",
    price: 45,
    image: "bread",
    rating: 4.2,
    isNew: true,
    category: "Bakery",
    inStock: true
  },
  {
    id: 3,
    name: "Farm Fresh Eggs (12 pcs)",
    price: 80,
    originalPrice: 95,
    image: "eggs",
    discountPercentage: 15,
    rating: 4.8,
    isNew: false,
    category: "Dairy",
    inStock: true
  },
  {
    id: 4,
    name: "Organic Turmeric Powder (100g)",
    price: 60,
    image: "turmeric",
    rating: 4.3,
    isNew: false,
    category: "Spices",
    inStock: true
  },
  {
    id: 5,
    name: "Cold Pressed Coconut Oil (500ml)",
    price: 210,
    originalPrice: 250,
    image: "coconut-oil",
    discountPercentage: 16,
    rating: 4.6,
    isNew: false,
    category: "Cooking Oils",
    inStock: false
  },
  {
    id: 6,
    name: "Brown Basmati Rice (5kg)",
    price: 450,
    image: "rice",
    rating: 4.7,
    isNew: true,
    category: "Staples",
    inStock: true
  },
  {
    id: 7,
    name: "Mixed Dry Fruits Pack (500g)",
    price: 350,
    originalPrice: 400,
    image: "dry-fruits",
    discountPercentage: 12,
    rating: 4.9,
    isNew: false,
    category: "Snacks",
    inStock: true
  },
  {
    id: 8,
    name: "Fresh Paneer (250g)",
    price: 80,
    image: "paneer",
    rating: 4.4,
    isNew: false,
    category: "Dairy",
    inStock: true
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-grocery-dark">Featured Products</h2>
          <Link to="/products" className="flex items-center text-grocery-green hover:text-grocery-green/80 font-medium transition-colors">
            View All 
            <ArrowRight className="ml-2" size={16} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

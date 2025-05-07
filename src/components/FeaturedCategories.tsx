
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'Fruits & Vegetables',
    image: 'fruits-vegetables',
    color: 'from-green-500/20 to-green-600/20',
    count: 78
  },
  {
    id: 2,
    name: 'Dairy & Bakery',
    image: 'dairy-bakery',
    color: 'from-yellow-500/20 to-yellow-600/20',
    count: 45
  },
  {
    id: 3,
    name: 'Staples & Grains',
    image: 'staples',
    color: 'from-amber-500/20 to-amber-600/20',
    count: 62
  },
  {
    id: 4,
    name: 'Snacks & Beverages',
    image: 'snacks',
    color: 'from-blue-500/20 to-blue-600/20',
    count: 53
  },
  {
    id: 5,
    name: 'Household Items',
    image: 'household',
    color: 'from-purple-500/20 to-purple-600/20',
    count: 37
  }
];

const FeaturedCategories = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-grocery-dark">Shop by Category</h2>
          <Link to="/categories" className="flex items-center text-grocery-green hover:text-grocery-green/80 font-medium transition-colors">
            View All 
            <ArrowRight className="ml-2" size={16} />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              to={`/category/${category.image}`} 
              className="category-badge block group"
            >
              <div className={`rounded-xl p-6 bg-gradient-to-br ${category.color} h-full flex flex-col items-center justify-center text-center hover:shadow-md transition-all`}>
                {/* This would be replaced by actual category images */}
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center mb-4">
                  <span className="text-gray-400 text-xs">Image</span>
                </div>
                
                <h3 className="font-medium text-grocery-dark mb-1">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.count} items</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;

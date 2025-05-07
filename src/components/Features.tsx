
import React from 'react';
import { Truck, Clock, Tag, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Free Delivery',
    description: 'On orders above ₹499'
  },
  {
    icon: Clock,
    title: 'Same Day Delivery',
    description: 'Order before 2 PM'
  },
  {
    icon: Tag,
    title: 'Best Prices',
    description: 'Quality products at competitive prices'
  },
  {
    icon: ShieldCheck,
    title: 'Secure Payments',
    description: 'Multiple payment options'
  }
];

const Features = () => {
  return (
    <section className="py-12 bg-white border-t border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-grocery-green/10 flex items-center justify-center mb-3">
                <feature.icon className="text-grocery-green" size={24} />
              </div>
              <h3 className="font-medium text-grocery-dark mb-1">{feature.title}</h3>
              <p className="text-sm text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

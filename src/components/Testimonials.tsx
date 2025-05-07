
import React from 'react';
import { Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    location: 'Local Customer',
    image: '/testimonial-user1.jpg',
    rating: 5,
    text: "I've been shopping at Shree Balaji Traders for years. Their fruits and vegetables are always fresh, and the staff is very helpful."
  },
  {
    id: 2,
    name: 'Priya Sharma',
    location: 'Regular Customer',
    image: '/testimonial-user2.jpg',
    rating: 4,
    text: 'Great selection of products at reasonable prices. The online ordering system makes shopping so convenient, and delivery is always prompt.'
  },
  {
    id: 3,
    name: 'Amit Patel',
    location: 'New Customer',
    image: '/testimonial-user3.jpg',
    rating: 5,
    text: "Recently started shopping here and I'm impressed by the quality of organic products. Will definitely continue ordering from Balaji Traders."
  }
];

const Testimonials = () => {
  return (
    <section className="py-12 md:py-16 bg-grocery-light">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-grocery-dark text-center mb-2">What Our Customers Say</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">Hear from our satisfied customers who shop with us regularly</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-xl p-6 shadow-sm">
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                  />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-gray-600 mb-6">"{testimonial.text}"</p>
              
              {/* Customer Info */}
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback className="bg-gray-200 text-gray-500">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-medium text-grocery-dark">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

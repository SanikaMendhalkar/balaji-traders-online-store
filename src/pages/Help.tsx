
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from 'lucide-react';

const Help = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-grocery-dark mb-6">Help & Support</h1>
        
        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-xl mx-auto">
            <Input 
              type="text" 
              placeholder="Search for help topics..." 
              className="pl-4 pr-12 py-2"
            />
            <Button 
              className="absolute right-0 top-0 h-full rounded-r-md bg-grocery-green hover:bg-grocery-green/90"
            >
              Search
            </Button>
          </div>
        </div>
        
        {/* FAQs */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-grocery-dark mb-4">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How do I place an order?</AccordionTrigger>
              <AccordionContent>
                You can place an order by browsing our products, adding items to your cart, and proceeding to checkout. You'll need to provide your delivery address and payment details to complete the order.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>What are your delivery hours?</AccordionTrigger>
              <AccordionContent>
                We deliver from 9 AM to 7 PM every day. You can select your preferred delivery slot during checkout.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How can I track my order?</AccordionTrigger>
              <AccordionContent>
                You can track your order by visiting the "Track Order" page and entering your order number. You'll be able to see the status of your delivery in real-time.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>What is your return policy?</AccordionTrigger>
              <AccordionContent>
                If you're not satisfied with any product, you can return it within 24 hours of delivery. Please note that perishable items like fresh fruits and vegetables can only be returned if they are damaged or of poor quality.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>How do I cancel my order?</AccordionTrigger>
              <AccordionContent>
                You can cancel your order through the "My Orders" section in your account if the order hasn't been processed yet. For immediate assistance with cancellations, please contact our customer service team.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        
        {/* Contact */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-grocery-dark mb-4">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-grocery-green" />
                <div>
                  <p className="font-medium">Customer Service</p>
                  <p className="text-gray-600">+91 9876543210</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-grocery-green" />
                <div>
                  <p className="font-medium">Email Support</p>
                  <p className="text-gray-600">support@balajitraders.com</p>
                </div>
              </div>
              <p className="text-gray-600">
                Our customer service team is available from 9 AM to 8 PM, 7 days a week.
              </p>
            </div>
            
            <div className="space-y-4">
              <p className="font-medium">Send us a message</p>
              <div className="space-y-3">
                <Input placeholder="Your Name" />
                <Input placeholder="Your Email" type="email" />
                <Input placeholder="Subject" />
                <textarea 
                  placeholder="Your Message" 
                  className="w-full h-24 rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
                <Button className="bg-grocery-green hover:bg-grocery-green/90">Send Message</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Help;

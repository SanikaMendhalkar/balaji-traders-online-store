
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-grocery-dark mb-2">Contact Us</h1>
          <p className="text-gray-600 mb-8">We'd love to hear from you. Get in touch with us.</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold text-grocery-dark mb-4">Get In Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-grocery-green mt-1" />
                    <div>
                      <p className="font-medium">Our Store Location</p>
                      <p className="text-gray-600">
                        123 Main Street, City Center
                        <br />
                        Mumbai, Maharashtra 400001
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Phone className="text-grocery-green mt-1" />
                    <div>
                      <p className="font-medium">Phone Number</p>
                      <p className="text-gray-600">+91 9876543210</p>
                      <p className="text-gray-600">+91 9876543211</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Mail className="text-grocery-green mt-1" />
                    <div>
                      <p className="font-medium">Email Address</p>
                      <p className="text-gray-600">info@balajitraders.com</p>
                      <p className="text-gray-600">sales@balajitraders.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Clock className="text-grocery-green mt-1" />
                    <div>
                      <p className="font-medium">Operating Hours</p>
                      <p className="text-gray-600">Monday - Saturday: 9am to 9pm</p>
                      <p className="text-gray-600">Sunday: 10am to 6pm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold text-grocery-dark mb-4">Send us a Message</h2>
                
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Your Name</label>
                      <Input id="name" placeholder="Enter your name" />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Your Email</label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                    <Input id="subject" placeholder="Enter subject" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <textarea 
                      id="message"
                      placeholder="Enter your message" 
                      className="w-full h-32 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    />
                  </div>
                  
                  <Button className="bg-grocery-green hover:bg-grocery-green/90">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
          
          {/* Map */}
          <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-grocery-dark mb-4">Our Location</h2>
            <div className="w-full h-80 bg-gray-200 rounded">
              {/* This would be a Google Map in a real implementation */}
              <div className="flex items-center justify-center w-full h-full text-gray-500">
                <p>Map View (Google Maps would be integrated here)</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactUs;

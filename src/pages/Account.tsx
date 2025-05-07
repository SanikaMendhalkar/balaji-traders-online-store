
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Package, MapPin, CreditCard, Settings } from 'lucide-react';

const Account = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-grocery-dark mb-6">My Account</h1>
        
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <Settings size={16} />
              <span className="hidden md:inline">Profile</span>
            </TabsTrigger>
            <TabsTrigger value="orders" className="flex items-center gap-2">
              <Package size={16} />
              <span className="hidden md:inline">Orders</span>
            </TabsTrigger>
            <TabsTrigger value="addresses" className="flex items-center gap-2">
              <MapPin size={16} />
              <span className="hidden md:inline">Addresses</span>
            </TabsTrigger>
            <TabsTrigger value="payment" className="flex items-center gap-2">
              <CreditCard size={16} />
              <span className="hidden md:inline">Payment Methods</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile" className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-grocery-dark mb-4">Profile Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" defaultValue="Rajesh Kumar" />
              </div>
              <div className="space-y-3">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" defaultValue="rajesh@example.com" />
              </div>
              <div className="space-y-3">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" defaultValue="+91 9876543210" />
              </div>
              <div className="space-y-3">
                <Label htmlFor="password">Change Password</Label>
                <Input id="password" type="password" defaultValue="********" />
              </div>
            </div>
            <Button className="mt-6 bg-grocery-green hover:bg-grocery-green/90">Save Changes</Button>
          </TabsContent>
          
          <TabsContent value="orders" className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-grocery-dark mb-4">Order History</h2>
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Order #12345</p>
                    <p className="text-sm text-gray-500">May 5, 2023</p>
                  </div>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Delivered</span>
                </div>
                <div className="mt-3 pt-3 border-t">
                  <p>3 Items • ₹450</p>
                </div>
              </div>
              
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Order #12344</p>
                    <p className="text-sm text-gray-500">April 28, 2023</p>
                  </div>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Delivered</span>
                </div>
                <div className="mt-3 pt-3 border-t">
                  <p>5 Items • ₹750</p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="addresses" className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-grocery-dark mb-4">Delivery Addresses</h2>
            <div className="space-y-6">
              <div className="border rounded-lg p-4 relative">
                <div className="absolute top-2 right-2 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Default</div>
                <h3 className="font-medium">Home</h3>
                <p className="text-gray-600">123 Main Street, Apartment 4B</p>
                <p className="text-gray-600">Mumbai, Maharashtra 400001</p>
                <p className="text-gray-600">Phone: +91 9876543210</p>
                <div className="mt-3 pt-3 border-t flex gap-4">
                  <Button variant="outline" size="sm">Edit</Button>
                  <Button variant="outline" size="sm" className="text-red-500">Delete</Button>
                </div>
              </div>
              
              <div className="border rounded-lg p-4 relative">
                <h3 className="font-medium">Office</h3>
                <p className="text-gray-600">456 Business Park, Building C</p>
                <p className="text-gray-600">Mumbai, Maharashtra 400002</p>
                <p className="text-gray-600">Phone: +91 9876543210</p>
                <div className="mt-3 pt-3 border-t flex gap-4">
                  <Button variant="outline" size="sm">Edit</Button>
                  <Button variant="outline" size="sm" className="text-red-500">Delete</Button>
                  <Button variant="outline" size="sm">Set as Default</Button>
                </div>
              </div>
              
              <Button className="w-full bg-grocery-green hover:bg-grocery-green/90">Add New Address</Button>
            </div>
          </TabsContent>
          
          <TabsContent value="payment" className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-grocery-dark mb-4">Payment Methods</h2>
            <div className="space-y-6">
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <CreditCard size={24} className="text-grocery-green" />
                    <div>
                      <p className="font-medium">Credit Card</p>
                      <p className="text-sm text-gray-500">XXXX XXXX XXXX 1234</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Remove</Button>
                </div>
              </div>
              
              <Button className="w-full bg-grocery-green hover:bg-grocery-green/90">Add New Payment Method</Button>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default Account;

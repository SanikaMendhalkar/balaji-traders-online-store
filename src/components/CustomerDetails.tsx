
import React, { useState } from 'react';
import { User, Package, MapPin, CreditCard, Settings, LogOut } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

// Mock profile data
const profile = {
  name: 'Rakesh Sharma',
  email: 'rakesh.sharma@example.com',
  phone: '+91 98765 43210',
  address: '123 Main Street, Green Park, New Delhi - 110016',
};

// Mock order history
const orders = [
  {
    id: 'ORD123456',
    date: 'May 5, 2025',
    status: 'Delivered',
    total: 1245.50,
    items: 8
  },
  {
    id: 'ORD123455',
    date: 'Apr 28, 2025',
    status: 'Delivered',
    total: 750.75,
    items: 5
  },
  {
    id: 'ORD123454',
    date: 'Apr 15, 2025',
    status: 'Delivered',
    total: 1890.25,
    items: 12
  }
];

// Mock addresses
const addresses = [
  {
    id: 1,
    type: 'Home',
    address: '123 Main Street, Green Park, New Delhi - 110016',
    default: true
  },
  {
    id: 2,
    type: 'Office',
    address: '456 Business Avenue, Connaught Place, New Delhi - 110001',
    default: false
  }
];

const CustomerDetails = () => {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState(profile);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    // This would be an API call in a real application
    setEditMode(false);
    toast({
      title: "Profile Updated",
      description: "Your profile has been updated successfully.",
    });
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-grocery-dark text-center mb-8">Your Account</h2>
        
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
          <Tabs defaultValue="profile">
            <div className="flex flex-col md:flex-row">
              {/* Sidebar */}
              <div className="w-full md:w-64 bg-gray-50 p-4">
                <TabsList className="flex flex-row md:flex-col w-full bg-transparent gap-1">
                  <TabsTrigger value="profile" className="w-full justify-start">
                    <User className="mr-2" size={16} />
                    Profile
                  </TabsTrigger>
                  <TabsTrigger value="orders" className="w-full justify-start">
                    <Package className="mr-2" size={16} />
                    Orders
                  </TabsTrigger>
                  <TabsTrigger value="addresses" className="w-full justify-start">
                    <MapPin className="mr-2" size={16} />
                    Addresses
                  </TabsTrigger>
                  <TabsTrigger value="payment" className="w-full justify-start">
                    <CreditCard className="mr-2" size={16} />
                    Payment Methods
                  </TabsTrigger>
                  <TabsTrigger value="settings" className="w-full justify-start">
                    <Settings className="mr-2" size={16} />
                    Settings
                  </TabsTrigger>
                </TabsList>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <Button variant="ghost" className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50">
                    <LogOut className="mr-2" size={16} />
                    Logout
                  </Button>
                </div>
              </div>
              
              {/* Content Area */}
              <div className="flex-1 p-6">
                <TabsContent value="profile" className="mt-0">
                  <h3 className="text-xl font-medium text-grocery-dark mb-4">Personal Information</h3>
                  
                  <form onSubmit={handleUpdateProfile}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          disabled={!editMode}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          disabled={!editMode}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          disabled={!editMode}
                        />
                      </div>
                    </div>
                    
                    {editMode ? (
                      <div className="flex space-x-3">
                        <Button type="submit" className="bg-grocery-green hover:bg-grocery-green/90">
                          Save Changes
                        </Button>
                        <Button type="button" variant="outline" onClick={() => setEditMode(false)}>
                          Cancel
                        </Button>
                      </div>
                    ) : (
                      <Button type="button" onClick={() => setEditMode(true)}>
                        Edit Profile
                      </Button>
                    )}
                  </form>
                </TabsContent>
                
                <TabsContent value="orders" className="mt-0">
                  <h3 className="text-xl font-medium text-grocery-dark mb-4">Order History</h3>
                  
                  <div className="space-y-4">
                    {orders.map(order => (
                      <div key={order.id} className="border border-gray-200 rounded-lg p-4 hover:border-grocery-green transition-colors">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium">{order.id}</h4>
                            <p className="text-sm text-gray-500">{order.date}</p>
                          </div>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 
                            order.status === 'Processing' ? 'bg-blue-100 text-blue-800' : 
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {order.status}
                          </span>
                        </div>
                        
                        <div className="mt-3 flex justify-between items-center">
                          <div className="text-sm text-gray-500">
                            {order.items} items
                          </div>
                          <div className="font-medium">
                            ₹{order.total.toFixed(2)}
                          </div>
                        </div>
                        
                        <div className="mt-3 flex space-x-3">
                          <Button variant="outline" size="sm">View Details</Button>
                          <Button variant="outline" size="sm">Reorder</Button>
                        </div>
                      </div>
                    ))}
                    
                    <Button className="w-full" variant="outline">View All Orders</Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="addresses" className="mt-0">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-medium text-grocery-dark">Saved Addresses</h3>
                    <Button size="sm" className="bg-grocery-green hover:bg-grocery-green/90">
                      Add New Address
                    </Button>
                  </div>
                  
                  <div className="space-y-4">
                    {addresses.map(address => (
                      <div key={address.id} className="border border-gray-200 rounded-lg p-4 relative">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium">{address.type}</h4>
                            <p className="text-sm text-gray-600 mt-1">{address.address}</p>
                          </div>
                          {address.default && (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-grocery-green/10 text-grocery-green">
                              Default
                            </span>
                          )}
                        </div>
                        <div className="mt-4 flex space-x-3">
                          <Button size="sm" variant="outline">Edit</Button>
                          {!address.default && (
                            <Button size="sm" variant="outline">Set as Default</Button>
                          )}
                          {!address.default && (
                            <Button size="sm" variant="outline" className="text-red-500 hover:text-red-700">
                              Delete
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="payment" className="mt-0">
                  <h3 className="text-xl font-medium text-grocery-dark mb-4">Payment Methods</h3>
                  <div className="bg-gray-50 p-6 rounded-lg text-center">
                    <p className="text-gray-600">No payment methods saved yet.</p>
                    <Button className="mt-4 bg-grocery-green hover:bg-grocery-green/90">
                      Add Payment Method
                    </Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="settings" className="mt-0">
                  <h3 className="text-xl font-medium text-grocery-dark mb-4">Account Settings</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium mb-2">Notifications</h4>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <input type="checkbox" id="email-notifications" className="mr-2" defaultChecked />
                          <label htmlFor="email-notifications">Email notifications for orders</label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="sms-notifications" className="mr-2" defaultChecked />
                          <label htmlFor="sms-notifications">SMS notifications for orders</label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="promotional" className="mr-2" />
                          <label htmlFor="promotional">Promotional emails about offers</label>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Password</h4>
                      <Button>Change Password</Button>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2 text-red-600">Danger Zone</h4>
                      <Button variant="outline" className="border-red-300 text-red-500 hover:bg-red-50 hover:text-red-600">
                        Delete Account
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default CustomerDetails;

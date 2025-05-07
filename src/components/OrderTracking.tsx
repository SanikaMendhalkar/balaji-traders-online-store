
import React, { useState } from 'react';
import { Search, Package, Truck, Home, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const OrderTracking = () => {
  const [orderId, setOrderId] = useState('');
  const [trackingStatus, setTrackingStatus] = useState<null | 'processing' | 'shipped' | 'out-for-delivery' | 'delivered'>(null);
  const { toast } = useToast();

  const handleTracking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderId.trim()) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please enter a valid order ID",
      });
      return;
    }
    
    // This would typically be an API call to get the order status
    // For demo purposes, we're simulating a random status
    const statuses = ['processing', 'shipped', 'out-for-delivery', 'delivered'] as const;
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    
    setTrackingStatus(randomStatus);
    
    toast({
      title: "Order Found",
      description: `Order #${orderId} status retrieved successfully.`,
    });
  };

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-grocery-dark text-center mb-2">
            Track Your Order
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Enter your order ID to check the status of your delivery
          </p>
          
          <form onSubmit={handleTracking} className="flex space-x-2 mb-10">
            <Input
              type="text"
              placeholder="Enter your order ID (e.g. #123456)"
              className="flex-1"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
            />
            <Button type="submit" className="bg-grocery-green hover:bg-grocery-green/90">
              <Search className="mr-2" size={16} />
              Track
            </Button>
          </form>
          
          {trackingStatus && (
            <div className="border border-gray-200 rounded-lg p-6 bg-grocery-light animate-fade-in">
              <h3 className="font-medium text-grocery-dark mb-6">
                Order #{orderId} Status:
              </h3>
              
              <div className="relative">
                {/* Progress Bar */}
                <div className="hidden sm:block absolute left-0 top-1/2 w-full h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
                
                {/* Status Steps */}
                <div className="flex justify-between relative z-10">
                  {/* Processing */}
                  <div className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${trackingStatus === 'processing' ? 'bg-grocery-green text-white' : trackingStatus === 'shipped' || trackingStatus === 'out-for-delivery' || trackingStatus === 'delivered' ? 'bg-grocery-green text-white' : 'bg-gray-200 text-gray-500'}`}>
                      <Package size={20} />
                    </div>
                    <span className="text-xs text-gray-600 text-center">Processing</span>
                  </div>
                  
                  {/* Shipped */}
                  <div className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${trackingStatus === 'shipped' ? 'bg-grocery-green text-white' : trackingStatus === 'out-for-delivery' || trackingStatus === 'delivered' ? 'bg-grocery-green text-white' : 'bg-gray-200 text-gray-500'}`}>
                      <Package size={20} />
                    </div>
                    <span className="text-xs text-gray-600 text-center">Shipped</span>
                  </div>
                  
                  {/* Out for Delivery */}
                  <div className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${trackingStatus === 'out-for-delivery' ? 'bg-grocery-green text-white' : trackingStatus === 'delivered' ? 'bg-grocery-green text-white' : 'bg-gray-200 text-gray-500'}`}>
                      <Truck size={20} />
                    </div>
                    <span className="text-xs text-gray-600 text-center">Out for Delivery</span>
                  </div>
                  
                  {/* Delivered */}
                  <div className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${trackingStatus === 'delivered' ? 'bg-grocery-green text-white' : 'bg-gray-200 text-gray-500'}`}>
                      <CheckCircle size={20} />
                    </div>
                    <span className="text-xs text-gray-600 text-center">Delivered</span>
                  </div>
                </div>
              </div>
              
              {/* Status Details */}
              <div className="mt-8 p-4 bg-white rounded-lg border border-gray-200">
                <h4 className="font-medium text-grocery-dark mb-2">Status Details:</h4>
                
                {trackingStatus === 'processing' && (
                  <p className="text-gray-600">Your order is being processed and will be shipped soon.</p>
                )}
                
                {trackingStatus === 'shipped' && (
                  <p className="text-gray-600">Your order has been shipped and is on its way to the delivery location.</p>
                )}
                
                {trackingStatus === 'out-for-delivery' && (
                  <p className="text-gray-600">Your order is out for delivery and will arrive soon.</p>
                )}
                
                {trackingStatus === 'delivered' && (
                  <p className="text-gray-600">Your order has been delivered successfully.</p>
                )}
                
                <div className="mt-4 text-sm text-gray-500">
                  <p><strong>Order Date:</strong> May 5, 2025</p>
                  {trackingStatus !== 'processing' && (
                    <p><strong>Shipped Date:</strong> May 6, 2025</p>
                  )}
                  {(trackingStatus === 'out-for-delivery' || trackingStatus === 'delivered') && (
                    <p><strong>Out for Delivery:</strong> May 7, 2025</p>
                  )}
                  {trackingStatus === 'delivered' && (
                    <p><strong>Delivered Date:</strong> May 7, 2025</p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default OrderTracking;

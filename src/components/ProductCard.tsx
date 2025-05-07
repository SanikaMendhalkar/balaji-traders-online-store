
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    discountPercentage?: number;
    rating: number;
    isNew?: boolean;
    category: string;
    inStock: boolean;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { toast } = useToast();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };
  
  const handleAddToWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    toast({
      title: "Added to wishlist",
      description: `${product.name} has been added to your wishlist.`,
    });
  };
  
  return (
    <Link to={`/product/${product.id}`} className="product-card block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all">
      <div className="relative">
        {/* Product image would be here */}
        <div className="h-48 bg-gray-100 flex items-center justify-center">
          <span className="text-gray-400">Product Image</span>
        </div>
        
        {/* Discount Badge */}
        {product.discountPercentage && (
          <Badge className="absolute top-2 left-2 bg-grocery-orange text-white">
            {product.discountPercentage}% OFF
          </Badge>
        )}
        
        {/* New Badge */}
        {product.isNew && (
          <Badge className="absolute top-2 right-2 bg-grocery-green text-white">
            NEW
          </Badge>
        )}
        
        {/* Quick actions */}
        <div className="absolute bottom-2 right-2">
          <Button
            size="icon"
            variant="outline"
            className="rounded-full bg-white hover:bg-grocery-green hover:text-white border-gray-200 shadow-sm"
            onClick={handleAddToWishlist}
          >
            <Heart size={16} />
          </Button>
        </div>
      </div>
      
      <div className="p-4">
        {/* Category */}
        <div className="text-xs text-gray-500 mb-1">{product.category}</div>
        
        {/* Product Name */}
        <h3 className="font-medium text-grocery-dark mb-1 line-clamp-2 hover:text-grocery-green transition-colors">
          {product.name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={i < product.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-1">{product.rating}/5</span>
        </div>
        
        {/* Price */}
        <div className="flex items-center mb-3">
          <span className="font-bold text-grocery-dark mr-2">₹{product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">₹{product.originalPrice.toFixed(2)}</span>
          )}
        </div>
        
        {/* Add to Cart Button */}
        <Button
          className={`w-full ${product.inStock ? "bg-grocery-green hover:bg-grocery-green/90" : "bg-gray-300 cursor-not-allowed"}`}
          disabled={!product.inStock}
          onClick={handleAddToCart}
        >
          <ShoppingCart size={16} className="mr-2" />
          {product.inStock ? "Add to Cart" : "Out of Stock"}
        </Button>
      </div>
    </Link>
  );
};

export default ProductCard;

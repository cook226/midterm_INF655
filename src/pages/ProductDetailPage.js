import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../App.css';

// Mock product data
const mockProductData = [
  {
    id: 1,
    name: 'J.R. Lafin by Brannen Headjoint in Platinum',
    price: 13010.99,
    image: '../images/Lafin_Platinum.jpeg',
    description: "High-quality platinum headjoint offering exquisite tone and responsiveness."
  },
  {
    id: 2,
    name: 'J.R. Lafin by Brannen Headjoint in 22K Gold',
    price: 12055.99,
    image: '../images/Gold_22k_Lafin.jpeg',
    description: "Crafted from 22K gold for a warm, rich tone preferred by professional flutists."
  },
  {
    id: 3,
    name: 'J.R. Lafin by Brannen Headjoint in 18K Gold',
    price: 9690.99,
    image: '../images/lafin_18k_Gold.jpeg',
    description: "18K gold construction provides a perfect balance of warmth and brightness."
  },
  {
    id: 4,
    name: 'Lafin Headjoint #97-6 - Original 14K gold headjoint - Preowned',
    price: 15000.99,
    image: '../images/Lafin_14k.jpeg',
    description: "14K gold construction provides a perfect balance of warmth and brightness. Certified Preowned."
  },
];

const ProductDetailPage = () => {
  const { productId } = useParams();
  const { addItem } = useCart();

  // Find the product in the mock data array using the productId from the URL
  const product = mockProductData.find(p => p.id === parseInt(productId, 10));

  // Display a message if the product is not found
  if (!product) {
    return <div>Product not found.</div>;
  }

  // Render product details
  return (
    <div className="product-detail-page">
      <img src={product.image} alt={product.name} style={{ maxWidth: '100%', height: 'auto' }} />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price.toFixed(2)}</p>
      <button onClick={() => addItem(product)}>Add to Cart</button>
      <Link to="/">Back to Products</Link>
    </div>
  );
};

export default ProductDetailPage;

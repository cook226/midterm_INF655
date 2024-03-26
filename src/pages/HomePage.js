import React from 'react';
import Products from '../components/Products'; 
import { useCart } from '../context/CartContext'; 
import { Link } from 'react-router-dom';
import '../App.css';

const HomePage = () => {
  const { addItem } = useCart(); // Use the addItem function from CartContext

  return (
    <div className="home-page">
      <h1>Welcome to Our Online Store!</h1>
      <p>Explore our wide range of products and choose the best for you.</p>
      <div className="featured-products">
        <h2>Featured Products</h2>
        {/* Pass addItem as onAddToCart to Products */}
        <Products onAddToCart={addItem} />
      </div>
      <Link to="/products">View All Products</Link>
    </div>
  );
};

export default HomePage;

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage'; 
import SearchPage from './pages/SearchPage'; 
import CartPage from './pages/CartPage'; 
import { CartProvider } from './context/CartContext'; 
import Checkout from './components/Checkout'; 
import ProductsPage from './pages/ProductsPage'; 
import ThankYouPage from './pages/ThankYouPage'; 
import './App.css'; 

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link> | 
            <Link to="/search">Search</Link> | 
            <Link to="/cart">Cart</Link>
          </nav>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:productId" element={<ProductDetailPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/products" element={<ProductsPage />} /> 
            <Route path="/thank-you" element={<ThankYouPage />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;

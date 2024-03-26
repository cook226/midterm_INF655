import React from 'react';
import { useCart } from '../context/CartContext'; 
import Cart from '../components/Cart'; 
import { Link } from 'react-router-dom';
import '../App.css';

const CartPage = () => {
  // Extracting both items and removeItem function from useCart hook
  const { items, removeItem, clearCart } = useCart();

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>
      {/* Now passing removeItem correctly as onRemoveFromCart prop */}
      <Cart cartItems={items} onRemoveFromCart={removeItem} onClearCart={clearCart} />
      <div className="actions">
        <Link to="/checkout">
          <button disabled={items.length === 0}>Proceed to Checkout</button>
        </Link>
        <button onClick={clearCart} disabled={items.length === 0}>Clear Cart</button>
      </div>
      <Link to="/products">Continue Shopping</Link>
    </div>
  );
};

export default CartPage;

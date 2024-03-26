import React from 'react';
import '../App.css';

// Cart component displays items in the shopping cart
const Cart = ({ cartItems, onRemoveFromCart, onClearCart }) => {
  // Calculate total price of cart items
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {/* List each cart item */}
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} style={{width: '50px', height: 'auto'}} />
              <h3>{item.name}</h3>
              <p>${item.price} x {item.quantity}</p>
              <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
            </div>
          ))}
          {/* Display total price */}
          <div className="total-price">
            <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
          </div>
          <button onClick={onClearCart}>Clear Cart</button>
        </div>
      )}
    </div>
  );
};

export default Cart;

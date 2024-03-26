import React, { useState } from 'react';
import { useCart } from '../context/CartContext'; 
import { useNavigate } from 'react-router-dom';
import '../App.css'; 

const Checkout = () => {
  const { items, clearCart } = useCart();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle order submission to a backend
    console.log('Submitting order', { name, address, items });

    // Assuming the order is processed successfully:
    clearCart(); // Clear the items in the cart
    navigate('/thank-you'); // Redirect the user to a thank you page
  };

  // Calculate total price
  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            id="address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="total-price">
          <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
        </div>
        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
};

export default Checkout;

import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


const ThankYouPage = () => {
  return (
    <div>
      <h1>Thank You For Your Order!</h1>
      <p>Your order has been placed successfully.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default ThankYouPage;

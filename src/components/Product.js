import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Product = ({ product, onAddToCart }) => {
  return (
    <div className="product">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} style={{width: '100%', height: 'auto'}} />
        <h2>{product.name}</h2>
      </Link>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default Product;
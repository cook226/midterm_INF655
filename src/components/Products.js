import React from 'react';
import Product from './Product';
import '../App.css';
 


const productsData = [
  {
    id: 1,
    name: 'J.R. Lafin by Brannen Headjoint in Platinum',
    price: 13010.99,
    image: 'images/Lafin_Platinum.jpeg',
  },
  {
    id: 2,
    name: 'J.R. Lafin by Brannen Headjoint in 22K Gold',
    price: 12055.99,
    image: 'images/Gold_22k_Lafin.jpeg',
  },
  {
    id: 3,
    name: 'J.R. Lafin by Brannen Headjoint in 18K Gold',
    price: 9690.99,
    image: 'images/lafin_18k_Gold.jpeg',
  },
  {
    id: 4,
    name: 'Lafin Headjoint #97-6 - Original 14K gold headjoint - Preowned',
    price: 15000.99,
    image: 'images/Lafin_14k.jpeg',
  },
  // Add more products as needed
];

// Products component
const Products = ({ onAddToCart }) => {
  return (
    <div className="products">
      {productsData.map(product => (
        <Product key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};

export default Products;

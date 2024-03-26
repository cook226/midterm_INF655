import React, { useState, useEffect } from 'react';
import Product from '../components/Product';
import '../App.css';

const mockProductData = [
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
    image: '../images/Lafin_14k.jpeg',
    description: "14K gold construction provides a perfect balance of warmth and brightness. Certified Preowned."
  },
  // Add more products as needed
];

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const results = query.length > 2 
      ? mockProductData.filter(product => 
          product.name.toLowerCase().includes(query.toLowerCase())
        ) 
      : [];
    setSearchResults(results);
  }, [query]);

  return (
    <div className="search-page">
      <h1>Search for Products</h1>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="search-results">
        {searchResults.length > 0 ? (
          searchResults.map(product => (
            <Product key={product.id} product={product} onAddToCart={() => console.log('Add to Cart', product.id)} />
          ))
        ) : (
          query.length > 2 ? <p>No products found.</p> : <p>Please enter a search term.</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;

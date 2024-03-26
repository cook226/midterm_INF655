import React, { createContext, useContext, useReducer } from 'react';

// Define the context
const CartContext = createContext();

// Initial state for the cart
const initialState = {
  items: [], // This will hold items in the cart
};

// Reducer function to handle actions
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      // Add item to cart or update quantity if it already exists
      const newItem = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.id === newItem.id);
      const updatedItems = existingItemIndex >= 0
        ? state.items.map((item, index) =>
            index === existingItemIndex ? { ...item, quantity: item.quantity + 1 } : item
          )
        : [...state.items, { ...newItem, quantity: 1 }];
      return { ...state, items: updatedItems };

    case 'REMOVE_ITEM':
      // Remove item from cart
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id),
      };

    case 'CLEAR_CART':
      // Clear the cart
      return initialState;

    default:
      return state;
  }
};

// Define the provider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Helper functions to dispatch actions
  const addItem = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  // The value provided to the context consumers
  const contextValue = {
    items: state.items,
    addItem,
    removeItem,
    clearCart,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => useContext(CartContext);

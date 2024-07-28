import React, { createContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  let updatedCart;
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.find(item => item.id === action.payload.id);
      if (existingItem) {
        updatedCart = state.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      } else {
        updatedCart = [...state, action.payload];
      }
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;

    case 'REMOVE_FROM_CART':
      updatedCart = state.filter(item => item.id !== action.payload);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;

    case 'UPDATE_CART':
      updatedCart = action.payload;
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;

    case 'CLEAR_CART':
      localStorage.removeItem('cart');
      return [];

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, [], () => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const getUniqueProductCount = () => {
    return cart.length;
  };

  return (
    <CartContext.Provider value={{ cart, dispatch, getUniqueProductCount }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;

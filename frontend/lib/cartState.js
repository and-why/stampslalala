/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from 'react';

const LocalStateContext = createContext();

const LocalStateProvider = LocalStateContext.Provider;

function CartStateProvider({ children }) {
  // this is our own custom provider. we will store data and functionality in here. Any thing can access it via the consumer.
  const [cartOpen, setCartOpen] = useState(false);

  function toggleCart() {
    setCartOpen(!cartOpen);
  }
  function closeCart() {
    setCartOpen(false);
  }
  function openCart() {
    setCartOpen(true);
  }

  return (
    <LocalStateProvider
      value={{ cartOpen, setCartOpen, toggleCart, openCart, closeCart }}
    >
      {children}
    </LocalStateProvider>
  );
}

// make a custom hook for accessing the car local state
function useCart() {
  // use a consumer here to acces the local state
  const all = useContext(LocalStateContext);
  return all;
}

export { CartStateProvider, useCart };

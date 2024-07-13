import React, { useState, useEffect } from 'react';
import { Nav, CartModal, Home, Checkout, OrderConfirmation, NotFound, Products } from "./components";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { ToastContainer } from 'react-toastify';
import {
  Footer
} from "./sections";
import {
  handleAddToCart,
  handleRemoveFromCart,
  handleQuantityChange,
} from './Utility/cartUtils';

const App = () => {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(savedCartItems);
    setCartCount(savedCartItems.length);
  }, []);

  const handleCartAdd = (product) => {
    handleAddToCart(product, cartItems, setCartItems, setCartCount);
  };

  const handleCartRemove = (product) => {
    handleRemoveFromCart(product, cartItems, setCartItems, setCartCount);
  };

  const handleCartQuantityChange = (product, quantity) => {
    handleQuantityChange(product, quantity, cartItems, setCartItems, setCartCount);
  };

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <main className='relative'>
      <Nav cartCount={cartCount} handleCartClick={handleCartClick} />
      <Routes>
        <Route path="/" element={<Home handleCartAdd={handleCartAdd} />} />
        <Route path="/products" element={<Products />} />
        <Route path="/checkout" element={
          <ProtectedRoute cartItems={cartItems}>
            <Checkout cartItems={cartItems} setCartItems={setCartItems} setCartCount={setCartCount} />
          </ProtectedRoute>
        } />
        <Route path="/order-confirmation" element={
          <OrderConfirmation />
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <section className=' bg-black padding-x padding-t pb-8'>
        <Footer />
      </section>
      {isCartOpen && (
        <CartModal
          cartItems={cartItems}
          closeModal={() => setIsCartOpen(false)}
          handleRemoveFromCart={handleCartRemove}
          handleQuantityChange={handleCartQuantityChange}
        />
      )}
      <ToastContainer />
    </main>
  );
};

export default App;

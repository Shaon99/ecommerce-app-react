import React, { useState, useEffect } from 'react';
import { Nav, CartModal } from "./components";
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
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
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero />
      </section>
      <section className='padding'>
        <PopularProducts handleAddToCart={handleCartAdd} />
      </section>
      <section className='padding'>
        <SuperQuality />
      </section>
      <section className='padding-x py-10'>
        <Services />
      </section>
      <section className='padding'>
        <SpecialOffer />
      </section>
      <section className='bg-pale-blue padding'>
        <CustomerReviews />
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe />
      </section>
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
    </main>
  );
};

export default App;

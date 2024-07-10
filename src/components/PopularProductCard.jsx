import React from 'react';
import { star } from '../assets/icons';

const PopularProductCard = ({ imgURL, name, price, handleAddToCart }) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
      <img src={imgURL} alt={name} className='w-[282px] h-[282px]' />
      <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>
        {name}
      </h3>
      <small className='my-2 font-semibold font-montserrat text-coral-red leading-normal'>
        ${price}
      </small>
      <button
        type="button"
        className="font-medium leading-normal rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 bg-coral-red text-white border-coral-red hover:bg-orange-400"
        onClick={handleAddToCart}
      >
        Add to cart
      </button>
    </div>
  );
};

export default PopularProductCard;

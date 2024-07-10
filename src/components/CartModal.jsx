import React from 'react';
import { calculateSubtotal, calculateTotal } from '../Utility/cartUtils';

const CartModal = ({ cartItems, closeModal, handleRemoveFromCart, handleQuantityChange }) => {
    return (
        <div className='sidebar fixed inset-0 z-50 flex items-center justify-end'>
            <div className='bg-white w-120 h-full shadow-lg overflow-y-auto'>
                <div className='p-4 flex justify-between items-center'>
                    <h2 className='text-xl font-semibold'>Your Cart</h2>
                    <button onClick={closeModal} className='text-coral-red font-bold'>
                        X
                    </button>
                </div>
                <div className='p-4'>
                    {cartItems.length === 0 ? (
                        <div className='p-4 flex justify-center items-center'>
                            <p className='font-semibold'>Your cart is empty</p>
                        </div>
                    ) : (
                        cartItems.map((item, index) => (
                            <div key={index} className='flex justify-between items-center mb-4'>
                                <div className='flex items-center'>
                                    <img src={item.imgURL} alt={item.name} className='w-16 h-16 mr-4' />
                                    <div>
                                        <h3 className='font-semibold'>{item.name}</h3>
                                        <p className='text-coral-red'>${item.price} </p>
                                    </div>
                                </div>
                                <div className='flex items-center mx-3'>
                                    <button
                                        onClick={() => handleQuantityChange(item, item.quantity - 1)}
                                        className='text-coral-red font-bold bg-transparent border rounded-md px-1 mr-1'
                                        disabled={item.quantity <= 1}
                                    >
                                        -
                                    </button>
                                    <input
                                        type='number'
                                        min={1}
                                        value={item.quantity}
                                        onChange={(e) => handleQuantityChange(item, parseInt(e.target.value))}
                                        className='w-10 text-center border rounded text-coral-red'
                                    />
                                    <button
                                        onClick={() => handleQuantityChange(item, item.quantity + 1)}
                                        className='text-coral-red font-bold bg-transparent border rounded-md px-1 ml-1'
                                    >
                                        +
                                    </button>
                                    <p className='text-coral-red mx-3'>{calculateSubtotal(item)}</p>
                                </div>
                                <button
                                    onClick={() => handleRemoveFromCart(item)}
                                    className='text-coral-red font-bold ml-2'
                                >
                                    x
                                </button>
                            </div>
                        ))
                    )}
                </div>
                {cartItems.length > 0 && (
                    <div className='p-4'>
                        <div className='flex justify-between items-center mb-4'>
                            <h3 className='text-xl font-semibold'>Total:</h3>
                            <p className='text-coral-red text-xl font-semibold mx-10'>{calculateTotal(cartItems)}</p>
                        </div>
                        <button
                            type='button'
                            className='w-full inline-block bg-coral-red hover:bg-orange-400 text-white py-2 px-4 mt-4 rounded-md transition duration-300'
                        >
                            Proceed to checkout
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartModal;

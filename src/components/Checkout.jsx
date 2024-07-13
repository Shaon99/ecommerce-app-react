import React from 'react';
import { useNavigate } from 'react-router-dom';
import { calculateTotal } from '../Utility/cartUtils';

const Checkout = ({ cartItems, setCartItems, setCartCount }) => {
    const navigate = useNavigate();

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        setCartItems([]);
        setCartCount(0);
        localStorage.removeItem('cartItems');
        navigate('/order-confirmation');
    };
    return (
        <form onSubmit={handlePlaceOrder}>
            <div className="grid sm:px-10 pb-20 lg:grid-cols-2 lg:px-20 xl:px-32">
                <div className="px-4 pt-8">
                    <p className="text-xl font-medium">Order Summary</p>
                    <p className="text-gray-400">Check your items and select a suitable shipping method.</p>
                    <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
                        {cartItems.map((item, index) => (
                            <div key={index} className="flex flex-col rounded-lg bg-white sm:flex-row">
                                <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src={item.imgURL} alt={item.name} />
                                <div className="flex w-full flex-col px-4 py-4">
                                    <span className="font-semibold">{item.name}</span>
                                    <span className="float-right text-gray-400">Qty: {item.quantity}</span>
                                    <p className="text-lg font-bold text-coral-red">${item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
                    <p className="text-xl font-medium">Contact Details</p>
                    <p className="text-gray-400">Complete your order by providing your billing details.</p>

                    <label htmlFor="email" className="mt-4 mb-2 block text-sm font-medium">Email</label>
                    <div className="relative">
                        <input type="email" id="email" name="email" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="your.email@gmail.com" required />
                    </div>
                    <label htmlFor="phone" className="mt-4 mb-2 block text-sm font-medium">Phone</label>
                    <div className="relative">
                        <input type="tel" id="phone" name="phone" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="your phone number" required />
                    </div>
                    <label htmlFor="billing-address" className="mt-4 mb-2 block text-sm font-medium">Billing Address</label>
                    <div className="flex flex-col sm:flex-row">
                        <div className="relative flex-shrink-0 sm:w-7/12">
                            <input type="text" id="billing-address" name="billing-address" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="billing address" required />
                        </div>
                        <select name="billing-state" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" required>
                            <option value="State">Dhaka</option>
                        </select>
                        <input type="text" name="billing-zip" className="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="ZIP" />
                    </div>
                    <div className="mt-6 border-t border-b py-2">
                        <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-gray-900">Subtotal</p>
                            <p className="font-semibold text-gray-900">{calculateTotal(cartItems)}</p>
                        </div>
                    </div>
                    <p className="mt-8 text-lg font-medium">Shipping Methods</p>
                    <div className="mt-5 grid gap-6">
                        <div className="relative">
                            <input className="peer hidden" id="radio_2" type="radio" name="radio" defaultChecked />
                            <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                            <label htmlFor="radio_2" className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300">
                                <div className="p-4">
                                    <span className="mt-2 font-semibold">Cash On Delivery</span>
                                    <p className="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="mt-8 flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-900">Total</p>
                        <p className="text-2xl font-semibold text-gray-900">{calculateTotal(cartItems)}</p>
                    </div>
                    <button type="submit" className="w-full inline-block bg-coral-red hover:bg-orange-400 text-white py-2 px-4 my-8 rounded-md transition duration-300">Place Order</button>
                </div>
            </div>
        </form>
    );
};

export default Checkout;

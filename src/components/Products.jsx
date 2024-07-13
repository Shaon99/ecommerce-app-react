import React from 'react';

const Products = () => {
    return (
        <section className='padding'>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
                <div className='flex flex-1 flex-col w-full max-sm:w-full'>
                    <img  src="http://localhost:5173/src/assets/images/shoe4.svg" alt="dd" className='w-[282px] h-[282px]' />
                    <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>
                        sdad
                    </h3>
                    <small className='my-2 font-semibold font-montserrat text-coral-red leading-normal'>
                        $123.00
                    </small>
                    <button
                        type="button"
                        className="font-medium leading-normal rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 bg-coral-red text-white border-coral-red hover:bg-orange-400"

                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Products;

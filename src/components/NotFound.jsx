import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section class="bg-white">
            <div class="py-20 px-4 mx-auto max-w-screen-xl">
                <div class="mx-auto max-w-screen-sm text-center">
                    <h1 class="mb-4 tracking-tight font-extrabold font-Text text-blue-500">404</h1>
                    <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">Something's missing.</p>
                    <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
                    <Link to="/" class="w-full inline-block bg-coral-red hover:bg-orange-400 text-white py-2 px-4 my-8 rounded-md transition duration-300">Back to Homepage</Link>
                </div>
            </div>
        </section>
    );
}

export default NotFound;

import { Link } from 'react-router-dom';

const OrderConfirmation = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-purple-50">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto text-center animate-fade-in">
                <svg
                    className="w-20 h-20 mx-auto mb-6 text-green-500 animate-bounce"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                    />
                </svg>
                <h1 className="text-3xl font-bold mb-4 text-gray-800">Order Confirmed!</h1>
                <p className="text-gray-600 mb-8">
                    Thank you for your purchase! You will receive an email confirmation shortly.
                </p>
                <Link to="/"
                    className="w-full inline-block bg-coral-red hover:bg-orange-400 text-white py-2 px-4 my-8 rounded-md transition duration-300"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default OrderConfirmation;

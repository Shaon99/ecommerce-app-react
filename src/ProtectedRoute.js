import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ cartItems, children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (cartItems.length === 0) {
      navigate('/');
    }
  }, [cartItems, navigate]);

  return cartItems.length > 0 ? children : null;
};

export default ProtectedRoute;

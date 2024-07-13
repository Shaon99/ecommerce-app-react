import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const updateCart = (cartItems, setCartItems, setCartCount) => {
  setCartItems(cartItems);
  setCartCount(cartItems.length);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const handleAddToCart = (
  product,
  cartItems,
  setCartItems,
  setCartCount
) => {
  if (cartItems.some((item) => item.name === product.name)) {
    toast.warning("Product already added to cart", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme:'dark'
    });
    return;
  }
  
  const productWithDefaultQuantity = { ...product, quantity: 1 };
  updateCart(
    [...cartItems, productWithDefaultQuantity],
    setCartItems,
    setCartCount
  );
  toast.success("Product successfully added to cart", {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme:'dark'
  });
};

export const handleRemoveFromCart = (
  product,
  cartItems,
  setCartItems,
  setCartCount
) => {
  const updatedCartItems = cartItems.filter(
    (item) => item.name !== product.name
  );
  updateCart(updatedCartItems, setCartItems, setCartCount);
  toast.success("Product successfully remove from cart", {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme:'dark'
  });
};

export const handleQuantityChange = (
  product,
  quantity,
  cartItems,
  setCartItems,
  setCartCount
) => {
  const updatedCartItems = cartItems.map((item) =>
    item.name === product.name ? { ...item, quantity } : item
  );
  updateCart(updatedCartItems, setCartItems, setCartCount);
};


export const calculateSubtotal = (item) => {
    const quantity = parseInt(item.quantity);
    const price = parseFloat(item.price);
    const subtotal = quantity * price;
    return '$' + subtotal.toFixed(2);
};

export const calculateTotal = (cartItems) => {
    let total = 0;
    cartItems.forEach(item => {
        const quantity = parseInt(item.quantity);
        const price = parseFloat(item.price);
        if (!isNaN(quantity) && !isNaN(price)) {
            const subtotal = quantity * price;
            total += subtotal;
        }
    });
    return '$' + total.toFixed(2);
};
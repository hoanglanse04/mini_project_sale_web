import React, { useContext, useState } from 'react';
import CartContext from '../../Context/CartContext';
import { useAuth } from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const { cart, dispatch } = useContext(CartContext);
  const { user } = useAuth();
  const navigate = useNavigate();
  const [message, setMessage] = useState(''); 

  const handleQuantityChange = (id, operation) => {
    dispatch({
      type: 'UPDATE_CART',
      payload: cart.map(item =>
        item.id === id
          ? {
              ...item,
              quantity: operation === 'increment'
                ? item.quantity + 1
                : item.quantity > 1 ? item.quantity - 1 : item.quantity
            }
          : item
      ),
    });
  };

  const handleRemoveItem = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const getTotalPrice = () => {
    return parseFloat(cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2));
  };

  const handleCheckout = async () => {
    if (!user) {
      navigate('/Login');
      return;
    }

    const userId = user.id;
    const orderId = Date.now().toString();

    const postData = {
      userId,
      orderId,
      items: cart.map(item => ({
        productId: item.id,
        productName: item.title,
        quantity: item.quantity,
        pricePerUnit: item.price
      })),
      totalAmount: getTotalPrice()
    };

    try {
      const response = await fetch('http://localhost:3001/purchases', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Purchase saved:', data);
        setMessage('Purchase successful!'); // Hiển thị thông báo thành công
        dispatch({ type: 'CLEAR_CART' });
      } else {
        setMessage('Purchase failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error completing purchase. Please try again.');
    }
  };

  return (
    <div className="container Cart">
      <h2>Your Shopping Cart</h2>
      {message && <p className="Cart__message">{message}</p>} {/* Hiển thị thông báo */}
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="CartItems">
          <div className="CartHeader row align-items-center text-center">
            <div className="CartHeader__item col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-2">Image</div>
            <div className="CartHeader__item col-xl-5 col-lg-5 col-md-5 col-sm-5 col-xs-5">Product Name</div>
            <div className="CartHeader__item col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1">Price</div>
            <div className="CartHeader__item col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-2">Quantity</div>
            <div className="CartHeader__item col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1">Total</div>
            <div className="CartHeader__item col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1">Remove</div>
          </div>
          {cart.map(item => (
            <div key={item.id} className="CartItem row d-flex flex-row align-items-center text-center">
              <div className="CartItem__image col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-2">
                <img src={item.thumbnail} alt={item.title} />
              </div>
              <div className="CartItem__details col-xl-5 col-lg-5 col-md-5 col-sm-5 col-xs-5">
                <h3>{item.title}</h3>
              </div>
              <div className="CartItem__price col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1">
                {item.price.toLocaleString()}
              </div>
              <div className="CartItem__quantity col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-2 d-flex flex-row align-items-center">
                <button
                  onClick={() => handleQuantityChange(item.id, 'decrement')}
                  disabled={item.quantity < 1} // Disable button when quantity is 1
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => handleQuantityChange(item.id, 'increment')}>+</button>
              </div>
              <div className="CartItem__total col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1">
                {(item.price * item.quantity).toLocaleString()}đ
              </div>
              <div className="CartItem__remove col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1" onClick={() => handleRemoveItem(item.id)}>
                <i className="bi bi-trash"></i>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="CartTotal  d-flex justify-content-end">
        <h3>Total Amount: {getTotalPrice().toLocaleString()}đ</h3>
      </div>
      <div className="CartActions d-flex justify-content-end">
        <button className="Cart__checkout" onClick={handleCheckout}>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;

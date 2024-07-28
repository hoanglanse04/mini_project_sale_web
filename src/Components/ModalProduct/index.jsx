import React, { useState } from 'react';
import './ModalProduct.css';
import { useAuth } from '../../Context/AuthContext';

const ModalProduct = ({ show, onClose, product, quantity }) => {
  const { user } = useAuth();
  const [successMessage, setSuccessMessage] = useState('');

  const handleConfirm = async () => {
    if (!user) {
      alert('You need to be logged in to complete the purchase.');
      return;
    }

    const postData = {
      userId: user.id,
      email: user.email,
      userName: user.name,
      orderId: Date.now().toString(),
      items: [{
        productId: product.id,
        productName: product.title,
        quantity,
        pricePerUnit: product.price
      }],
      totalAmount: product.price * quantity
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
        setSuccessMessage('Purchase successful!'); 
      } else {
        throw new Error('Purchase failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setSuccessMessage('Error completing purchase. Please try again.');
    }
  };

  if (!show) return null;

  return (
    <div className="ModalProduct" onClick={onClose}>
      <div className="ModalProduct__content" onClick={(e) => e.stopPropagation()}>
        <h5 className='text-center'>Confirm Purchase</h5>
        <h4>Do you want to purchase {product.title}?</h4>
        <h4>Quantity: {quantity}</h4>
        <span style={{padding:'5px',backgroundColor:'#FF6131',color:'white',borderRadius:'5px'}}>Total: ${(product.price * quantity).toFixed(2)}</span>
        
        {successMessage && (
          <div className="ModalProduct__message">
            <p>{successMessage}</p>
          </div>
        )}

        <div className="ModalProduct__footer">
          <button onClick={onClose}>Close</button>
          <button onClick={() => {
            handleConfirm();
            setTimeout(() => onClose(), 3000); 
          }}>Confirm Purchase</button>
        </div>
      </div>
    </div>
  );
};

export default ModalProduct;

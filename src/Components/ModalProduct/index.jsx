import React, { useState } from 'react';
import './ModalProduct.css'; // Import CSS for custom styling

const ModalProduct = ({ show, onClose, product, quantity }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleConfirm = () => {
    // Send only id and title of the product along with the form data
    console.log('Purchase Confirmed');
    console.log('Product ID:', product.id);
    console.log('Product Title:', product.title);
    console.log('Quantity:', quantity);
    console.log('Form Data:', formData);

    // Example of sending data to an API (replace URL with your API endpoint)
    fetch('http://localhost:3001/purchases', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        productId: product.id,
        productTitle: product.title,
        quantity,
        ...formData,
      }),
    })
    .then(res => res.json())
    .then(data => {
      console.log('Purchase saved:', data);
      onClose();
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  if (!show) return null;

  return (
    <div className="ModalProduct" onClick={onClose}>
      <div className="ModalProduct__content" onClick={(e) => e.stopPropagation()}>
        <h2>Confirm Purchase</h2>
        <p>Do you want to purchase {product.title}?</p>
        <p>Quantity: {quantity}</p>
        <p>Total: ${(product.price * quantity).toFixed(2)}</p>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </form>
        <div className="ModalProduct__footer">
          <button onClick={onClose}>Close</button>
          <button onClick={handleConfirm}>Confirm Purchase</button>
        </div>
      </div>
    </div>
  );
};

export default ModalProduct;

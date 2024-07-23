import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:3001/products?id=${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data[0]);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleQuantityChange = (operation) => {
    setQuantity((prevQuantity) => {
      if (operation === 'increment') {
        return prevQuantity + 1;
      } else if (operation === 'decrement' && prevQuantity > 1) {
        return prevQuantity - 1;
      }
      return prevQuantity;
    });
  };

  return (
    <div className="ProductDetail">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8 col-md-12">
            <div className="product__img">
              <img src={product.thumbnail} alt={product.title} className="img-fluid" />
              <div className="image-navigation">
                
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-12">
            <h1 style={{ paddingBottom: '1rem',color:'#3FB4FB' }}>{product.title}</h1>
            <div style={{ paddingBottom: '1rem' }} className="product-detail__info">
              <h2>${product.price}</h2>
              <h3>
                Rating: {product.rating} <i className="bi bi-star-fill"></i>
              </h3>
            </div>
            <div style={{ paddingBottom: '1rem' }} className="product-detail__quantity">
              <button style={{marginRight:'5px'}} onClick={() => handleQuantityChange('decrement')}>-</button>
              <input style={{border:'0.5px solid rgb(195, 181, 181)'}} className='text-center' type="text" value={quantity} readOnly />
              <button style={{marginLeft:'5px'}} onClick={() => handleQuantityChange('increment')}>+</button>
            </div>
            <button type="button" className="btn__buy">
              BUY NOW
            </button>
          </div>
        </div>
        <h5 style={{color:'#3FB4FB',paddingTop:'20px'}}>Description</h5>
        <div className="ProductDesc">
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
}

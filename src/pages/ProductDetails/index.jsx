import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'


export default function ProductDetail() {
  const [Index,setIndex]=useState(0);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:3001/products?id=${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }
  console.log(product)

  return (
    <div className="ProductDetail">
    <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8 col-md-12">
          <div className="product__img">
           <i style={{fontSize:'2rem',cursor:'pointer'}} onClick={() => {if(Index > 0) setIndex(Index - 1)}} class="bi bi-caret-left-fill"></i>
              <img src={product[0].images[Index]}/>
            <i style={{fontSize:'2rem',cursor:'pointer'}} onClick={() => {if(Index < product[0].images.length - 1) setIndex(Index + 1)}} class="bi bi-caret-right-fill"></i>
         </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-12">
          <h1>{product[0].title}</h1>
          <div className="product-detail__info">
            <h2>Price: ${product[0].price}</h2>
            <p>{product[0].description}</p>
            <h3>Rating: {product[0].rating} <i className="bi bi-star-fill"></i></h3>
          </div>
          <button type="button" class="btn btn-primary">Buy now</button>
          </div>

        </div>
    </div>
    </div>

  );
}

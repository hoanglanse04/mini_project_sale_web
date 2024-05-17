import '../Home/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import promotionImg from '../../assets/images/promotion.jpg';
import freeShipImg from '../../assets/images/freeship.jpg'
// http://localhost:3001/products?q=${variable.q}&_page=${variable.page}&_limit=${variable.limit

export default function Home(){

  const [listSellProducts, setlistSellProducts] = useState([]);
  const [listDiscountProducts, setlistDiscountProducts] = useState([]);

  

  const [visibleSellProducts, setVisibleSellProducts] = useState(8);
  const [visibleDiscountProducts, setVisibleDiscountProducts] = useState(8);


    useEffect(() => {
    fetch(`http://localhost:3001/products?_limit=${visibleSellProducts}`)
      .then(res => res.json())
      .then(data => {
        setlistSellProducts(data);
      });
  }, [visibleSellProducts]);
  useEffect(() => {
    fetch(`http://localhost:3001/products?_limit=${visibleDiscountProducts}`)
      .then(res => res.json())
      .then(data => {
        setlistDiscountProducts(data);
      });
  }, [visibleDiscountProducts]);

   
  const showMoreSellProducts = () => {
    setVisibleSellProducts(visibleSellProducts => visibleSellProducts + 8); 
  };
  const showMoreDiscountProducts = () => {
    setVisibleDiscountProducts(visibleDiscountProducts => visibleDiscountProducts + 8); 
  };

    return(
      <>
        <div className='promotion'>
          <div className='container'>
            <Row className='promotion__img'>            
              <Col   xl={9} lg={9} md={12} sm={12} xs={12}>
              <img className='promotion__img--shop' src={promotionImg}></img>
              </Col>
              <Col xl={3} lg={3} md={12} sm={12} xs={12}>
              <img className='promotion__img--freeship' src={freeShipImg}></img>
              </Col>
            </Row>
          </div>
        </div>
        <div className='main-products'>
          <div className='container'>
            <div className='product__bestseller'>
              <div className='product__bestseller--title'>
              <i class="bi bi-shop-window"></i>
                <span className='product__bestseller--text'>Best Seller</span>
              </div>
              <div className='products'>
                <Row >
                  {listSellProducts.filter( item => item.rating >4.3).map(item => (
                    <Col xl={3} lg={3} md={6} sm={6} xs={12} key={item.id}>
                      <div className='product__item'>
                      <h5 className='product__item--discount'>{item.rating}<i class="bi bi-star-fill"></i></h5>
                        <img src={item.thumbnail}></img>
                        <div className='product__item--desc'>
                          <h5 className='product__item--name'>{item.title}</h5>
                          <h5 className='product__item--price'>${item.price}</h5>
                        </div>
                      </div>
                    </Col>
                  ))}
                  <div className='btn__moreProducts'>
                  <button onClick={showMoreSellProducts} className='load-more'>More...</button>
                  </div>
                </Row>
               
              </div>
            </div>

            <div className='product__discount'>
              <div className='product__discount--title'>
              <i class="bi bi-shop-window"></i>
                <span className='product__discount--text'>Discount</span>
              </div>
              <div className='products'>
                <Row>
                  {listDiscountProducts.filter(item => item.discountPercentage >= 10).map(item => (
                    <Col xl={3} lg={3} md={6} sm={6} xs={12} key={item.id}>
                      <div className='product__item'>
                      <h5 className='product__item--discount'>{item.discountPercentage}%</h5>
                        <img src={item.thumbnail}></img>
                        <div className='product__item--desc'>
                          <h5 className='product__item--name'>{item.title}</h5>
                          <h5 className='product__item--price'>${item.price}</h5>
                        </div>
                      </div>
                    </Col>
                  ))}
                  <div className='btn__moreProducts'>
                  <button onClick={showMoreDiscountProducts} className='load-more'>More...</button>
                  </div>
                </Row>
                
              </div>
            </div>
          </div>
        </div>
        <div className='service'>
          <div className='container'>
            <Row>
              <Col className='service__card' xl={3} lg ={3} md={12} sm={12} >
              <div className='service__card--icon'>
                <i class="bi bi-truck"></i>
              </div>
              <div className='card__desc'>
                <h5>FREE SHIP</h5>
                <h6>With orders over 3 milion </h6>
              </div>
              </Col>
              <Col className='service__card' xl={3} lg ={3} md={12} sm={12} >
              <div className='service__card--icon'>
               <i class="bi bi-arrow-repeat"></i>
               </div>
              <div className='card__desc'>
                <h5>EXCHANGE GOODS</h5>
                <h6>within 3 days</h6>
              </div>
              </Col>
              <Col className='service__card' xl={3} lg ={3} md={12} sm={12} >
              <div className='service__card--icon'>
              <i class="bi bi-calendar-fill"></i>
              </div>
              <div className='card__desc'>
                <h5>REFUND</h5>
                <h6>if there is an error</h6>
               </div>
              </Col>
              <Col className='service__card' xl={3} lg ={3} md={12} sm={12} >
              <div className='service__card--icon'>
              <i class="bi bi-people-fill"></i>
              </div>
              <div className='card__desc'>
                <h5>SUPPORT 24/7</h5>
                <h6>035123456</h6>
                </div>

              </Col>
            </Row>
          </div>
        </div>
      </>
    )

}
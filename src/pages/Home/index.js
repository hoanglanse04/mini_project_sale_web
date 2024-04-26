import '../Home/index.css';
import{ShopOutlined } from  '@ant-design/icons';
import { useEffect, useState } from 'react';
import { Row,Col } from 'antd';
import promotionImg from '../../assets/images/promotion.jpg';
import freeShipImg from '../../assets/images/freeship.jpg'
// http://localhost:3001/products?q=${variable.q}&_page=${variable.page}&_limit=${variable.limit

export default function Home(){
 

  const variable= {
    q:"",
    page:"1",
    limit:"8",

  }
    const [listProducts,setlistProducts] = useState([]); 

      useEffect(()=>{
        fetch(`http://localhost:3001/products`)
        .then(res => res.json())
        .then(data => {
          setlistProducts(data);
        })

      },listProducts)
      
      console.log(listProducts);


    return(
      <>
        <div className='promotion'>
          <div className='container'>
            <div className='promotion__img'>
            <img className='promotion__img--shop' src={promotionImg}></img>
            <img className='promotion__img--freeship' src={freeShipImg}></img>
            </div>
          </div>
        </div>
        <div className='main-products'>
          <div className='container'>
            <div className='product__bestseller'>
              <div className='product__bestseller--title'>
                <ShopOutlined />
                <span className='product__bestseller--text'>Best Seller</span>
              </div>
              <div className='products'>
                <Row>
                  {listProducts.filter(item => item.rating >= 4.5).map(

                    item =>(
                    <Col xxl={6} xl={6} xs={8}>
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
                </Row>
              </div>
            </div>

            <div className='product__discount'>
              <div className='product__discount--title'>
                <ShopOutlined />
                <span className='product__discount--text'>Discount</span>
              </div>
              <div className='products'>
                <Row>
                  {listProducts.filter(item => item.discountPercentage >= 10).map(

                    item =>(
                    <Col xxl={6} xl={6} xs={8}>
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
                </Row>
              </div>
            </div>
          </div>
        </div>
      </>
    )

}
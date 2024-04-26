import React from 'react';
import { Link } from 'react-router-dom';
import '../Footer/index.css';
import {TwitterOutlined,InstagramOutlined,FacebookOutlined,YoutubeOutlined  } from  '@ant-design/icons';


export default function Footer() {
  return (
    <>
    <div className='footer-wrapper'>
      <div className='topfooter'>
        <div className='container'>
            <ul className='topfooter__navi'>
              <li className="topfooter__navi--home"><Link to='/' >Home</Link></li>
              <li className="topfooter__navi--about"><Link to='/About' >About</Link></li>
              <li className="topfooter__navi--"><Link to='/Products' >Products</Link></li>
              <li className="topfooter__navi--news"><Link to='/News' >News</Link></li>
              <li className="topfooter__navi--contact"><Link to='/Contact' >Contact</Link></li>
            </ul>
            <ul className='topfooter__social'>
              <li><TwitterOutlined /></li>
              <li><InstagramOutlined /></li>
              <li><FacebookOutlined /></li>
              <li><YoutubeOutlined /></li>
            </ul>
          </div>
        </div>
        <div className='mainfooter'>
          <div className='container'>
          <div className='mainfooter__infor'>
            <div className='infor__address'>
              <h6>Address</h6>
              <p>97/16 Khuong trung thanh xuan ha noi</p>
            </div>
            <div className='infor__phone'>
              <h6>Phone</h6>
              <p>0333345678</p>
            </div>
            <div className='infor__email'>
              <h6>Email</h6>
              <p>hoanglanse04@gmail.com</p>
            </div>
          </div>
          <div className='mainfooter__map'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.6327987213426!2d105.82216083985972!3d21.00735158859378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac8109765ba5%3A0xd84740ece05680ee!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBUaOG7p3kgbOG7o2k!5e0!3m2!1svi!2s!4v1714146039561!5m2!1svi!2s"
              width="100%"
              height="auto"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          </div>
        </div>
        <div className='copyright'>
          <div className='container'>
            <p>© Copyright belongs to<span> hoanglanse04</span></p>
          </div>
        </div>
    </div>
    </>
  );
}

import item_img_1 from '../../assets/images/news__item-1.webp';
import item_img_2 from '../../assets/images/news__item-2.webp';
import item_img_3 from '../../assets/images/news__item-3.webp';
import item_img_4 from '../../assets/images/news__item-4.webp';
import item_img_5 from '../../assets/images/news__item-5.webp';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function News(){

  return(
    <>
      <div className="news">
        <div className='container'>
        <h3>News</h3>
        <div className="news__item">
          <img src={item_img_1}></img>
          <div className="item__desc" >
            <h4><Link to='Aticle_01'>WHY ARE ELECTROLUX WASHING MACHINES MORE EXPENSIVE?</Link> </h4>
            <h6>10 December, 2015</h6>
            <h5>Posted by: Tran Tung</h5>
            <p>Electrolux washing machines are famous as high-end washing machines, the quality is known and desired by many users, but Electrolux washing machines are always expensive...</p>            <a>VIEW DETAIL</a>
          </div>
        </div>
        <div className="news__item">
          <img src={item_img_2}></img>
          <div className="item__desc" >
            <h4>TIPS TO INCREASE THE LIFE OF YOUR REFRIGERATOR</h4>
            <h6>10 December, 2015</h6>
            <p>The refrigerator is an essential appliance in every modern home. Some notes on how to use from the time of purchase to the correct daily use will help increase the life expectancy ...</p>            <a>VIEW DETAIL</a>
          </div>
        </div>
       
        <div className="news__item">
          <img src={item_img_3}></img>
          <div className="item__desc" >
            <h4><Link to='Aticle_02'>NOTES WHEN USING AN INDUCTION COOKTOP</Link></h4>
            <h6>10 December, 2015</h6>
            <h5>Posted by: Tran Tung</h5>
            <p>Sometimes you buy a new electronic device without having all the information you need to be able to use it effectively, or simply to ensure safety. Below</p>            
            <a>VIEW DETAIL</a>
          </div>
        </div>
        <div className="news__item">
          <img src={item_img_4}></img>
          <div className="item__desc" >
            <h4>HOW TO FIX COMMON MISTAKES IN WASHING MACHINES</h4>
            <h6>10 December, 2015</h6>
            <h5>Posted by: Tran Tung</h5>
            <p>Washing machines fail due to a lot of different reasons, among which there are both objective and subjective ones. Join Betashop to find out the most common washing machine errors and how to fix them to...</p>
            <a>VIEW DETAIL</a>
          </div>
        </div>
        <div className="news__item">
          <img src={item_img_5}></img>
          <div className="item__desc" >
            <h4>TIPS FOR CLEANING KITCHEN ITEMS</h4>
            <h6>10 December, 2015</h6>
            <h5>Posted by: Tran Tung</h5>
            <p>Microwave, oven, kitchen utensils, sink ... are very familiar objects to housewives. If you know how to clean properly, items will stay with you longer. 1...</p>
            <a>VIEW DETAIL</a>
          </div>
        </div>
        </div>
       
      </div>
    </>
    )

}
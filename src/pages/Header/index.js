import "./index.css";
import "../../base.css";
import {MailOutlined,PhoneOutlined,ShoppingCartOutlined,SearchOutlined,DownOutlined,MenuOutlined,CloseOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";
import {Link, Outlet} from 'react-router-dom'


export default function Header(){

    var cartNumber=0;

    const listItemSelect = document.querySelectorAll('.navigation ul li a');
    listItemSelect.forEach(a =>{
      a.addEventListener('click',function(){
        listItemSelect.forEach(item =>{
          item.classList.remove('selected');
          console.log("ok");
        })
        this.classList.add('selected');
      })
    })

    const [categoryData,setcategoryData] = useState([]);
    useEffect(()=>{
      fetch("http://localhost:3001/category")
      .then(res=>res.json())
      .then(data=>{
        setcategoryData(data);
      })
    },[]);

  
   

    return(

        <>
        <div className="topHead">

            <div className="container">
                  <div className="topHead__login">
                    <h4>SIGN UP</h4>
                    <span>|</span>
                    <h4>SIGN IN</h4>
                  </div>

                  <div className="topHead__infor">
                    <div className="topHead__infor--mail">
                      <div className="topHead__infor--mail--icon">
                        <MailOutlined/>
                      </div>
                      <span>support@sapo.vn</span>
                    </div>
                    <div className="topHead__infor--phone">
                      <div className="topHead__infor--phone--icon">
                        <PhoneOutlined/>
                      </div>
                      <span>1900 6750</span>

                    </div>
                  </div> 
            </div>

        </div>
        <div className="midHead">
          <div className="container">
            <div className="midHead__logo">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZOjEGwhzh3IfpJksuyouWtCIO2Q-g95ucfwrTFIyN23jkOvK45DoMovE7n-T_mE56-eg&usqp=CAU" alt=""></img>
            </div>
            <div className="midHead__fSearch">
              <form>
                <input type="text" placeholder="Search" ></input>
                <button type="submit">
                <SearchOutlined />
                </button>
              </form>
            </div>
            <div className="midHead__cart">
              <div className="midHead__cart--item">
              <ShoppingCartOutlined />
              <span> ({cartNumber}) products</span>
              </div>
            </div>
          </div>
        </div>

        <div className="navigation">
          <div className="container">
            <ul className="navigation__origin">
              <li className="navigation__home"><a><Link to='Home' >Home</Link></a></li>
              <li className="navigation__about"><a><Link to='About' >About</Link></a></li>
              <li className="navigation__products">
                <div>
                <a><Link to='Products' >Products</Link> <DownOutlined /></a>
                <ul className="products__category">
                  {categoryData.map(item =>(
                    <li className="category__item" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
                </div>
                </li>
              <li className="navigation__news"><a><Link to='News' >News</Link></a></li>
              <li className="navigation__contact"><a><Link to='Contact' >Contact</Link></a></li>
            </ul>
            <div className="navigation__tablet">
              <MenuOutlined className="button__openNavi" onClick={()=>{
                document.querySelector('.products__category--tablet').style.display='flex';
                document.querySelector('.products__category--tablet').classList.add('moveRight');
              }} />
              <ul className="products__category--tablet">
                <CloseOutlined onClick={()=>{
                  document.querySelector('.products__category--tablet').style.display="none";
                }} />
                  {categoryData.map(item =>(
                    <li className="category__item--tablet" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="midHead__cart">
                  <div className="midHead__cart--item">
                    <ShoppingCartOutlined />
                    <span> ({cartNumber}) products</span>
                  </div>
                </div>
            </div>
          </div>
        
       
        </div>
        </>
    )
}

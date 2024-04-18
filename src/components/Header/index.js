import "../Header/index.css";
import "../../base.css";
import { Row,Col } from "antd";
import {MailOutlined,PhoneOutlined,ShoppingCartOutlined,SearchOutlined,DownOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";


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
    console.log(categoryData);

    return(

        <>
        <div className="topHead">

            <div className="container">
              <Row>
       
                <Col span={12}>
                  <div className="topHead__login">
                    <h4>SIGN UP</h4>
                    <span>|</span>
                    <h4>SIGN IN</h4>
                  </div>
                </Col>

                <Col span={12}>
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
                </Col>
              </Row>

              
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
            <ul className="container">
              <li className="navigation__home"><a>Home</a></li>
              <li className="navigation__about"><a>About</a></li>
              <li className="navigation__products">
                <div>
                <a>Products <DownOutlined /></a>
                <ul className="products__category">
                  {categoryData.map(item =>(
                    <li className="category__item" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
                </div>
                </li>
              <li className="navigation__news"><a>News</a></li>
              <li className="navigation__contact"><a>Contact</a></li>
            </ul>
       
        </div>
        </>
    )
}

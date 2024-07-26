import "./Header.css";
import "../../base.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useEffect, useState, useContext } from "react";
import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/logo.png';
import { VariContext } from '../../Context/VariContext';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../Context/AuthContext";

export default function Header() {
  const { vari, setVari } = useContext(VariContext);
  const navigate = useNavigate();
  var cartNumber = 0;
  const { user } = useAuth(); 
  const {logout} =useAuth();
  const handleClickNavi = () => {
    const navigationTablet = document.querySelector('.navigation-tablet__content');
    navigationTablet.style.display = 'none';
  }

  const handleChangeNav = (e) => {
    setVari({
      ...vari,
      q: e.currentTarget.dataset.value
    });
    navigate('/Products');
  }

  useEffect(() => {
    const listItemSelect = document.querySelectorAll('.navigation ul li a');
    listItemSelect.forEach(a => {
      a.addEventListener('click', function () {
        listItemSelect.forEach(item => {
          item.classList.remove('selected');
        })
        this.classList.add('selected');
      })
    });
  }, []);

  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/category")
      .then(res => res.json())
      .then(data => {
        setCategoryData(data);
      })
  }, []);

  return (
    <>
      <div className="topHead">
        <div className="container">
          <div className="topHead__login">
            {user ? (
              <div className="Welcome">
               <h6>Welcome, {user.name}</h6>
                <button onClick={logout}>Log out</button>
              </div>
              ) :(<>
                <Link to='/SignUp'><h4>SIGN UP</h4></Link>
                <span>|</span>
                <Link to='/Login'><h4>SIGN IN</h4></Link>
              </>)
            }
           
          </div>

          <div className="topHead__infor">
            <div className="topHead__infor--mail">
              <div className="topHead__infor--mail--icon">
                <i className="bi bi-envelope"></i>
              </div>
              <span>support@sapo.vn</span>
            </div>
            <div className="topHead__infor--phone">
              <div className="topHead__infor--phone--icon">
                <i className="bi bi-telephone"></i>
              </div>
              <span>1900 6750</span>
            </div>
          </div>
        </div>
      </div>
      <div className="midHead">
        <div className="container">
          <div className="midHead__logo">
            <img src={logoImg} alt=""></img>
          </div>
          <div className="midHead__fSearch">
            <form>
              <input type="text" placeholder="Search"></input>
              <button type="submit">
                <i className="bi bi-search"></i>
              </button>
            </form>
          </div>
          <div className="midHead__cart">
            <div className="midHead__cart--item">
              <i className="bi bi-cart"></i>
              <span> ({cartNumber}) products</span>
            </div>
          </div>
        </div>
      </div>

      <div className="navigation">
        <div className="container">
          <ul className="navigation__origin">
            <li className="navigation__home"><a><Link to='/'>Home</Link></a></li>
            <li className="navigation__about"><a><Link to='About'>About</Link></a></li>
            <li className="navigation__products">
              <div>
                <a data-value='' onClick={handleChangeNav}><Link to='Products'>Products</Link><i className="bi bi-chevron-down"></i></a>
                <ul className="products__category">
                  {categoryData.map(item => (
                    <li data-value={item.slug} onClick={handleChangeNav} className="category__item">
                      {item.slug}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li className="navigation__news"><a><Link to='News'>News</Link></a></li>
            <li className="navigation__contact"><a><Link to='Contact'>Contact</Link></a></li>
          </ul>
          <div className="navigation__tablet">
            <i className="bi bi-list button__openNavi" onClick={() => {
              document.querySelector('.navigation-tablet__content').style.display = 'flex';
              document.querySelector('.navigation-tablet__content').classList.add('moveRight');
            }}></i>

            <ul className="navigation-tablet__content">
              <i className="bi bi-x" onClick={() => {
                document.querySelector('.navigation-tablet__content').style.display = "none";
              }}></i>
              <li className="navigation__item" onClick={handleClickNavi}><a><Link to='/'>Home</Link></a></li>
              <li className="navigation__item" onClick={handleClickNavi}><a><Link to='About'>About</Link></a></li>
              <li className="navigation__item" onClick={handleClickNavi}>
                <a><Link to='Products'>Products</Link></a><i className="bi bi-chevron-down"></i>
              </li>
              <li className="navigation__item" onClick={handleClickNavi}><a><Link to='News'>News</Link></a></li>
              <li className="navigation__item" onClick={handleClickNavi}><a><Link to='Contact'>Contact</Link></a></li>
            </ul>
            <div className="midHead__cart">
              <div className="midHead__cart--item">
                <i className="bi bi-cart"></i>
                <span> ({cartNumber}) products</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

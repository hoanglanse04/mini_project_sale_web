import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { VariContext } from '../../Context/VariContext';
import { useEffect, useState,useContext  } from 'react';
import { Link } from 'react-router-dom';
import './index.css'
import { useNavigate } from 'react-router-dom';


export default function Products(props){
  const navigate = useNavigate();

  const handleChangeNav = (e) => {
    setVari({
      ...vari,
      q: e.currentTarget.dataset.value
    });
    navigate('/Products');
  }
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/category")
      .then(res => res.json())
      .then(data => {
        setCategoryData(data);
      })
  }, []);

   const [Data,setData]=useState([])
   const { vari, setVari } = useContext(VariContext);
    useEffect(() => {
        fetch(`http://localhost:3001/products?q=${vari.q}&_sort=${vari.sort}&_order=${vari.order}&_page=${vari.page}&_limit=${vari.limit}`)
        .then(res => res.json())
        .then(data =>{
            setData(data)
        });

    },[vari])

    const handleChange = (e)=>{
        const value = e.target.value;
        setVari({
            ...vari,
            order: value,
            sort: value ? 'price' : ''
        });
    
    
    }


    return(
        <div className='product'>
        <div className="row">
          <div className="product__category d-flex flex-column align-items-center col-xl-2 col-lg-2 col-md-2 ">
          <h3 className='text-center'>Category</h3> 
          <ul className="category">
                  {categoryData.map(item => (
                    <div className='d-flex flex-row  align-items-center'>
                    <i class="bi bi-caret-right-fill"></i>
                    <li data-value={item.slug} onClick={handleChangeNav} className="category__item">
                      {item.name}
                    </li>
                    </div>
                    
                  ))}
                </ul>
          </div>
          <div className="product__content col-xl-10 col-lg-10 col-md-10 ">
          <div className="product__title">
            <div className="container">
            <h3>{(vari.q) ? vari.q :'All Product'}</h3>
            </div>
        </div>
        <div className="product___content">
            <div className="container product___filter d-flex justify-content-end align-items-center ">
            <label>Filter:</label>
            <select className="form-select" onChange={handleChange}>
              <option  value="" selected>Default</option>
              <option value="asc">Asc</option>
              <option  value="desc">Desc</option>
            </select>
           
            </div>
            <div className="container">
                
                <div className="listProduct">
                <Row>
                    {
                        Data.map((item)=>(
                            <Col xl={3} lg={3} md={6} sm={6} xs={12} key={item.id}>
                            <div className='product__item text-center'>
                              <Link to={`/product/${item.id}`}>
                            <h5 className='product__item--discount'>{item.rating}<i class="bi bi-star-fill"></i></h5>
                              <img src={item.thumbnail}></img>
                              <div className='product__item--desc'>
                                <h5 className='product__item--name'>{item.title}</h5>
                                <h5 className='product__item--price'>${item.price}</h5>
                              </div>
                              <button>Mua ngay</button>
                              </Link>
                            </div>
                          </Col>
                        ))
                    }
                </Row>
                </div>
                <div className="paginate text-center d-flex flex-row justify-content-center">
                  <button type="button"  onClick={()=>{
                   setVari(prevState => ({
                    ...prevState,
                    page: prevState.page -1
                  }));
                  }} className='btn btn-secondary'>
                    Pre
                    </button>
                    <a>{vari.page}</a>
                  <button type="button" onClick={()=>{
                   setVari(prevState => ({
                    ...prevState,
                    page: prevState.page + 1
                  }));
                  }} className='btn btn-secondary'>
                    Next
                    </button>
                </div>
                
            </div>

        </div>
          </div>
        </div>
        </div>
    )

}
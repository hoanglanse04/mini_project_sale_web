import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { VariProductContext } from '../../Context/VariProductContext'; // Nhập context đúng
import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Product.css';
import { useNavigate } from 'react-router-dom';

export default function Products(props) {
  const navigate = useNavigate();
  const [categoryData, setCategoryData] = useState([]);
  const [Data, setData] = useState([]);
  const { vari, setVari } = useContext(VariProductContext); // Sử dụng context đúng
  console.log(vari);
  const handleChangeNav = (e) => {

    setVari({
      ...vari,
      categorySearch: e.currentTarget.dataset.value
    });
    navigate('/Products');
  }

  useEffect(() => {
    const url = "http://localhost:3001/category";
    console.log(`Fetching categories from: ${url}`);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setCategoryData(data);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  useEffect(() => {
    const url = `http://localhost:3001/products?category=${vari.categorySearch}&_sort=${vari.sort}&_order=${vari.order}&_page=${vari.page}&_per_page=${vari.per_page}`;
    console.log(`Fetching products from: ${url}`);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log('Fetched products:', data); // Log data to check its structure
        if (data && data.data) {
          setData(data.data); // Lấy dữ liệu từ trường `data`
        } else {
          setData([]); // Nếu không có dữ liệu, đặt thành mảng rỗng
        }
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, [vari]);
  

  const handleChange = (e) => {
    const value = e.target.value;
    setVari({
      ...vari,
      order: value,
      sort: value ? 'price' : ''
    });
  }

  return (
    <div className='product'>
      <div className="row">
        <div className="product__category d-flex flex-column align-items-center col-xl-2 col-lg-2 col-md-2 ">
          <h3 className='text-center'>Category</h3>
          <ul className="category">
            {categoryData.map(item => (
              <div className='d-flex flex-row align-items-center' key={item.id}>
                <i className="bi bi-caret-right-fill"></i>
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
              <h3>{vari.q ? vari.q : 'All Product'}</h3>
            </div>
          </div>
          <div className="product___content">
            <div className="container product___filter d-flex justify-content-end align-items-center ">
              <label>Filter:</label>
              <select className="form-select" onChange={handleChange} defaultValue="">
                <option value="">Default</option>
                <option value="asc">Asc</option>
                <option value="desc">Desc</option>
              </select>
            </div>
            <div className="container">
  <div className="listProduct">
    <Row>
      {Data.length > 0 ? Data.map((item) => (
        <Col xl={3} lg={3} md={6} sm={6} xs={12} key={item.id}>
          <div className='product__item text-center'>
            <Link to={`/product/${item.id}`}>
              <h5 className='product__item--discount'>{item.rating}<i className="bi bi-star-fill"></i></h5>
              <img src={item.thumbnail} alt={item.title}></img>
              <div className='product__item--desc'>
                <h5 className='product__item--name'>{item.title}</h5>
                <h5 className='product__item--price'>${item.price}</h5>
              </div>
              <button>Buy Now</button>
            </Link>
          </div>
        </Col>
      )) : <p>No products found.</p>}
    </Row>
  </div>
  <div className="paginate text-center d-flex flex-row justify-content-center">
  <button
    type="button"
    onClick={() => {
      setVari(prevState => ({
        ...prevState,
        page: Math.max(prevState.page - 1, 1)  // Đảm bảo page không âm
      }));
    }}
    className='btn btn-secondary'
    disabled={vari.page === 1} // Disable nút Previous khi đang ở trang đầu
  >
    Pre
  </button>
  <span className="mx-3">Page {vari.page}</span>
  <button
    type="button"
    onClick={() => {
      setVari(prevState => ({
        ...prevState,
        page: prevState.page + 1
      }));
    }}
    className='btn btn-secondary'
  >
    Next
  </button>
</div>

</div>

          </div>
        </div>
      </div>
    </div>
  );
}

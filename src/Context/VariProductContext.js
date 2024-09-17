// src/Context/VariContext.js
import { createContext, useState } from 'react';

export const VariProductContext = createContext(null);

export const VariProductContextProvider = ({ children }) => {
  const [vari, setVari] = useState({
    q: '',       // Query tìm kiếm hoặc danh mục
    sort: '',    // Sắp xếp
    order: '',   // Thứ tự tăng hoặc giảm dần
    page: 1,     // Trang hiện tại
    per_page: 10,    // Số sản phẩm trên mỗi trang
    categorySearch: ''
  });

  return (
    <VariProductContext.Provider value={{ vari, setVari }}>
      {children}
    </VariProductContext.Provider>
  );
};

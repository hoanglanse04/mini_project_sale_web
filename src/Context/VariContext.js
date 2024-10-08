// src/Context/VariContext.js
import { createContext, useState } from 'react';

export const VariContext = createContext(null);

export const VariProvider = ({ children }) => {
  const [vari, setVari] = useState({
    q: '',       // Query tìm kiếm hoặc danh mục
    sort: '',    // Sắp xếp
    order: '',   // Thứ tự tăng hoặc giảm dần
    page: 1,     // Trang hiện tại
    per_page: 10    // Số sản phẩm trên mỗi trang
  });

  return (
    <VariContext.Provider value={{ vari, setVari }}>
      {children}
    </VariContext.Provider>
  );
};

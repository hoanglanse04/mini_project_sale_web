# Dự Án Web Bán Hàng

Đây là một dự án web bán hàng được xây dựng bằng React. Dự án cung cấp một giao diện người dùng hiện đại để duyệt và mua sản phẩm.

## Mục Lục

- [Giới Thiệu](#giới-thiệu)
- [Tính Năng](#tính-năng)
- [Cài Đặt](#cài-đặt)
- [Cấu Trúc Dự Án](#cấu-trúc-dự-án)
- [Sử Dụng](#sử-dụng)

## Giới Thiệu

Dự án này là một ứng dụng web bán hàng được xây dựng bằng React. Nó bao gồm các tính năng chính như xem sản phẩm, thêm sản phẩm vào giỏ hàng, và thực hiện thanh toán. Giao diện người dùng thân thiện và dễ sử dụng giúp khách hàng dễ dàng duyệt và mua sắm sản phẩm.

## Tính Năng

- Xem danh sách sản phẩm với thông tin chi tiết
- Thêm sản phẩm vào giỏ hàng
- Xem và quản lý giỏ hàng
- Thanh toán và hoàn tất đơn hàng
- Lọc sản phẩm
- Đăng nhập và đăng ký tài khoản

## Cài Đặt

### Yêu Cầu

- Node.js (phiên bản 14.x trở lên)
- npm hoặc yarn

### Cài Đặt Cơ Bản

1. **Clone Repository**

    ```bash
    git clone https://github.com/hoanglanse04/mini_project_sale_web
    cd mini_project_sale_web
    ```

2. **Cài Đặt Các Gói Phụ Thuộc**

    Sử dụng npm:

    ```bash
    npm install
    ```

    Hoặc sử dụng yarn:

    ```bash
    yarn install
    ```

3. **Chạy Ứng Dụng**

    Ứng dụng sẽ được chạy tại [http://localhost:3000](http://localhost:3000).

    Sử dụng API tại [http://localhost:3001](http://localhost:3001). Chạy câu lệnh sau để khởi động json-server:

    ```bash
    json-server --watch db.json --port 3001
    ```

## Cấu Trúc Dự Án

/src
  /components        # Các thành phần giao diện người dùng
  /pages             # Các trang của ứng dụng
  /utils             # Các tiện ích và hàm chung
  /context           # Các context sử dụng
  /assets            # Các thành phần truy cập tự dự án
  App.js             # Thành phần chính của ứng dụng
  index.js           # Điểm vào của ứng dụng
## Sử Dụng

1. **Tạo và Quản Lý Sản Phẩm**

    - Truy cập vào trang sản phẩm để xem danh sách và chi tiết sản phẩm.
    - Thêm sản phẩm vào giỏ hàng bằng cách nhấp vào nút "Thêm vào giỏ hàng".

2. **Quản Lý Giỏ Hàng**

    - Xem giỏ hàng bằng cách nhấp vào biểu tượng giỏ hàng.
    - Thay đổi số lượng sản phẩm hoặc xóa sản phẩm khỏi giỏ hàng.

3. **Thanh Toán**

    - Nhấp vào nút "Thanh toán" để hoàn tất đơn hàng.
    - Nhập thông tin giao hàng và chọn phương thức thanh toán.

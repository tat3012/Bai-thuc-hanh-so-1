# ⚡ TechZone - Cửa Hàng Thiết Bị Công Nghệ & Đồ Chơi Số

Dự án **Bài tập thực hành số 1** môn Lập trình Web / ReactJS.

---

## 🌟 Giới Thiệu Dự Án

TechZone là ứng dụng web bán lẻ thiết bị công nghệ hiện đại được xây dựng bằng **ReactJS (Vite)**, kết hợp cùng **React Router** để quản lý điều hướng đa trang (Single Page Application - SPA).

### ✨ Các Tính Năng & Yêu Cầu Đã Đạt Được:
1. **Khởi tạo bằng Vite + React 19**: Tốc độ build siêu nhanh, hỗ trợ Hot Module Replacement (HMR).
2. **Giao diện Trang chủ (Home)**:
   - Banner Hero ấn tượng kèm nút CTA điều hướng.
   - Danh mục phân loại thiết bị công nghệ (Laptop, Smartphone, Audio, Smartwatch).
   - Danh sách sản phẩm bán chạy (Featured Products) với huy hiệu (Hot, Mới, Giảm giá).
   - Banner ưu đãi Flash Sale sinh viên.
   - Đánh giá khách hàng (Testimonials).
3. **Định dạng CSS chuyên nghiệp (`Home.css`, `index.css`, v.v.)**:
   - Sử dụng CSS Custom Properties (Variables), Flexbox & CSS Grid.
   - Thiết kế chuẩn Responsive tương thích điện thoại, máy tính bảng và màn hình lớn.
   - Hiệu ứng chuyển động mượt mà (transitions, hover micro-interactions).
4. **Các trang & Components bổ sung**:
   - `Navbar`: Menu điều hướng với `NavLink` (tự động highlight trang đang active), thanh tìm kiếm nhanh, badge giỏ hàng.
   - `Footer`: Chân trang đầy đủ thông tin liên hệ, liên kết nhanh, mạng xã hội.
   - `ProductCard`: Thẻ hiển thị sản phẩm với tính năng tương tác thêm vào giỏ hàng.
   - `AboutUs` (`/about-us`): Trang giới thiệu sứ mệnh, tầm nhìn, mốc phát triển và thông tin nhóm sinh viên thực hiện đề tài.
   - `Products` (`/products`): Trang danh mục đầy đủ với bộ lọc danh mục động, tìm kiếm thời gian thực và sắp xếp theo giá.
   - `Contact` (`/contact`): Form gửi lời nhắn có validate và thông báo thành công, thông tin showroom, câu hỏi thường gặp (FAQ).
   - `NotFound` (`*`): Trang thông báo lỗi 404 thân thiện khi truy cập sai đường dẫn.
5. **Tích hợp React Router (`react-router-dom`)**:
   - Chuyển trang mượt mà không load lại trình duyệt (SPA).
   - Hỗ trợ click menu hoặc gõ URL trực tiếp (ví dụ: `http://localhost:3000/about-us`).
   - Tự động cuộn lên đầu trang khi chuyển trang (`ScrollToTop`).

---

## 📁 Cấu Trúc Thư Mục

```text
Bài tập thực hành số 1/
├── public/                 # Tài nguyên tĩnh
├── src/
│   ├── assets/             # Hình ảnh & icon
│   ├── components/         # Các components dùng lại
│   │   ├── Banner.jsx & Banner.css
│   │   ├── Footer.jsx & Footer.css
│   │   ├── Navbar.jsx & Navbar.css
│   │   ├── ProductCard.jsx & ProductCard.css
│   │   └── ScrollToTop.jsx
│   ├── data/
│   │   └── products.js     # Mock dữ liệu sản phẩm & danh mục
│   ├── pages/              # Các trang chính
│   │   ├── AboutUs.jsx & AboutUs.css    # /about-us
│   │   ├── Contact.jsx & Contact.css    # /contact
│   │   ├── Home.jsx & Home.css          # /
│   │   ├── NotFound.jsx & NotFound.css  # 404
│   │   └── Products.jsx & Products.css  # /products
│   ├── App.jsx             # Cấu hình Route chính
│   ├── App.css
│   ├── index.css           # Global CSS variables & reset
│   └── main.jsx            # Entry point của React
├── index.html
├── package.json
├── vite.config.js          # Cấu hình Vite (Port 3000)
└── README.md
```

---

## 🚀 Hướng Dẫn Cài Đặt & Chạy Website

### 1. Cài đặt các thư viện phụ thuộc:
```bash
npm install
```

### 2. Chạy website trên môi trường phát triển (Port 3000):
```bash
npm run dev
```

Mở trình duyệt và truy cập:
- Trang chủ: [http://localhost:3000](http://localhost:3000)
- Trang giới thiệu: [http://localhost:3000/about-us](http://localhost:3000/about-us)
- Trang sản phẩm: [http://localhost:3000/products](http://localhost:3000/products)
- Trang liên hệ: [http://localhost:3000/contact](http://localhost:3000/contact)

### 3. Build sản phẩm đóng gói (Production):
```bash
npm run build
```

---

## 🐙 Hướng Dẫn Đẩy (Push) Code Lên GitHub

Xem hướng dẫn chi tiết từng bước được cung cấp trong phần phản hồi.

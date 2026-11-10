import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Tự động cuộn lên đầu trang khi chuyển Route */}
        <ScrollToTop />

        {/* Thanh Menu điều hướng dùng NavLink */}
        <Navbar />

        {/* Cấu hình các Routes cho ứng dụng */}
        <main className="main-content">
          <Routes>
            {/* 1. Trang chủ: http://localhost:3000/ */}
            <Route path="/" element={<Home />} />

            {/* 2. Trang giới thiệu: http://localhost:3000/about-us */}
            <Route path="/about-us" element={<AboutUs />} />

            {/* 3. Trang danh sách sản phẩm: http://localhost:3000/products */}
            <Route path="/products" element={<Products />} />

            {/* 4. Trang liên hệ: http://localhost:3000/contact */}
            <Route path="/contact" element={<Contact />} />

            {/* 5. Trang lỗi 404 cho các đường dẫn không tồn tại */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Footer chân trang */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;

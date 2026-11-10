import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="container footer-content">
        <div className="footer-col brand-col">
          <Link to="/" className="footer-logo">
            <span className="logo-icon">⚡</span>
            <span>Tech<span className="text-primary">Zone</span></span>
          </Link>
          <p className="footer-desc">
            Hệ thống bán lẻ thiết bị công nghệ chính hãng hàng đầu Việt Nam. Cam kết chất lượng, bảo hành chuẩn quốc tế và trải nghiệm mua sắm tối ưu.
          </p>
          <div className="footer-socials">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon" title="Facebook">🌐 FB</a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-icon" title="YouTube">📺 YT</a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="social-icon" title="TikTok">🎵 TT</a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="social-icon" title="GitHub">🐙 GH</a>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Khám Phá</h4>
          <ul className="footer-links">
            <li><Link to="/">Trang chủ</Link></li>
            <li><Link to="/products">Tất cả sản phẩm</Link></li>
            <li><Link to="/about-us">Về chúng tôi</Link></li>
            <li><Link to="/contact">Hệ thống showroom</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Chính Sách</h4>
          <ul className="footer-links">
            <li><a href="#policy">Chính sách bảo hành</a></li>
            <li><a href="#return">Đổi trả 1-1 trong 30 ngày</a></li>
            <li><a href="#shipping">Vận chuyển & Giao nhận</a></li>
            <li><a href="#privacy">Bảo mật thông tin</a></li>
          </ul>
        </div>

        <div className="footer-col contact-col">
          <h4 className="footer-title">Liên Hệ Trực Tiếp</h4>
          <ul className="contact-info">
            <li>📍 <strong>Địa chỉ:</strong> Số 123 Đường Công Nghệ, Quận 1, TP. Hồ Chí Minh</li>
            <li>📞 <strong>Hotline:</strong> 1900 6868 (8:00 - 22:00)</li>
            <li>✉️ <strong>Email:</strong> support@techzone.vn</li>
            <li>🕒 <strong>Giờ làm việc:</strong> Thứ 2 - Chủ Nhật (8h00 - 21h30)</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container bottom-content">
          <p>© {new Date().getFullYear()} TechZone. Dự án Bài tập thực hành số 1 - Lập trình ReactJS & React Router.</p>
          <p className="student-credit">Thiết kế & Xây dựng với Vite + React 19 + React Router v7</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

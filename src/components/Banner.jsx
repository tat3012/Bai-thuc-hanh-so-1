import { Link } from 'react-router-dom';
import './Banner.css';

function Banner() {
  return (
    <section className="banner-section">
      <div className="container banner-container">
        <div className="banner-text">
          <span className="banner-badge badge badge-primary">✨ Công nghệ dẫn đầu 2026</span>
          <h1 className="banner-title">
            Nâng Tầm Trải Nghiệm <br />
            Với <span className="highlight-text">Hệ Sinh Thái TechZone</span>
          </h1>
          <p className="banner-subtitle">
            Khám phá bộ sưu tập máy tính xách tay cao cấp, điện thoại thông minh đỉnh cao và các phụ kiện công nghệ đột phá với chính sách bảo hành 12 tháng 1 đổi 1.
          </p>
          <div className="banner-actions">
            <Link to="/products" className="btn btn-primary">
              Khám Phá Sản Phẩm →
            </Link>
            <Link to="/about-us" className="btn btn-outline">
              Về TechZone
            </Link>
          </div>

          <div className="banner-trust-points">
            <div className="trust-item">
              <span className="trust-icon">🚀</span>
              <div>
                <strong>Giao siêu tốc 2h</strong>
                <p>Nội thành miễn phí</p>
              </div>
            </div>
            <div className="trust-item">
              <span className="trust-icon">🛡️</span>
              <div>
                <strong>Chính hãng 100%</strong>
                <p>Bảo hành uy tín</p>
              </div>
            </div>
            <div className="trust-item">
              <span className="trust-icon">🔄</span>
              <div>
                <strong>30 ngày đổi mới</strong>
                <p>Lỗi do nhà sản xuất</p>
              </div>
            </div>
          </div>
        </div>

        <div className="banner-visual">
          <div className="visual-card">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
              alt="Tech Workspace"
              className="hero-main-img"
            />
            <div className="floating-stat stat-1">
              <span className="stat-icon">🔥</span>
              <div>
                <p className="stat-num">5,000+</p>
                <p className="stat-label">Khách hàng tin chọn</p>
              </div>
            </div>
            <div className="floating-stat stat-2">
              <span className="stat-icon">⭐</span>
              <div>
                <p className="stat-num">4.9 / 5.0</p>
                <p className="stat-label">Hài lòng tuyệt đối</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;

import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';
import './Home.css';

function Home() {
  const featuredProducts = products.filter((p) => p.isFeatured);

  return (
    <div className="home-page">
      {/* 1. Hero Banner Component */}
      <Banner />

      {/* 2. Danh mục nổi bật */}
      <section className="categories-section">
        <div className="container">
          <div className="section-title">
            <span className="badge badge-primary">Danh mục</span>
            <h2>Khám Phá Theo Nhóm Thiết Bị</h2>
            <p>Trải nghiệm đầy đủ các phân khúc công nghệ hàng đầu hiện nay</p>
          </div>

          <div className="categories-grid">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={cat.id === 'all' ? '/products' : `/products?category=${cat.id}`}
                className="category-card"
              >
                <div className="category-icon">{cat.icon}</div>
                <h3 className="category-name">{cat.name}</h3>
                <span className="category-link-text">Xem chi tiết →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Sản phẩm nổi bật (Featured Products) */}
      <section className="featured-section">
        <div className="container">
          <div className="section-header-flex">
            <div>
              <span className="badge badge-hot">Nổi bật</span>
              <h2>Sản Phẩm Bán Chạy Nhất</h2>
              <p>Top thiết bị được cộng đồng công nghệ yêu thích và săn đón</p>
            </div>
            <Link to="/products" className="btn btn-outline view-all-btn">
              Xem tất cả sản phẩm ({products.length}) →
            </Link>
          </div>

          <div className="products-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Khuyến mãi & Flash Sale Promo */}
      <section className="promo-banner-section">
        <div className="container">
          <div className="promo-banner-card">
            <div className="promo-content">
              <span className="badge badge-hot">Ưu đãi mùa tựu trường</span>
              <h2>Giảm Đến 40% Cho Học Sinh & Sinh Viên</h2>
              <p>
                Áp dụng cho các dòng laptop Ultrabook, MacBook và phụ kiện học tập cao cấp. Miễn phí cài đặt phần mềm và hỗ trợ kỹ thuật trọn đời máy.
              </p>
              <div className="promo-buttons">
                <Link to="/products" className="btn btn-primary">
                  Săn Sale Ngay
                </Link>
                <Link to="/contact" className="btn btn-outline" style={{ background: '#fff' }}>
                  Tư Vấn Miễn Phí
                </Link>
              </div>
            </div>
            <div className="promo-image-box">
              <img
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80"
                alt="Laptop Sale"
                className="promo-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Phản hồi khách hàng (Testimonials) */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-title">
            <span className="badge badge-primary">Đánh giá</span>
            <h2>Khách Hàng Nói Gì Về Chúng Tôi</h2>
            <p>Sự hài lòng của bạn là động lực phát triển của TechZone</p>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-quote">
                "Mình mua MacBook Pro M3 tại TechZone, máy nguyên seal chính hãng, giao hàng trong 2 tiếng rất nhanh. Nhân viên tư vấn nhiệt tình."
              </p>
              <div className="customer-info">
                <div className="avatar">HN</div>
                <div>
                  <strong>Hoàng Nam</strong>
                  <span>Software Engineer</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-quote">
                "Giao diện website dễ sử dụng, đặt hàng tiện lợi. Chính sách bảo hành rõ ràng và giá cả cạnh tranh hơn nhiều hệ thống khác."
              </p>
              <div className="customer-info">
                <div className="avatar">TL</div>
                <div>
                  <strong>Thùy Linh</strong>
                  <span>UI/UX Designer</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-quote">
                "Đổi trả máy rất nhanh khi có lỗi phát sinh nhỏ, không gây phiền hà cho khách hàng. Đánh giá 5 sao cho dịch vụ hậu mãi!"
              </p>
              <div className="customer-info">
                <div className="avatar">QA</div>
                <div>
                  <strong>Quốc Anh</strong>
                  <span>Kinh doanh tự do</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

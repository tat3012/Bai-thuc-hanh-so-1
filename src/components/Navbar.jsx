import { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="navbar-wrapper">
      <div className="navbar-topbar">
        <div className="container topbar-content">
          <span>🔥 Siêu ưu đãi mừng khai trương - Giảm giá tới 40% toàn bộ sản phẩm!</span>
          <div className="topbar-links">
            <span>Hotline: 1900 6868</span>
            <span>Hỗ trợ kỹ thuật 24/7</span>
          </div>
        </div>
      </div>

      <nav className="navbar-main">
        <div className="container navbar-container">
          {/* Logo */}
          <Link to="/" className="navbar-logo">
            <span className="logo-icon">⚡</span>
            <span className="logo-text">Tech<span className="logo-accent">Zone</span></span>
          </Link>

          {/* Navigation Links (react-router NavLink) */}
          <ul className={`navbar-nav ${mobileMenuOpen ? 'open' : ''}`}>
            <li className="nav-item">
              <NavLink
                to="/"
                end
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                onClick={() => setMobileMenuOpen(false)}
              >
                Trang chủ
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/products"
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                onClick={() => setMobileMenuOpen(false)}
              >
                Sản phẩm
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about-us"
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                onClick={() => setMobileMenuOpen(false)}
              >
                Giới thiệu
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                onClick={() => setMobileMenuOpen(false)}
              >
                Liên hệ
              </NavLink>
            </li>
          </ul>

          {/* Search bar & Action buttons */}
          <div className="navbar-actions">
            <form onSubmit={handleSearch} className="search-box">
              <input
                type="text"
                placeholder="Tìm MacBook, iPhone..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" aria-label="Tìm kiếm">
                🔍
              </button>
            </form>

            <Link to="/products" className="cart-badge-btn" title="Giỏ hàng">
              🛒 <span className="cart-count">3</span>
            </Link>

            {/* Mobile menu toggle */}
            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';
import './Products.css';

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Đọc params từ URL
  const selectedCategory = searchParams.get('category') || 'all';
  const urlSearch = searchParams.get('search') || '';

  const [keyword, setKeyword] = useState(urlSearch);
  const [sortBy, setSortBy] = useState('default');

  // Xử lý đổi category và update URL query
  const handleCategoryChange = (catId) => {
    const newParams = new URLSearchParams(searchParams);
    if (catId === 'all') {
      newParams.delete('category');
    } else {
      newParams.set('category', catId);
    }
    setSearchParams(newParams);
  };

  // Xử lý tìm kiếm
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const newParams = new URLSearchParams(searchParams);
    if (keyword.trim()) {
      newParams.set('search', keyword.trim());
    } else {
      newParams.delete('search');
    }
    setSearchParams(newParams);
  };

  // Reset toàn bộ bộ lọc
  const handleResetFilters = () => {
    setKeyword('');
    setSortBy('default');
    setSearchParams({});
  };

  // Lọc và sắp xếp sản phẩm
  const filteredProducts = useMemo(() => {
    return products
      .filter((item) => {
        const matchesCategory =
          selectedCategory === 'all' || item.category === selectedCategory;
        const searchTarget = urlSearch.toLowerCase().trim();
        const matchesSearch =
          !searchTarget ||
          item.name.toLowerCase().includes(searchTarget) ||
          item.description.toLowerCase().includes(searchTarget);
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return 0;
      });
  }, [selectedCategory, urlSearch, sortBy]);

  return (
    <div className="products-page">
      <div className="products-header">
        <div className="container">
          <span className="badge badge-primary">Sản phẩm</span>
          <h1>Kho Thiết Bị Công Nghệ Chính Hãng</h1>
          <p>Khám phá toàn bộ danh mục sản phẩm cao cấp tại TechZone</p>
        </div>
      </div>

      <div className="container products-main-container">
        {/* Bộ lọc Categories */}
        <div className="filter-bar">
          <div className="category-pills">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`category-pill ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => handleCategoryChange(cat.id)}
              >
                <span>{cat.icon}</span> {cat.name}
              </button>
            ))}
          </div>

          {/* Ô tìm kiếm & Sắp xếp */}
          <div className="filter-controls">
            <form onSubmit={handleSearchSubmit} className="search-inline">
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
              <button type="submit">Tìm</button>
            </form>

            <select
              className="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="default">Sắp xếp: Mặc định</option>
              <option value="price-asc">Giá: Thấp đến Cao</option>
              <option value="price-desc">Giá: Cao đến Thấp</option>
              <option value="rating">Đánh giá cao nhất</option>
            </select>
          </div>
        </div>

        {/* Thông tin kết quả */}
        <div className="results-summary">
          <span>Tìm thấy <strong>{filteredProducts.length}</strong> sản phẩm</span>
          {(selectedCategory !== 'all' || urlSearch) && (
            <button className="reset-btn" onClick={handleResetFilters}>
              ✕ Xóa bộ lọc
            </button>
          )}
        </div>

        {/* Lưới sản phẩm */}
        {filteredProducts.length > 0 ? (
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="no-results-box">
            <span className="no-results-icon">🔍</span>
            <h3>Không tìm thấy sản phẩm phù hợp</h3>
            <p>Vui lòng thử lại với từ khóa khác hoặc xóa bộ lọc để xem toàn bộ danh mục.</p>
            <button className="btn btn-primary" onClick={handleResetFilters}>
              Xem lại tất cả sản phẩm
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;

import { useState } from 'react';
import { formatPrice } from '../data/products';
import './ProductCard.css';

function ProductCard({ product }) {
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const getBadgeClass = (tag) => {
    if (!tag) return '';
    if (tag.toLowerCase().includes('hot')) return 'badge-hot';
    if (tag.toLowerCase().includes('mới')) return 'badge-new';
    return 'badge-primary';
  };

  return (
    <div className="product-card">
      <div className="product-image-box">
        {product.tag && (
          <span className={`product-badge badge ${getBadgeClass(product.tag)}`}>
            {product.tag}
          </span>
        )}
        <img
          src={product.image}
          alt={product.name}
          className="product-img"
          loading="lazy"
        />
      </div>

      <div className="product-info">
        <div className="product-rating">
          <span className="stars">⭐ {product.rating}</span>
          <span className="reviews">({product.reviewsCount} đánh giá)</span>
        </div>

        <h3 className="product-name" title={product.name}>
          {product.name}
        </h3>

        <p className="product-desc">{product.description}</p>

        <div className="product-pricing">
          <div className="price-block">
            <span className="current-price">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="original-price">{formatPrice(product.originalPrice)}</span>
            )}
          </div>

          <button
            className={`add-cart-btn ${added ? 'added' : ''}`}
            onClick={handleAddToCart}
            title="Thêm vào giỏ hàng"
          >
            {added ? '✓ Đã thêm' : '+ Thêm giỏ'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

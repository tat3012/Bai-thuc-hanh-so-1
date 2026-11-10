import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <div className="not-found-page">
      <div className="container not-found-container">
        <div className="not-found-code">404</div>
        <h1>Không Tìm Thấy Trang Yêu Cầu</h1>
        <p>
          Địa chỉ URL bạn truy cập không tồn tại hoặc đã được chuyển sang đường dẫn khác. Vui lòng kiểm tra lại URL hoặc quay về trang chủ.
        </p>
        <div className="not-found-actions">
          <Link to="/" className="btn btn-primary">
            🏠 Về Trang Chủ
          </Link>
          <Link to="/products" className="btn btn-outline">
            🛍️ Xem Danh Sách Sản Phẩm
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;

import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'support',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Vui lòng điền đầy đủ các thông tin bắt buộc (*)');
      return;
    }
    setSubmitted(true);
  };

  const faqs = [
    {
      q: 'Chính sách bảo hành và đổi trả tại TechZone như thế nào?',
      a: 'Toàn bộ sản phẩm chính hãng đều được bảo hành tiêu chuẩn 12-24 tháng theo quy định nhà sản xuất. Đổi mới 1-1 trong 30 ngày nếu phát sinh lỗi kỹ thuật từ phần cứng.',
    },
    {
      q: 'Thời gian giao hàng mất bao lâu?',
      a: 'Nội thành TP.HCM và Hà Nội: Giao hỏa tốc 2 giờ hoặc trong ngày. Các tỉnh thành khác trên toàn quốc: Nhận hàng từ 2 đến 3 ngày làm việc qua đơn vị chuyển phát nhanh.',
    },
    {
      q: 'TechZone có hỗ trợ trả góp 0% không?',
      a: 'Có, TechZone liên kết với hơn 20 ngân hàng và các đối tác tài chính (Fundiin, Home Credit) hỗ trợ trả góp lãi suất 0% qua thẻ tín dụng hoặc CCCD gắn chip.',
    },
  ];

  return (
    <div className="contact-page">
      <div className="contact-header">
        <div className="container">
          <span className="badge badge-primary">Liên hệ</span>
          <h1>Kết Nối Với Chúng Tôi</h1>
          <p>Đội ngũ chuyên viên TechZone luôn sẵn sàng lắng nghe và giải đáp mọi yêu cầu của bạn</p>
        </div>
      </div>

      <div className="container contact-main-grid">
        {/* Cột 1: Thông tin liên hệ & Showroom */}
        <div className="contact-info-panel">
          <h2>Thông Tin Trực Tiếp</h2>
          <p className="panel-desc">
            Bạn có thể ghé thăm trực tiếp các showroom của chúng tôi để trải nghiệm thiết bị trên tay hoặc liên hệ qua các kênh hỗ trợ bên dưới:
          </p>

          <div className="info-cards-list">
            <div className="info-card">
              <span className="info-icon">📍</span>
              <div>
                <strong>Showroom Hồ Chí Minh</strong>
                <p>Số 123 Đường Công Nghệ, Phường Bến Nghé, Quận 1</p>
              </div>
            </div>

            <div className="info-card">
              <span className="info-icon">📍</span>
              <div>
                <strong>Showroom Hà Nội</strong>
                <p>Số 456 Phố Tràng Tiền, Quận Hoàn Kiếm, Hà Nội</p>
              </div>
            </div>

            <div className="info-card">
              <span className="info-icon">📞</span>
              <div>
                <strong>Tổng đài hỗ trợ</strong>
                <p>1900 6868 (Bán hàng & Kỹ thuật - 8:00 - 22:00)</p>
              </div>
            </div>

            <div className="info-card">
              <span className="info-icon">✉️</span>
              <div>
                <strong>Hòm thư điện tử</strong>
                <p>contact@techzone.vn | support@techzone.vn</p>
              </div>
            </div>
          </div>

          {/* FAQ Nhỏ */}
          <div className="contact-faq-box">
            <h3>Câu Hỏi Thường Gặp</h3>
            <div className="faq-list">
              {faqs.map((item, idx) => (
                <div key={idx} className="faq-item">
                  <strong>❓ {item.q}</strong>
                  <p>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cột 2: Form gửi phản hồi */}
        <div className="contact-form-panel">
          {submitted ? (
            <div className="success-feedback">
              <span className="success-icon">🎉</span>
              <h2>Gửi Tin Nhắn Thành Công!</h2>
              <p>
                Cảm ơn bạn <strong>{formData.name}</strong> đã liên hệ với TechZone. Nhân viên chăm sóc khách hàng sẽ phản hồi qua email <strong>{formData.email}</strong> trong thời gian sớm nhất.
              </p>
              <button
                className="btn btn-primary"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', phone: '', subject: 'support', message: '' });
                }}
              >
                Gửi thêm tin nhắn khác
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <h2>Gửi Lời Nhắn Cho TechZone</h2>
              <p className="form-sub">Điền biểu mẫu bên dưới và chúng tôi sẽ liên lạc lại trong vòng 1 giờ</p>

              <div className="form-group">
                <label>Họ và tên <span className="req">*</span></label>
                <input
                  type="text"
                  name="name"
                  placeholder="Ví dụ: Nguyễn Văn A"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Email liên hệ <span className="req">*</span></label>
                  <input
                    type="email"
                    name="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Số điện thoại</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="0987 654 321"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Vấn đề bạn quan tâm</label>
                <select name="subject" value={formData.subject} onChange={handleChange}>
                  <option value="support">Tư vấn chọn mua thiết bị</option>
                  <option value="warranty">Bảo hành & Sửa chữa</option>
                  <option value="business">Hợp tác kinh doanh / Doanh nghiệp</option>
                  <option value="other">Góp ý dịch vụ khác</option>
                </select>
              </div>

              <div className="form-group">
                <label>Nội dung chi tiết <span className="req">*</span></label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Hãy mô tả chi tiết yêu cầu hoặc câu hỏi của bạn..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                Gửi Yêu Cầu Liên Hệ →
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;

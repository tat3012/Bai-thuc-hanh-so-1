import { Link } from 'react-router-dom';
import './AboutUs.css';

function AboutUs() {
  const teamMembers = [
    {
      id: 1,
      name: 'Nguyễn Văn A',
      role: 'Team Leader & Fullstack Developer',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80',
      bio: 'Chịu trách nhiệm kiến trúc hệ thống, tích hợp React Router và cấu hình dự án Vite.',
    },
    {
      id: 2,
      name: 'Trần Thị B',
      role: 'Frontend UI/UX Designer',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80',
      bio: 'Thiết kế giao diện hiện đại, tối ưu hóa trải nghiệm người dùng và responsive đa thiết bị.',
    },
    {
      id: 3,
      name: 'Lê Hoàng C',
      role: 'React Component Developer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80',
      bio: 'Xây dựng các reusable component, quản lý state và tương tác giỏ hàng sản phẩm.',
    },
  ];

  const milestones = [
    { year: '2022', title: 'Khởi đầu ý tưởng', desc: 'Dự án ra đời từ mong muốn xây dựng nền tảng công nghệ số tinh gọn.' },
    { year: '2023', title: 'Mở rộng quy mô', desc: 'Hợp tác với hơn 20 nhà phân phối thiết bị chính hãng tại Việt Nam.' },
    { year: '2024', title: 'Hệ thống Showroom', desc: 'Khai trương 5 showroom trải nghiệm công nghệ tại TP.HCM & Hà Nội.' },
    { year: '2026', title: 'Chuyển đổi số toàn diện', desc: 'Ra mắt nền tảng web mới trên nền ReactJS, tốc độ cao và thân thiện.' },
  ];

  return (
    <div className="about-page">
      {/* 1. Header Hero */}
      <section className="about-hero">
        <div className="container">
          <span className="badge badge-primary">Về chúng tôi</span>
          <h1>Kiến Tạo Giá Trị Công Nghệ Cho Mọi Nhà</h1>
          <p className="about-hero-sub">
            TechZone là điểm đến tin cậy của cộng đồng yêu công nghệ, nơi mang đến những thiết bị tiên tiến nhất cùng trải nghiệm dịch vụ tận tâm chuẩn mực.
          </p>
        </div>
      </section>

      {/* 2. Sứ Mệnh & Tầm Nhìn */}
      <section className="mission-section">
        <div className="container mission-grid">
          <div className="mission-card">
            <div className="mission-icon">🎯</div>
            <h3>Sứ Mệnh Của Chúng Tôi</h3>
            <p>
              Đem những sản phẩm công nghệ tiên tiến nhất trên thế giới đến tay người dùng Việt Nam với chi phí hợp lý nhất, bảo hành minh bạch và chế độ hậu mãi vượt trội.
            </p>
          </div>
          <div className="mission-card">
            <div className="mission-icon">🔭</div>
            <h3>Tầm Nhìn 2030</h3>
            <p>
              Trở thành hệ sinh thái bán lẻ và dịch vụ công nghệ số hàng đầu, đồng hành cùng thế hệ trẻ trong học tập, sáng tạo và làm việc hiệu quả.
            </p>
          </div>
          <div className="mission-card">
            <div className="mission-icon">💎</div>
            <h3>Giá Trị Cốt Lõi</h3>
            <p>
              Trung thực - Tận tâm - Đổi mới sáng tạo - Đồng hành lâu dài. Sự hài lòng tuyệt đối của khách hàng là thước đo thành công cao nhất của TechZone.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Con Số Ấn Tượng */}
      <section className="stats-section">
        <div className="container stats-grid">
          <div className="stat-box">
            <span className="stat-number">15,000+</span>
            <span className="stat-title">Khách hàng tin dùng</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">100%</span>
            <span className="stat-title">Hàng chính hãng</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">64</span>
            <span className="stat-title">Tỉnh thành giao hàng</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">99.8%</span>
            <span className="stat-title">Đánh giá 5 sao</span>
          </div>
        </div>
      </section>

      {/* 4. Hành Trình Phát Triển */}
      <section className="timeline-section">
        <div className="container">
          <div className="section-title">
            <span className="badge badge-primary">Lịch sử</span>
            <h2>Chặng Đường Phát Triển</h2>
            <p>Từng bước khẳng định vị thế thương hiệu công nghệ uy tín</p>
          </div>

          <div className="timeline-grid">
            {milestones.map((item, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-year">{item.year}</div>
                <h4 className="timeline-title">{item.title}</h4>
                <p className="timeline-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Đội ngũ thực hiện dự án (Sinh viên thực hiện đề tài) */}
      <section className="team-section">
        <div className="container">
          <div className="section-title">
            <span className="badge badge-primary">Thành viên</span>
            <h2>Đội Ngũ Thực Hiện Đề Tài</h2>
            <p>Nhóm sinh viên phát triển dự án Bài tập thực hành số 1</p>
          </div>

          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-card">
                <div className="team-avatar-box">
                  <img src={member.avatar} alt={member.name} className="team-avatar" />
                </div>
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <span className="team-role">{member.role}</span>
                  <p className="team-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="about-cta-section">
        <div className="container">
          <div className="about-cta-card">
            <h2>Sẵn Sàng Trải Nghiệm Công Nghệ Đỉnh Cao?</h2>
            <p>Khám phá hơn 500+ sản phẩm chính hãng với mức giá hấp dẫn cùng nhiều quà tặng độc quyền.</p>
            <div className="cta-actions">
              <Link to="/products" className="btn btn-primary">
                Xem Sản Phẩm Ngay
              </Link>
              <Link to="/contact" className="btn btn-outline" style={{ background: '#fff' }}>
                Liên Hệ Tư Vấn
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;

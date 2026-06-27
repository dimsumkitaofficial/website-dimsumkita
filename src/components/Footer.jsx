import "../Footer.css";
import logo from "../assets/Logo RB.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top-line"></div>

      <div className="footer-container">
        {/* Brand */}

        <div className="footer-brand">
          <img src={logo} alt="Dimsum Kita" />

          <div className="footer-brand-text">
            <h2>DIMSUM KITA</h2>

            <span className="footer-tagline">
              Premium • Fresh • Full Daging
            </span>

            <p>
              Dimsum premium dengan isian full daging, dibuat fresh setiap hari
              menggunakan bahan berkualitas dan disajikan hangat untuk keluarga
              Indonesia.
            </p>
          </div>
        </div>

        {/* Kontak */}

        <div className="footer-links">
          <h3>Kontak</h3>

          <a
            href="https://wa.me/6289507310566"
            target="_blank"
            rel="noreferrer"
          >
            💬 WhatsApp
          </a>

          <a href="mailto:dimsumkitaaofficial@gmail.com">📧 Email</a>
        </div>

        {/* Sosial */}

        <div className="footer-links">
          <h3>Sosial Media</h3>

          <a
            href="https://instagram.com/dimsumkitaofficial"
            target="_blank"
            rel="noreferrer"
          >
            📷 Instagram
          </a>

          <a
            href="https://tiktok.com/@dimsumkitaofficial"
            target="_blank"
            rel="noreferrer"
          >
            🎵 TikTok
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 <strong>Dimsum Kita</strong>. All Rights Reserved.
      </div>
    </footer>
  );
}

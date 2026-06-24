import "../Footer.css";
import logo from "../assets/Logo RB.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <img src={logo} alt="Dimsum Kita" />

          <div className="footer-brand-text">
            <h2>DIMSUM KITA</h2>

            <p>
              Dimsum premium, full daging, fresh dibuat setiap hari dan
              disajikan hangat untuk keluarga Indonesia.
            </p>
          </div>
        </div>

        <div className="footer-links">
          <h3>Kontak</h3>

          <a
            href="https://wa.me/6289507310566"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>

          <a href="mailto:dimsumkitaofficial@gmail.com">
            dimsumkitaofficial@gmail.com
          </a>
        </div>

        <div className="footer-links">
          <h3>Sosial Media</h3>

          <a
            href="https://instagram.com/dimsumkitaofficial"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>

          <a
            href="https://tiktok.com/@dimsumkitaofficial"
            target="_blank"
            rel="noreferrer"
          >
            TikTok
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 Dimsum Kita. All Rights Reserved.
      </div>
    </footer>
  );
}

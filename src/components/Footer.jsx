import "../Footer.css";

import logo from "../assets/Logo RB.png";

// Feature Icons
import chickenIcon from "../assets/FullDaging.png";
import halalIcon from "../assets/Halal.png";
import deliveryIcon from "../assets/SiapAntar.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* ================= LEFT ================= */}

        <div className="footer-left">
          <img src={logo} alt="Dimsum Kita" className="footer-logo" />

          <h2>DIMSUM KITA</h2>

          <p className="footer-tagline">Premium & Fresh</p>

          <p className="footer-description">
            Dimsum premium dengan isian full daging ayam yang dibuat fresh
            setiap hari menggunakan bahan pilihan berkualitas. Cocok dinikmati
            bersama keluarga, teman maupun sebagai hidangan favorit di setiap
            momen.
          </p>
        </div>

        {/* ================= MIDDLE ================= */}

        <div className="footer-middle">
          <div className="footer-title">Info Kontak</div>

          <a
            href="https://wa.me/6289507310566"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>

          <a href="mailto:dimsumkitaaofficial@gmail.com">Email</a>
        </div>

        {/* ================= RIGHT ================= */}

        <div className="footer-right">
          <div className="footer-title">Sosial Media</div>

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

      {/* ================= FEATURE ================= */}

      <div className="footer-feature">
        <div className="feature-card">
          <img src={chickenIcon} alt="Full Daging" />

          <span>Full Daging Ayam</span>
        </div>

        <div className="feature-card">
          <img src={halalIcon} alt="100% Halal" />

          <span>100% Halal</span>
        </div>

        <div className="feature-card">
          <img src={deliveryIcon} alt="Siap Diantar" />

          <span>Siap Diantar</span>
        </div>
      </div>

      {/* ================= COPYRIGHT ================= */}

      <div className="footer-bottom">
        © 2025 <strong>Dimsum Kita.</strong> All Rights Reserved.
      </div>
    </footer>
  );
}

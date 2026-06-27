import "../Footer.css";

import logo from "../assets/Logo RB.png";

import waIcon from "../assets/icons/WA.png";
import emailIcon from "../assets/icons/Email.png";
import igIcon from "../assets/icons/IGpng";
import tiktokIcon from "../assets/icons/TikTok.png";

import meatIcon from "../assets/icons/FullDaging.png";
import freshIcon from "../assets/icons/Halal.png";
import deliveryIcon from "../assets/icons/SiapAntar.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        {/* ================= BRAND ================= */}

        <div className="footer-brand">
          <img src={logo} alt="Dimsum Kita" className="footer-logo" />

          <h2>DIMSUM KITA</h2>

          <div className="footer-tagline">
            <span>Premium</span>

            <span>&</span>

            <span>Fresh</span>
          </div>

          <p>
            Dimsum premium dengan isian full daging, dibuat fresh setiap hari
            menggunakan bahan berkualitas dan disajikan hangat untuk keluarga
            Indonesia.
          </p>
        </div>

        {/* ================= RIGHT ================= */}

        <div className="footer-right">
          {/* ================= CONTACT ================= */}

          <div className="footer-box">
            <h3>Kontak</h3>

            <a
              href="https://wa.me/6289507310566"
              target="_blank"
              rel="noreferrer"
            >
              <img src={waIcon} alt="" />

              <span>0895-0731-0566</span>
            </a>

            <a href="mailto:dimsumkitaaofficial@gmail.com">
              <img src={emailIcon} alt="" />

              <span>dimsumkitaaofficial@gmail.com</span>
            </a>
          </div>

          {/* ================= SOCIAL ================= */}

          <div className="footer-box">
            <h3>Sosial Media</h3>

            <a
              href="https://instagram.com/dimsumkitaofficial"
              target="_blank"
              rel="noreferrer"
            >
              <img src={igIcon} alt="" />

              <span>@dimsumkitaofficial</span>
            </a>

            <a
              href="https://tiktok.com/@dimsumkitaofficial"
              target="_blank"
              rel="noreferrer"
            >
              <img src={tiktokIcon} alt="" />

              <span>@dimsumkitaofficial</span>
            </a>
          </div>
        </div>
      </div>

      {/* ================= FEATURE ================= */}

      <div className="footer-feature">
        <div className="feature-card">
          <img src={meatIcon} alt="" />

          <span>Full Daging</span>
        </div>

        <div className="feature-card">
          <img src={freshIcon} alt="" />

          <span>Fresh</span>
        </div>

        <div className="feature-card">
          <img src={deliveryIcon} alt="" />

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

import "../Footer.css";

import logo from "../assets/Logo RB.png";

// Contact
import waIcon from "../assets/icons/WA.png";
import emailIcon from "../assets/icons/Email.png";

// Social
import igIcon from "../assets/icons/IG.png";
import tiktokIcon from "../assets/icons/TikTok.png";

// Feature
import meatIcon from "../assets/icons/FullDaging.png";
import freshIcon from "../assets/icons/Halal.png";
import deliveryIcon from "../assets/icons/SiapAntar.png";

export default function Footer() {
  return (
    <footer className="footer">
      {/* ===================== TOP ===================== */}

      <div className="footer-top">
        {/* LOGO */}

        <div className="footer-logo-area">
          <img src={logo} alt="Dimsum Kita" className="footer-logo" />
        </div>

        {/* BRAND */}

        <div className="footer-brand">
          <h2>DIMSUM KITA</h2>

          <div className="footer-tagline">
            <span>Premium</span>
            <span>•</span>
            <span>Fresh</span>
          </div>

          <p>
            Dimsum premium dengan isian <strong>full daging</strong>, dibuat
            fresh setiap hari menggunakan bahan berkualitas, halal, dan
            disajikan hangat untuk keluarga Indonesia.
          </p>

          {/* FEATURE */}

          <div className="footer-feature">
            <div className="feature-item">
              <img src={meatIcon} alt="Full Daging" />
              <span>Full Daging</span>
            </div>

            <div className="feature-item">
              <img src={freshIcon} alt="Fresh" />
              <span>Fresh</span>
            </div>

            <div className="feature-item">
              <img src={deliveryIcon} alt="Siap Diantar" />
              <span>Siap Diantar</span>
            </div>
          </div>
        </div>

        {/* CONTACT */}

        <div className="footer-column">
          <h3>Kontak</h3>

          <a
            href="https://wa.me/6289507310566"
            target="_blank"
            rel="noreferrer"
          >
            <img src={waIcon} alt="WhatsApp" />

            <span>0895-0731-0566</span>
          </a>

          <a href="mailto:dimsumkitaaofficial@gmail.com">
            <img src={emailIcon} alt="Email" />

            <span>dimsumkitaaofficial@gmail.com</span>
          </a>
        </div>

        {/* SOCIAL */}

        <div className="footer-column">
          <h3>Sosial Media</h3>

          <a
            href="https://instagram.com/dimsumkitaofficial"
            target="_blank"
            rel="noreferrer"
          >
            <img src={igIcon} alt="Instagram" />

            <span>@dimsumkitaofficial</span>
          </a>

          <a
            href="https://tiktok.com/@dimsumkitaofficial"
            target="_blank"
            rel="noreferrer"
          >
            <img src={tiktokIcon} alt="TikTok" />

            <span>@dimsumkitaofficial</span>
          </a>
        </div>
      </div>

      {/* ===================== COPYRIGHT ===================== */}

      <div className="footer-bottom">
        © 2025 <strong>Dimsum Kita.</strong> All Rights Reserved.
      </div>
    </footer>
  );
}

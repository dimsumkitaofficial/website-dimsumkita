import "../Footer.css";
import logo from "../assets/Logo RB.png";

import {
  FaWhatsapp,
  FaInstagram,
  FaTiktok,
  FaShippingFast,
} from "react-icons/fa";

import {
  MdEmail,
  MdRestaurant,
  MdOutlineLocalFireDepartment,
} from "react-icons/md";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* BRAND */}

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

            <div className="footer-feature">
              <div>
                <MdRestaurant />
                <span>Full Daging</span>
              </div>

              <div>
                <MdOutlineLocalFireDepartment />
                <span>Fresh</span>
              </div>

              <div>
                <FaShippingFast />
                <span>Siap Diantar</span>
              </div>
            </div>
          </div>
        </div>

        {/* KONTAK */}

        <div className="footer-links">
          <h3>Kontak</h3>

          <a
            href="https://wa.me/6289507310566"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp className="icon wa" />
            <span>0895-0731-0566</span>
          </a>

          <a href="mailto:dimsumkitaaofficial@gmail.com">
            <MdEmail className="icon email" />
            <span>dimsumkitaaofficial@gmail.com</span>
          </a>
        </div>

        {/* SOSMED */}

        <div className="footer-links">
          <h3>Sosial Media</h3>

          <a
            href="https://instagram.com/dimsumkitaofficial"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="icon ig" />
            <span>@dimsumkitaofficial</span>
          </a>

          <a
            href="https://tiktok.com/@dimsumkitaofficial"
            target="_blank"
            rel="noreferrer"
          >
            <FaTiktok className="icon tiktok" />
            <span>@dimsumkitaofficial</span>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 <strong>Dimsum Kita.</strong> All Rights Reserved.
      </div>
    </footer>
  );
}

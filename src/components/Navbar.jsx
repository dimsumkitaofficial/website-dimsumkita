import { useState } from "react";
import "../Navbar.css";
import logo from "../assets/Logo.png";

export default function Navbar() {
  const [showLogo, setShowLogo] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="brand" onClick={() => setShowLogo(true)}>
          <img src={logo} alt="Dimsum Kita" className="logo-img" />
          <h2>DIMSUM KITA</h2>
        </div>

        {/* Desktop Menu */}
        <ul className="menu">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#promo">Promo</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#kegiatan">Kegiatan</a>
          </li>
          <li>
            <a href="#lokasi">Lokasi</a>
          </li>
        </ul>

        {/* Hamburger */}
        <div className="hamburger" onClick={() => setShowMenu(true)}>
          ☰
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`mobile-overlay ${showMenu ? "active" : ""}`}
        onClick={closeMenu}
      >
        <div
          className={`mobile-menu ${showMenu ? "active" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <span className="mobile-close" onClick={closeMenu}>
            ×
          </span>

          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#tentang" onClick={closeMenu}>
            Tentang Kami
          </a>

          <a href="#keunggulan" onClick={closeMenu}>
            Keunggulan
          </a>

          <a href="#promo" onClick={closeMenu}>
            Promo
          </a>

          <a href="#menu" onClick={closeMenu}>
            Menu
          </a>

          <a href="#kegiatan" onClick={closeMenu}>
            Kegiatan
          </a>

          <a href="#testimoni" onClick={closeMenu}>
            Testimoni
          </a>

          <a href="#lokasi" onClick={closeMenu}>
            Lokasi
          </a>

          <a href="#faq" onClick={closeMenu}>
            FAQ
          </a>
        </div>
      </div>

      {/* Popup Logo */}
      {showLogo && (
        <div className="logo-popup" onClick={() => setShowLogo(false)}>
          <div
            className="logo-popup-content"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="logo-close-btn" onClick={() => setShowLogo(false)}>
              ×
            </span>

            <img src={logo} alt="Dimsum Kita" className="logo-large" />
          </div>
        </div>
      )}
    </>
  );
}

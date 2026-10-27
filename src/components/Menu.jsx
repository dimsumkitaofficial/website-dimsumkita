import { useState, useEffect } from "react";
import "../Menu.css";

import Original from "../assets/Original.jpg";
import Mentai from "../assets/Mentai.jpg";
import Mozzarella from "../assets/Mozzarella.jpg";
import Mushroom from "../assets/Mushroom.jpg";

export default function Menu() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    if (selectedProduct) {
      document.body.classList.add("popup-open");
    } else {
      document.body.classList.remove("popup-open");
    }

    return () => {
      document.body.classList.remove("popup-open");
    };
  }, [selectedProduct]);

  const products = [
    {
      nama: "Dimsum Original",
      foto: Original,
      deskripsi:
        "Dimsum ayam premium dengan rasa gurih, lembut, dan dibuat fresh setiap hari.",
      bonus12: false,
      bonus16: false,
      harga4: "Rp14.000",
      harga6: "Rp22.000",
      harga12: "Rp43.000",
      harga16: "Rp60.000",
    },
    {
      nama: "Dimsum Mentai",
      foto: Mentai,
      deskripsi: "Dimsum dengan topping mentai premium yang creamy dan lezat.",
      bonus12: false,
      bonus16: true,
      harga4: "Rp18.000",
      harga6: "Rp27.000",
      harga12: "Rp54.000",
      harga16: "Rp72.000",
    },
    {
      nama: "Dimsum Mozzarella",
      foto: Mozzarella,
      deskripsi: "Dimsum mozzarella dengan keju lumer yang melimpah.",
      bonus12: true,
      bonus16: true,
      harga4: "Rp18.000",
      harga6: "Rp27.000",
      harga12: "Rp54.000",
      harga16: "Rp72.000",
    },
    {
      nama: "Dimsum Mushroom",
      foto: Mushroom,
      deskripsi: "Dimsum mushroom dengan cita rasa jamur yang unik dan gurih.",
      bonus12: false,
      bonus16: true,
      harga4: "Rp20.000",
      harga6: "Rp28.000",
      harga12: "Rp55.000",
      harga16: "Rp72.000",
    },
  ];

  return (
    <section data-aos="fade-up" id="menu" className="menu-section">
      <div className="section-title">
        <h2>Menu Dimsum Kita</h2>
        <p>Pilih menu favoritmu dan pesan dengan mudah</p>
      </div>

      <div className="menu-grid">
        {products.map((item, index) => (
          <div
            key={index}
            className="menu-card"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <img
              src={item.foto}
              alt={item.nama}
              className="menu-image"
              onClick={() => setSelectedProduct(item)}
            />
            <h3>{item.nama}</h3>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="popup-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <span
              className="close-popup"
              onClick={() => setSelectedProduct(null)}
            >
              &times;
            </span>

            <div className="popup-layout">
              <div className="popup-left">
                <img
                  src={selectedProduct.foto}
                  alt={selectedProduct.nama}
                  className="popup-image"
                />
              </div>

              <div className="popup-right">
                <h2>{selectedProduct.nama}</h2>

                <div className="title-line"></div>

                <p className="popup-desc">{selectedProduct.deskripsi}</p>

                <div className="popup-prices">
                  <div className="price-row">
                    <span>4 pcs</span>
                    <span>{selectedProduct.harga4}</span>
                  </div>

                  <div className="price-row">
                    <span>6 pcs</span>
                    <span>{selectedProduct.harga6}</span>
                  </div>

                  <div className="price-row">
                    <span>12 pcs</span>

                    <div className="price-right">
                      <span>{selectedProduct.harga12}</span>

                      {selectedProduct.bonus12 && (
                        <span className="bonus">Free Chili Oil</span>
                      )}
                    </div>
                  </div>

                  <div className="price-row">
                    <span>16 pcs</span>

                    <div className="price-right">
                      <span>{selectedProduct.harga16}</span>

                      {selectedProduct.bonus16 && (
                        <span className="bonus">Free Chili Oil</span>
                      )}
                    </div>
                  </div>
                </div>

                <a
                  className="popup-wa"
                  href={`https://wa.me/6289507310566?text=${encodeURIComponent(
                    `Halo Admin Dimsum Kita,\n\nSaya ingin memesan ${selectedProduct.nama}.`,
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Pesan via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

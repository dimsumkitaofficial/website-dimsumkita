import { useEffect, useState } from "react";
import "../Testimoni.css";

import Testi1 from "../assets/Testimoni 1.jpeg";
import Testi2 from "../assets/Testimoni 2.jpeg";
import Testi3 from "../assets/Testimoni 3.jpeg";
import Testi4 from "../assets/Testimoni 4.jpeg";

export default function Testimoni() {
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      foto: Testi1,
      nama: "Rina",
      komentar:
        "Dimsumnya enak banget, isiannya berasa dan anak-anak suka semua.",
    },

    {
      foto: Testi2,
      nama: "Andi",
      komentar: "Mentainya juara. Pesan berkali-kali rasanya tetap konsisten.",
    },

    {
      foto: Testi3,
      nama: "Nisa",
      komentar:
        "Packing rapi, pengiriman cepat, dan dimsum masih hangat saat diterima.",
    },

    {
      foto: Testi4,
      nama: "Haya",
      komentar: "Pelayanan ramah, rasa enak, dan harga sangat terjangkau.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 7000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section data-aos="zoom-in" id="testimoni" className="testimoni-section">
      <div className="testimoni-header">
        <h2>Testimoni Pelanggan</h2>
        <p>Apa kata pelanggan tentang Dimsum Kita</p>
      </div>

      <div className="testimoni-slider">
        <button className="slider-btn left" onClick={prevSlide}>
          ❮
        </button>

        <div className="slider-content">
          <img
            src={testimonials[current].foto}
            alt={testimonials[current].nama}
            className="slider-image"
          />

          <div className="stars">⭐⭐⭐⭐⭐</div>

          <h3 className="customer-name">{testimonials[current].nama}</h3>

          <p className="slider-comment">"{testimonials[current].komentar}"</p>
        </div>

        <button className="slider-btn right" onClick={nextSlide}>
          ❯
        </button>
      </div>

      <div className="slider-dots">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={current === index ? "dot active" : "dot"}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </section>
  );
}

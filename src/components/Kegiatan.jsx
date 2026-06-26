import { useState, useEffect } from "react";
import "../Kegiatan.css";

import Event1 from "../assets/Grand Opening.jpg";

export default function Kegiatan() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    if (selectedEvent) {
      document.body.classList.add("popup-open");
    } else {
      document.body.classList.remove("popup-open");
    }

    return () => {
      document.body.classList.remove("popup-open");
    };
  }, [selectedEvent]);

  const kegiatan = [
    {
      foto: Event1,

      title: "Grand Opening",

      tanggal: "14 Juni 2025",

      desc: `
Grand Opening Dimsum Kita berlangsung meriah dengan berbagai promo spesial. Acara ini menjadi awal perjalanan Dimsum Kita dalam menghadirkan produk berkualitas untuk masyarakat.
      `,
    },
  ];

  return (
    <section id="kegiatan" className="kegiatan-section" data-aos="fade-up">
      <div className="kegiatan-header">
        <h2>Kegiatan & Event</h2>

        <p>
          Berbagai momen spesial yang menjadi bagian dari perjalanan Dimsum
          Kita.
        </p>
      </div>

      <div className="kegiatan-grid">
        {kegiatan.map((item, index) => (
          <div
            key={index}
            className="kegiatan-card"
            data-aos="zoom-in"
            data-aos-delay={index * 120}
          >
            <div className="kegiatan-image-wrapper">
              <img
                src={item.foto}
                alt={item.title}
                className="kegiatan-image"
              />
            </div>

            <div className="kegiatan-content">
              <span className="kegiatan-date">{item.tanggal}</span>

              <h3>{item.title}</h3>

              <button
                className="lihat-event"
                onClick={() => setSelectedEvent(item)}
              >
                Lihat Detail
                <span>→</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedEvent && (
        <div
          className="event-popup-overlay"
          onClick={() => setSelectedEvent(null)}
        >
          <div className="event-popup" onClick={(e) => e.stopPropagation()}>
            <button
              className="event-close"
              onClick={() => setSelectedEvent(null)}
            >
              ×
            </button>

            <div className="event-image-wrapper-popup">
              <img
                src={selectedEvent.foto}
                alt={selectedEvent.title}
                className="event-popup-image"
              />
            </div>

            <div className="event-popup-content">
              <span className="event-date">{selectedEvent.tanggal}</span>

              <h2>{selectedEvent.title}</h2>

              <div className="event-line"></div>

              <p className="event-desc">{selectedEvent.desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

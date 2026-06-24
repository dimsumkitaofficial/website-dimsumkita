import { useState, useEffect } from "react";
import "../Kegiatan.css";

import Event1 from "../assets/Grand Opening.jpg";

export default function Kegiatan() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  useEffect(() => {
    if (selectedEvent) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
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
    <section data-aos="fade-left" id="kegiatan" className="kegiatan-section">
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
            className="kegiatan-card"
            data-aos="fade-up"
            data-aos-delay={index * 150}
            key={index}
            onClick={() => setSelectedEvent(item)}
          >
            <img src={item.foto} alt={item.title} className="kegiatan-image" />

            <div className="kegiatan-content">
              <h3>{item.title}</h3>

              <span>{item.tanggal}</span>
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
            <span
              className="event-close"
              onClick={() => setSelectedEvent(null)}
            >
              ×
            </span>

            <div className="event-image-wrapper">
              <img
                src={selectedEvent.foto}
                alt={selectedEvent.title}
                className="event-popup-image"
              />
            </div>

            <div className="event-popup-content">
              <h2>{selectedEvent.title}</h2>

              <p className="event-date">{selectedEvent.tanggal}</p>

              <div className="event-line"></div>

              <p className="event-desc">{selectedEvent.desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

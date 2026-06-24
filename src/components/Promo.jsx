import "../Promo.css";

export default function Promo() {
  const promos = [
    {
      title: "Tidak Ada",
      desc: "",
      date: "",
      badge: "",
    },

    {
      title: "Tidak Ada",
      desc: "",
      date: "",
      badge: "",
    },

    {
      title: "Tidak Ada",
      desc: "",
      date: "",
      badge: "",
    },
  ];

  return (
    <section data-aos="fade-right" id="promo" className="promo-section">
      <div className="promo-header">
        <h2>Promo Terbaru</h2>

        <p>
          Nikmati berbagai promo menarik dan penawaran spesial dari Dimsum Kita.
        </p>
      </div>

      <div className="promo-grid">
        {promos.map((promo, index) => (
          <div className="promo-card" key={index}>
            <span className="promo-badge">{promo.badge}</span>

            <h3>{promo.title}</h3>

            <p>{promo.desc}</p>

            <small>{promo.date}</small>
          </div>
        ))}
      </div>
    </section>
  );
}

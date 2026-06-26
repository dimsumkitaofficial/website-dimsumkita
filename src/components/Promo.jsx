import "../Promo.css";

export default function Promo() {
  const promos = [
    {
      title: "Belum Ada Promo",
      desc: "Saat ini belum ada promo yang sedang berlangsung. Pantau terus website dan Instagram kami agar tidak ketinggalan promo terbaru.",
      badge: "Coming Soon",
    },

    {
      title: "Promo Segera Hadir",
      desc: "Kami sedang menyiapkan promo menarik untuk seluruh pelanggan Dimsum Kita. Nantikan kejutan spesial dari kami.",
      badge: "Soon",
    },

    {
      title: "Follow Media Sosial",
      desc: "Ikuti Instagram dan WhatsApp Dimsum Kita untuk mendapatkan informasi promo terbaru lebih cepat.",
      badge: "Update",
    },
  ];

  return (
    <section id="promo" className="promo-section" data-aos="fade-up">
      <div className="promo-header">
        <h2>Promo Terbaru</h2>

        <p>Jangan lewatkan berbagai promo menarik dari Dimsum Kita.</p>
      </div>

      <div className="promo-grid">
        {promos.map((promo, index) => (
          <div
            className="promo-card"
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <span className="promo-badge">{promo.badge}</span>

            <h3>{promo.title}</h3>

            <p>{promo.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

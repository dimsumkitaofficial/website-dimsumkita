import "../Keunggulan.css";

export default function Keunggulan() {
  const data = [
    {
      icon: "🥟",
      title: "Fresh Setiap Hari",
      desc: "Dibuat dari bahan pilihan dan diproses setiap hari untuk menjaga kualitas rasa.",
    },

    {
      icon: "⭐",
      title: "Rasa Premium",
      desc: "Perpaduan resep dan bahan berkualitas yang menghasilkan cita rasa istimewa.",
    },

    {
      icon: "💰",
      title: "Harga Terjangkau",
      desc: "Nikmati dimsum berkualitas premium dengan harga yang tetap ramah di kantong.",
    },

    {
      icon: "💬",
      title: "Fast Response",
      desc: "Pesan dengan mudah melalui WhatsApp dan dapatkan respon yang cepat dari admin.",
    },
  ];

  return (
    <section data-aos="zoom-in" id="keunggulan" className="keunggulan-section">
      <div className="keunggulan-header">
        <h2>Kenapa Harus Dimsum Kita?</h2>

        <p>
          Menghadirkan dimsum berkualitas dengan bahan pilihan, rasa lezat, dan
          pelayanan terbaik.
        </p>
      </div>

      <div className="keunggulan-grid">
        {data.map((item, index) => (
          <div className="keunggulan-card" key={index}>
            <div className="icon">{item.icon}</div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

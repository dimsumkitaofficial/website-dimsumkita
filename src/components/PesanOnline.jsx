import "../PesanOnline.css";

export default function PesanOnline() {
  return (
    <section data-aos="fade-up" className="pesan-section">
      <div className="pesan-container">
        <span className="pesan-badge">PESAN ONLINE</span>

        <h2>Pesan Dimsum Favoritmu Sekarang</h2>

        <p>
          Nikmati Dimsum Premium Full Daging, Fresh Setiap Hari dan siap diantar
          langsung ke lokasi Anda dengan cepat dan aman.
        </p>

        <div className="pesan-buttons">
          <a
            href="https://wa.me/6289507310566"
            target="_blank"
            rel="noreferrer"
            className="wa-btn"
          >
            WhatsApp
          </a>

          <a
            href="https://spf.shopee.co.id/AKYNlCaczZ"
            target="_blank"
            rel="noreferrer"
            className="shopee-btn"
          >
            ShopeeFood
          </a>

          <a
            href="LINK_GOFOOD"
            target="_blank"
            rel="noreferrer"
            className="gofood-btn"
          >
            GoFood
          </a>
        </div>
      </div>
    </section>
  );
}

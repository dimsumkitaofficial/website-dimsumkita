import "../Tentang.css";
import AboutImage from "../assets/Logo.png";

export default function Tentang() {
  return (
    <section data-aos="fade-up" id="tentang" className="tentang-section">
      <div className="tentang-container">
        <div className="tentang-image">
          <img src={AboutImage} alt="Tentang Dimsum Kita" />
        </div>

        <div className="tentang-content">
          <span className="tentang-label">TENTANG</span>

          <h2>Dimsum Kita</h2>

          <div className="tentang-line"></div>

          <p>
            Berawal dari usaha rumahan dan penjualan online pada tahun 2025,
            Dimsum Kita hadir karena melihat tingginya minat masyarakat terhadap
            dimsum yang lezat, berkualitas, dan dapat dinikmati oleh semua
            kalangan.
          </p>

          <p>
            Kami berkomitmen menghadirkan dimsum premium dengan isian full
            daging, tekstur yang padat, rasa yang lezat, serta dibuat fresh
            setiap hari menggunakan bahan pilihan yang 100% halal.
          </p>

          <p>
            Hingga saat ini, Dimsum Kita terus berkembang dengan menghadirkan
            berbagai varian rasa dan pelayanan terbaik untuk pelanggan setia
            kami.
          </p>

          <div className="tentang-stats">
            <div className="stat-box">
              <h3>2025</h3>
              <span>Berdiri</span>
            </div>

            <div className="stat-box">
              <h3>100%</h3>
              <span>Halal</span>
            </div>

            <div className="stat-box">
              <h3>Fresh</h3>
              <span>Setiap Hari</span>
            </div>

            <div className="stat-box">
              <h3>Full</h3>
              <span>Daging</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

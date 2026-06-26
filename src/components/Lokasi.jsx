import "../Lokasi.css";

export default function Lokasi() {
  return (
    <section data-aos="fade-up" id="lokasi" className="lokasi-section">
      <div className="lokasi-header">
        <h2>Lokasi Dimsum Kita</h2>

        <p>
          Kunjungi kami atau pesan langsung melalui WhatsApp untuk menikmati
          Dimsum Premium Full Daging yang fresh setiap hari.
        </p>
      </div>

      <div className="lokasi-container">
        <div className="lokasi-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5177873768575!2d106.58690037355385!3d-6.195203560690605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fefbdf078333%3A0x30ae21e26b35976a!2sPT.%20Indorack%20Multikreasi!5e0!3m2!1sid!2sid!4v1782013776382!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Lokasi Dimsum Kita"
          ></iframe>
        </div>

        <div className="lokasi-info">
          <div className="info-card">
            <h3>📍 Alamat</h3>

            <p>
              Jl. Jamblang III, Kp. Jatiuwung RT 03/RW 04 No.22, Patokan dekat
              PT. Memory, Cibodas, Kota Tangerang, Banten.
            </p>
          </div>

          <div className="info-card">
            <h3>🕒 Jam Operasional</h3>

            <p>
              Buka Setiap Hari
              <br />
              10:00 WIB - 21:00 WIB
            </p>
          </div>

          <div className="info-card">
            <h3>📦 Open PO</h3>

            <p>Open PO setiap 2 hari sekali.</p>
            <p>Bisa Diantar/Diambil/COD</p>
          </div>

          <div className="lokasi-buttons">
            <a
              href="https://maps.app.goo.gl/ACTwgZ4fwKqN26AaA"
              target="_blank"
              rel="noreferrer"
              className="maps-btn"
            >
              Petunjuk Arah
            </a>

            <a
              href="https://wa.me/6289507310566"
              target="_blank"
              rel="noreferrer"
              className="wa-btn"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

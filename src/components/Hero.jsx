import "../Hero.css";
import heroImage from "../assets/Background 1.jpg";

export default function Hero() {
  return (
    <section
      data-aos="fade-in"
      id="home"
      className="hero"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="overlay">
        <div className="hero-content">
          <h1>Dimsum Lezat, Premium, dan Fresh Setiap Hari</h1>

          <p>
            Nikmati aneka dimsum berkualitas dengan cita rasa terbaik, dibuat
            dari bahan pilihan dan disajikan dengan penuh kehangatan untuk
            keluarga Indonesia.
          </p>

          <div className="hero-buttons">
            <a href="https://wa.me/6289507310566" target="_blank">
              {" "}
              WhatsApp
            </a>
            <a href="#menu">Lihat Menu</a>
          </div>
        </div>
      </div>
    </section>
  );
}

import "../Loading.css";
import logo from "../assets/Logo.png";

export default function Loading() {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <img src={logo} alt="Dimsum Kita" className="loading-logo" />

        <h1>DIMSUM KITA</h1>

        <p>Fresh • Premium • Full Daging</p>
      </div>
    </div>
  );
}

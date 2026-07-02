import { useEffect, useState } from "react";
import AOS from "aos";
import ReactGA from "react-ga4";
import "aos/dist/aos.css";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tentang from "./components/Tentang";
import Keunggulan from "./components/Keunggulan";
import Promo from "./components/Promo";
import Menu from "./components/Menu";
import Kegiatan from "./components/Kegiatan";
import Testimoni from "./components/Testimoni";
import PesanOnline from "./components/PesanOnline";
import Lokasi from "./components/Lokasi";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import FloatingWA from "./components/FloatingWA";
import BackToTop from "./components/BackToTop";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });

    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
    });

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Navbar />
      <Hero />
      <Tentang />
      <Keunggulan />
      <Promo />
      <Menu />
      <Kegiatan />
      <Testimoni />
      <PesanOnline />
      <Lokasi />
      <FAQ />
      <Footer />
      <FloatingWA />
      <BackToTop />
    </>
  );
}

import { useState } from "react";
import "../FAQ.css";

export default function FAQ() {
  const [active, setActive] = useState(null);

  const faqs = [
    {
      question: "Apakah Dimsum Kita halal?",
      answer: "Ya, seluruh bahan yang digunakan 100% halal.",
    },

    {
      question: "Apakah bisa pesan dadakan?",
      answer: "Bisa selama stok tersedia.",
    },

    {
      question: "Apakah menerima pesanan acara?",
      answer:
        "Ya, kami melayani pesanan ulang tahun, acara kantor, arisan, dan berbagai acara lainnya.",
    },
  ];

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section data-aos="fade-up" id="faq" className="faq-section">
      <div className="faq-header">
        <h2>Pertanyaan yang Sering Ditanyakan</h2>

        <p>
          Temukan jawaban dari beberapa pertanyaan yang sering ditanyakan
          pelanggan Dimsum Kita.
        </p>
      </div>

      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{faq.question}</span>

              <span>{active === index ? "−" : "+"}</span>
            </button>

            {active === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

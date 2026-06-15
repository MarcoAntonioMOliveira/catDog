import type { Metadata } from "next";
import { Suspense } from "react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contato — CatDog",
  description: "Entre em contato com a CatDog. Tire dúvidas, manifeste interesse em adoção ou seja um parceiro.",
};

const contactInfo = [
  { icon: "✉️", label: "E-mail", value: "ola@catdog.com.br" },
  { icon: "📱", label: "WhatsApp", value: "(44) 99999-9999" },
  { icon: "🕐", label: "Horário", value: "Seg–Sex, 9h às 18h" },
  { icon: "📍", label: "Localização", value: "Maringá, Paraná" },
];

export default function ContatoPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: "#F3F1EC", padding: "3rem 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h1 className="section-title">Fale com a gente</h1>
          <p className="section-subtitle" style={{ maxWidth: "480px", margin: "0.75rem auto 0" }}>
            Tem alguma dúvida, quer adotar ou deseja ser um parceiro? Estamos aqui para ajudar.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div
          className="container"
          style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "3rem", alignItems: "start" }}
        >
          {/* Info */}
          <div>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 600, color: "#2C2C2A", marginBottom: "1.5rem" }}>
              Informações de contato
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {contactInfo.map((item) => (
                <div key={item.label} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "1.25rem", flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <p style={{ fontSize: "0.8125rem", color: "#888780", marginBottom: "2px" }}>{item.label}</p>
                    <p style={{ fontWeight: 500, color: "#2C2C2A" }}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div
            style={{ backgroundColor: "white", borderRadius: "20px", padding: "2rem", boxShadow: "0 4px 16px rgba(44,44,42,.08)" }}
          >
            <h2 style={{ fontSize: "1.25rem", fontWeight: 600, color: "#2C2C2A", marginBottom: "1.5rem" }}>
              Envie uma mensagem
            </h2>
            <Suspense fallback={<p style={{ color: "#888780" }}>Carregando...</p>}>
              <ContactForm />
            </Suspense>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .contact-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre — CatDog",
  description: "Conheça a missão, os valores e as personas da plataforma CatDog.",
};

const values = [
  { title: "Responsabilidade", description: "Promovemos adoções conscientes e duradouras, garantindo que cada animal vá para um lar preparado." },
  { title: "Empatia", description: "Colocamos os animais e as pessoas no centro de tudo o que fazemos." },
  { title: "Transparência", description: "Processos claros, comunicação honesta e rastreabilidade em cada etapa." },
  { title: "Acolhimento", description: "Cada animal merece ser tratado com dignidade, carinho e respeito." },
];

const steps = [
  { icon: "🔍", title: "Explore os pets", description: "Navegue pelo catálogo e conheça os animais disponíveis para adoção." },
  { icon: "💌", title: "Entre em contato", description: "Manifeste seu interesse e converse com a organização responsável." },
  { icon: "✅", title: "Seja aprovado", description: "Passe pelo processo de adoção responsável da organização parceira." },
  { icon: "🏠", title: "Leve para casa", description: "Seu novo companheiro vai para um lar cheio de amor." },
];

const personas = [
  {
    type: "B2B",
    emoji: "🏢",
    name: "Instituto Patinhas",
    role: "ONG parceira",
    description: "Organização de resgate animal que usa o CatDog para gerenciar seus animais, divulgar adoções e acompanhar o processo de cada solicitação.",
    benefits: ["Gestão centralizada de animais", "Visibilidade para potenciais adotantes", "Acompanhamento de solicitações"],
  },
  {
    type: "B2C",
    emoji: "👩",
    name: "Carla, 32 anos",
    role: "Adotante",
    description: "Professora que sempre quis ter um pet. Usou o CatDog para encontrar a Luna, filtrar por espécie e porte, e entrar em contato diretamente com o abrigo.",
    benefits: ["Catálogo fácil de navegar", "Filtros para encontrar o match ideal", "Contato direto com organizações"],
  },
];

export default function SobrePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: "#F3F1EC", padding: "3rem 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h1 className="section-title">Nossa missão</h1>
          <p className="section-subtitle" style={{ maxWidth: "540px", margin: "0.75rem auto 0" }}>
            O CatDog nasceu para tornar a adoção responsável mais simples, acessível e humana — para os animais, para os adotantes e para as organizações parceiras.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section">
        <div
          className="container"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}
        >
          <div>
            <h2 className="section-title" style={{ marginBottom: "1.25rem" }}>Por que o CatDog existe</h2>
            <p style={{ color: "#888780", lineHeight: 1.8, marginBottom: "1rem" }}>
              Milhares de animais aguardam por um lar amoroso, enquanto pessoas que querem adotar enfrentam processos confusos e fragmentados. O CatDog conecta esses dois mundos.
            </p>
            <p style={{ color: "#888780", lineHeight: 1.8 }}>
              Trabalhamos com ONGs, abrigos, petshops e casas de resgate para centralizar o processo de adoção em uma plataforma única, moderna e fácil de usar.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {["🐶 Cães", "🐱 Gatos", "🏠 Abrigos", "❤️ Adotantes"].map((item) => (
              <div
                key={item}
                style={{ backgroundColor: "#F3F1EC", borderRadius: "16px", padding: "2rem", textAlign: "center", fontSize: "1.5rem" }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ backgroundColor: "#F3F1EC" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 className="section-title">Nossos valores</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }}>
            {values.map((v) => (
              <div
                key={v.title}
                style={{ backgroundColor: "white", borderRadius: "16px", padding: "1.75rem", borderLeft: "4px solid #EF9F27" }}
              >
                <h3 style={{ fontWeight: 600, color: "#2C2C2A", marginBottom: "0.75rem" }}>{v.title}</h3>
                <p style={{ fontSize: "0.9375rem", color: "#888780", lineHeight: 1.6 }}>{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 className="section-title">Como funciona</h2>
            <p className="section-subtitle">Adotar pelo CatDog é simples e transparente</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }}>
            {steps.map((step, i) => (
              <div
                key={step.title}
                style={{ backgroundColor: "#F3F1EC", borderRadius: "16px", padding: "1.75rem", textAlign: "center" }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{step.icon}</div>
                <div
                  style={{ width: "28px", height: "28px", borderRadius: "9999px", backgroundColor: "#EF9F27", color: "white", fontWeight: 700, fontSize: "0.875rem", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 0.75rem" }}
                >
                  {i + 1}
                </div>
                <h3 style={{ fontWeight: 600, color: "#2C2C2A", marginBottom: "0.5rem" }}>{step.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "#888780", lineHeight: 1.6 }}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personas */}
      <section className="section" style={{ backgroundColor: "#F3F1EC" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 className="section-title">Quem usa o CatDog</h2>
            <p className="section-subtitle">Uma plataforma feita para dois públicos distintos</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
            {personas.map((p) => (
              <div
                key={p.name}
                style={{ backgroundColor: "white", borderRadius: "20px", padding: "2rem", boxShadow: "0 4px 16px rgba(44,44,42,.08)" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
                  <div style={{ fontSize: "2.5rem" }}>{p.emoji}</div>
                  <div>
                    <span style={{ display: "inline-block", padding: "3px 10px", borderRadius: "9999px", fontSize: "0.75rem", fontWeight: 600, backgroundColor: "#EF9F27", color: "white", marginBottom: "4px" }}>
                      {p.type}
                    </span>
                    <h3 style={{ fontWeight: 600, color: "#2C2C2A" }}>{p.name}</h3>
                    <p style={{ fontSize: "0.8125rem", color: "#888780" }}>{p.role}</p>
                  </div>
                </div>
                <p style={{ color: "#888780", lineHeight: 1.7, marginBottom: "1.25rem" }}>{p.description}</p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {p.benefits.map((b) => (
                    <li key={b} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9375rem", color: "#444441" }}>
                      <span style={{ color: "#1D9E75", fontWeight: 700 }}>✓</span> {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#EF9F27", padding: "4rem 0", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "white", marginBottom: "1rem" }}>
            Faça parte dessa missão
          </h2>
          <p style={{ color: "rgba(255,255,255,.85)", marginBottom: "2rem" }}>
            Adote um pet ou traga sua organização para o CatDog.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/adotar"
              style={{ backgroundColor: "white", color: "#EF9F27", textDecoration: "none", padding: "0.875rem 2.5rem", borderRadius: "9999px", fontWeight: 700 }}
            >
              Quero adotar
            </Link>
            <Link
              href="/contato"
              style={{ backgroundColor: "transparent", color: "white", textDecoration: "none", padding: "0.875rem 2.5rem", borderRadius: "9999px", fontWeight: 600, border: "2px solid white" }}
            >
              Ser parceiro
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

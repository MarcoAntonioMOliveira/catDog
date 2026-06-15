import Link from "next/link";
import Image from "next/image";
import AnimatedCounter from "@/components/AnimatedCounter";
import FeaturedPets from "@/components/FeaturedPets";

const stats = [
  { value: 1248, label: "Pets adotados" },
  { value: 43, label: "Organizações parceiras" },
  { value: 98, suffix: "%", label: "Satisfação dos adotantes" },
  { value: 312, label: "Pets disponíveis agora" },
];

const steps = [
  { icon: "🔍", title: "Explore os pets", description: "Navegue pelo catálogo e conheça os animais disponíveis para adoção." },
  { icon: "💌", title: "Entre em contato", description: "Manifeste seu interesse e converse com a organização responsável." },
  { icon: "✅", title: "Seja aprovado", description: "Passe pelo processo de adoção responsável da organização parceira." },
  { icon: "🏠", title: "Leve para casa", description: "Seu novo companheiro vai para um lar cheio de amor." },
];

const heroPreviewPets = [
  { src: "/images/pets/thor.jpg", name: "Thor", label: "Labrador mix · 2 anos", wide: true },
  { src: "/images/pets/luna.jpg", name: "Luna", label: "Siamesa · 1 ano", wide: false },
  { src: "/images/pets/brisa.jpg", name: "Brisa", label: "Shorthair · 5 anos", wide: false },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding: "5rem 0 4rem", backgroundColor: "#FAF9F6" }}>
        <div
          className="container"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}
        >
          <div>
            <h1
              style={{ fontSize: "3rem", fontWeight: 700, color: "#2C2C2A", lineHeight: 1.2, marginBottom: "1.25rem" }}
            >
              Encontre seu{" "}
              <span style={{ color: "#EF9F27" }}>novo melhor</span> amigo
            </h1>
            <p
              style={{ fontSize: "1.125rem", color: "#888780", lineHeight: 1.7, marginBottom: "2rem", maxWidth: "460px" }}
            >
              Conectamos animais que precisam de um lar a pessoas que têm amor para dar. Adoção responsável, simples e com carinho.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link
                href="/adotar"
                style={{ backgroundColor: "#EF9F27", color: "white", textDecoration: "none", padding: "0.875rem 2rem", borderRadius: "9999px", fontWeight: 600, fontSize: "1rem" }}
              >
                Ver pets disponíveis
              </Link>
              <Link
                href="/sobre"
                style={{ backgroundColor: "transparent", color: "#444441", textDecoration: "none", padding: "0.875rem 2rem", borderRadius: "9999px", fontWeight: 500, fontSize: "1rem", border: "1px solid #B4B2A9" }}
              >
                Como funciona
              </Link>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {heroPreviewPets.map((pet) => (
              <div
                key={pet.name}
                style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 16px rgba(44,44,42,.10)", gridColumn: pet.wide ? "1 / -1" : "auto" }}
              >
                <div style={{ position: "relative", paddingBottom: pet.wide ? "50%" : "80%", overflow: "hidden" }}>
                  <Image src={pet.src} alt={pet.name} fill sizes="400px" style={{ objectFit: "cover" }} />
                </div>
                <div style={{ padding: "0.75rem 1rem", backgroundColor: "white" }}>
                  <p style={{ fontWeight: 600, color: "#2C2C2A", fontSize: "0.9375rem" }}>{pet.name}</p>
                  <p style={{ fontSize: "0.8125rem", color: "#888780" }}>{pet.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .hero-grid { grid-template-columns: 1fr !important; }
            .hero-preview { display: none !important; }
            .hero-title { font-size: 2rem !important; }
          }
        `}</style>
      </section>

      {/* Stats */}
      <section style={{ backgroundColor: "#2C2C2A", padding: "3.5rem 0" }}>
        <div className="container">
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem", textAlign: "center" }}
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <p style={{ fontSize: "2.5rem", fontWeight: 700, color: "#EF9F27", lineHeight: 1 }}>
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </p>
                <p style={{ color: "#B4B2A9", marginTop: "0.5rem", fontSize: "0.9375rem" }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Pets */}
      <section className="section">
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "2rem" }}>
            <div>
              <h2 className="section-title">Pets em destaque</h2>
              <p className="section-subtitle">Conheça alguns dos animais que esperam por um lar</p>
            </div>
            <Link href="/adotar" style={{ color: "#EF9F27", textDecoration: "none", fontWeight: 500, fontSize: "0.9375rem" }}>
              Ver todos →
            </Link>
          </div>
          <FeaturedPets />
        </div>
      </section>

      {/* How it works */}
      <section className="section" style={{ backgroundColor: "#F3F1EC" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 className="section-title">Como funciona</h2>
            <p className="section-subtitle">Adotar é simples, rápido e cheio de amor</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }}>
            {steps.map((step, i) => (
              <div
                key={step.title}
                style={{ backgroundColor: "white", borderRadius: "16px", padding: "1.75rem", textAlign: "center", boxShadow: "0 2px 8px rgba(44,44,42,.06)" }}
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

      {/* CTA */}
      <section style={{ backgroundColor: "#EF9F27", padding: "4rem 0", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "white", marginBottom: "1rem" }}>
            Pronto para mudar uma vida?
          </h2>
          <p style={{ color: "rgba(255,255,255,.85)", fontSize: "1.0625rem", marginBottom: "2rem" }}>
            Cada adoção transforma a vida de um animal e de uma família.
          </p>
          <Link
            href="/adotar"
            style={{ backgroundColor: "white", color: "#EF9F27", textDecoration: "none", padding: "0.875rem 2.5rem", borderRadius: "9999px", fontWeight: 700, fontSize: "1rem" }}
          >
            Encontrar meu pet
          </Link>
        </div>
      </section>
    </>
  );
}

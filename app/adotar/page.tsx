import type { Metadata } from "next";
import PetCatalog from "@/components/PetCatalog";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Adotar — CatDog",
  description: "Encontre seu novo companheiro. Cães e gatos disponíveis para adoção.",
};

export default function AdotarPage() {
  return (
    <>
      {/* Page Hero */}
      <section style={{ backgroundColor: "#F3F1EC", padding: "3rem 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h1 className="section-title">Encontre seu companheiro</h1>
          <p className="section-subtitle" style={{ maxWidth: "520px", margin: "0.75rem auto 0" }}>
            Todos os animais abaixo estão disponíveis para adoção responsável. Use os filtros para encontrar o seu match perfeito.
          </p>
        </div>
      </section>

      {/* Catalog with filters */}
      <section className="section">
        <div className="container">
          <PetCatalog />
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#EF9F27", padding: "3.5rem 0", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "white", marginBottom: "0.75rem" }}>
            Não encontrou o pet ideal?
          </h2>
          <p style={{ color: "rgba(255,255,255,.85)", marginBottom: "1.75rem" }}>
            Entre em contato e te ajudamos a encontrar o companheiro certo para você.
          </p>
          <Link
            href="/contato"
            style={{ backgroundColor: "white", color: "#EF9F27", textDecoration: "none", padding: "0.875rem 2.5rem", borderRadius: "9999px", fontWeight: 700, fontSize: "1rem" }}
          >
            Falar com a gente
          </Link>
        </div>
      </section>
    </>
  );
}

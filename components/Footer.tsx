import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#2C2C2A", color: "#B4B2A9", padding: "3rem 0 1.5rem" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "2rem", marginBottom: "2rem" }}>
          <div>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none", marginBottom: "1rem" }}>
              <Image src="/images/logo.svg" alt="CatDog" width={28} height={28} />
              <span style={{ fontWeight: 700, fontSize: "1.125rem", color: "white" }}>CatDog</span>
            </Link>
            <p style={{ fontSize: "0.9375rem", lineHeight: 1.7, maxWidth: "280px" }}>
              Conectando animais a lares amorosos. Uma plataforma feita com carinho para facilitar adoções responsáveis.
            </p>
          </div>

          <div>
            <h4 style={{ color: "white", fontWeight: 600, marginBottom: "1rem", fontSize: "0.9375rem" }}>Navegação</h4>
            <nav style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[
                { href: "/", label: "Início" },
                { href: "/adotar", label: "Adotar" },
                { href: "/sobre", label: "Sobre" },
                { href: "/contato", label: "Contato" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{ color: "#B4B2A9", textDecoration: "none", fontSize: "0.9375rem", transition: "color 0.2s" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 style={{ color: "white", fontWeight: 600, marginBottom: "1rem", fontSize: "0.9375rem" }}>Contato</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.9375rem" }}>
              <span>ola@catdog.com.br</span>
              <span>(44) 99999-9999</span>
              <span>Maringá, PR</span>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,.08)", paddingTop: "1.5rem", textAlign: "center", fontSize: "0.875rem" }}>
          © {new Date().getFullYear()} CatDog. Feito com ♥ para os animais.
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer > .container > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}

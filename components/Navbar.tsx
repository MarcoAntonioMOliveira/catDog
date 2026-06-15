"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/adotar", label: "Adotar" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: "64px",
        backgroundColor: "#FAF9F6",
        borderBottom: "1px solid #E8E6E1",
        transition: "box-shadow 0.2s",
        boxShadow: scrolled ? "0 2px 16px rgba(44,44,42,.10)" : "none",
      }}
    >
      <div
        className="container"
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
          <Image src="/images/logo.svg" alt="CatDog" width={32} height={32} />
          <span style={{ fontWeight: 700, fontSize: "1.125rem", color: "#2C2C2A" }}>CatDog</span>
        </Link>

        <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="hidden-mobile">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                textDecoration: "none",
                fontSize: "0.9375rem",
                fontWeight: 500,
                color: pathname === link.href ? "#EF9F27" : "#444441",
                borderBottom: pathname === link.href ? "2px solid #EF9F27" : "2px solid transparent",
                paddingBottom: "2px",
                transition: "color 0.2s",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contato" className="btn-primary" style={{ padding: "0.5rem 1.25rem", borderRadius: "9999px", backgroundColor: "#EF9F27", color: "white", textDecoration: "none", fontWeight: 500, fontSize: "0.875rem" }}>
            Quero adotar
          </Link>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="hamburger-btn"
          style={{ display: "none", flexDirection: "column", gap: "5px", background: "none", border: "none", cursor: "pointer", padding: "4px" }}
          aria-label="Menu"
        >
          <span style={{ display: "block", width: "22px", height: "2px", backgroundColor: "#2C2C2A", transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
          <span style={{ display: "block", width: "22px", height: "2px", backgroundColor: "#2C2C2A", transition: "all 0.3s", opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: "block", width: "22px", height: "2px", backgroundColor: "#2C2C2A", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
        </button>
      </div>

      {menuOpen && (
        <div style={{ backgroundColor: "#FAF9F6", borderTop: "1px solid #E8E6E1", padding: "1rem 1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: 500,
                color: pathname === link.href ? "#EF9F27" : "#444441",
                padding: "0.5rem 0",
                borderBottom: "1px solid #E8E6E1",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contato" style={{ backgroundColor: "#EF9F27", color: "white", textDecoration: "none", fontWeight: 500, fontSize: "0.9375rem", padding: "0.75rem 1.5rem", borderRadius: "9999px", textAlign: "center", marginTop: "0.5rem" }}>
            Quero adotar
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}

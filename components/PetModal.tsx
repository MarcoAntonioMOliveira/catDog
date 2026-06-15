"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Pet, getAgeLabel, getSizeLabel, getStatusLabel } from "@/lib/pets";

interface PetModalProps {
  pet: Pet | null;
  onClose: () => void;
}

export default function PetModal({ pet, onClose }: PetModalProps) {
  useEffect(() => {
    if (!pet) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [pet, onClose]);

  if (!pet) return null;

  const statusColors: Record<string, { bg: string; color: string }> = {
    available: { bg: "#e6f4ef", color: "#1D9E75" },
    foster: { bg: "#fdf0e6", color: "#D85A30" },
    adopted: { bg: "#f0f0f0", color: "#888780" },
  };
  const statusStyle = statusColors[pet.status] || statusColors.available;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(44,44,42,.6)",
        backdropFilter: "blur(4px)",
        zIndex: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: "white",
          borderRadius: "20px",
          maxWidth: "640px",
          width: "100%",
          maxHeight: "90vh",
          overflowY: "auto",
          boxShadow: "0 24px 64px rgba(44,44,42,.24)",
        }}
      >
        <div style={{ position: "relative", width: "100%", paddingBottom: "56.25%", overflow: "hidden", borderRadius: "20px 20px 0 0" }}>
          <Image
            src={pet.image}
            alt={pet.name}
            fill
            sizes="640px"
            style={{ objectFit: "cover" }}
            onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
          />
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: "12px",
              right: "12px",
              width: "36px",
              height: "36px",
              borderRadius: "9999px",
              backgroundColor: "rgba(44,44,42,.6)",
              color: "white",
              border: "none",
              cursor: "pointer",
              fontSize: "1.25rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-label="Fechar"
          >
            ×
          </button>
        </div>

        <div style={{ padding: "1.5rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
            <div>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#2C2C2A" }}>{pet.name}</h2>
              <p style={{ color: "#888780", fontSize: "0.9375rem", marginTop: "4px" }}>
                {pet.breed} · {getSizeLabel(pet.size)} · {pet.gender === "female" ? "Fêmea" : "Macho"} · {getAgeLabel(pet.age)}
              </p>
            </div>
            <span style={{ padding: "6px 14px", borderRadius: "9999px", fontSize: "0.8125rem", fontWeight: 600, backgroundColor: statusStyle.bg, color: statusStyle.color }}>
              {getStatusLabel(pet.status)}
            </span>
          </div>

          <p style={{ color: "#444441", lineHeight: 1.7, marginBottom: "1.25rem" }}>{pet.description}</p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.5rem" }}>
            {pet.tags.map((tag) => (
              <span key={tag} style={{ padding: "5px 12px", borderRadius: "9999px", fontSize: "0.8125rem", fontWeight: 500, backgroundColor: "#F3F1EC", color: "#888780" }}>
                {tag}
              </span>
            ))}
          </div>

          <p style={{ fontSize: "0.875rem", color: "#888780", marginBottom: "1.5rem" }}>
            📍 {pet.organization}
          </p>

          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <Link
              href={`/contato?pet=${encodeURIComponent(pet.name)}`}
              style={{
                flex: 1,
                minWidth: "160px",
                backgroundColor: "#EF9F27",
                color: "white",
                textDecoration: "none",
                padding: "0.875rem 1.5rem",
                borderRadius: "9999px",
                fontWeight: 600,
                fontSize: "0.9375rem",
                textAlign: "center",
              }}
            >
              Quero adotar {pet.name}
            </Link>
            <button
              onClick={onClose}
              style={{
                flex: 1,
                minWidth: "120px",
                backgroundColor: "transparent",
                color: "#444441",
                border: "1px solid #E8E6E1",
                padding: "0.875rem 1.5rem",
                borderRadius: "9999px",
                fontWeight: 500,
                fontSize: "0.9375rem",
                cursor: "pointer",
              }}
            >
              Voltar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

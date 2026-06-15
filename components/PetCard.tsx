"use client";

import Image from "next/image";
import { useState } from "react";
import { Pet, getAgeLabel, getSizeLabel, getStatusLabel } from "@/lib/pets";

interface PetCardProps {
  pet: Pet;
  onClick: (pet: Pet) => void;
}

export default function PetCard({ pet, onClick }: PetCardProps) {
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  const statusColors: Record<string, { bg: string; color: string }> = {
    available: { bg: "#e6f4ef", color: "#1D9E75" },
    foster: { bg: "#fdf0e6", color: "#D85A30" },
    adopted: { bg: "#f0f0f0", color: "#888780" },
  };

  const statusStyle = statusColors[pet.status] || statusColors.available;

  return (
    <article
      onClick={() => onClick(pet)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onClick(pet)}
      tabIndex={0}
      role="button"
      aria-label={`Ver detalhes de ${pet.name}`}
      style={{
        backgroundColor: "white",
        borderRadius: "16px",
        overflow: "hidden",
        cursor: "pointer",
        transition: "transform 0.2s, box-shadow 0.2s",
        transform: hovered ? "translateY(-4px)" : "none",
        boxShadow: hovered
          ? "0 8px 24px rgba(44,44,42,.14)"
          : "0 2px 8px rgba(44,44,42,.08)",
        outline: "none",
      }}
    >
      <div style={{ position: "relative", width: "100%", paddingBottom: "66.67%", overflow: "hidden" }}>
        {!imgError ? (
          <Image
            src={pet.image}
            alt={pet.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            style={{ objectFit: "cover", transition: "transform 0.3s", transform: hovered ? "scale(1.04)" : "scale(1)" }}
            onError={() => setImgError(true)}
          />
        ) : (
          <div style={{ position: "absolute", inset: 0, backgroundColor: "#F3F1EC", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "3rem" }}>
            {pet.species === "cat" ? "🐱" : "🐶"}
          </div>
        )}
        <span
          style={{
            position: "absolute",
            top: "12px",
            left: "12px",
            padding: "4px 10px",
            borderRadius: "9999px",
            fontSize: "0.75rem",
            fontWeight: 600,
            backgroundColor: statusStyle.bg,
            color: statusStyle.color,
          }}
        >
          {getStatusLabel(pet.status)}
        </span>
      </div>

      <div style={{ padding: "1.25rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem" }}>
          <h3 style={{ fontSize: "1.125rem", fontWeight: 600, color: "#2C2C2A" }}>{pet.name}</h3>
          <span style={{ fontSize: "0.8125rem", color: "#888780" }}>{getAgeLabel(pet.age)}</span>
        </div>

        <p style={{ fontSize: "0.875rem", color: "#888780", marginBottom: "0.75rem" }}>
          {pet.breed} · {getSizeLabel(pet.size)} · {pet.gender === "female" ? "Fêmea" : "Macho"}
        </p>

        <p style={{ fontSize: "0.875rem", color: "#444441", lineHeight: 1.6, marginBottom: "1rem", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
          {pet.description}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
          {pet.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              style={{ padding: "3px 10px", borderRadius: "9999px", fontSize: "0.75rem", fontWeight: 500, backgroundColor: "#F3F1EC", color: "#888780" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

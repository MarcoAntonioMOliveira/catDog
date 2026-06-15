"use client";

import { useState, useMemo } from "react";
import { petsData, Pet, PetSpecies, PetSize } from "@/lib/pets";
import PetCard from "./PetCard";
import PetModal from "./PetModal";

type AgeFilter = "all" | "filhote" | "jovem" | "adulto";

export default function PetCatalog() {
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null);
  const [species, setSpecies] = useState<PetSpecies | "all">("all");
  const [size, setSize] = useState<PetSize | "all">("all");
  const [age, setAge] = useState<AgeFilter>("all");

  const filtered = useMemo(() => {
    return petsData.filter((pet) => {
      if (species !== "all" && pet.species !== species) return false;
      if (size !== "all" && pet.size !== size) return false;
      if (age !== "all") {
        if (age === "filhote" && pet.age > 1) return false;
        if (age === "jovem" && (pet.age < 2 || pet.age > 3)) return false;
        if (age === "adulto" && pet.age < 4) return false;
      }
      return true;
    });
  }, [species, size, age]);

  const hasFilters = species !== "all" || size !== "all" || age !== "all";

  const selectStyle: React.CSSProperties = {
    padding: "0.625rem 1rem",
    borderRadius: "8px",
    border: "1px solid #E8E6E1",
    backgroundColor: "white",
    fontSize: "0.9375rem",
    color: "#444441",
    cursor: "pointer",
    outline: "none",
    minWidth: "160px",
  };

  return (
    <>
      {/* Filters */}
      <div
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          flexWrap: "wrap",
          marginBottom: "2rem",
          padding: "1.25rem",
          backgroundColor: "#F3F1EC",
          borderRadius: "12px",
        }}
      >
        <select value={species} onChange={(e) => setSpecies(e.target.value as PetSpecies | "all")} style={selectStyle}>
          <option value="all">Todos os animais</option>
          <option value="dog">Cão</option>
          <option value="cat">Gato</option>
        </select>

        <select value={size} onChange={(e) => setSize(e.target.value as PetSize | "all")} style={selectStyle}>
          <option value="all">Qualquer porte</option>
          <option value="small">Pequeno</option>
          <option value="medium">Médio</option>
          <option value="large">Grande</option>
        </select>

        <select value={age} onChange={(e) => setAge(e.target.value as AgeFilter)} style={selectStyle}>
          <option value="all">Todas as idades</option>
          <option value="filhote">Filhote (até 1 ano)</option>
          <option value="jovem">Jovem (2–3 anos)</option>
          <option value="adulto">Adulto (4+ anos)</option>
        </select>

        <span style={{ marginLeft: "auto", fontSize: "0.875rem", color: "#888780" }}>
          {filtered.length} pet{filtered.length !== 1 ? "s" : ""} encontrado{filtered.length !== 1 ? "s" : ""}
        </span>

        {hasFilters && (
          <button
            onClick={() => { setSpecies("all"); setSize("all"); setAge("all"); }}
            style={{ background: "none", border: "none", color: "#EF9F27", cursor: "pointer", fontSize: "0.875rem", fontWeight: 500 }}
          >
            Limpar filtros ×
          </button>
        )}
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1.5rem" }}>
          {filtered.map((pet) => (
            <PetCard key={pet.id} pet={pet} onClick={setSelectedPet} />
          ))}
        </div>
      ) : (
        <div style={{ textAlign: "center", padding: "4rem 0" }}>
          <p style={{ fontSize: "3rem", marginBottom: "1rem" }}>🐾</p>
          <h3 style={{ fontWeight: 600, color: "#2C2C2A", marginBottom: "0.5rem" }}>Nenhum pet encontrado</h3>
          <p style={{ color: "#888780" }}>Tente ajustar os filtros para ver mais resultados.</p>
        </div>
      )}

      <PetModal pet={selectedPet} onClose={() => setSelectedPet(null)} />
    </>
  );
}

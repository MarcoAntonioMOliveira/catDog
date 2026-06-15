"use client";

import { useState } from "react";
import { petsData } from "@/lib/pets";
import PetCard from "./PetCard";
import PetModal from "./PetModal";
import type { Pet } from "@/lib/pets";

export default function FeaturedPets() {
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null);
  const featured = petsData.filter((p) => p.status === "available").slice(0, 4);

  return (
    <>
      <div
        style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }}
      >
        {featured.map((pet) => (
          <PetCard key={pet.id} pet={pet} onClick={setSelectedPet} />
        ))}
      </div>
      <PetModal pet={selectedPet} onClose={() => setSelectedPet(null)} />

      <style>{`
        @media (max-width: 1024px) {
          .featured-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .featured-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}

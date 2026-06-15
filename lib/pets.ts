export type PetSpecies = "dog" | "cat";
export type PetSize = "small" | "medium" | "large";
export type PetStatus = "available" | "adopted" | "foster";

export interface Pet {
  id: number;
  name: string;
  species: PetSpecies;
  breed: string;
  age: number;
  size: PetSize;
  gender: "male" | "female";
  status: PetStatus;
  description: string;
  tags: string[];
  image: string;
  organization: string;
}

export const petsData: Pet[] = [
  {
    id: 1,
    name: "Thor",
    species: "dog",
    breed: "Labrador mix",
    age: 2,
    size: "large",
    gender: "male",
    status: "available",
    description:
      "Thor é um cachorro cheio de energia e amor para dar. Adora brincar ao ar livre e é ótimo com crianças. Está vacinado, castrado e pronto para encontrar sua família definitiva.",
    tags: ["Vacinado", "Castrado", "Adora crianças"],
    image: "/images/pets/thor.jpg",
    organization: "Instituto Patinhas",
  },
  {
    id: 2,
    name: "Luna",
    species: "cat",
    breed: "Siamesa mix",
    age: 1,
    size: "small",
    gender: "female",
    status: "available",
    description:
      "Luna é uma gatinha delicada e carinhosa. Adora colo e ronrona muito. Ideal para apartamentos e convive bem com outros gatos.",
    tags: ["Vacinada", "Castrada", "Indoor"],
    image: "/images/pets/luna.jpg",
    organization: "Lar dos Felinos",
  },
  {
    id: 3,
    name: "Bob",
    species: "dog",
    breed: "SRD",
    age: 4,
    size: "medium",
    gender: "male",
    status: "available",
    description:
      "Bob é tranquilo, obediente e muito leal. Já passou por treinamento básico e sabe os comandos essenciais. Perfeito para famílias que buscam um companheiro calmo.",
    tags: ["Treinado", "Vacinado", "Calmo"],
    image: "/images/pets/bob.jpg",
    organization: "Instituto Patinhas",
  },
  {
    id: 4,
    name: "Mia",
    species: "cat",
    breed: "Persa mix",
    age: 3,
    size: "small",
    gender: "female",
    status: "foster",
    description:
      "Mia está em lar temporário e precisa urgentemente de adoção definitiva. É independente mas adora atenção na hora certa. Pelagem linda e temperamento sereno.",
    tags: ["Lar temporário", "Urgente", "Independente"],
    image: "/images/pets/mia.jpg",
    organization: "Lar dos Felinos",
  },
  {
    id: 5,
    name: "Rex",
    species: "dog",
    breed: "Pastor mix",
    age: 1,
    size: "large",
    gender: "male",
    status: "available",
    description:
      "Rex é um filhote jovem e cheio de vida. Aprende comandos rapidamente e adora aprender coisas novas. Precisa de espaço para se exercitar e muito carinho.",
    tags: ["Filhote", "Inteligente", "Ativo"],
    image: "/images/pets/rex.jpg",
    organization: "Instituto Patinhas",
  },
  {
    id: 6,
    name: "Brisa",
    species: "cat",
    breed: "Brasileiro shorthair",
    age: 5,
    size: "small",
    gender: "female",
    status: "available",
    description:
      "Brisa é uma gata adulta e equilibrada. Já passou pela fase de filhote e é perfeita para quem quer um companheiro tranquilo e carinhoso no dia a dia.",
    tags: ["Adulta", "Equilibrada", "Carinhosa"],
    image: "/images/pets/brisa.jpg",
    organization: "Lar dos Felinos",
  },
  {
    id: 7,
    name: "Caramelo",
    species: "dog",
    breed: "SRD",
    age: 6,
    size: "medium",
    gender: "male",
    status: "available",
    description:
      "Caramelo é um cão adulto com muito amor para dar. Passou anos na rua e agora sonha com um lar definitivo. Manso, dócil e extremamente grato.",
    tags: ["Resgatado", "Dócil", "Adulto"],
    image: "/images/pets/caramelo.jpg",
    organization: "Resgate Animal Maringá",
  },
  {
    id: 8,
    name: "Nala",
    species: "cat",
    breed: "Angorá mix",
    age: 2,
    size: "small",
    gender: "female",
    status: "foster",
    description:
      "Nala está em lar temporário e precisa de adoção. É brincalhona, curiosa e adora interagir. Convive bem com outros gatos e com crianças maiores.",
    tags: ["Lar temporário", "Brincalhona", "Sociável"],
    image: "/images/pets/nala.jpg",
    organization: "Lar dos Felinos",
  },
];

export function getAgeLabel(age: number): string {
  if (age <= 1) return "Filhote";
  if (age <= 3) return "Jovem";
  return "Adulto";
}

export function getSizeLabel(size: PetSize): string {
  const labels: Record<PetSize, string> = {
    small: "Pequeno",
    medium: "Médio",
    large: "Grande",
  };
  return labels[size];
}

export function getStatusLabel(status: PetStatus): string {
  const labels: Record<PetStatus, string> = {
    available: "Disponível",
    adopted: "Adotado",
    foster: "Lar temporário",
  };
  return labels[status];
}

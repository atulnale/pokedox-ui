export const PokemonTypeColor = (type: string) => {
    switch (type) {
        case "grass":
          return "bg-[#9bcc50] text-black";
        case "poison":
          return "bg-purple-400 text-white";
        case "fire":
          return "bg-orange-400 text-white";
        case "flying":
          return "bg-blue-400 text-black";
        case "water":
          return "bg-blue-800 text-white";
        case "bug":
          return "bg-green-800 text-white";
        case "normal":
          return "bg-yellow-400";
        case "electric":
          return "bg-yellow-200";
        case "ground":
          return "bg-yellow-800";
        case "fairy":
          return "bg-pink-400";
        case "fighting":
          return "bg-red-800";
        case "psychic":
          return "bg-pink-800";
        case "rock":
          return "bg-gray-400";
        case "steel":
          return "bg-gray-800";
        case "ice":
          return "bg-blue-200";
        case "ghost":
          return "bg-indigo-800";
        case "dragon":
          return "bg-indigo-400";
        case "dark":
          return "bg-gray-900";
      }
}

export type pokemon_type = {
    abilities: string[];
    detailPageURL: string;
    weight: number;
    weakness: string[];
    number: string;
    height: number;
    collectibles_slug: string;
    featured: string;
    slug: string;
    name: string;
    ThumbnailAltText: string;
    ThumbnailImage: string;
    id: number;
    type: string[];
  };
import React, { useEffect } from "react";
import PokemonCard from "./PokemonCard";
import { pokemon_type } from "./PokemonTypeColor";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const PokemonContainer = () => {
  const pokemons = useSelector((state: RootState) => state.pokemon.pokemons);
  const [visibleCount, setVisibleCount] = React.useState<number>(12);
  const [visiblePokemons, setVisiblePokemons] = React.useState<pokemon_type[]>(
    []
  );
  //   useEffect(() => {
  //     setVisiblePokemons(pokemons.slice(0, visibleCount));
  //     console.log(visiblePokemons);
  //   }, [pokemons, visibleCount]);
  useEffect(() => {
    const minCount = Math.min(12, pokemons.length);
    setVisiblePokemons(pokemons.slice(0, minCount));
    setVisibleCount(minCount);
  }, [pokemons]);
  const loadMore = () => {
    setVisiblePokemons(
      visiblePokemons?.concat(pokemons.slice(visibleCount, visibleCount + 12))
    );
    setVisibleCount(visibleCount + 12);
  };
  return (
    <div className="py-10">
      <div className="flex w-full justify-center">
        <div className="flex flex-col sm:flex-wrap sm:flex-row sm:justify-center gap-4">
          {visiblePokemons?.map((pokemon: pokemon_type) => (
              <PokemonCard pokemon={pokemon} key={pokemon.number} />
          ))}
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <button
          className="bg-[#30a7d7] text-white px-4 py-2 rounded-md"
          onClick={loadMore}
        >
          Load more Pokémon
        </button>
      </div>
    </div>
  );
};

export default PokemonContainer;

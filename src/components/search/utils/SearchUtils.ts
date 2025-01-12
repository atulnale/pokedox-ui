import { pokemons } from "../../../pokemon-grid/data";
import { pokemon_type } from "../../../pokemon-grid/PokemonTypeColor";

export const uniquePokemons = (pokemons: pokemon_type[]) => {
    const seenPokemonId = new Set();
    const result: pokemon_type[] = [];
    for (const pokemon of pokemons) {
        if (!seenPokemonId.has(pokemon.id)) {
            seenPokemonId.add(pokemon.id);
            result.push(pokemon);
        }
    }
    return result;
};

import { createSlice } from "@reduxjs/toolkit";
import { pokemons } from "../../pokemon-grid/data";
import { uniquePokemons } from "../../components/search/utils/SearchUtils";
const initialState = {
    originalPokemons: uniquePokemons(pokemons),
    pokemons: uniquePokemons(pokemons),
    selected: null
}
const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        setPokemons: (state, action) => {
            state.pokemons = action.payload;
        },
        reinitializePokemons: (state) => {
            state.pokemons = initialState.originalPokemons;
        },
        selectPokemon: (state, action) => {
            state.selected = action.payload;
        }
    }
});

export const { setPokemons, reinitializePokemons, selectPokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;


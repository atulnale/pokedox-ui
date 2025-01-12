import React, { useState } from "react";
import { formatType, pokemon_type, PokemonTypeColor } from "./PokemonTypeColor";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../redux/store";
import { useDispatch } from "react-redux";
import { selectPokemon } from "../redux/features/pokemonSlice";


const PokemonCard = ({pokemon}:{pokemon:pokemon_type}) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const formatColor = (type: string) => {
    return PokemonTypeColor(type);
  };
  

    const handleCardClick = () => {
        dispatch(selectPokemon(pokemon));
        navigate(`/${pokemon.name}`);
    }

  return (
    <div className="hover:animate-bounceOnce cursor-pointe" onClick={handleCardClick}>
      <div className="bg-gray-100 rounded-md">
        <img src={pokemon.ThumbnailImage} alt={pokemon.ThumbnailAltText} className="h-96 sm:h-auto"/>
      </div>
      <div className="pl-2">
        <p className="text-[12px] text-gray-500">#{pokemon.number}</p>
        <h3 className="text-xl ">{pokemon.name}</h3>
        <div className="flex gap-2 text-[12px]">
          {pokemon?.type?.map((type,index) => (
            <div key={index} className={`${formatColor(type)} bg-opacity-80 rounded-md px-4`}>{formatType(type)}</div>
          ))}
          </div>
      </div>
    </div>
  );
};

export default PokemonCard;

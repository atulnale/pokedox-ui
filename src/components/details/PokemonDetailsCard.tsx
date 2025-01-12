import React from "react";
import { pokemon_type, PokemonTypeColor } from "../../pokemon-grid/PokemonTypeColor";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const PokemonDetailsCard = ({
  pokemon,
  evolutions,
}: {
  pokemon: pokemon_type;
  evolutions: pokemon_type[];
}) => {
  console.log(evolutions);
  return (
    <div className="bg-white mb-6 mt-16 justify-end flex flex-col items-end mx-4">
      <div></div>
      <div className="relative mb-8 py-6 w-full px-6 bg-[url('https://assets.pokemon.com/static2/_ui/img/chrome/body_bg.png')] rounded-md bg-opacity-0">
        <h3 className="text-gray-200 text-xl tracking-wider">Evolutions</h3>
        <div className="flex gap-4 flex-col lg:flex-row justify-center items-center">
          <div className="flex flex-col items-center">
            <div className="flex border-4 rounded-full mb-2 justify-center items-center">
              <img
                src={evolutions[0].ThumbnailImage}
                alt={evolutions[0].name}
                className="w-32 h-32"
              />
            </div>
            <div className="flex gap-2 text-lg mb-4">
              <h3 className="text-gray-200">{evolutions[0].name}</h3>
              <h3 className="text-gray-400">#{evolutions[0].number}</h3>
            </div>
            <div className="flex gap-2 ">
                {evolutions[0].type.map((type, index) => (
                    <div
                    key={index}
                    className={`${PokemonTypeColor(type)} bg-opacity-80 rounded-md px-12`}
                    >
                    {type}
                    </div>
                ))}
            </div>
          </div>
          <div className="text-white text-6xl rotate-[270deg] md:rotate-180"><MdOutlineKeyboardArrowLeft /></div>

          <div className="flex flex-col items-center">
            <div className="flex border-4 rounded-full mb-2 justify-center items-center">
              <img
                src={evolutions[1].ThumbnailImage}
                alt={evolutions[1].name}
                className="w-32 h-32"
              />
            </div>
            <div className="flex gap-2 text-lg mb-4">
              <h3 className="text-gray-200">{evolutions[1].name}</h3>
              <h3 className="text-gray-400">#{evolutions[1].number}</h3>
            </div>
            <div className="flex gap-2 ">
                {evolutions[1].type.map((type, index) => (
                    <div
                    key={index}
                    className={`${PokemonTypeColor(type)} bg-opacity-80 rounded-md px-12`}
                    >
                    {type}
                    </div>
                ))}
            </div>
          </div>
          <div className="text-white text-6xl rotate-[270deg] md:rotate-180"><MdOutlineKeyboardArrowLeft /></div>

          <div className="flex flex-col items-center">
            <div className="flex border-4 rounded-full mb-2 justify-center items-center">
              <img
                src={evolutions[2].ThumbnailImage}
                alt={evolutions[2].name}
                className="w-32 h-32"
              />
            </div>
            <div className="flex gap-2 text-lg mb-4">
              <h3 className="text-gray-200">{evolutions[2].name}</h3>
              <h3 className="text-gray-400">#{evolutions[2].number}</h3>
            </div>
            <div className="flex gap-2 ">
                {evolutions[2].type.map((type, index) => (
                    <div
                    key={index}
                    className={`${PokemonTypeColor(type)} bg-opacity-80 rounded-md px-12`}
                    >
                    {type}
                    </div>
                ))}
            </div>
          </div>
        </div>
        
        
        <div className="absolute bg-white clip-triangle self-start w-10 h-10 bottom-0 left-0"></div>
      </div>
      <div>
        <button className="bg-orange-600 text-white px-2 py-3 rounded-md">
          Explore More Pokemon
        </button>
      </div>
      
    </div>
  );
};

export default PokemonDetailsCard;

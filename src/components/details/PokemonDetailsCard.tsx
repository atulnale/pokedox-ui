import React from "react";
import { pokemon_type, PokemonTypeColor } from "../../pokemon-grid/PokemonTypeColor";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import StatsGraph from "./StatsGraph";
import InformationTab from "./InformationTab";
import InformationBox from "./InformationBox";
import Type from "./Type";
import WeaknessDetails from "./WeaknessDetails";

const PokemonDetailsCard = ({
  pokemon,
  evolutions,
}: {
  pokemon: pokemon_type;
  evolutions: pokemon_type[];
}) => {
  console.log(evolutions);
  return (
    <div className="bg-white mb-6 mt-16  flex flex-col mx-4">
      <div className="self-start w-full gap-2 flex flex-col lg:flex-row">
        {/* Image */}
        <div className="lg:w-1/2 w-full">
        <img src={pokemon.ThumbnailImage} alt={pokemon.ThumbnailAltText} className="w-full bg-gray-200 rounded-md" />
        <StatsGraph hp={50} spdef={49} spatt={45} speed={82} attack={25} defence={55}/>
        </div>
        <div className="lg:w-1/2 w-full space-y-8 mb-8">
            <InformationTab />
            <InformationBox />
            <Type pokemon={pokemon}/>
            <WeaknessDetails pokemon={pokemon} />
        </div>
       
      </div>
      <div className="px-4 relative mb-8 py-6 w-full bg-[url('https://assets.pokemon.com/static2/_ui/img/chrome/body_bg.png')] rounded-md bg-opacity-0">
        <h3 className="text-gray-200 text-xl tracking-wider">Evolutions</h3>
        <div className="flex gap-4 flex-col lg:flex-row justify-center items-center">
          <div className="flex flex-col items-center">
            <div className="flex border-4 rounded-full mb-2 justify-center items-center">
              <img
                src={evolutions[0].ThumbnailImage}
                alt={evolutions[0].name}
                className="w-auto lg:w-32 lg:h-auto"
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
                    className={`${PokemonTypeColor(type)} bg-opacity-80 rounded-md px-12 text-[12px]`}
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
                className="w-auto lg:w-32 lg:h-auto"
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
                    className={`${PokemonTypeColor(type)} bg-opacity-80 rounded-md px-12 text-[12px]`}
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
                className="w-auto lg:w-32 lg:h-auto"
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
                    className={`${PokemonTypeColor(type)} bg-opacity-80 rounded-md px-12 text-[12px]`}
                    >
                    {type}
                    </div>
                ))}
            </div>
          </div>
        </div>
        
        
        <div className="absolute bg-white clip-triangle self-start w-10 h-10 bottom-0 left-0 scale-150"></div>
      </div>
      <div className="flex justify-end">
        <button className="bg-orange-600 text-white px-2 py-3 rounded-md">
          Explore More Pokemon
        </button>
      </div>
      
    </div>
  );
};

export default PokemonDetailsCard;

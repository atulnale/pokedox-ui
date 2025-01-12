import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useParams } from "react-router-dom";
import { pokemon_type } from "../../pokemon-grid/PokemonTypeColor";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import PokemonDetailsCard from "./PokemonDetailsCard";

const Details = () => {
  const [leftPanelHover, setLeftPanelHover] = useState(false);
  const [rightPanelHover, setRightPanelHover] = useState(false);
  const { name } = useParams();
  const { pokemons, selected } = useSelector(
    (state: RootState) => state.pokemon
  );
  const [selectedPokemon, setSelectedPokemon] =
    React.useState<pokemon_type | null>(null);
    const [evolutions, setEvolutions] = useState<pokemon_type[]>([]);
  useEffect(() => {
    if (!selected) {
      const pokemon = pokemons.find((pokemon) => pokemon.name === name);
      if (pokemon) {
        setSelectedPokemon(pokemon);
        setEvolutions(getPokemonEvolutions(pokemon));
      }
    } else {
      setSelectedPokemon(selected);
      setEvolutions(getPokemonEvolutions(selected));
    }
    
  },[]);
  const getPreviousPokemon = (): pokemon_type => {
    const index = selectedPokemon ? pokemons.indexOf(selectedPokemon) : -1;
    if (index === 0) {
      return pokemons[pokemons.length - 1];
    }
    return pokemons[index - 1];
  };
  const getNextPokemon = (): pokemon_type => {
    const index = selectedPokemon ? pokemons.indexOf(selectedPokemon) : -1;
    if (index === pokemons.length - 1) {
      return pokemons[0];
    }
    return pokemons[index + 1];
  };
    const getPokemonEvolutions = (pokemon:pokemon_type): pokemon_type[] => {
        const id = Number(pokemon.number);
        if(pokemon && id <= 3) {
            console.log(true);
            return pokemons.slice(0, 3);
        }
        console.log(false);
        return pokemon 
          ? pokemons.slice(id - 3, id)
          : [];
    }

  return (
    <>
      {!selectedPokemon ? (
        <div className="col-span-3 h-screen bg-white flex flex-col items-center pt-32">
          <h1 className="text-6xl font-bold text-gray-600 tracking-wider mb-4">
            Page Not found
          </h1>
          <p className="text-xl text-gray-500">
            Sorry! The page you're looking for is not here.
          </p>
        </div>
      ) : (
        <>
          <div
            className={`${
              leftPanelHover ? "bg-blue-400" : "bg-[#a4a4a4]"
            } delay-100`}
          ></div>
          <div className="flex flex-col">
          <div className="flex bg-[#a4a4a4] ">
            <div
              className="bg-[#a4a4a4] w-full w-1/2 pb-4  hover:bg-blue-400 pt-4 flex text-2xl gap-4 delay-100  border-r-4 border-white"
              onMouseEnter={()=>setLeftPanelHover(true)}
              onMouseLeave={()=>setLeftPanelHover(false)}
            >
              <div className="w-8 h-8 bg-white  flex justify-center items-center rounded-full">
                <MdOutlineKeyboardArrowLeft />
              </div>
              <div className="flex gap-4">
                <h3 className="text-white">#{getPreviousPokemon().number}</h3>
                <h3 className="text-zinc-700">{getPreviousPokemon().name}</h3>
              </div>
            </div>
            <div
              className="bg-[#a4a4a4] w-full w-1/2  hover:bg-blue-400 pt-4 flex text-2xl gap-4 flex-row-reverse delay-100"
              onMouseEnter={()=>setRightPanelHover(true)}
              onMouseLeave={()=>setRightPanelHover(false)}
            >
              <div className="w-8 h-8 bg-white  flex justify-center items-center rounded-full transform rotate-180">
                <MdOutlineKeyboardArrowLeft />
              </div>
              <div className="flex gap-4 flex-row-reverse">
                <h3 className="text-white">#{getNextPokemon().number}</h3>
                <h3 className="text-zinc-700">{getNextPokemon().name}</h3>
              </div>
            </div>
            
          </div>
          <div className='relative bg-[#a4a4a4]'>
         <div className="w-full h-14 bg-white clip-trapezium"></div>
         <div className='absolute inset-0 flex justify-center items-center text-3xl gap-4'>
         <h1 className="text-gray-800">{selectedPokemon.name}</h1>
         <h1 className='text-gray-500'>#{selectedPokemon.number}</h1>
         </div>

    </div>
          </div>
          <div className={`${
              rightPanelHover ? "bg-blue-400" : "bg-[#a4a4a4]"
          } delay-100`}></div>
<div className="bg-[url('https://assets.pokemon.com/static2/_ui/img/chrome/container_bg.png')] bg-white"></div>
      <div className="bg-white">
        <PokemonDetailsCard pokemon={selectedPokemon} evolutions={evolutions}/>
      </div>
      <div className="bg-[url('https://assets.pokemon.com/static2/_ui/img/chrome/container_bg.png')] bg-white"></div>

          
        </>
      )}
    </>
  );
};

export default Details;

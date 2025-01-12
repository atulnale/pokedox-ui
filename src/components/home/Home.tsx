import React from "react";
import SearchComponent from "../search/SearchComponent";
import PokemonContainer from "../../pokemon-grid/PokemonContainer";

const Home = () => {
  return (
    <>
      <div className="bg-[#313131]"></div>
      <div className="">
        <SearchComponent />
      </div>
      <div className="bg-[#313131]"></div>
      <div className="bg-[url('https://assets.pokemon.com/static2/_ui/img/chrome/container_bg.png')] bg-white"></div>
      <div className="bg-white">
        <PokemonContainer />
      </div>
      <div className="bg-[url('https://assets.pokemon.com/static2/_ui/img/chrome/container_bg.png')] bg-white"></div>
    </>
  );
};

export default Home;

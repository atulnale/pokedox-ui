import React from "react";
import { ImSearch } from "react-icons/im";

const SearchComponent = () => {
  return (
    <div className="py-10 bg-[#313131] text-white text-thin font-extralight">
      <div className="flex flex-col items-center md:items-start space-y-16 md:flex-row md:space-y-0 md:space-x-10">
        <div className="flex flex-col max-w-sm md:w-1/2">
          <h1 className="text-2xl tracking-widest mb-4">Name or Number</h1>
          <div className="flex gap-6 pr-10">
            <input type="text" className="py-1 px-1 text-black mb-2 h-10 w-full" />
            <div className="bg-[#ee6b2f] h-10 w-12 rounded-lg flex items-center justify-center font-bold object-fill">
            <ImSearch size={16} />
            </div>
          </div>
          <p>
          Use the Advanced Search to explore Pokémon by type, weakness, Ability, and more!
          </p>
        </div>
        <div className="p-4 bg-[#4dad5b] rounded-md md:max-w-sm md:w-1/2">
            <p className="md:mb-2">
            Search for a Pokémon by name or using its National Pokédex number.
            </p>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;

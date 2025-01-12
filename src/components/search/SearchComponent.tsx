import React, { useEffect, useRef, useState } from "react";
import { ImSearch } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { setPokemons } from "../../redux/features/pokemonSlice";


const SearchComponent = () => {
    const dispatch = useDispatch<AppDispatch>();
    const pokemons =  useSelector((state: RootState) => state.pokemon.originalPokemons);
  const [inputFocused, setInputFocused] = useState(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [showAutoComplete, setShowAutoComplete] = useState(false);
  const [autoCompleteList, setAutoCompleteList] = useState<string[]>([]);
  const handleOnChaneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setAutoCompleteList([]);
    let count = 0;
    for (let i = 0; i < pokemons.length; i++) {
      if (
        pokemons[i].name.toLowerCase().includes(e.target.value.toLowerCase())
      ) {
        setAutoCompleteList((prev) => [...prev, pokemons[i].name]);
        count += 1;
      }
      if (count >= 5) {
        break;
      }
    }
  };
  const handleInputFocus = () => {
    setInputFocused(true);
  };
  const handleInputBlur = () => {
    setInputFocused(false);
  };
  useEffect(() => {
    setShowAutoComplete(searchValue.length > 0 && inputFocused);
  }, [searchValue, inputFocused]);
  const handleSearchButton = () => {
    let resultPokemons = pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(searchValue.toLowerCase()));
    dispatch(setPokemons(resultPokemons));
  }

  return (
    <div className="py-10 bg-[#313131] text-white text-thin font-extralight">
      <div className="flex flex-col items-center md:items-start space-y-16 md:flex-row md:space-y-0 md:space-x-10">
        <div className="flex flex-col max-w-sm md:w-1/2">
          <h1 className="text-2xl tracking-widest mb-4">Name or Number</h1>
          <div className="flex gap-6 pr-10">
            <div className="flex flex-col gap-0 w-full relative">
              <input
                type="text"
                className="py-1 px-2 text-black mb-0 h-10 w-full"
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                onChange={handleOnChaneInput}
              />
              <div
                className={`absolute left-0 top-[100%] w-full pl-4 bg-white text-gray-500 flex flex-col gap-2 pb-2 ${
                  showAutoComplete ? "block" : "hidden"
                }`}
              >
                {autoCompleteList.map((item,index) => {
                  return <p key={index}>{item}</p>;
                })}
              </div>
            </div>

            <div
              className="bg-[#ee6b2f] hover:bg-orange-700 cursor-pointer h-10 w-12 rounded-lg flex items-center justify-center font-bold object-fill"
              onClick={handleSearchButton}

            >
              <ImSearch size={16} />
            </div>
          </div>
          <p>
            Use the Advanced Search to explore Pokémon by type, weakness,
            Ability, and more!
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

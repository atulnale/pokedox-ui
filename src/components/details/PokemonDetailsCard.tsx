import React from 'react'
import { pokemon_type } from '../../pokemon-grid/PokemonTypeColor'

const PokemonDetailsCard = ({pokemon}:{pokemon:pokemon_type}) => {
  return (
    <div className='relative bg-red-400'>
         <div className="w-full h-14 bg-white clip-trapezium"></div>
         <div className='absolute inset-0 flex justify-center items-center text-3xl gap-4'>
         <h1 >{pokemon.name}</h1>
         <h1 className='text-gray-600'>#{pokemon.number}</h1>
         </div>

    </div>
   


  )
}

export default PokemonDetailsCard
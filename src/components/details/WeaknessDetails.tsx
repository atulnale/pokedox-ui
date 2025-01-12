import React from 'react'
import { formatType, pokemon_type, PokemonTypeColor } from '../../pokemon-grid/PokemonTypeColor'

const WeaknessDetails = ({pokemon}:{pokemon:pokemon_type}) => {
  return (
    <div>
            <h2 className='text-2xl text-gray-500 mb-4'>Weakness</h2>
            <div className='flex gap-2 flex-wrap'>
            {pokemon.weakness.map((type, index) => (
                                <div
                                key={index}
                                className={`${PokemonTypeColor(type.toLowerCase())} bg-opacity-80 rounded-md px-12 py-1 text-lg`}
                                >
                                {formatType(type)}
                                </div>
                            ))}
            </div>
            
        </div>
  )
}

export default WeaknessDetails
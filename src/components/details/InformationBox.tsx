import React from 'react'
import { IoFemale, IoMale } from 'react-icons/io5'

const InformationBox = () => {
  return (
    <div className='p-4 bg-[#30a7d7] rounded-xl flex flex-wrap'>
        <div className='text-lg w-full lg:w-1/2 flex-col space-y-2 mb-2'>
            <h3 className='text-white'>Height</h3>
            <h3>2' 04"</h3>
        </div>
        <div className='text-lg w-full lg:w-1/2 flex-col space-y-2 mb-2'>
            <h3 className='text-white'>Category</h3>
            <h3>Seed</h3>
        </div>
        <div className='text-lg w-full lg:w-1/2 flex-col space-y-2 mb-2'>
            <h3 className='text-white'>Weight</h3>
            <h3>15.2 lbs</h3>
        </div>

        <div className='text-lg w-full lg:w-1/2 flex-col space-y-2 mb-2'>
            <h3 className='text-white'>Abilities</h3>
            <h3>Overgrow</h3>
        </div>
        <div className='text-lg w-full lg:w-1/2 flex-col space-y-2 mb-2'>
            <h3 className='text-white'>Gender</h3>
            <div className='flex'>
            <h3><IoMale /></h3>
            <h3><IoFemale /></h3>
            </div>
            
        </div>
        
    </div>
  )
}

export default InformationBox
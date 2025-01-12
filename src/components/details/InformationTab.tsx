import React, { useState } from 'react'
import { TbPokeball } from 'react-icons/tb'

const InformationTab = () => {
    const [selectedTab, setSelectedTab] = useState("blue");
    const blueText = "For some time after its birth, it uses the nutrients that are packed into the seed on its back in order to grow.";
    const redText = "It carries a seed on its back right from birth. As its body grows larger, the seed does too.";
  return (
    <div className='flex flex-col space-y-6'>
        <p>{selectedTab ==="blue"? blueText: redText}</p>
        <div className='flex items-center gap-3'>
            <p>Versions:</p>
            <div className={`flex text-blue-400 hover:cursor-pointer`} onClick={()=> setSelectedTab("blue")}>
            <TbPokeball size={40} className={`${selectedTab === 'blue' ? 'bg-blue-500 text-white rounded-full':''}`}/>
            </div>
            <div className={`flex text-red-600 hover:cursor-pointer `} onClick={()=>setSelectedTab("red")}>
            <TbPokeball size={40} className={` ${selectedTab === 'red' ? 'bg-red-500 rounded-full text-white':''}`}/>
            </div>
            
        </div>
    </div>
  )
}

export default InformationTab
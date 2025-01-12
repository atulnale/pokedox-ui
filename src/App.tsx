import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import SearchComponent from './components/search/SearchComponent'
import PokemonContainer from './pokemon-grid/PokemonContainer'
import Home from './components/home/Home'
import Details from './components/details/Details'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/:name",
      element: <Details />,
    }
    
  ]);
  return (
    <div className="h-full pb-24 bg-[url('https://assets.pokemon.com/static2/_ui/img/chrome/body_bg.png')]">
      {/* inner container */}
      {/* <div className="px-44 bg-white bg-[url('https://assets.pokemon.com/static2/_ui/img/chrome/container_bg.png')] max-w-screen-xl h-full mx-auto">
        <div className='bg-white h-full px-6'>
          <div className='h-full bg-white'>
            <Navbar />
            <SearchComponent />
          </div>
        </div>
      </div> */}
      <div className='max-w-screen-xl grid grid-cols-[.5fr_10fr_.5fr] md:grid-cols-[1fr_8fr_1fr] grid-rows-1 mx-auto'>
        <div className="bg-[url('https://assets.pokemon.com/static2/_ui/img/chrome/container_bg.png')] bg-white"></div>
        <div className="bg-white"><Navbar /></div>
        <div className="bg-[url('https://assets.pokemon.com/static2/_ui/img/chrome/container_bg.png')] bg-white"></div>
        <RouterProvider router={router}>
          </RouterProvider>
      </div>
    </div>
  )
}

export default App

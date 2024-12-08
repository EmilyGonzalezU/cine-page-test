import React, { useState } from 'react';
import cineLogo from '../assets/logo2.png';
import { VscMenu } from "react-icons/vsc";
import { VscChromeClose } from "react-icons/vsc";
function Home({ children }) {
  const [isOpen, setIsOpen] = useState(false);  

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="grid grid-cols-12 min-h-screen ">
      <div className="hidden lg:block lg:col-span-2 bg-gray-100 p-4 text-white">
      </div>

      <div className="col-span-12 lg:col-span-8 bg-gray-100 ">

        <div className="rounded  bg-[#ecb408] text-white text-center p-2 w-full text-md whitespace-nowrap overflow-hidden text-ellipsis">
          Menores de 14 años deben ingresar acompañados de un Adulto.
        </div>

        <div className="flex justify-between bg-black p-4">

          <button 
            className="lg:hidden text-start text-white bg-black p-2" 
            onClick={toggleSidebar}>
            {isOpen ? <VscMenu /> : <VscMenu />}
          </button>

          <img src={cineLogo} alt="LogoCine" className="w-[100px] mx-auto lg:mx-11" />

          <div className="hidden md:block  text-white text-center p-2 w-auto h-auto">
            <ul className="flex space-x-4"> 
              <li className="mb-2  p-2 cursor-pointer hover:text-[#ecb408]">Inicio</li>
              <li className="mb-2  p-2 cursor-pointer hover:text-[#ecb408]">Show en Vivo</li>
              <li className="mb-2  p-2 cursor-pointer hover:text-[#ecb408]">Nosotros</li>
              <li className="mb-2  p-2 cursor-pointer hover:text-[#ecb408]">Cartelera de Películas</li>
              <li className="mb-2  p-2 cursor-pointer hover:text-[#ecb408]">Confitería</li>
              <li className="mb-2  p-2 cursor-pointer hover:text-[#ecb408]">Promociones</li>
            </ul>
          </div>

        </div>  
        {/**aca va todo el contenido del hijo */}
        <main className="">{children}</main>

      </div>

      
      <div className="hidden lg:block lg:col-span-2 bg-gray-100 p-4 text-white"></div>

      <div className={`fixed inset-0 bg-black bg-opacity-50 lg:hidden ${isOpen ? 'block' : 'hidden'}`} onClick={toggleSidebar}></div>

      <div className={`lg:w-64 w-48 bg-black text-white p-4 fixed h-full top-0 ${isOpen ? 'left-0' : '-left-64'} transition-all ease-in-out`}>
        
        <h2 className="text-2xl font-bold mb-8">CineSol</h2>
        
        <ul>
          <li className="mb-4  p-2">Inicio</li>
          <li className="mb-4  p-2">Show en Vivo</li>
          <li className="mb-4  p-2">Nosotros</li>
          <li className="mb-4  p-2">Cartelera de Películas</li>
          <li className="mb-4  p-2">Confitería</li>
          <li className="mb-4  p-2">Promociones</li>
        </ul>
      
      </div>
    
    </div>

  );
}

function footer(){
 // return();
}
export default Home;

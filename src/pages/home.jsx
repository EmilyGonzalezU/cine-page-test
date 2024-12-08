import React, { useState } from 'react';
import cineLogo from '../assets/logo2.png';

function Home() {
  const [isOpen, setIsOpen] = useState(false);  

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="grid grid-cols-12 min-h-screen">
      <div className="hidden lg:block lg:col-span-2 bg-gray-900 p-4 text-white">
        Col izquierda
      </div>

      <div className="col-span-12 lg:col-span-8 bg-gray-100">
        <div className="bg-[#ecb408] text-white text-center p-2 w-full text-md whitespace-nowrap overflow-hidden text-ellipsis">
          Menores de 14 años deben ingresar acompañados de un Adulto.
        </div>

        <div className="flex place-items-end bg-gray-950 p-4">
          <img src={cineLogo} alt="LogoCine" className="w-[100px]" />
          <button 
            className="lg:hidden  text-white bg-gray-800 p-2 rounded" 
            onClick={toggleSidebar}>
            {isOpen ? 'Cerrar Menú' : 'Abrir Menú'}
          </button>
        </div>
      </div>

      <div className="hidden lg:block lg:col-span-2 bg-gray-900 p-4 text-white">
        Col derecha
      </div>

      <div className={`fixed inset-0 bg-black bg-opacity-50 lg:hidden ${isOpen ? 'block' : 'hidden'}`} onClick={toggleSidebar}></div>

      <div className={`lg:w-64 w-48 bg-gray-800 text-white p-4 fixed h-full top-0 ${isOpen ? 'left-0' : '-left-64'} transition-all ease-in-out`}>
        <h2 className="text-2xl font-bold mb-8">Menú Lateral</h2>
        <ul>
          <li className="mb-4 hover:bg-gray-700 p-2 rounded">Inicio</li>
          <li className="mb-4 hover:bg-gray-700 p-2 rounded">Sobre Nosotros</li>
          <li className="mb-4 hover:bg-gray-700 p-2 rounded">Servicios</li>
          <li className="mb-4 hover:bg-gray-700 p-2 rounded">Contacto</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;

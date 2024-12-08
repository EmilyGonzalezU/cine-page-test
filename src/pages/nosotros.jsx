import React from 'react';
import Home from './home'; // Asegúrate de usar la ruta correcta

function Nosotros() {
  return (
    <div>
      <Home>
        <div className=" bg-[#630606] text-white text-center p-2 w-auto h-auto">
         NOSOTROS
        </div>
        <div className="bg-white text-black  min-h-screen p-10" >
            <p>  Cinesacor S.A, opera en Chile desde 2003. Inicialmente con el nombre de Cinestar- Cine Mall y 
                actualmente por el nombre de CINESOL. Su sede corporativa está localizada en la 
                ciudad de Quilpué, Valparaíso, Chile.
            </p>
            <p>SOMOS UN CINE CON MÁS DE 15 AÑOS DE EXPERIENCIA.
            Nos dedicamos a la entretención de nuestros clientes Contamos con 5 salas para tu disposición. Tenemos una capacidad con de más de 1.000 butacas.</p>
            <p>Hicimos nuestra Primera función el 1 de Agosto del 2003. Somos tradición para nuestra comunidad. Nos ubicamos en la zona más estratégica de nuestra ciudad.</p>
            <p>Si quieres conocernos más has click en contáctanos o síguenos en nuestras redes sociales.</p>
        </div>
      </Home> {/* Aquí se incluye el navbar */}
      
    </div>
  );
}

export default Nosotros;

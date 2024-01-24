import React from 'react';
import Beneficios from './bloques/beneficios'; // Asegúrate de que esta es la ruta correcta para importar Beneficios

const SecBeneficios = ({ onRegistroClick }) => {
  return (
    <div className="container mx-auto py-8" id="beneficios">
      <h2 className="text-3xl font-bold text-center mb-6">Nuestros Beneficios</h2>
      <Beneficios onRegistroClick={onRegistroClick} />
      {/* Aquí puedes agregar más contenido si es necesario */}
    </div>
  );
};

export default SecBeneficios;

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Modal from 'react-modal';

// Componentes
import Clients from "./components/Clients";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Reviews from "./components/Reviews";
import Services from "./components/Services";
import Footer from "./components/Footer";
import SecBeneficios from "./components/SecBeneficios";
import RegistroGen from "./components/registrogen"; // Componente del modal de registro

// Imágenes
import bgImage from './assets/puntos-grid.webp';

// Establece el elemento raíz para el modal para la accesibilidad.
Modal.setAppElement('#root');

function App() {
  // Estado para controlar la visibilidad del modal de registro
  const [isRegistroModalOpen, setIsRegistroModalOpen] = useState(false);

  // Función para abrir el modal de registro
  const handleOpenRegistroModal = () => {
    setIsRegistroModalOpen(true);
  };

  // Función para cerrar el modal de registro
  const handleCloseRegistroModal = () => {
    setIsRegistroModalOpen(false);
  };

  return (
    <BrowserRouter>
      <div>
        <Header onRegistroClick={handleOpenRegistroModal} />
        
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Clients />
              <div style={{ 
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'contain', 
                backgroundRepeat: 'repeat', 
                backgroundAttachment: 'fixed'
              }}> 
                <SecBeneficios />
              </div>
              <Reviews />
              <Services />
            </>
          } />
        </Routes>

        <Footer />
        {/* Modal de Registro utilizando RegistroGen */}
        <RegistroGen isOpen={isRegistroModalOpen} onRequestClose={handleCloseRegistroModal} />
      </div>
    </BrowserRouter>
  );
}

export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Clients from './components/Clients';
import Reviews from './components/Reviews';
import Services from './components/Services';
import Footer from './components/Footer';
import SecBeneficios from './components/SecBeneficios';
import RegistroGen from './components/RegistroGen'; // Asegúrate de que este es el componente correcto para tu modal de registro

function App() {
  const [isRegistroModalOpen, setIsRegistroModalOpen] = useState(false);

  const handleOpenRegistroModal = () => {
    setIsRegistroModalOpen(true);
  };

  const handleCloseRegistroModal = () => {
    setIsRegistroModalOpen(false);
  };

  return (
    <Router>
      <Header onRegistroClick={handleOpenRegistroModal} />
      <Routes>
        <Route path="/" element={
          <>
            <Hero onRegistroClick={handleOpenRegistroModal} />
            <Clients />
            <SecBeneficios onRegistroClick={handleOpenRegistroModal} />
            <Reviews />
            <Services />
          </>
        } />
        {}
      </Routes>
      <Footer />
      <RegistroGen 
        isOpen={isRegistroModalOpen} 
        onRequestClose={handleCloseRegistroModal}
      />
    </Router>
  );
}

export default App;

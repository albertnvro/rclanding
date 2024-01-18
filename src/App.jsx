import { BrowserRouter, Routes, Route } from 'react-router-dom';

//componentes
import Clients from "./components/Clients";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Reviews from "./components/Reviews";
import Services from "./components/Services";
import Footer from "./components/Footer";
import SecBeneficios from "./components/SecBeneficios";
import RegistroModal from "./components/RegistroModal";
import LoginModal from "./components/LoginModal";

//imagenes 
import bgImage from './assets/puntos-grid.webp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta para la landing page */}
        <Route path="/" element={
          <div>
            <Header />
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
            <Footer />
          </div>
        }/>

        {/* Ruta para la página de registro */}
        <Route path="/registro" element={<RegistroModal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

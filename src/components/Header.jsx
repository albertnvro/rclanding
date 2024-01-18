import React, { useState } from "react";
import logo from '../assets/logo-bigbuy.svg';


// Iconos
import {
  RiCheckboxBlankCircleFill,
  RiMenu3Fill,
  RiCloseLine,
  RiCoinsLine
} from "react-icons/ri";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  return (
    <header className="flex items-center justify-between xl:justify-start w-full py-4 px-8 h-[10vh] z-50">
      <a href="http://localhost:5173/"><img src={logo} className="xl:w-16" alt="Logo BigBuy" /></a>
      <div className="xl:w-1/6 text-center -mt-4">
      </div>
      <nav
        className={`fixed bg-white w-[80%] md:w-[40%] xl:w-full h-full ${
          showMenu ? "left-0" : "-left-full"
        } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500 z-50`}
      >
  


  <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow flex items-center">
  <div className="absolute inset-0 w-3 bg-amarillo transition-all duration-[250ms] ease-out group-hover:w-full"></div>
  <span className="relative text-black group-hover:text-white flex items-center gap-2">
  <RiCoinsLine size={30} />
   <a href="#beneficios">Beneficios</a>
  </span>
</button>

  <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow flex items-center">
    <div className="absolute inset-0 w-3 bg-amarillo transition-all duration-[250ms] ease-out group-hover:w-full"></div>
    <span className="relative text-black group-hover:text-white flex items-center gap-2">
    <RiCoinsLine size={30} />
    <a href="#planes">Planes</a>
    </span>
</button>

    <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow flex items-center">
    <div className="absolute inset-0 w-3 bg-amarillo transition-all duration-[250ms] ease-out group-hover:w-full"></div>
    <span className="relative text-black group-hover:text-white flex items-center gap-2">
    <RiCoinsLine size={30} />
    <a href="#unirme">Unirme</a></span>
</button>
      </nav>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden text-2xl p-2"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>


<div className="flex items-center gap-4">
  <button
    onClick={() => setShowRegistroModal(true)}
    className="bg-black hover:bg-amarillo text-white font-bold py-2 px-4 rounded"
  >
    Registro
  </button>
  <button
    onClick={() => setShowLoginModal(true)}
    className="bg-black hover:bg-amarillo text-white font-bold py-2 px-4 rounded"
  >
    Enstrar
  </button>
</div>

    </header>

    
  );
};

export default Header;

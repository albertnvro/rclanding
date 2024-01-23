import React, { useState } from "react";
import logo from '../assets/logo-bigbuy.svg';
import { RiMenu3Fill, RiCloseLine, RiStarLine, RiUserAddLine } from "react-icons/ri";

const Header = ({ onRegistroClick }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => setShowMenu(!showMenu);

  const closeMobileMenu = () => setShowMenu(false);

  return (
    <header className="bg-white py-4 shadow-md relative z-10">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="/" className="flex items-center z-20">
          <img src={logo} className="w-16" alt="Logo" />
        </a>

        {/* Botón de menú móvil, visible solo en móviles */}
        <button onClick={handleMenuToggle} className={`text-2xl p-2 z-30 xl:hidden ${showMenu ? "fixed top-4 right-4" : ""}`}>
          {showMenu ? <RiCloseLine className="text-4xl" /> : <RiMenu3Fill className="text-4xl" />}
        </button>

        {/* Menú de navegación (se muestra/oculta en móviles) */}
        <nav className={`${showMenu ? "flex" : "hidden"} xl:flex flex-col xl:flex-row items-center xl:justify-center gap-10 absolute xl:relative top-full xl:top-auto left-0 xl:left-auto w-full xl:w-auto bg-white xl:bg-transparent shadow-xl xl:shadow-none p-6 xl:p-0 transition-all duration-500 ease-in-out z-20`}>
          <a href="#beneficios" className="menu-item" onClick={closeMobileMenu}>
            <RiStarLine className="icon"/> Beneficios
          </a>
          <a href="#unirme" className="menu-item" onClick={() => { onRegistroClick(); closeMobileMenu(); }}>
  <RiUserAddLine className="icon"/> Unirme
</a>

        </nav>

        {/* Botones de Registro y Login (siempre visibles en desktop) */}
        <div className="hidden xl:flex items-center gap-4">

          <button className="bg-black hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded">
            Entrar
          </button>
        </div>
      </div>
      
      {/* Estilos para los elementos del menú */}
      <style jsx>{`
        .menu-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          transition: background-color 0.3s, color 0.3s;
        }

        .menu-item:hover {
          background-color: black;
          color: white;
        }

        .icon {
          display: inline-block;
          font-size: 1.5rem;
        }
        .icon:hover {
          color: #f5b712;
        }
      `}</style>
    </header>
  );
};

export default Header;

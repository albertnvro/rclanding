import React, { useState } from "react";
import logo from '../assets/logo-bigbuy.svg';

// Iconos
import {
  RiMenu3Fill,
  RiCloseLine,
  RiStarLine
} from "react-icons/ri";

const Header = ({ onRegistroClick }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const closeMobileMenu = () => {
    if (window.innerWidth < 1280) { 
      setShowMenu(false);
    }
  };

  return (
    <header className="bg-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo a la izquierda */}
        <a href="/" className="flex items-center">
          <img src={logo} className="w-16" alt="Logo" />
        </a>

        {/* Botón de menú móvil a la derecha */}
        <button
          onClick={handleMenuToggle}
          className="text-2xl p-2 z-50 xl:hidden"
        >
          {showMenu ? <RiCloseLine className="text-4xl" /> : <RiMenu3Fill className="text-4xl" />}
        </button>

        {/* Menú de navegación (se muestra/oculta en móviles) */}
        <nav className={`${showMenu ? "flex" : "hidden"} xl:flex flex-row items-center justify-center gap-10 transition-all duration-500`}>
          <a href="#beneficios" className="menu-item" onClick={closeMobileMenu}>
            <RiStarLine className="icon"/> Beneficios
          </a>
          <a href="#unirme" className="menu-item" onClick={onRegistroClick}>
            <RiStarLine className="icon"/> Unirme
          </a>
        </nav>

        {/* Botones de Registro y Login (siempre visibles en desktop) */}
        <div className="hidden xl:flex items-center gap-4 ml-auto">
          <button
            onClick={onRegistroClick}
            className="bg-black hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded"
          >
            Registro
          </button>
          {/* Aquí se puede agregar un botón de 'Entrar' si es necesario */}
          <button
            className="bg-black hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded"
          >
            Entrar
          </button>
        </div>
      </div>

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
          background-color: #f3f4f6;
          color: #10b981;
        }

        .icon {
          display: inline-block;
          font-size: 1.5rem;
        }
      `}</style>
    </header>
  );
};

export default Header;

import React, { useState } from "react";
import logo from '../assets/logo-bigbuy.svg';
import { RiMenu3Fill, RiCloseLine, RiStarLine, RiUserAddLine } from "react-icons/ri";
import LoginModal from './LoginModal'; // Asegúrate de que la ruta sea correcta

const Header = ({ onRegistroClick }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleMenuToggle = () => setShowMenu(!showMenu);
  const closeMobileMenu = () => setShowMenu(false);
  const toggleLoginModal = () => setIsLoginModalOpen(!isLoginModalOpen);

  return (
    <header className="bg-white py-4 shadow-md relative z-10">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="/" className="flex items-center z-20">
          <img src={logo} className="w-16" alt="Logo" />
        </a>

        <button onClick={handleMenuToggle} className={`text-2xl p-2 z-30 xl:hidden ${showMenu ? "fixed top-4 right-4" : ""}`}>
          {showMenu ? <RiCloseLine className="text-4xl" /> : <RiMenu3Fill className="text-4xl" />}
        </button>

        <nav className={`${showMenu ? "flex" : "hidden"} xl:flex flex-col xl:flex-row items-center xl:justify-center gap-10 absolute xl:relative top-full xl:top-auto left-0 xl:left-auto w-full xl:w-auto bg-white xl:bg-transparent shadow-xl xl:shadow-none p-6 xl:p-0 transition-all duration-500 ease-in-out z-20`}>
          <a href="#beneficios" className="menu-item" onClick={closeMobileMenu}>
            <RiStarLine className="icon"/> Beneficios
          </a>
          <a href="#unirme" className="menu-item" onClick={() => { onRegistroClick(); closeMobileMenu(); }}>
            <RiUserAddLine className="icon"/> Unirme
          </a>
        </nav>

        <div className="hidden xl:flex items-center gap-4">
          <button className="bg-black hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded" onClick={toggleLoginModal}>
            Entrar
          </button>
        </div>
      </div>

      <LoginModal isOpen={isLoginModalOpen} onClose={toggleLoginModal} />

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

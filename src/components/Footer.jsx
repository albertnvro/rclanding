import React from "react";
// Icons
import {
  RiCheckboxBlankCircleFill,
  RiInstagramLine,
  RiFacebookLine,
  RiTwitterLine,
  RiGithubLine,
  RiPhoneLine 
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-[#141215] p-8 xl:p-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-amarillo-500 pb-8">
        {/* Logo */}
        <div className="w-1/6">
          <a
            href="#"
            className="text-2xl font-bold relative p-1 bg-amarillo text-white"
          >
  B<span className="text-black">!</span>gBuy<span className="text-black text-5xl">.</span>{" "}
          </a>
        </div>
        {/* Social media */}
        <nav className="flex items-center gap-4">
          <a href="#" className="block text-white p-4 bg-amarillo text-black hover:bg-white hover:text-black rounded-full">
            {" "}
            <RiInstagramLine />{" "}
          </a>
          <a href="#" className="block text-white p-4 bg-amarillo text-black hover:bg-white hover:text-black rounded-full">
            {" "}
            <RiFacebookLine />{" "}
          </a>
          <a href="#" className="block text-white p-4 bg-amarillo text-black hover:bg-white hover:text-black rounded-full">
            {" "}
            <RiTwitterLine />{" "}
          </a>

        </nav>
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-bold text-white text-center md:text-left">
          Navegación
        </h3>
        <nav className="mt-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <a
            href="#"
            className="text-gray-300 mt-4 hover:text-white transition-colors"
          >
            BigBuy
          </a>
          <a
            href="#beneficios"
            className="text-gray-300 mt-4 hover:text-white transition-color"
          >
            Beneficios de vender con BigBuy
          </a>
          <a
            href="#"
            className="text-gray-300 mt-4 hover:text-white transition-color"
          >
            Planes
          </a>
          <a
            href="#"
            className="text-gray-300 mt-4 hover:text-white transition-color"
          >
            Empezar a vender
          </a>
         
        
          <button
  type="button"
  className="font-semibold py-2 px-6 bg-amarillo text-black hover:text-white inline-flex items-center justify-center w-60 hover:bg-black rounded-xl"
>
  <a href="tel:+34666666666" className="flex items-center">
    <RiPhoneLine />
    <span>Llamar</span>
  </a>
</button>

        </nav>
      </div>
      <div className="mt-20">
        <p className="text-gray-300 text-center">
          © BigBuy 2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;

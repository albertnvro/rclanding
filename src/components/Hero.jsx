import React from "react";
import { RiCheckboxBlankCircleFill, RiPlayFill, RiStarFill } from "react-icons/ri";



const scrollToServices = () => {
  const servicesSection = document.getElementById("services");
  if (servicesSection) {
    servicesSection.scrollIntoView({ behavior: "smooth" });
  }
};

const Hero = ({ onRegistroClick }) => {
  return (
    <section id="home" className="min-h-[90vh] grid grid-cols-1 xl:grid-cols-8">
      {/* Sección de Información */}
      <div className="md:col-span-5 flex items-center justify-center p-8 xl:p-16">
        <div className="flex flex-col gap-8">
          <h1 className="text-5xl xl:text-7xl font-bold xl:leading-[7.5rem]">
            Soluciones para comercio {" "}
            <span className="text-amarillo py-2 px-6 border-8 border-black relative inline-block">
              tradicional y online
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -left-5 -top-5 p-2 bg-amarillo rounded-full box-content" />
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -right-5 -top-5 p-2 bg-black rounded-full box-content" />
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -right-5 -bottom-5 p-2 bg-amarillo rounded-full box-content" />
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -left-5 -bottom-5 p-2 bg-black rounded-full box-content" />
            </span>
          </h1>
          <p className="text-gray-500 text-2xl leading-[2.5rem]">
            Descubre las herramientas que BigBuy puede ofrecer a tu negocio online. ¿Te interesa vender más?
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <button 
              className="w-full xl:w-auto bg-amarillo hover:bg-black hover:text-white text-black py-2 px-8 rounded-xl text-xl"
              onClick={onRegistroClick}>
              Unirme a BigBuy
            </button>
            <button 
              className="w-full xl:w-auto flex items-center justify-start text-left gap-4 py-2 px-8 rounded-xl text-xl"
              onClick={scrollToServices}>
              <RiPlayFill className="bg-black text-amarillo p-4 rounded-full box-content" />{" "}
              Conoce BigBuy <br /> por dentro
            </button>
          </div>
        </div>
      </div>

      {/* Sección de imagen en hero */}
      <div className="md:col-span-3 flex items-center justify-center relative">
        <div>
          <img
            src="./src/assets/ecommerceonline.png"
            className="xl:-mt-28"
            alt="BigBuy - Tu aliado en comercio online"
          />
          {}
        </div>
      </div>
    </section>
  );
};

export default Hero;

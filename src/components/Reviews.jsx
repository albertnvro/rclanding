import React from "react";
// Icons
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const Reviews = () => {
  return (
    <div className="p-8 flex flex-col gap-8 bg-gray-100">
      <h1 className="text-[40px] text-center font-black">
        ¿Cómo te ayudamos?
      </h1>
      <div className="flex justify-center gap-4">
        <span className="text-5xl text-black">
          <RiDoubleQuotesL />
        </span>
        <p className="max-w-2xl text-center text-gray-500">

        En <b>BigBuy</b>, te facilitamos el camino para crecer en el 
        comercio electrónico, ofreciéndote una <b>extensa variedad de productos</b> y un servicio de dropshipping eficaz y sin 
        complicaciones. Te apoyamos en cada paso, para que puedas enfocarte en lo que mejor sabes hacer: <b>vender</b> y <b>expandir tu negocio</b>.
        </p>
        <span className="text-5xl text-amarillo">
          <RiDoubleQuotesR />
        </span>
      </div>
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex items-center justify-center gap-8 md:gap-12">
         <b>Solución integral en comercio electrónico y dropshipping</b>
        </div>
        <div>
          <h5 className="text-center text-[20px] text-gray-500">
          <button
            type="button"
            className="font-semibold py-2 px-6 bg-amarillo text-black hover:text-white hover:bg-black rounded-xl"
          >
            Contacto
          </button>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Reviews;

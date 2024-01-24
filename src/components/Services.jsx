import React from "react";
import MiniForm from "./forms/miniform";
import Beneficios from "./bloques/beneficios";



// Iconos
import { RiMenuAddFill , RiMailFill, RiChatSmileLine, RiCursorLine, RiSmartphoneFill, RiMacFill } from "react-icons/ri";

const Services = () => {
  return (
    <div
      id="services"
      className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 p-8 md:p-12 xl:p-20"
    >
      <div className="flex flex-col gap-4">
        <h1 className="text-[40px] font-bold" id="contactar">¿Necesita hablar con un experto?</h1>
        <p className="text-[20px] text-gray-500">
        Si tiene cualquier duda sobre...
        </p>

        <MiniForm />
       
     
      </div>
      {/* Services */}
 
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-2">
          <RiChatSmileLine  className="text-4xl p-2 bg-black text-amarillo box-content rounded-xl" />
          <h3 className="text-[20px] font-bold">Contactamos contigo</h3>
          <p className="text-gray-500">
            Nuestros profesionales se pondrán en contacto con usted.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <RiCursorLine  className="text-4xl p-2 bg-black text-amarillo box-content rounded-xl" />
          <h3 className="text-[20px] font-bold">Asesoramiento en línea</h3>
          <p className="text-gray-500">
            Programamos una reunión con usted para comprender mejor sus necesidades.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <RiMenuAddFill  className="text-4xl p-2 bg-black text-amarillo box-content rounded-xl" />
          <h3 className="text-[20px] font-bold">Amplio catálogo de productos</h3>
          <p className="text-gray-500">
            Le proporcionamos toda la información de nuestra amplia variedad de catálogos y sus productos.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <RiMacFill className="text-4xl p-2 bg-black text-amarillo box-content rounded-xl" />
          <h3 className="text-[20px] font-bold">Sistema de gestión y Ventas</h3>
          <p className="text-gray-500">
            Con nuestra plataforma tiene disponible más de 200 canales de venta donde vender productos.
          </p>
        </div>
      </div>
    </div>

    
  );
};

export default Services;

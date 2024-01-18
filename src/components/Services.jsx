import React from "react";
import MiniForm from "./forms/miniform";
import Beneficios from "./bloques/beneficios";



// Iconos
import { RiMailFill, RiSmartphoneFill, RiMacFill } from "react-icons/ri";

const Services = () => {
  return (
    <div
      id="services"
      className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 p-8 md:p-12 xl:p-20"
    >
      <div className="flex flex-col gap-4">
        <h1 className="text-[40px] font-bold">¿Necesita hablar con un experto?</h1>
        <p className="text-[20px] text-gray-500">
        Si tiene cualquier duda sobre...
        </p>
        <MiniForm />
     
      </div>
      {/* Services */}
 
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-2">
          <RiSmartphoneFill className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl" />
          <h3 className="text-[20px] font-bold">UI/UX Design</h3>
          <p className="text-gray-500">
            Sometimes features require a short description
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <RiMacFill className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl" />
          <h3 className="text-[20px] font-bold">Logo Branding</h3>
          <p className="text-gray-500">
            Sometimes features require a short description
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <RiSmartphoneFill className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl" />
          <h3 className="text-[20px] font-bold">App Design</h3>
          <p className="text-gray-500">
            Sometimes features require a short description
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <RiMacFill className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl" />
          <h3 className="text-[20px] font-bold">Webiste Design</h3>
          <p className="text-gray-500">
            Sometimes features require a short description
          </p>
        </div>
      </div>
    </div>

    
  );
};

export default Services;

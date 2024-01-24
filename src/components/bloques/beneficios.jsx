import React from 'react';
import {
  RiMessage2Line, RiShareForwardBoxLine, RiStarLine, RiHeart2Line, RiLightbulbLine,
  RiUser3Line, RiAddBoxLine, RiShareFill, RiGuideFill, RiShoppingBasketLine,
  RiFlashlightLine, RiAddLine, RiShoppingBag2Line, RiClockwise2Line, RiDatabase2Line
  /* Más iconos aquí */
} from 'react-icons/ri';

const Beneficio = ({ icono, titulo, descripcion, className, esClicable }) => {
  const scrollToContactar = () => {
    const contactarSection = document.getElementById('contactar');
    if (contactarSection) {
      contactarSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className={`p-4 bg-white shadow-md rounded-lg hover:scale-105 transition-transform ${className} ${esClicable ? 'cursor-pointer' : ''}`}
      onClick={esClicable ? scrollToContactar : undefined}
    >
      <div className="text-2xl text-gray-900">
        {icono}
      </div>
      <div>
        <h3 className="text-xl font-bold text-gray-900">{titulo}</h3>
        <p className="text-gray-700">{descripcion}</p>
      </div>
      {esClicable && (
        <button className="mt-4 bg-black text-white py-2 px-4 rounded-lg hover:bg-white hover:text-black transition-colors flex items-center justify-center">
          <RiHeart2Line className="mr-2" /> Registrarme
        </button>
      )}
    </div>
  );
};

const Beneficios = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {/* Renderiza tus Beneficio aquí */}
      <Beneficio icono={<RiShareForwardBoxLine />} titulo="Dropshipping" descripcion="BigBuy es conocido por su servicio de dropshipping, donde venden productos al por mayor a negocios que luego los venden a los consumidores finales." />
      <Beneficio icono={<RiAddBoxLine />} titulo="Venta al por mayor" descripcion="Además del dropshipping, BigBuy ofrece una plataforma al por mayor con un extenso catálogo de productos y marcas. Los clientes pueden comprar productos para su posterior reventa." />
      <Beneficio icono={<RiShareFill />} titulo="Redes Sociales" descripcion="Este servicio está orientado a vendedores que basan su estrategia en la adquisición de clientes a través de redes sociales, ofreciendo productos innovadores y de alta rentabilidad." />
      <Beneficio icono={<RiGuideFill />} titulo="Mercado en línea" descripcion="BigBuy ofrece integración con más de 200 mercados en línea y proporciona soluciones para la gestión centralizada de pedidos multicanal." />
      <Beneficio icono={<RiShoppingBasketLine />} titulo="Ecommerce" descripcion="Proporcionan soluciones integrales para negocios de comercio electrónico, incluyendo expansión de catálogo, integración de productos de alto margen y servicios de cumplimiento." />
      <Beneficio icono={<RiFlashlightLine />} titulo="Ventas Flash" descripcion="Asociados con sitios importantes de ventas flash, BigBuy ayuda a lanzar campañas optimizadas y a manejar operaciones completas." />
      <Beneficio icono={<RiHeart2Line />} titulo="Fidelización y recompensas" descripcion="Especializados en productos para catálogos de lealtad e incentivos, ofrecen una gestión integral del catálogo y todas las operaciones relacionadas." />
      <Beneficio icono={<RiAddLine />} titulo="Compras al por mayor" descripcion="Ofrecen precios al por mayor sin pedido mínimo y descuentos por volumen, ideal para negocios que compran y almacenan para revender." />
      <Beneficio icono={<RiShoppingBag2Line />} titulo="Soluciones para negocios tradicionales" descripcion="Dirigido a canales de venta tradicionales como tiendas, promociones y venta directa o por catálogo." />
      <Beneficio icono={<RiClockwise2Line />} titulo="Proveedor Integral" descripcion="BigBuy se posiciona como un proveedor integral con un amplio stock en productos estratégicos y de alta rotación, ofreciendo además logística y la oportunidad de vender a través de su red de revendedores." />
      <Beneficio icono={<RiDatabase2Line />} titulo="Tecnología y análisis de datos" descripcion="Impulsa tu estrategia con análisis de datos avanzado. Toma decisiones inteligentes, adelántate a las tendencias y transforma datos en éxito." />
      <Beneficio className="bg-amarillo" esClicable={true} icono={<RiMessage2Line />}   titulo="¿Quieres vender más y mejor?" descripcion="Únete a la plataforma" />
    </div>
  );
};

export default Beneficios;

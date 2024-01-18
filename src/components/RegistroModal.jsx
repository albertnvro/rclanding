import React, { useState } from 'react';

const Registro = ({ show, onClose }) => {
  // Estados para controlar los pasos del formulario
  const [step, setStep] = useState(1);

  // Funciones para ir al próximo paso o volver al anterior
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  // Verificar si el modal debe mostrarse
  if (!show) {
    return null;
  }

  // Renderizar basándote en el paso en el que te encuentres
  const renderStep = () => {
    switch(step) {
      case 1:
        return <Step1 nextStep={nextStep} />;
      case 2:
        return <Step2 nextStep={nextStep} prevStep={prevStep} />;
      // ... (añadir más casos para más pasos si es necesario)
      default:
        return <Step1 nextStep={nextStep} />;
    }
  };

  return (
    <div className="modal">
      {renderStep()}
      {/* Botón para cerrar el modal */}
      <button onClick={onClose}>Cerrar</button>
    </div>
  );
};

export default Registro;

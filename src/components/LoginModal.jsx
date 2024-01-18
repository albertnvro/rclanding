import React from 'react';

const Login = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal">
      {/* Contenido del modal */}
      {/* Campos para login */}
      {/* Botón para cerrar el modal */}
      <button onClick={onClose}>Cerrar</button>
    </div>
  );
};

export default Login;

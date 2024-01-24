import React, { useState } from 'react';
import Modal from 'react-modal';
import { RiArrowGoBackLine } from 'react-icons/ri'; // Importar ícono de flecha

Modal.setAppElement('#root'); // Asegúrate de configurar el elemento raíz para el modal

const LoginModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [isResetPassword, setIsResetPassword] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    // Procesa el inicio de sesión
  };

  const handleResetSubmit = (e) => {
    e.preventDefault();
    console.log('Enviar enlace de restablecimiento a:', email);
    // Procesa el envío del email de restablecimiento
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-xl max-w-md w-full"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
      {isResetPassword ? (
        <div>
          <button
            onClick={() => setIsResetPassword(false)}
            className="text-blue-600 hover:text-blue-800 flex items-center"
          >
            <RiArrowGoBackLine className="mr-2" />
            Volver
          </button>
          <h2 className="text-2xl font-bold mb-4 text-center">Restablecer Contraseña</h2>
          <form onSubmit={handleResetSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 border border-gray-300 rounded"
              required
            />
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Enviar email
            </button>
          </form>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold mb-4 text-center">Iniciar Sesión</h2>
          <form onSubmit={handleLoginSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="password"
              placeholder="Contraseña"
              className="p-2 border border-gray-300 rounded"
              required
            />
            <div className="flex justify-between items-center gap-4">
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Entrar
              </button>
              <button type="button" className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded" onClick={onClose}>
                Cerrar
              </button>
            </div>
          </form>
          <button
            className="text-blue-600 hover:text-blue-800 mt-4 underline"
            onClick={() => setIsResetPassword(true)}
          >
            ¿Olvidaste la contraseña?
          </button>
        </div>
      )}
    </Modal>
  );
};

export default LoginModal;

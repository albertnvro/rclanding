import React, { useState } from 'react';
import Modal from 'react-modal';
import { RiCloseLine } from "react-icons/ri";

const RegistroModal = ({ isOpen, onRequestClose }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
        // Agrega más campos según sea necesario
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí deberías agregar la lógica para manejar el envío del formulario
        console.log("Formulario enviado:", formData);
        onRequestClose(); // Cierra el modal después del envío
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center"
            overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        >
            <div className="bg-white p-16 rounded-lg shadow-lg max-w-4xl w-full">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 gap-4">
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Email" 
                            value={formData.email} 
                            onChange={handleInputChange} 
                            className="form-input border border-gray-300 p-2 rounded-md w-full" 
                        />
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Contraseña" 
                            value={formData.password} 
                            onChange={handleInputChange} 
                            className="form-input border border-gray-300 p-2 rounded-md w-full" 
                        />
                        <input 
                            type="password" 
                            name="confirmPassword" 
                            placeholder="Confirmar contraseña" 
                            value={formData.confirmPassword} 
                            onChange={handleInputChange} 
                            className="form-input border border-gray-300 p-2 rounded-md w-full" 
                        />
                    </div>
                    <div className="flex justify-end">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Registrarse
                        </button>
                    </div>
                </form>
                <button onClick={onRequestClose} className="absolute top-2 right-2 text-gray-700">
                    <RiCloseLine size={24} />
                </button>
            </div>
        </Modal>
    );
};

export default RegistroModal;

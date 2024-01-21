import React, { useState } from 'react';

const StepForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        condiciones: false, // Estado para el checkbox
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        // Si el campo es 'telefono', permitimos solo números
        if (name === 'telefono') {
            const re = /^[0-9\b]+$/; // Solo números y backspace
            // Si el valor está vacío o cumple con la expresión regular, actualizamos el estado
            if (value === '' || re.test(value)) {
                setFormData({ ...formData, [name]: value });
            }
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    // Manejar el cambio en el checkbox
    const handleCheckboxChange = (e) => {
        setFormData({ ...formData, condiciones: e.target.checked });
    };

    const isValidStepOne = () => {
        return formData.nombre.trim() !== '' && formData.apellido.trim() !== '';
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex simple para validación de email
        return emailRegex.test(email);
    };

    const isValidStepTwo = () => {
        return isValidEmail(formData.email) && formData.telefono.trim() !== '' && formData.condiciones;
    };

    const nextStep = () => {
        if (step === 1 && !isValidStepOne()) {
            alert('Por favor, complete todos los campos del paso 1.');
            return;
        }

        if (step === 1) {
            setStep(step + 1);
        }
    };

    const submitForm = () => {
        if (!isValidStepTwo()) {
            alert('Por favor, complete todos los campos del paso 2 y acepte las condiciones.');
            return;
        }
        
        alert('¡Formulario enviado! Contactaremos con usted en breve.');
        // Aquí puedes enviar los datos a tu backend o API
    };

    const renderStepContent = () => {
        switch (step) {
            case 1:
                return (
                    <div className="step-content">
                        <h2 className="text-2xl font-bold text-gray-700 mb-4">Paso 1: Información Personal</h2>
                        <input type="text" name="nombre" value={formData.nombre} onChange={handleInputChange} placeholder="Nombre" className="form-input mb-4 px-4 py-2 border rounded-lg w-full" />
                        <input type="text" name="apellido" value={formData.apellido} onChange={handleInputChange} placeholder="Apellido" className="form-input mb-4 px-4 py-2 border rounded-lg w-full" />
                    </div>
                );
            case 2:
                return (
                    <div className="step-content">
                        <h2 className="text-2xl font-bold text-gray-700 mb-4">Paso 2: Detalles de Contacto</h2>
                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Correo Electrónico" className="form-input mb-4 px-4 py-2 border rounded-lg w-full" required />
                        <input type="text" name="telefono" value={formData.telefono} onChange={handleInputChange} placeholder="Número de Teléfono" className="form-input mb-4 px-4 py-2 border rounded-lg w-full" required />
                        <div className="flex items-center mb-4">
                            <input
                                type="checkbox"
                                id="condiciones"
                                name="condiciones"
                                checked={formData.condiciones}
                                onChange={handleCheckboxChange}
                                className="mr-2"
                            />
                            <label htmlFor="condiciones" className="text-sm text-gray-600 cursor-pointer">
                                Estoy de acuerdo con que contacten conmigo a través de los datos facilitados en el formulario con fines comerciales.
                            </label>
                        </div>
                    </div>
                );
            default:
                return <div className="step-content">Paso Desconocido</div>;
        }
    };

    return (
        <div className="step-form bg-white p-5 border border-black rounded-lg shadow-lg">
            {renderStepContent()}
            <div className="flex justify-between mt-4">
                {step > 1 && <button onClick={() => setStep(1)} className="btn bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-lg mr-2">Anterior</button>}
                {step === 1 && <button onClick={nextStep} className="btn bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg">Siguiente</button>}
                {step === 2 && <button onClick={submitForm} className="btn bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg">Enviar</button>}
            </div>
        </div>
    );
};

export default StepForm;

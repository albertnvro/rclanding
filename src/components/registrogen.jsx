//Formulario de registro general abierto en modal
//Preservar los datos del formulario si el cliente ya ha escrito algo, que se quede por si quiere continuar con registro
//El tipo de usuario autonomo o empresa debera rellenar campos adicionales
import React, { useState } from 'react';
import Modal from 'react-modal';
import Select from 'react-select';
import { RiCloseLine  } from "react-icons/ri";

const RegistroGen = ({ isOpen, onRequestClose }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        userType: null,
        companyName: '',
        country: null,
        contactName: '',
        phone: '',
        email: '',
        onlineExperience: null,
        salesChannel: null,
        businessName: '',
        taxId: '',
        address: '',
        postalCode: '',
        stateProvince: '',
        city: '',
        countryBilling: null
    });

    const userTypeOptions = [
        { value: 'empresa', label: 'Soy empresa' },
        { value: 'particular', label: 'Soy particular' },
        { value: 'autonomo', label: 'Soy autónomo' },
    ];

    const countryOptions = [
        { value: 'spain', label: 'España' },
        { value: 'france', label: 'Francia' },
        { value: 'germany', label: 'Alemania' },
        // paises ejemplo
    ];

    const onlineExperienceOptions = [
        { value: 'less_than_one', label: 'Menos de un año' },
        { value: 'one_to_two', label: 'Entre 1 y 2 años' },
        { value: 'two_to_four', label: 'Entre 2 y 4 años' },
        { value: 'more', label: 'Más años' },
    ];

    const salesChannelOptions = [
        { value: 'own_store', label: 'Sí, vendo a través de mi propia tienda' },
        { value: 'marketplace', label: 'Sí, vendo a través de mi cuenta en marketplace' },
        { value: 'both', label: 'Ambos' },
        { value: 'no', label: 'No' },
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSelectChange = (selectedOption, actionMeta) => {
        setFormData({ ...formData, [actionMeta.name]: selectedOption });
    };

    const isFormValid = () => {
        // Validacion
        return formData.userType && formData.contactName && formData.phone && formData.email;
    };

    const handleContinuarEnviar = () => {
        if (!isFormValid()) {
            alert('Por favor, completa todos los campos necesarios.');
            return;
        }

        if (formData.userType.value === 'empresa' || formData.userType.value === 'autonomo') {
            setStep(2);
        } else {
            handleSubmit();
        }
    };

    const handleSubmit = (e) => {
        if (e) e.preventDefault();
        console.log(formData);
        alert('Mensaje enviado');
        onRequestClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center "
            overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        >
            <div className="bg-white p-16 rounded-lg shadow-lg max-w-4xl w-full">
       

                <form onSubmit={handleSubmit} className="space-y-4">
                    {step === 1 && (
                        <>
                            <div className="grid grid-cols-2 gap-4">
                                <Select
                                    options={userTypeOptions}
                                    name="userType"
                                    placeholder="Tipo de usuario"
                                    value={formData.userType}
                                    onChange={(option) => handleSelectChange(option, { name: 'userType' })}
                                    className="basic-single"
                                    classNamePrefix="select"
                                />
                                <Select
                                    options={countryOptions}
                                    name="country"
                                    className="w-full"
                                    placeholder="País"
                                    value={formData.country}
                                    onChange={(option) => handleSelectChange(option, { name: 'country' })}
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <input type="text" name="contactName" placeholder="Nombre y apellidos" value={formData.contactName} onChange={handleInputChange} className="form-input border border-gray-300 p-2 rounded-md" />
                                <input type="text" name="phone" placeholder="Teléfono" value={formData.phone} onChange={handleInputChange} className="form-input border border-gray-300 p-2 rounded-md" />
                            </div>
                            <div className="grid grid-cols-1 gap-4 mt-4">
                                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} className="form-input border border-gray-300 p-2 rounded-md w-full" />
                            </div>
                            <hr className="my-4" />
                            <Select
                                options={onlineExperienceOptions}
                                name="onlineExperience"
                                className="w-full"
                                placeholder="¿Tienes experiencia en venta online?"
                                value={formData.onlineExperience}
                                onChange={(option) => handleSelectChange(option, { name: 'onlineExperience' })}
                            />
                            <Select
                                options={salesChannelOptions}
                                name="salesChannel"
                                className="w-full mt-4"
                                placeholder="¿Ya dispone de un canal de venta online?"
                                value={formData.salesChannel}
                                onChange={(option) => handleSelectChange(option, { name: 'salesChannel' })}
                            />
                            <div className="space-x-2 w-full">
                            <button type="button" onClick={handleContinuarEnviar} className=" bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded basis-1/2">
                                {formData.userType && (formData.userType.value === 'empresa' || formData.userType.value === 'autonomo') ? 'Continuar' : 'Enviar Formulario'}
                            </button>
                            <button onClick={onRequestClose} className="mt-4 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-2 rounded">
                                Cerrar
                            </button>
                            </div>
                        </>
                    )}
                    {step === 2 && (
                        <>
                            <div className="text-lg font-semibold mb-4">¡Ya casi estamos!</div>
                            <div className="font-md grey">Introduzca sus datos de facturación</div>
                            <div className="grid grid-cols-2 gap-4">
                                <input type="text" name="businessName" placeholder="Nombre de la empresa" value={formData.businessName} onChange={handleInputChange} className="form-input border border-gray-300 p-2 rounded-md" />
                                <input type="text" name="taxId" placeholder="NIF" value={formData.taxId} onChange={handleInputChange} className="form-input border border-gray-300 p-2 rounded-md" />
                            </div>
                            <input type="text" name="address" placeholder="Dirección" value={formData.address} onChange={handleInputChange} className="form-input border border-gray-300 p-2 rounded-md w-full" />
                            <div className="grid grid-cols-4 gap-4 mt-4">
                                <input type="text" name="postalCode" placeholder="Código postal" value={formData.postalCode} onChange={handleInputChange} className="form-input border border-gray-300 p-2 rounded-md" />
                                <input type="text" name="stateProvince" placeholder="Estado / provincia" value={formData.stateProvince} onChange={handleInputChange} className="form-input border border-gray-300 p-2 rounded-md" />
                                <input type="text" name="city" placeholder="Población" value={formData.city} onChange={handleInputChange} className="form-input border border-gray-300 p-2 rounded-md" />
                                <Select
                                    options={countryOptions}
                                    name="countryBilling"
                                    className="w-full"
                                    placeholder="País"
                                    value={formData.countryBilling}
                                    onChange={(option) => handleSelectChange(option, { name: 'countryBilling' })}
                                />
                            </div>
                            
                            <button type="button" onClick={() => setStep(1)} className="bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded mr-4">
                                Volver
                            </button>
                            <div className="flex flex-row">
                            <button type="submit" className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
                                Registrarme
                            </button>
                            </div>
                        </>
                    )}
                </form>
            </div>
        </Modal>
    );
};

export default RegistroGen;

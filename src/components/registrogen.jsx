import React, { useState } from 'react';
import Modal from 'react-modal';
import Select from 'react-select';
import { RiCloseLine } from "react-icons/ri";



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
        countryBilling: null,
        finalOption: ''
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
        // Más opciones de países aquí...
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

    const handleVolverClick = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    const handleContinuarEnviar = () => {
        // Lógica para avanzar al siguiente paso
        if (step === 1) {
            if (formData.userType && formData.userType.value === 'particular') {
                setStep(3);
            } else if (formData.userType && (formData.userType.value === 'empresa' || formData.userType.value === 'autonomo')) {
                setStep(2);
            }
        } else if (step === 2) {
            setStep(3);
        } else {
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        // Lógica para manejar el envío del formulario
        console.log(formData);
        alert('Registro completado');
        onRequestClose();
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
                {step === 1 && (
                    <>
                        {/* Contenido del Paso 1 */}
                        <div className="grid grid-cols-2 gap-4">
                            {/* Selección de tipo de usuario */}
                            <Select
                                options={userTypeOptions}
                                name="userType"
                                placeholder="Tipo de usuario"
                                value={formData.userType}
                                onChange={(option) => handleSelectChange(option, { name: 'userType' })}
                                className="basic-single"
                                classNamePrefix="select"
                            />
                            {/* Selección de país */}
                            <Select
                                options={countryOptions}
                                name="country"
                                placeholder="País"
                                value={formData.country}
                                onChange={(option) => handleSelectChange(option, { name: 'country' })}
                                className="basic-single"
                                classNamePrefix="select"
                            />
                        </div>
                        {/* Campos de contacto */}
                        <div className="grid grid-cols-2 gap-4">
                            <input type="text" name="contactName" placeholder="Nombre y apellidos" value={formData.contactName} onChange={handleInputChange} className="form-input border border-gray-300 p-2 rounded-md" />
                            <input type="text" name="phone" placeholder="Teléfono" value={formData.phone} onChange={handleInputChange} className="form-input border border-gray-300 p-2 rounded-md" />
                        </div>
                        {/* Campo de email */}
                        <div className="grid grid-cols-1 gap-4 mt-4">
                            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} className="form-input border border-gray-300 p-2 rounded-md w-full" />
                        </div>
                        {/* Otras opciones */}
                        <Select
                            options={onlineExperienceOptions}
                            name="onlineExperience"
                            placeholder="¿Tienes experiencia en venta online?"
                            value={formData.onlineExperience}
                            onChange={(option) => handleSelectChange(option, { name: 'onlineExperience' })}
                            className="basic-single"
                            classNamePrefix="select"
                        />
                        <Select
                            options={salesChannelOptions}
                            name="salesChannel"
                            placeholder="¿Ya dispone de un canal de venta online?"
                            value={formData.salesChannel}
                            onChange={(option) => handleSelectChange(option, { name: 'salesChannel' })}
                            className="basic-single"
                            classNamePrefix="select"
                        />
                        {/* Botones */}
                        <div className="flex justify-between mt-4">
                            <button
                                type="button"
                                className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
                                onClick={onRequestClose}
                            >
                                Cerrar
                            </button>
                            <button
                                type="button"
                                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                onClick={handleContinuarEnviar}
                            >
                                Continuar
                            </button>
                        </div>
                    </>
                )}
                {step === 2 && (
                    <>
                        {/* Contenido del Paso 2 */}
                        <div className="text-lg font-semibold mb-4">¡Ya casi estamos!</div>
                        <div className="font-md grey">Introduzca sus datos de facturación</div>
                        <div className="grid grid-cols-2 gap-4">
                            <input type="text" name="businessName" placeholder="Nombre de la empresa" value={formData.businessName} onChange={handleInputChange} className="form-input border border-gray-300 p-2 rounded-md" />
                            <input type="text" name="taxId" placeholder="NIF" value={formData.taxId} onChange={handleInputChange} className="form-input border border-gray-300 p-2 rounded-md" />
                        </div>
                        {/* Más campos */}
                        <input type="text" name="address" placeholder="Dirección" value={formData.address} onChange={handleInputChange} className="form-input border border-gray-300 p-2 rounded-md w-full" />
                        {/* Campos adicionales */}
                        <div className="grid grid-cols-4 gap-4 mt-4">
                            <input type="text" name="postalCode" placeholder="Código postal" value={formData.postalCode} onChange={handleInputChange} className="form-input border border-gray-300 p-2 rounded-md" />
                            <input type="text" name="stateProvince" placeholder="Estado / provincia" value={formData.stateProvince} onChange={handleInputChange} className="form-input border border-gray-300 p-2 rounded-md" />
                            <input type="text" name="city" placeholder="Población" value={formData.city} onChange={handleInputChange} className="form-input border border-gray-300 p-2 rounded-md" />
                            <Select
                                options={countryOptions}
                                name="countryBilling"
                                placeholder="País"
                                value={formData.countryBilling}
                                onChange={(option) => handleSelectChange(option, { name: 'countryBilling' })}
                                className="basic-single"
                                classNamePrefix="select"
                            />
                        </div>
                        {/* Botones */}
                        <div className="flex justify-between mt-4">
                            <button
                                type="button"
                                className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
                                onClick={handleVolverClick}
                            >
                                Volver
                            </button>
                            <button
                                type="button"
                                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                onClick={handleContinuarEnviar}
                            >
                                Continuar
                            </button>
                        </div>
                    </>
                )}
                {step === 3 && (
                    <>
                        {/* Contenido del Paso 3 */}
                        <div className="flex justify-start items-center">
                            <a href="#" onClick={() => setStep(step - 1)} className="text-blue-600 hover:underline">Volver</a>
                        </div>
                        <div className="my-4">
                            <label className="block mb-2">
                                <input type="radio" name="finalOption" value="wholesale" 
                                    checked={formData.finalOption === 'wholesale'}
                                    onChange={(e) => setFormData({...formData, finalOption: e.target.value})} />
                                Venta al por mayor
                            </label>
                            <label className="block mb-2">
                                <input type="radio" name="finalOption" value="ecommerce" 
                                    checked={formData.finalOption === 'ecommerce'}
                                    onChange={(e) => setFormData({...formData, finalOption: e.target.value})} />
                                eCommerce
                            </label>
                            <label className="block">
                                <input type="radio" name="finalOption" value="marketplace" 
                                    checked={formData.finalOption === 'marketplace'}
                                    onChange={(e) => setFormData({...formData, finalOption: e.target.value})} />
                                Marketplace
                            </label>
                        </div>
                        {/* Botones */}
                        <div className="flex justify-between mt-4">
                            <button
                                type="button"
                                className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
                                onClick={handleVolverClick}
                            >
                                Volver
                            </button>
                            <button
                                type="submit"
                                className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"
                            >
                                Enviar Formulario
                            </button>
                        </div>
                    </>
                )}
            </form>
        </div>
    </Modal>
);
                }
export default RegistroGen;
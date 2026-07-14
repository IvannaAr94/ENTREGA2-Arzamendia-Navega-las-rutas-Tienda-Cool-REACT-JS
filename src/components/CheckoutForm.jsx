// Hook de React para controlar los campos del formulario.
import { useState } from 'react'


// ===============================
// COMPONENTE CHECKOUTFORM
// Permite ingresar los datos del comprador.
// ===============================

function CheckoutForm({ onConfirm, isLoading }) {

    // Guarda los datos escritos por el usuario.
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        emailConfirmation: '',
    })

    // Guarda mensajes de validación.
    const [error, setError] = useState('')


    // ===============================
    // ACTUALIZAR CAMPOS
    // ===============================

    const handleChange = (event) => {

        // Obtiene el nombre y el valor del campo modificado.
        const { name, value } = event.target

        // Actualiza solamente el campo correspondiente.
        setFormData((currentData) => ({
            ...currentData,
            [name]: value,
        }))
    }


    // ===============================
    // ENVIAR FORMULARIO
    // ===============================

    const handleSubmit = (event) => {

        // Evita que la página se recargue.
        event.preventDefault()

        // Limpia errores anteriores.
        setError('')


        // Verifica que todos los campos estén completos.
        if (
            !formData.name.trim() ||
            !formData.phone.trim() ||
            !formData.email.trim() ||
            !formData.emailConfirmation.trim()
        ) {
            setError('Completá todos los campos.')
            return
        }

        // Verifica que los correos coincidan.
        if (formData.email !== formData.emailConfirmation) {
            setError('Los correos electrónicos no coinciden.')
            return
        }

        // Envía los datos al componente Checkout.
        onConfirm({
            name: formData.name.trim(),
            phone: formData.phone.trim(),
            email: formData.email.trim(),
        })
    }


    return (
        <form
            className="checkout-form"
            onSubmit={handleSubmit}
        >

            {/* Nombre y apellido */}
            <div className="form-group">
                <label htmlFor="name">
                    Nombre y apellido
                </label>

                <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ingresá tu nombre completo"
                    disabled={isLoading}
                />
            </div>


            {/* Teléfono */}
            <div className="form-group">
                <label htmlFor="phone">
                    Teléfono
                </label>

                <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Ingresá tu teléfono"
                    disabled={isLoading}
                />
            </div>


            {/* Correo elect */}
            <div className="form-group">
                <label htmlFor="email">
                    Correo electrónico
                </label>

                <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Ingresá tu correo"
                    disabled={isLoading}
                />
            </div>


            {/* Confirmación de correo */}
            <div className="form-group">
                <label htmlFor="emailConfirmation">
                    Confirmar correo electrónico
                </label>

                <input
                    id="emailConfirmation"
                    name="emailConfirmation"
                    type="email"
                    value={formData.emailConfirmation}
                    onChange={handleChange}
                    placeholder="Repetí tu correo"
                    disabled={isLoading}
                />
            </div>


            {/* Mensaje de error */}
            {error && (
                <p className="form-error">
                    {error}
                </p>
            )}


            {/* Botón para confirmar la compra */}
            <button
                type="submit"
                className="checkout-button"
                disabled={isLoading}
            >
                {isLoading
                    ? 'Generando orden...'
                    : 'Confirmar compra'}
            </button>

        </form>
    )
}


// Exporta el componente.
export default CheckoutForm
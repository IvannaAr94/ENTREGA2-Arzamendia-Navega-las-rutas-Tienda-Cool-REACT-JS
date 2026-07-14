// Hook de React para guardar mensajes y estados.
import { useState } from 'react'

// Función que sube los productos a Firestore.
import { uploadProducts } from '../services/uploadProducts.js'

// ===============================
// COMPONENTE UPLOADPRODUCTS
// Pantalla temporal para cargar los productos en Firestore.
// ===============================

function UploadProducts() {

    // Guarda el mensaje que se muestra en pantalla.
    const [message, setMessage] = useState('')

    // Evita presionar varias veces mientras se realiza la carga.
    const [isLoading, setIsLoading] = useState(false)


    // ===============================
    // REALIZAR CARGA
    // ===============================

    const handleUpload = async () => {
        try {
            setIsLoading(true)
            setMessage('Subiendo productos a Firebase...')

            // Ejecuta la carga y recibe la cantidad subida.
            const uploadedQuantity = await uploadProducts()

            setMessage(
                `Carga completada correctamente. Se subieron ${uploadedQuantity} productos.`
            )
        } catch (error) {
            console.error('Error al subir los productos:', error)

            setMessage(
                'No se pudieron subir los productos. Revisá la consola del navegador.'
            )
        } finally {
            setIsLoading(false)
        }
    }


    return (
        <section className="upload-products">

            {/* Título */}
            <h1>Cargar productos en Firebase</h1>

            <p>
                Esta pantalla se utilizará una sola vez y después será eliminada.
            </p>

            {/* Botón que inicia la carga */}
            <button
                className="add-button"
                onClick={handleUpload}
                disabled={isLoading}
            >
                {isLoading ? 'Subiendo...' : 'Subir productos'}
            </button>

            {/* Mensaje del resultado */}
            {message && (
                <p className="upload-message">
                    {message}
                </p>
            )}

        </section>
    )
}


// Exporta el componente.
export default UploadProducts
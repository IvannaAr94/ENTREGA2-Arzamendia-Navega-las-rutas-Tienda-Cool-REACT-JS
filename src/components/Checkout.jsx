// Hook de React para manejar estados.
import { useState } from 'react'

// Permite volver al catálogo sin recargar la página.
import { Link } from 'react-router-dom'

// Funciones de Firestore para crear la orden.
import {
    addDoc,
    collection,
    serverTimestamp,
} from 'firebase/firestore'

// Base de datos configurada en Firebase.
import { db } from '../services/firebaseConfig.js'

// Contexto global del carrito.
import { useCart } from '../context/CartContext.jsx'

// Formulario de datos del comprador.
import CheckoutForm from './CheckoutForm.jsx'


// ===============================
// COMPONENTE CHECKOUT
// Genera y guarda la orden de compra en Firestore.
// ===============================

function Checkout() {

    // Obtiene productos, total y función para vaciar el carrito.
    const {
        cart,
        totalPrice,
        clearCart,
    } = useCart()

    // Guarda el ID de la orden generada.
    const [orderId, setOrderId] = useState('')

    // Controla el mensaje mientras se procesa la compra.
    const [isLoading, setIsLoading] = useState(false)

    // Guarda posibles errores de Firebase.
    const [error, setError] = useState('')


    // ===============================
    // CONFIRMAR COMPRA

    const handleConfirm = async (buyerData) => {

        try {
            setIsLoading(true)
            setError('')


            // Prepara los datos de la orden.
            const order = {

                // Datos del comprador.
                buyer: buyerData,

                // Productos comprados.
                items: cart.map((item) => ({
                    id: item.id,
                    title: item.title,
                    price: item.price,
                    quantity: item.quantity,
                    subtotal: item.price * item.quantity,
                })),

                // Total final de la compra.
                total: totalPrice,

                // Fecha generada por Firestore.
                date: serverTimestamp(),
            }


            // Guarda la orden en la colección orders.
            const ordersCollection = collection(
                db,
                'orders'
            )

            const orderDocument = await addDoc(
                ordersCollection,
                order
            )


            // Guarda el ID generado por Firebase.
            setOrderId(orderDocument.id)

            // Vacía el carrito después de confirmar.
            clearCart()

        } catch (firebaseError) {

            console.error(
                'Error al generar la orden:',
                firebaseError
            )

            setError(
                'No se pudo generar la orden. Intentá nuevamente.'
            )

        } finally {
            setIsLoading(false)
        }
    }

    // ===============================
    // COMPRA FINALIZADA
    // ===============================

    if (orderId) {
        return (
            <main className="checkout-container order-success">

                <h1>¡Compra realizada con éxito!</h1>

                <p>
                    Gracias por comprar en Tienda Cool.
                </p>

                <p>
                    Tu número de orden es:
                </p>

                <strong className="order-id">
                    {orderId}
                </strong>

                <Link
                    to="/"
                    className="back-link"
                >
                    Volver al catálogo
                </Link>

            </main>
        )
    }

    // ===============================
    // CARRITO VACÍO
    // ===============================

    if (cart.length === 0) {
        return (
            <main className="checkout-container">

                <h1>No hay productos para comprar</h1>

                <p>
                    Agregá productos al carrito antes de continuar.
                </p>

                <Link
                    to="/"
                    className="cart-link"
                >
                    Ver productos
                </Link>

            </main>
        )
    }

    // ===============================
    // FORMULARIO DE CHECKOUT
    // ===============================

    return (
        <main className="checkout-container">

            <h1>Finalizar compra</h1>

            {/* Resumen de la compra */}
            <section className="checkout-summary">

                <h2>Resumen del pedido</h2>

                {cart.map((item) => (
                    <div
                        key={item.id}
                        className="checkout-summary-item"
                    >
                        <span>
                            {item.title} x {item.quantity}
                        </span>

                        <span>
                            $
                            {(item.price * item.quantity)
                                .toLocaleString('es-AR')}
                        </span>
                    </div>
                ))}

                <h3>
                    Total: $
                    {totalPrice.toLocaleString('es-AR')}
                </h3>

            </section>


            {/* Formulario del comprador */}
            <CheckoutForm
                onConfirm={handleConfirm}
                isLoading={isLoading}
            />


            {/* Mensaje si Firebase devuelve un error */}
            {error && (
                <p className="form-error">
                    {error}
                </p>
            )}

        </main>
    )
}


// Exporta el componente.
export default Checkout
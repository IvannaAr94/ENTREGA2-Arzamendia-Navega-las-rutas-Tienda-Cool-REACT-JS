// Permite navegar dentro de la aplicación sin recargar la página.
import { Link } from 'react-router-dom'

// Hook personalizado para utilizar la información del carrito.
import { useCart } from '../context/CartContext.jsx'

// Componente que muestra cada producto del carrito.
import CartItem from './CartItem.jsx'


// ===============================
// COMPONENTE CART
// Muestra el contenido completo del carrito de compras.
// ===============================

function Cart() {

    // Obtiene los productos y funciones almacenadas en CartContext.
    const {
        cart,
        removeItem,
        clearCart,
        totalQuantity,
        totalPrice,
    } = useCart()


    // ===============================
    // CARRITO VACÍO

    if (cart.length === 0) {
        return (
            <section className="empty-cart">

                {/* Mensaje cuando no hay productos */}
                <h1>Tu carrito está vacío</h1>

                <p>
                    Todavía no agregaste productos.
                </p>

                {/* Regresa al catálogo */}
                <Link to="/" className="cart-link">
                    Ver productos
                </Link>

            </section>
        )
    }


    // ===============================
    // CARRITO CON PRODUCTOS

    return (
        <section className="cart-container">

            {/* Título principal */}
            <h1>Carrito de compras</h1>

            {/* Listado de productos */}
            <div className="cart-list">

                {cart.map((item) => (
                    <CartItem
                        key={item.id}
                        item={item}
                        removeItem={removeItem}
                    />
                ))}

            </div>


            {/* Resumen de la compra */}
            <div className="cart-summary">

                <p>
                    Total de unidades: {totalQuantity}
                </p>

                <h2>
                    Total: ${totalPrice.toLocaleString('es-AR')}
                </h2>

                <div className="cart-actions">

                    {/* Vacía todo el carrito */}
                    <button
                        className="clear-cart-button"
                        onClick={clearCart}
                    >
                        Vaciar carrito
                    </button>

                    {/* Continúa al checkout */}
                    <Link
                        to="/checkout"
                        className="checkout-link"
                    >
                        Finalizar compra
                    </Link>

                </div>

            </div>

        </section>
    )
}


// Exporta el componente.
export default Cart
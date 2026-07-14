// ===============================
// COMPONENTE CARTITEM
// Muestra un producto individual dentro del carrito.
// ===============================

function CartItem({ item, removeItem }) {

    // Calcula el subtotal del producto.
    const subtotal = item.price * item.quantity

    return (
        <article className="cart-item">

            {/* Imagen del producto */}
            <img
                src={item.image}
                alt={item.title}
                className="cart-item-image"
            />

            <div className="cart-item-info">

                {/* Nombre del producto */}
                <h3>{item.title}</h3>

                {/* Cantidad agregada */}
                <p>
                    Cantidad: {item.quantity}
                </p>

                {/* Precio por unidad */}
                <p>
                    Precio unitario: ${item.price.toLocaleString('es-AR')}
                </p>

                {/* Subtotal */}
                <p className="cart-item-subtotal">
                    Subtotal: ${subtotal.toLocaleString('es-AR')}
                </p>

                {/* Elimina solamente este producto */}
                <button
                    className="remove-item-button"
                    onClick={() => removeItem(item.id)}
                >
                    Eliminar producto
                </button>

            </div>
        </article>
    )
}


// Exporta el componente.
export default CartItem
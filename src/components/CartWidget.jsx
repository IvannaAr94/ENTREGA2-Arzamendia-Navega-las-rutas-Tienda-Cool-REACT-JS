// ===============================
// COMPONENTE CARTWIDGET- Muestra el icono del carrito y la cantidad total de unidades.(contador del carrito)
// ===============================

// Link permite navegar al carrito sin recargar la página.
import { Link } from 'react-router-dom'

// Hook personalizado para acceder a la información global del carrito.
import { useCart } from '../context/CartContext.jsx'


function CartWidget() {

  // Obtiene la cantidad total de productos agregados al carrito.
  const { totalQuantity } = useCart()

  return (
    <Link
      to="/cart"
      className="cart-widget"
      aria-label="Ir al carrito"
    >

      {/* Icono del carrito */}
      <span className="cart-icon">
        🛒
      </span>

      {/* Cantidad total de unidades agregadas */}
      <span className="cart-quantity">
        {totalQuantity}
      </span>

    </Link>
  )
}


// Exporta el componente para utilizarlo en NavBar.
export default CartWidget
// Muestra el ícono del carrito. Más adelante se conectará con el estado real del carrito.
function CartWidget() {
  return (
    <div className="cart-widget" aria-label="Carrito de compras">
      <span className="cart-icon">🛒</span>
      <span className="cart-count">0</span>
    </div>
  )
}

export default CartWidget

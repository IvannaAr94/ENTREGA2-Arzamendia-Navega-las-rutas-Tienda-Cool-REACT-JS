// Contador visual para elegir unidades. En próximas entregas se conectará al carrito.
import { useState } from 'react'

function ItemCount({ stock }) {
  const [quantity, setQuantity] = useState(1)

  const decrease = () => {
    if (quantity > 1) setQuantity(quantity - 1)
  }

  const increase = () => {
    if (quantity < stock) setQuantity(quantity + 1)
  }

  return (
    <div className="item-count">
      <div className="count-controls">
        <button onClick={decrease}>-</button>
        <span>{quantity}</span>
        <button onClick={increase}>+</button>
      </div>
      <button className="add-button">Agregar al carrito</button>
    </div>
  )
}

export default ItemCount

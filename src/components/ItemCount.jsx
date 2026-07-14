// Contador visual para elegir unidades. Luego sse conectará al carrito. y recibe stock limita la cantidad máxima, initial establece el valor inicial y onAdd envía la cantidad elegida al carrito. 

// Hook de React que permite guardar y actualizar la cantidad seleccionada.
import { useState } from 'react'


// ===============================
// COMPONENTE ITEMCOUNT
// Permite seleccionar cuántas unidades agregar al carrito.
// ===============================

function ItemCount({ stock, initial = 1, onAdd }) {

  // Guarda la cantidad seleccionada por el usuarioo.
  const [quantity, setQuantity] = useState(initial)


  // ===============================
  // DISMINUIR CANTIDAD
  // Evita que la cantidad sea menor que 1.
  // ===============================

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }


  // ===============================
  // AUMENTAR CANTIDAD
  // Evita superar el stock disponible.
  // ===============================

  const increase = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1)
    }
  }


  // ===============================
  // AGREGAR AL CARRITO
  // Envía la cantidad seleccionada al componente ItemDetail.
  // ===============================

  const handleAdd = () => {
    onAdd(quantity)
  }


  return (
    <div className="item-count">

      {/* Controles para disminuir o aumentar la cantidad */}
      <div className="count-controls">

        {/* Botón para restar una unidad */}
        <button
          onClick={decrease}
          disabled={quantity <= 1}
        >
          -
        </button>

        {/* Cantidad seleccionada */}
        <span>{quantity}</span>

        {/* Botón para sumar una unidad */}
        <button
          onClick={increase}
          disabled={quantity >= stock}
        >
          +
        </button>

      </div>

      {/* Botón para agregar el producto al carrito */}
      <button
        className="add-button"
        onClick={handleAdd}
        disabled={stock === 0}
      >
        {stock === 0 ? 'Sin stock' : 'Agregar al carrito'}
      </button>

    </div>
  )
}


// Exporta el componente para utilizarlo en ItemDetail.
export default ItemCount
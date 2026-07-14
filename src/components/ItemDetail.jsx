// Componente de presentación: muestra toda la información de un producto seleccionado.

// Hook de React que permite guardar si el producto fue agregado.
import { useState } from 'react'

// Permite navegar entre páginas sin recargar la aplicación.
import { Link } from 'react-router-dom'

// Componente que permite seleccionar la cantidad de productos.
import ItemCount from './ItemCount.jsx'

// Hook personalizado para acceder al carrito global.
import { useCart } from '../context/CartContext.jsx'


// ===============================
// COMPONENTE ITEMDETAIL- Muestra toda la información de un producto seleccionado.
// ===============================

function ItemDetail({ product }) {

  // Obtiene la función para agregar productos al carrito.
  const { addItem } = useCart()

  // Guarda la cantidad agregada para ocultar ItemCount después de agregar.
  const [quantityAdded, setQuantityAdded] = useState(0)


  // ===============================
  // AGREGAR PRODUCTO AL CARRITO
  // ===============================
  const handleAdd = (quantity) => {

    // Agrega el producto y la cantidad seleccionada al contexto.
    addItem(product, quantity)

    // Guarda la cantidad agregada.
    setQuantityAdded(quantity)
  }


  return (
    <section className="detail-card">

      {/* Imagen del producto */}
      <img src={product.image} alt={product.title} />

      <div className="detail-info">

        {/* Categoría del producto */}
        <p className="product-category">
          {product.categoryName}
        </p>

        {/* Nombre del producto */}
        <h1>{product.title}</h1>

        {/* Descripción del producto */}
        <p className="detail-description">
          {product.description}
        </p>

        {/* Precio del producto */}
        <p className="detail-price">
          ${product.price.toLocaleString('es-AR')}
        </p>

        {/* Stock disponible */}
        <p className="stock-text">
          Stock disponible: {product.stock}
        </p>


        {/* Si todavía no fue agregado, muestra el contador */}
        {quantityAdded === 0 ? (

          <ItemCount
            stock={product.stock}
            initial={1}
            onAdd={handleAdd}
          />

        ) : (

          // Después de agregar, muestra opciones de navegación.
          <div className="detail-actions">

            {/* Mensaje de confirmación */}
            <p className="added-message">
              Agregaste {quantityAdded} unidad/es al carrito.
            </p>

            {/* Enlace para ir al carrito */}
            <Link to="/cart" className="cart-link">
              Ir al carrito
            </Link>

            {/* Enlace para seguir comprando */}
            <Link to="/" className="back-link">
              Seguir comprando
            </Link>

          </div>
        )}

      </div>
    </section>
  )
}


// Exporta el componente para utilizarlo en otras partes de la aplicación.
export default ItemDetail
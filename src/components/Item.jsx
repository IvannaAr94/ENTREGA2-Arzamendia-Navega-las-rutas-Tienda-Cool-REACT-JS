// Componente de presentación: muestra una tarjeta individual de producto.
import { Link } from 'react-router-dom'

function Item({ product }) {
  return (
    <article className="product-card">
      <img src={product.image} alt={product.title} />
      <div className="product-card-content">
        <p className="product-category">{product.categoryName}</p>
        <h3>{product.title}</h3>
        <p className="product-price">${product.price.toLocaleString('es-AR')}</p>
        <Link to={`/item/${product.id}`} className="detail-button">
          Ver detalle
        </Link>
      </div>
    </article>
  )
}

export default Item

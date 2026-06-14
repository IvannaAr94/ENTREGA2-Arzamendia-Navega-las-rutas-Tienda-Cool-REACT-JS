// Componente de presentación: muestra toda la información de un producto seleccionado.
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount.jsx'

function ItemDetail({ product }) {
  return (
    <section className="detail-card">
      <img src={product.image} alt={product.title} />

      <div className="detail-info">
        <p className="product-category">{product.categoryName}</p>
        <h1>{product.title}</h1>
        <p className="detail-description">{product.description}</p>
        <p className="detail-price">${product.price.toLocaleString('es-AR')}</p>
        <p className="stock-text">Stock disponible: {product.stock}</p>
        <ItemCount stock={product.stock} />
        <Link to="/" className="back-link">Volver al catálogo</Link>
      </div>
    </section>
  )
}

export default ItemDetail

// Contenedor: lee el id de la URL y busca el producto correspondiente.
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail.jsx'
import { getProductById } from '../services/productsService.js'

function ItemDetailContainer() {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const { itemId } = useParams()

  useEffect(() => {
    setLoading(true)

    getProductById(itemId)
      .then((response) => setProduct(response))
      .finally(() => setLoading(false))
  }, [itemId])

  if (loading) {
    return <p className="status-message page-message">Cargando detalle...</p>
  }

  if (!product) {
    return (
      <main className="main-container page-message">
        <h1>Producto no encontrado</h1>
        <Link to="/" className="detail-button">Volver al inicio</Link>
      </main>
    )
  }

  return (
    <main className="main-container">
      <ItemDetail product={product} />
    </main>
  )
}

export default ItemDetailContainer

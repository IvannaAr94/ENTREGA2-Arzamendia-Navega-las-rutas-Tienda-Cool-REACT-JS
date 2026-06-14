// Contenedor: obtiene productos, maneja estado, efecto y filtro por URL.
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList.jsx'
import { getProducts } from '../services/productsService.js'

const categoryTitles = {
  mujer: 'Productos de Mujer',
  hombre: 'Productos de Hombre',
  ninos: 'Productos de Niños',
}

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)

    getProducts(categoryId)
      .then((response) => setProducts(response))
      .finally(() => setLoading(false))
  }, [categoryId])

  const title = categoryId ? categoryTitles[categoryId] || 'Categoría no encontrada' : greeting

  return (
    <main className="main-container">
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">E-commerce de indumentaria</p>
          <h1>{title}</h1>
          <p className="hero-text">
            Navegá por nuestras categorías, elegí un producto y accedé a su detalle sin recargar la página.
          </p>
        </div>
      </section>

      <section className="products-section">
        <h2>Catálogo de productos</h2>
        {loading ? (
          <p className="status-message">Cargando productos...</p>
        ) : products.length > 0 ? (
          <ItemList products={products} />
        ) : (
          <p className="status-message">No hay productos para esta categoría.</p>
        )}
      </section>
    </main>
  )
}

export default ItemListContainer

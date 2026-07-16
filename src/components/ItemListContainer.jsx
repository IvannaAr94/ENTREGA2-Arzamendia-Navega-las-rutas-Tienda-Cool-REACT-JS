// Contenedor: obtiene productos, maneja estado, efecto y filtro por URL.

// Hooks para manejar estado y efectos.
import { useEffect, useState } from 'react'

// Permite obtener la categoría desde la URL.
import { useParams } from 'react-router-dom'

// Componentes de presentación.
import ItemList from './ItemList.jsx'
import FeaturedCategories from './FeaturedCategories.jsx'

// Servicio que consulta productos desde Firestore.
import { getProducts } from '../services/productsService.js'


// ===============================
// TÍTULOS DE CATEGORÍAS
// ===============================

const categoryTitles = {
  mujer: 'Productos de Mujer',
  hombre: 'Productos de Hombre',
  ninos: 'Productos de Niños',
}


// ===============================
// COMPONENTE ITEMLISTCONTAINER
// Obtiene productos y los filtra según la categoría.
// ===============================

function ItemListContainer({ greeting }) {

  // Guarda los productos obtenidos.
  const [products, setProducts] = useState([])

  // Controla el mensaje de carga.
  const [loading, setLoading] = useState(true)

  // Guarda posibles errores de Firebase.
  const [error, setError] = useState('')

  // Obtiene la categoría desde la URL.
  const { categoryId } = useParams()


  // ===============================
  // CONSULTAR PRODUCTOS
  // ===============================

  useEffect(() => {
    setLoading(true)
    setError('')

    getProducts(categoryId)
      .then((response) => {
        setProducts(response)
      })
      .catch((firebaseError) => {
        console.error(
          'Error al cargar los productos:',
          firebaseError
        )

        setProducts([])
        setError(
          'No se pudieron cargar los productos.'
        )
      })
      .finally(() => {
        setLoading(false)
      })

  }, [categoryId])


  // Define el título principal.
  const title = categoryId
    ? categoryTitles[categoryId] || 'Categoría no encontrada'
    : greeting


  return (
    <main className="main-container">

      {/* Encabezado principal */}
      <section className="hero">

        <div className="hero-content">

          <p className="eyebrow">
            E-commerce de indumentaria
          </p>

          <h1>{title}</h1>

          <p className="hero-text">
            Navegá por nuestras categorías, elegí un producto
            y accedé a su detalle sin recargar la página.
          </p>

          {/* Botón que desplaza hacia el catálogo */}
          <a
            href="#catalogo"
            className="hero-button"
          >
            Comprar ahora
          </a>

        </div>

      </section>


      {/* Solo se muestran las categorías destacadas en Inicio */}
      {!categoryId && (
        <FeaturedCategories />
      )}


      {/* Catálogo */}
      <section
        id="catalogo"
        className="products-section"
      >

        <div className="section-heading">

          <p className="section-eyebrow">
            Nuestra selección
          </p>

          <h2>
            {categoryId
              ? title
              : 'Catálogo de productos'}
          </h2>

        </div>


        {/* Loader */}
        {loading && (
          <p className="status-message">
            Cargando productos...
          </p>
        )}


        {/* Error */}
        {!loading && error && (
          <p className="status-message">
            {error}
          </p>
        )}


        {/* Productos */}
        {!loading &&
          !error &&
          products.length > 0 && (
            <ItemList products={products} />
          )}


        {/* Categoría vacía */}
        {!loading &&
          !error &&
          products.length === 0 && (
            <p className="status-message">
              No hay productos para esta categoría.
            </p>
          )}

      </section>

    </main>
  )
}


// Exporta el componente.
export default ItemListContainer
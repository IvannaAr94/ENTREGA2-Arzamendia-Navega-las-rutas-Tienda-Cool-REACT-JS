// Link permite navegar a cada categoría sin recargar la página.
import { Link } from 'react-router-dom'

// Estilos exclusivos del componente.
import '../styles/FeaturedCategories.css'


// ===============================
// DATOS DE LAS CATEGORÍAS
// ===============================

const categories = [
    {
        id: 'mujer',
        title: 'Mujer',
        description: 'Prendas modernas, cómodas y llenas de estilo.',
        image: '/categorias/camperam1.jpg',
    },
    {
        id: 'hombre',
        title: 'Hombre',
        description: 'Looks urbanos y versátiles para todos los días.',
        image: '/categorias/buzo3.jpg',
    },
    {
        id: 'ninos',
        title: 'Niños',
        description: 'Moda cómoda, divertida y pensada para acompañarlos.',
        image: '/categorias/buzoni.jpg',
    },
]


// ===============================
// COMPONENTE FEATUREDCATEGORIES
// Muestra las categorías principales de la tienda.
// ===============================

function FeaturedCategories() {
    return (
        <section className="featured-categories">

            {/* Encabezado de la sección */}
            <div className="featured-heading">
                <p className="featured-eyebrow">
                    Encontrá tu estilo
                </p>

                <h2>Explorá nuestras categorías</h2>

                <p>
                    Elegí tu colección favorita y descubrí todos los productos
                    disponibles en Tienda Cool.
                </p>
            </div>


            {/* Tarjetas de categorías */}
            <div className="featured-grid">

                {categories.map((category) => (
                    <Link
                        key={category.id}
                        to={`/category/${category.id}`}
                        className="featured-card"
                    >

                        {/* Imagen de la categoría */}
                        <img
                            src={category.image}
                            alt={`Colección de ${category.title}`}
                        />

                        {/* Capa de texto */}
                        <div className="featured-overlay">

                            <span className="featured-tag">
                                Colección
                            </span>

                            <h3>{category.title}</h3>

                            <p>{category.description}</p>

                            <span className="featured-link">
                                Ver productos →
                            </span>

                        </div>

                    </Link>
                ))}

            </div>

        </section>
    )
}


// Exporta el componente.
export default FeaturedCategories
// Ruta 404 para URLs inexistentes o mal escritas.
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <main className="main-container page-message">
      <h1>Error 404</h1>
      <p>La página que buscás no existe.</p>
      <Link to="/" className="detail-button">Volver a Tienda Cool</Link>
    </main>
  )
}

export default NotFound

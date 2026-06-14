// Barra de navegación principal. Usa NavLink para navegar sin recargar la página. Incluye enlaces a las categorías y el componente CartWidget para mostrar el carrito de compras.

import { NavLink, Link } from 'react-router-dom'
import CartWidget from './CartWidget.jsx'

function NavBar() {
  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="logo">
          <span className="logo-icon">TC</span>
          <span>Tienda Cool</span>
        </Link>

        <ul className="nav-links">
          <li><NavLink to="/">Inicio</NavLink></li>
          <li><NavLink to="/category/mujer">Mujer</NavLink></li>
          <li><NavLink to="/category/hombre">Hombre</NavLink></li>
          <li><NavLink to="/category/ninos">Niños</NavLink></li> 
        </ul>

        <CartWidget />
      </nav>
    </header>
  )
}

export default NavBar

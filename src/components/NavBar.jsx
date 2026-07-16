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
          <nav className="nav-links">

            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Inicio
            </NavLink>

            <NavLink to="/category/mujer" className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'}>Mujer
            </NavLink>

            <NavLink to="/category/hombre" className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'}>Hombre
            </NavLink>

            <NavLink to="/category/ninos" className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'}>Niños
            </NavLink>

            <NavLink to="/sobre-nosotros" className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'} >Sobre Nosotros
            </NavLink>

          </nav>
        </ul>

        <CartWidget />
      </nav>
    </header>
  )
}

export default NavBar

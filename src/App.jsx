// Configuración principal de rutas de la aplicación.

import { Routes, Route } from 'react-router-dom'

// Componentes generales.
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'

// Páginas y contenedores.
import ItemListContainer from './components/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer.jsx'
import Cart from './components/Cart.jsx'
import Checkout from './components/Checkout.jsx'
import AboutUs from './components/AboutUs.jsx'
import NotFound from './components/NotFound.jsx'


// ===============================
// COMPONENTE PRINCIPAL
// ===============================

function App() {
  return (
    <div className="app-layout">

      {/* Barra de navegación */}
      <NavBar />

      {/* Todas las rutas deben estar dentro de Routes */}
      <Routes>

        <Route
          path="/"
          element={
            <ItemListContainer
              greeting="Bienvenidos a Tienda Cool"
            />
          }
        />

        <Route
          path="/category/:categoryId"
          element={
            <ItemListContainer
              greeting="Bienvenidos a Tienda Cool"
            />
          }
        />

        <Route
          path="/item/:itemId"
          element={<ItemDetailContainer />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="/checkout"
          element={<Checkout />}
        />

        <Route
          path="/sobre-nosotros"
          element={<AboutUs />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>

      {/* Pie de página */}
      <Footer />

    </div>
  )
}


// Exporta el componente principal.
export default App
// Configuración principal de rutas de la aplicación.
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer.jsx'
import NotFound from './components/NotFound.jsx'
import Cart from './components/Cart.jsx'
import UploadProducts from './components/UploadProducts.jsx'
import Checkout from './components/Checkout.jsx'

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenidos a Tienda Cool" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer greeting="Bienvenidos a Tienda Cool" />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cargar-productos" element={<UploadProducts />} />
        <Route path="/checkout" element={<Checkout />} />

      </Routes>

      <footer className="footer">
        <p>&copy; 2026 Tienda Cool. Todos los derechos reservados.</p>
      </footer>
    </>
  )
}

export default App

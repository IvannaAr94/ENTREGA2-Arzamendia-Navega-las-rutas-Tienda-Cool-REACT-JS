// Configuración principal de rutas de la aplicación.
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer.jsx'
import NotFound from './components/NotFound.jsx'

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenidos a Tienda Cool" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer greeting="Bienvenidos a Tienda Cool" />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <footer className="footer">
        <p>&copy; 2026 Tienda Cool. Todos los derechos reservados.</p>
      </footer>
    </>
  )
}

export default App

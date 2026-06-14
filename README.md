# ENTREGA2-Arzamendia- Navega las rutas-Tienda Cool-REACT-JS

Entrega 2 de React JS: **Navega las rutas**.

Proyecto de e-commerce llamado **Tienda Cool**, creado con React, Vite y React Router DOM.

## Objetivo

Implementar la navegación entre las distintas vistas de la tienda: catálogo principal, catálogo filtrado por categorías y detalle de cada producto.

## Funcionalidades realizadas

- Navegación con **React Router DOM**.
- Ruta principal `/` con el catálogo completo.
- Ruta dinámica `/category/:categoryId` para filtrar por categoría.
- Ruta dinámica `/item/:itemId` para ver el detalle de un producto.
- Ruta `*` para mostrar una página de error 404.
- Uso de `useParams()` para leer los parámetros de la URL.
- Uso de `useEffect()` con dependencias para actualizar la vista al navegar.
- Simulación de llamados asíncronos con **Promises** y `setTimeout`.
- Listado de productos con `Array.map()` y prop `key`.
- Separación entre componentes contenedores y componentes de presentación.
- Componente `ItemCount` incluido en el detalle del producto.

## Componentes principales

- `NavBar.jsx`: barra de navegación con enlaces por categoría y carrito.
- `CartWidget.jsx`: widget visual del carrito.
- `ItemListContainer.jsx`: contenedor que obtiene y filtra productos.
- `ItemList.jsx`: componente de presentación que lista productos.
- `Item.jsx`: tarjeta visual de cada producto.
- `ItemDetailContainer.jsx`: contenedor que obtiene el detalle de un producto.
- `ItemDetail.jsx`: vista visual del detalle del producto.
- `ItemCount.jsx`: contador de unidades.
- `NotFound.jsx`: página 404.

## Estructura principal

```txt
src/
├── assets/
│   └── productos/
├── components/
│   ├── CartWidget.jsx
│   ├── Item.jsx
│   ├── ItemCount.jsx
│   ├── ItemDetail.jsx
│   ├── ItemDetailContainer.jsx
│   ├── ItemList.jsx
│   ├── ItemListContainer.jsx
│   ├── NavBar.jsx
│   └── NotFound.jsx
├── data/
│   └── products.js
├── services/
│   └── productsService.js
├── App.jsx
├── main.jsx
└── styles.css
```

## Instalar dependencias

```bash
npm install
npm install react-router-dom
```

## Ejecutar el proyecto

```bash
npm run dev
```

Después abrí en el navegador la URL que muestre la terminal, normalmente:

```txt
http://localhost:5173/
```

## Comandos para guardar y subir a GitHub

```bash
git status
git add .
git commit -m "Entrega 2 Navega las rutas"
git branch -M main
git remote set-url origin https://github.com/IvannaAr94/ENTREGA2-Arzamendia-Navega-las-rutas-Tienda-Cool-REACT-JS.git
git push -u origin main
```

## Repositorio

https://github.com/IvannaAr94/ENTREGA2-Arzamendia-Navega-las-rutas-Tienda-Cool-REACT-JS

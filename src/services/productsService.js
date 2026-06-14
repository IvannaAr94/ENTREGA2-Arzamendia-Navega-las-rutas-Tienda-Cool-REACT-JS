// Servicio de productos: simula llamados asíncronos usando Promises y setTimeout.
import { products } from '../data/products.js'

// Devuelve todos los productos o los filtra por categoría cuando llega un categoryId.
export const getProducts = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredProducts = categoryId
        ? products.filter((product) => product.category === categoryId)
        : products

      resolve(filteredProducts)
    }, 700)
  })
}

// Devuelve un único producto buscando por id para la vista de detalle.
export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productFound = products.find((product) => product.id === productId)
      resolve(productFound)
    }, 700)
  })
}

// Funciones de FIRESTORE para crear documentos.
import { doc, setDoc } from 'firebase/firestore'

// Base de datos configurada en Firebase.
import { db } from './firebaseConfig.js'

// Productos que actualmente utiliza la tienda.
import { products } from '../data/products.js'


// ===============================
// OBTENER NOMBRE DE LA IMAGEN
// Extrae solamente el nombre del archivo desde la ruta importada.
// ===============================

const getImageFileName = (imagePath) => {
  return imagePath.split('/').pop().split('?')[0]
}


// ===============================
// SUBIR PRODUCTOS A FIRESTORE
// Crea un documento por cada producto dentro de la colección products.
// ===============================

export const uploadProducts = async () => {

  // Prepara todos los productos para guardarlos en Firestore.
  const productsToUpload = products.map((product) => {

    // Obtiene el nombre original de la imagen.
    const imageFileName = getImageFileName(product.image)

    return {
      title: product.title,
      category: product.category,
      categoryName: product.categoryName,
      price: product.price,
      stock: product.stock,

      // Guarda una ruta que funcionará tanto localmente como en el deploy.
      image: `/productos/${imageFileName}`,

      description: product.description,
    }
  })

  // Crea o actualiza cada documento usando el ID original del producto.
  const uploadPromises = productsToUpload.map((product, index) => {

    // Los documentos tendrán IDs desde 1 hasta 27.
    const productId = products[index].id

    return setDoc(
      doc(db, 'products', productId),
      product
    )
  })


  // Espera que terminen todas las operaciones.
  await Promise.all(uploadPromises)

  return productsToUpload.length
}
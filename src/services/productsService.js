// ===============================
// IMPORTACIONES DE FIREBASE
// ===============================

// Funciones necesarias para consultar documentos en Firestore.
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from 'firebase/firestore'

// Base de datos configurada en Firebase.
import { db } from './firebaseConfig.js'


// ===============================
// OBTENER LISTADO DE PRODUCTOS
// Devuelve todos los productos o filtra por categoría.
// ===============================

export const getProducts = async (categoryId) => {

  // Referencia a la colección products de Firestore.
  const productsCollection = collection(db, 'products')

  // Si existe una categoría, crea una consulta filtrada.
  const productsQuery = categoryId
    ? query(
      productsCollection,
      where('category', '==', categoryId)
    )
    : productsCollection

  // Ejecuta la consulta en Firestore.
  const querySnapshot = await getDocs(productsQuery)

  // Convierte los documentos de Firebase en objetos de JavaScript.
  const products = querySnapshot.docs.map((document) => ({
    id: document.id,
    ...document.data(),
  }))

  // Ordena los productos por su ID numérico.
  return products.sort(
    (productA, productB) =>
      Number(productA.id) - Number(productB.id)
  )
}


// ===============================
// OBTENER PRODUCTO POR ID
// Devuelve un producto individual desde Firestore.
// ===============================

export const getProductById = async (productId) => {

  // Referencia al documento solicitado.
  const productReference = doc(
    db,
    'products',
    productId
  )

  // Consulta el documento en Firestore.
  const productSnapshot = await getDoc(productReference)

  // Si el producto no existe, devuelve null.
  if (!productSnapshot.exists()) {
    return null
  }

  // Devuelve el producto con su ID y sus datos.
  return {
    id: productSnapshot.id,
    ...productSnapshot.data(),
  }
}
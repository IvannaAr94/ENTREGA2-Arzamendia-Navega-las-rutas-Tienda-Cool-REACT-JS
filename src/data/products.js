// Base de datos local de productos para simular la información de una tienda.
//MUJER
import remeram1 from '../assets/productos/remeram1.jpg'
import remeram2 from '../assets/productos/remeram2.jpg'
import remeram3 from '../assets/productos/remeram3.jpg'
import remeram4 from '../assets/productos/remeram4.jpg'
import camperam0 from '../assets/productos/camperam0.jpg'
import camperam1 from '../assets/productos/camperam1.jpg'
import camperam2 from '../assets/productos/camperam2.jpg'
import camperam3 from '../assets/productos/camperam3.jpg'
import camperam4 from '../assets/productos/camperam4.jpg'

//Hombre
import buzo1 from '../assets/productos/buzo1.jpg'
import buzo2 from '../assets/productos/buzo2.jpg'
import buzo3 from '../assets/productos/buzo3.jpg'
import buzo4 from '../assets/productos/buzo4.jpg'
import camisa from '../assets/productos/camisa.jpg'
import camisa1 from '../assets/productos/camisa1.webp'
import camisa2 from '../assets/productos/camisa2.jpg'
import camisa3 from '../assets/productos/camisa3.jpg'
import camisa4 from '../assets/productos/camisa4.jpg'

//Niños
import buzoni from '../assets/productos/buzoni.jpg'
import buzoni1 from '../assets/productos/buzoni1.jpg'
import buzoni2 from '../assets/productos/buzoni2.jpg'
import buzoni3 from '../assets/productos/buzoni3.jpg'
import buzoni4 from '../assets/productos/buzoni4.jpg'
import remerani1 from '../assets/productos/remerani1.jpg'
import remerani2 from '../assets/productos/remerani2.jpg'
import remerani3 from '../assets/productos/remerani3.jpg'
import remerani4 from '../assets/productos/remerani4.jpg'

export const products = [
  //MUJER
  {
    id: '1',
    title: 'Remera Oversize Verde',
    category: 'mujer',
    categoryName: 'Mujer',
    price: 18500,
    stock: 8,
    image: remeram1,
    description: 'Remera oversize de algodón suave, ideal para looks casuales y cómodos todos los días.',
  },

  {
    id: '2',
    title: 'Remera Blanca',
    category: 'mujer',
    categoryName: 'Mujer',
    price: 18500,
    stock: 8,
    image: remeram2,
    description: 'Remera oversize de algodón suave, ideal para looks casuales y cómodos todos los días.',
  },

  {
    id: '3',
    title: 'Remera Manga Corta Marrón',
    category: 'mujer',
    categoryName: 'Mujer',
    price: 18200,
    stock: 10,
    image: remeram3,
    description: 'Remera de algodón suave, ideal para looks casuales y cómodos todos los días',
  },

  {
    id: '4',
    title: 'Remera Oversize Rosa',
    category: 'mujer',
    categoryName: 'Mujer',
    price: 18500,
    stock: 8,
    image: remeram4,
    description: 'Remera de algodón suave, ideal para looks casuales y cómodos todos los días',
  },
  {
    id: '5',
    title: 'Campera Beige',
    category: 'mujer',
    categoryName: 'Mujer',
    price: 25200,
    stock: 10,
    image: camperam0,
    description: 'campera suave, ideal para looks casuales y cómodos todos los días',
  },

  {
    id: '6',
    title: 'Campera Negra',
    category: 'mujer',
    categoryName: 'Mujer',
    price: 25200,
    stock: 10,
    image: camperam1,
    description: 'campera suave, ideal para looks casuales y cómodos todos los días',
  },

  {
    id: '7',
    title: 'Campera Verde',
    category: 'mujer',
    categoryName: 'Mujer',
    price: 25200,
    stock: 10,
    image: camperam2,
    description: 'campera suave, ideal para looks casuales y cómodos todos los días',
  },

  {
    id: '8',
    title: 'Campera Marrón Claro',
    category: 'mujer',
    categoryName: 'Mujer',
    price: 25200,
    stock: 10,
    image: camperam3,
    description: 'campera suave, ideal para looks casuales y cómodos todos los días',
  },

  {
    id: '9',
    title: 'Campera Blanca',
    category: 'mujer',
    categoryName: 'Mujer',
    price: 25300,
    stock: 10,
    image: camperam4,
    description: 'campera suave, ideal para looks casuales y cómodos todos los días',
  },

  // HOMBRE
  {
    id: '10',
    title: 'Buzo Relax Azul',
    category: 'hombre',
    categoryName: 'Hombre',
    price: 32900,
    stock: 6,
    image: buzo1,
    description: 'Buzo abrigado con capucha, pensado para un estilo urbano, cómodo y versátil.',
  },
  {
    id: '11',
    title: 'Buzo Relax Naranja',
    category: 'hombre',
    categoryName: 'Hombre',
    price: 44500,
    stock: 4,
    image: buzo2,
    description: 'Buzo abrigado con capucha, pensado para un estilo urbano, cómodo y versátil.',
  },

  {
    id: '12',
    title: 'Buzo Relax Verde',
    category: 'hombre',
    categoryName: 'Hombre',
    price: 44500,
    stock: 6,
    image: buzo3,
    description: 'Buzo abrigado con capucha, pensado para un estilo urbano, cómodo y versátil.',
  },

  {
    id: '13',
    title: 'Buzo Relax Bordo',
    category: 'hombre',
    categoryName: 'Hombre',
    price: 44500,
    stock: 4,
    image: buzo4,
    description: 'Buzo abrigado con capucha, pensado para un estilo urbano, cómodo y versátil.',
  },

  {
    id: '14',
    title: 'Camisa Cuadrille',
    category: 'hombre',
    categoryName: 'Hombre',
    price: 41500,
    stock: 4,
    image: camisa,
    description: 'Camisa cuadrillé, pensada para un estilo urbano, cómoda y versátil.',
  },

  {
    id: '15',
    title: 'Camisa Azul/Celeste',
    category: 'hombre',
    categoryName: 'Hombre',
    price: 41500,
    stock: 4,
    image: camisa1,
    description: 'Camisa azul/celeste, pensada para un estilo urbano, cómoda y versátil.',
  },


  {
    id: '16',
    title: 'Camisa Amarilla',
    category: 'hombre',
    categoryName: 'Hombre',
    price: 41500,
    stock: 4,
    image: camisa2,
    description: 'Camisa amarilla, pensada para un estilo urbano, cómoda y versátil.',
  },

  {
    id: '17',
    title: 'Camisa Verde',
    category: 'hombre',
    categoryName: 'Hombre',
    price: 41500,
    stock: 4,
    image: camisa3,
    description: 'Camisa verde, pensada para un estilo urbano, cómoda y versátil.',
  },

  {
    id: '18',
    title: 'Camisa Marrón O',
    category: 'hombre',
    categoryName: 'Hombre',
    price: 41500,
    stock: 4,
    image: camisa4,
    description: 'Camisa pensada para un estilo urbano, cómoda y versátil.',
  },


  // NIÑOS
  {
    id: '19',
    title: 'Buzo Classic Blanco y Negro',
    category: 'ninos',
    categoryName: 'Niños',
    price: 15000,
    stock: 15,
    image: buzoni,
    description: 'Buzo abrigado con capucha, pensado para un estilo urbano, cómodo y versátil.',
  },
  {
    id: '20',
    title: 'Buzo Urban Negro y celeste',
    category: 'ninos',
    categoryName: 'Niños',
    price: 15000,
    stock: 12,
    image: buzoni1,
    description: 'Buzo abrigado con capucha, pensado para un estilo urbano, cómodo y versátil.',
  },

  {
    id: '21',
    title: 'Buzo Cool Classic Negro y Verde',
    category: 'ninos',
    categoryName: 'Niños',
    price: 15000,
    stock: 15,
    image: buzoni2,
    description: 'Buzo abrigado con capucha, pensado para un estilo urbano, cómodo y versátil.',
  },
  {
    id: '22',
    title: 'Camiseta Bordo',
    category: 'ninos',
    categoryName: 'Niños',
    price: 15000,
    stock: 12,
    image: buzoni3,
    description: 'Camiseta de algodón suave, ideal para looks casuales y cómodos todos los días.',
  },

  {
    id: '23',
    title: 'Camiseta Negra',
    category: 'ninos',
    categoryName: 'Niños',
    price: 11200,
    stock: 12,
    image: buzoni4,
    description: 'Camiseta de algodón suave, ideal para looks casuales y cómodos todos los días.',
  },

  {
    id: '24',
    title: 'Remera Negra',
    category: 'ninos',
    categoryName: 'Niños',
    price: 11200,
    stock: 12,
    image: remerani1,
    description: 'Remera de algodón suave, ideal para looks casuales y cómodos todos los días.',
  },

  {
    id: '25',
    title: 'Remera Verde',
    category: 'ninos',
    categoryName: 'Niños',
    price: 11200,
    stock: 12,
    image: remerani2,
    description: 'Remera de algodón suave, ideal para looks casuales y cómodos todos los días.',
  },

  {
    id: '26',
    title: 'Remera Gris',
    category: 'ninos',
    categoryName: 'Niños',
    price: 11200,
    stock: 12,
    image: remerani3,
    description: 'Remera de algodón suave, ideal para looks casuales y cómodos todos los días.',
  },

  {
    id: '27',
    title: 'Remera Roja',
    category: 'ninos',
    categoryName: 'Niños',
    price: 11200,
    stock: 12,
    image: remerani4,
    description: 'Remera de algodón suave, ideal para looks casuales y cómodos todos los días.',
  },

]

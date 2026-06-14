// Componente de presentación: lista productos usando Array.map() y key.
import Item from './Item.jsx'

function ItemList({ products }) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ItemList

import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addItem = (product, quantity) => {
    const productInCart = cart.find((item) => item.id === product.id)

    if (productInCart) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      )
    } else {
      setCart([...cart, { ...product, quantity }])
    }
  }

  const removeItem = (productId) => {
    setCart(cart.filter((item) => item.id !== productId))
  }

  const clearCart = () => {
    setCart([])
  }

  const isInCart = (productId) => {
    return cart.some((item) => item.id === productId)
  }

  const getItemQuantity = (productId) => {
    const item = cart.find((product) => product.id === productId)
    return item ? item.quantity : 0
  }

  const totalQuantity = cart.reduce(
    (total, item) => total + item.quantity,
    0
  )

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        isInCart,
        getItemQuantity,
        totalQuantity,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  return useContext(CartContext)
}
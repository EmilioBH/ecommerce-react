import { createContext, useState } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
  const [counter, setCounter] = useState(0)
  const [isProductDetailOpen, setisProductDetailOpen] = useState(false)

  const openProductDetail = () => setisProductDetailOpen(true)

  const closeProductDetail = () => setisProductDetailOpen(false)

  return (
    <ShoppingCartContext.Provider
      value={{
        counter,
        setCounter,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}

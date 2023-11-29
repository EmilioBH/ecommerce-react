import { createContext, useState } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
  const [counter, setCounter] = useState(0)
  const [isProductDetailOpen, setisProductDetailOpen] = useState(false)
  const [productToShow, setProductToShow] = useState({
    title: '',
    price: '',
    description: '',
    images: [],
  })
  const [cartProducts, setCartProducts] = useState([])
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)

  const openProductDetail = () => setisProductDetailOpen(true)
  const closeProductDetail = () => setisProductDetailOpen(false)

  const openSideMenu = () => setIsSideMenuOpen(true)
  const closeSideMenu = () => setIsSideMenuOpen(false)

  return (
    <ShoppingCartContext.Provider
      value={{
        counter,
        setCounter,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        isSideMenuOpen,
        openSideMenu,
        closeSideMenu,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}

import { createContext, useEffect, useState } from 'react'

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
  const [order, setOrder] = useState([])
  const [items, setItems] = useState(null)
  const [filteredItems, setFilteredItems] = useState(null)
  const [searchByTitle, setSearchByTitle] = useState(null)

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((response) => response.json())
      .then((data) => setItems(data))
  }, [])

  const filteredItemsByTitles = (items, searchByTitle) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    )
  }

  useEffect(() => {
    if (searchByTitle)
      setFilteredItems(filteredItemsByTitles(items, searchByTitle))
  }, [items, searchByTitle])

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
        order,
        setOrder,
        items,
        setItems,
        searchByTitle,
        setSearchByTitle,
        filteredItems,
        setFilteredItems,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}

import { createContext, useEffect, useState } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
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
  const [searchByCategory, setSearchByCategory] = useState(null)

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

  const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter((item) =>
      item.category.name.toLowerCase().includes(searchByCategory.toLowerCase())
    )
  }

  const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
    if (searchType === 'BY_TITLE') {
      return filteredItemsByTitles(items, searchByTitle)
    }

    if (searchType === 'BY_CATEGORY') {
      return filteredItemsByCategory(items, searchByCategory)
    }
    if (searchType === 'BY_TITLE_AND_CATEGORY') {
      return filteredItemsByCategory(items, searchByCategory).filter((item) =>
        item.title.toLowerCase().includes(searchByTitle.toLowerCase())
      )
    }
    if (!searchType) {
      return items
    }
  }

  useEffect(() => {
    if (searchByTitle && searchByCategory)
      setFilteredItems(
        filterBy(
          'BY_TITLE_AND_CATEGORY',
          items,
          searchByTitle,
          searchByCategory
        )
      )
    if (searchByTitle && !searchByCategory)
      setFilteredItems(
        filterBy('BY_TITLE', items, searchByTitle, searchByCategory)
      )
    if (searchByCategory && !searchByTitle)
      setFilteredItems(
        filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory)
      )
    if (!searchByCategory && !searchByTitle)
      setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
  }, [items, searchByTitle, searchByCategory])

  const openProductDetail = () => setisProductDetailOpen(true)
  const closeProductDetail = () => setisProductDetailOpen(false)

  const openSideMenu = () => setIsSideMenuOpen(true)
  const closeSideMenu = () => setIsSideMenuOpen(false)

  return (
    <ShoppingCartContext.Provider
      value={{
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
        searchByCategory,
        setSearchByCategory,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}

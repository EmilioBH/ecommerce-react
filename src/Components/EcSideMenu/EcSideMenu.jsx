import { useContext } from 'react'

import { ShoppingCartContext } from '../../Context'
import { totalPrice } from '../../Utils'

import { XMarkIcon } from '@heroicons/react/24/outline'

import EcOrderCard from '../EcOrderCard/EcOrderCard'
import './EcSideMenu.css'

function EcSideMenu() {
  const context = useContext(ShoppingCartContext)

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(
      (prod) => prod.id !== id
    )
    context.setCartProducts(filteredProducts)
  }

  const handleCheckout = () => {
    const orderToAdd = {
      date: '01-02-2023',
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts),
    }

    context.setOrder([...context.order, orderToAdd])
    context.setCartProducts([])
  }

  return (
    <aside
      className={` ${
        context.isSideMenuOpen ? 'flex' : 'hidden'
      } side-menu flex-col fixed bg-white right-0 border border-black rounded z-10`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <XMarkIcon
          onClick={() => context.closeSideMenu()}
          className="h-6 w-6 text-black cursor-pointer"
        />
      </div>
      <div className="px-6 overflow-y-scroll flex-1">
        {context.cartProducts.map((prod) => (
          <EcOrderCard
            key={prod.id}
            id={prod.id}
            title={prod.title}
            imageUrl={prod.images[0]}
            price={prod.price}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className="px-6 mb-6">
        <p className="flex justify-between items-center mb-2">
          <span className="font-light">Total:</span>
          <span className="font-medium text-2xl">
            $ {totalPrice(context.cartProducts)}
          </span>
        </p>
        <button
          className="w-full bg-black py-3 text-white rounded-lg"
          onClick={() => handleCheckout()}
        >
          Checkout
        </button>
      </div>
    </aside>
  )
}

export default EcSideMenu

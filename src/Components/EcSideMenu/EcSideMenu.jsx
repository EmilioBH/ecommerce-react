import { useContext } from 'react'

import { ShoppingCartContext } from '../../Context'

import { XMarkIcon } from '@heroicons/react/24/outline'

import EcOrderCard from '../EcOrderCard/EcOrderCard'
import './EcSideMenu.css'

function EcSideMenu() {
  const context = useContext(ShoppingCartContext)

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
      <div className="px-6">
        {context.cartProducts.map((prod) => (
          <EcOrderCard
            key={prod.id}
            title={prod.title}
            imageUrl={prod.images[0]}
            price={prod.price}
          />
        ))}
      </div>
    </aside>
  )
}

export default EcSideMenu

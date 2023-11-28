import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'

import { XMarkIcon } from '@heroicons/react/24/outline'

import './EcProductDetail.css'

function EcProductDetail() {
  const context = useContext(ShoppingCartContext)

  return (
    <aside
      className={` ${
        context.isProductDetailOpen ? 'flex' : 'hidden'
      } product-detail flex-col fixed bg-white right-0 border border-black rounded`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Details</h2>
        <XMarkIcon
          onClick={() => context.closeProductDetail()}
          className="h-6 w-6 text-black cursor-pointer"
        />
      </div>
      <figure className="px-6">
        <img
          className="w-full h-full rounded"
          src={context.productToShow.images[0]}
          alt={context.productToShow.title}
        />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-medium text-2xl mb-2">
          ${context.productToShow.price}
        </span>
        <span className="font-medium text-md">
          {context.productToShow.title}
        </span>
        <span className="font-medium text-sm">
          {context.productToShow.description}
        </span>
      </p>
    </aside>
  )
}

export default EcProductDetail

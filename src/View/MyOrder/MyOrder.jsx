import { useContext } from 'react'
import { Link } from 'react-router-dom'

import EcLayout from '../../Components/EcLayout/EcLayout'
import EcOrderCard from '../../Components/EcOrderCard/EcOrderCard'
import { ShoppingCartContext } from '../../Context'

import { ChevronLeftIcon } from '@heroicons/react/24/outline'

function MyOrder() {
  const context = useContext(ShoppingCartContext)

  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)

  if (index === 'last') index = context.order?.length - 1

  return (
    <EcLayout>
      <div className="flex item-center justify-center relative w-80 mb-6">
        <Link to="/my-orders/" className="absolute left-0">
          <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer" />
        </Link>
        <h1>My Order</h1>
      </div>
      <div className="flex flex-col w-80">
        {context.order?.[index]?.products.map((prod) => (
          <EcOrderCard
            key={prod.id}
            id={prod.id}
            title={prod.title}
            imageUrl={prod.images[0]}
            price={prod.price}
          />
        ))}
      </div>
    </EcLayout>
  )
}

export default MyOrder

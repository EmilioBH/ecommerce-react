import { useContext } from 'react'
import { Link } from 'react-router-dom'

import EcLayout from '../../Components/EcLayout/EcLayout'
import EcOrdersCard from '../../Components/EcOrdersCard/EcOrdersCard'
import { ShoppingCartContext } from '../../Context'

function MyOrders() {
  const context = useContext(ShoppingCartContext)
  return (
    <EcLayout>
      <div className="flex item-center justify-center relative w-80">
        <h1>My Orders</h1>
      </div>
      {context.order.map((order, index) => (
        <Link key={index} to={`/my-orders/${index}`}>
          <EcOrdersCard
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
          />
        </Link>
      ))}
    </EcLayout>
  )
}

export default MyOrders

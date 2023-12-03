import { useContext } from 'react'

import EcLayout from '../../Components/EcLayout/EcLayout'
import EcOrderCard from '../../Components/EcOrderCard/EcOrderCard'
import { ShoppingCartContext } from '../../Context'

function MyOrder() {
  const context = useContext(ShoppingCartContext)

  return (
    <EcLayout>
      <h2>MyOrder</h2>
      <div className="flex flex-col w-80">
        {context.order?.slice(-1)[0].products.map((prod) => (
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

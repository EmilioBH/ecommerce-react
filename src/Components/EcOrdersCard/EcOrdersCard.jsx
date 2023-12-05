import {
  CalendarIcon,
  ChevronRightIcon,
  ShoppingBagIcon,
} from '@heroicons/react/24/outline'

function EcOrderCard(props) {
  const { totalPrice, totalProducts } = props

  return (
    <div className="flex justify-between items-center mb-3 border w-80 border-black p-4 rounded">
      <div className="flex flex-col">
        <div className="flex items-center mb-2">
          <CalendarIcon className="h-5 w-5 text-black" />
          <span className="text-sm font-light">01-02-2023</span>
        </div>
        <div className="flex items-center">
          <ShoppingBagIcon className="h-5 w-5 text-black" />
          <span className="text-sm font-light">{totalProducts}</span>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <p className="text-xl font-bold">${totalPrice}</p>
        <ChevronRightIcon className="h-6 w-6 text-black" />
      </div>
    </div>
  )
}

export default EcOrderCard

import { useContext } from 'react'

import EcCard from '../../Components/EcCard/EcCard'
import EcLayout from '../../Components/EcLayout/EcLayout'
import EcProductDetail from '../../Components/EcProductDetail/EcProductDetail'
import { ShoppingCartContext } from '../../Context'

function Home() {
  const context = useContext(ShoppingCartContext)

  const renderView = () => {
    if (context.filteredItems?.length > 0) {
      return (
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
          {context.filteredItems?.map((item) => (
            <EcCard key={item.id} data={item} />
          ))}
        </div>
      )
    } else {
      return <h1>We don't have any coincidence to show you.</h1>
    }
  }

  return (
    <EcLayout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">Exclusive Products</h1>
      </div>
      <input
        type="text"
        placeholder="Search a product..."
        className="rounded-lg border-black w-80 p-4 mb-4"
        onChange={(event) => context.setSearchByTitle(event.target.value)}
      />
      {renderView()}
      <EcProductDetail />
    </EcLayout>
  )
}

export default Home

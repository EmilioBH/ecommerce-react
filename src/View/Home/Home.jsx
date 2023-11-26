import { useEffect, useState } from 'react'

import EcCard from '../../Components/EcCard/EcCard'
import EcLayout from '../../Components/EcLayout/EcLayout'

function Home() {
  const [items, setItems] = useState(null)

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((response) => response.json())
      .then((data) => setItems(data))
  }, [])

  return (
    <EcLayout>
      <p>Home</p>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {items?.map((item) => (
          <EcCard key={item.id} data={item} />
        ))}
      </div>
    </EcLayout>
  )
}

export default Home

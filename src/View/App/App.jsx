import Home from '../Home/Home'
import MyAcount from '../MyAccount/MyAcount'
import MyOrder from '../MyOrder/MyOrder'
import MyOrders from '../MyOrders/MyOrders'
import NotFound from '../NotFound/NorFound'
import SignIn from '../SignIn/SignIn'

import './App.css'

function App() {
  return (
    <>
      <div className="bg-red-300">
        <Home />
        <MyAcount />
        <MyOrder />
        <MyOrders />
        <NotFound />
        <SignIn />
      </div>
    </>
  )
}

export default App

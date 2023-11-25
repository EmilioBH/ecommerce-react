import { useRoutes } from 'react-router'

import Home from '../View/Home/Home'
import MyAccount from '../View/MyAccount/MyAccount'
import MyOrder from '../View/MyOrder/MyOrder'
import MyOrders from '../View/MyOrders/MyOrders'
import NotFound from '../View/NotFound/NorFound'
import SignIn from '../View/SignIn/SignIn'

export const AppRoutes = () => {
    const routes = useRoutes([
      { path: '/', element: <Home /> },
      { path: '/my-account', element: <MyAccount /> },
      { path: '/my-orders', element: <MyOrder /> },
      { path: '/my-order', element: <MyOrders /> },
      { path: '/sign-in', element: <SignIn /> },
      { path: '/*', element: <NotFound /> },
    ])
  
    return routes
  }
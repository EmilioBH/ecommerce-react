import { BrowserRouter } from 'react-router-dom'
import EcSideMenu from '../../Components/EcSideMenu/EcSideMenu'
import { ShoppingCartProvider } from '../../Context'

import EcNavBar from '../../Components/EcNavBar/EcNavBar'
import { AppRoutes } from '../../routes'

import './App.css'

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <EcNavBar />
        <EcSideMenu />
        <AppRoutes />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App

import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from '../../routes'
import EcNavBar from '../../Components/EcNavBar/EcNavBar'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <EcNavBar />
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavBar } from './components/NavBar'
import { CartWidget } from './components/NavBar'
import { Agradecimiento } from './components/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <NavBar>
          <CartWidget />
        </NavBar>
      </div>

      <div>
        < Agradecimiento greeting="Muchas gracias por tu compra!!!" />
      </div>
      
    </>
  )
}

export default App

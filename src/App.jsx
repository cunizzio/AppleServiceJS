
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import { NavBar } from './components/NavBar/NavBar'
import { Home } from './Paginas/Home'
import { Detail } from './Paginas/Detalle'
import { Categoria } from './Paginas/Categorias'

const routes = createBrowserRouter(
  createRoutesFromElements (
    <Route element={<NavBar/>}>
      <Route path="/" element={<Home/>} />
      <Route path="/category/:id" element={<Categoria/>}/>
      <Route path="/Item/:id" element={<Detail/>}/>
    </Route>
  )
);

function App() {

  return (
    <>
      <div>
        <RouterProvider router={routes} />
      </div>      
    </>
  )
}

export default App

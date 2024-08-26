import './App.css'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'  
import NotFound from './Components/NotFound/NotFound'

let x = createBrowserRouter([
  {
    path: '', 
    element: <Layout/>, 
    children: [
      { path: '', element: <Home/> },
      { path: 'about', element: <About/> }, 
      { path: 'portfolio', element: <Portfolio/> }, 
      { path: 'contact', element: <Contact/> }, 
      {path:'*', element: <NotFound/>}
    ]
  }
])

export default function App() {
  return <RouterProvider router={x}></RouterProvider>
}

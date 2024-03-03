import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home'
import Root from './Root/Root';
import Singin from './Singin/Singin';
import Singup from './Singup/Singup';
import Cart from './Cart/Cart'
import Catagrie from './Catagrie/Catagrie';
import Proudcts from './Proudcts/Proudcts'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {

        path: "/",
        element: <Home/>, 
      },
      {

        path: "/singin",
        element: <Singin/>, 
      },
      {

        path: "/singup",
        element: <Singup/>, 
      },
      {

        path: "/cart",
        element: <Cart/>, 
      },
      {

        path: "/catagrie",
        element: <Catagrie/>, 
      },
      {

        path: "/proucts",
        element: <Proudcts/>, 
      },

    ]
  },
]);
function App() {
  

  return (
    <>
      <RouterProvider router={router} /> 
    </>
  )
}

export default App

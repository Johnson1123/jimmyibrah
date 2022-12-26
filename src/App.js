import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

  import { Home, About, Product,NotFound } from './pages/index.js'
  import { Header, Footer } from './component/index.js';
  

export default function App() {
    const Layout = () => {
        return (
          <>
            <Header />
            <Outlet />
            <Footer />
          </>
        )
      }
    const router = createBrowserRouter([
        {
          path: "*",
          element: <NotFound />
        },
        {
          path:"/",
          element: <Layout />,
          children: [
            {
              path: "/",
              element: <Home />
            },
            {
              path: "/Materia",
              element: <Product />
            },
            {
              path: "/Contact",
              element: <Product />
            },
            {
              path: "/about",
              element: <About />
            }
          ]
        }
      ])
  return (
    <div className='app'>
    <div className='app__container'>
      <RouterProvider router={router} />
    </div>
   </div>
  )
}

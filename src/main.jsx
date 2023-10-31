import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './Components/Header.jsx'
import ResContainer from './Components/ResContainer.jsx'
import {
    createBrowserRouter,
    Outlet,
    RouterProvider,
  } from "react-router-dom";
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import Error from './Components/Error'
import Body from './Components/Body'


const App =()=>{
    return (
        <div>
          <Header />
          <Outlet />
        </div>
      )
}


const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children:[
        {
            path: "/",
            element: <Body />,
        }
        ,
        {
            path: "/about",
            element: <About />,
            
        },
        {
            path: "/contact",
            element: <Contact />,
            
        },
      ],
      errorElement: <Error/>
    },

  ]);


ReactDOM.createRoot(document.getElementById('root')).render(
        <RouterProvider router={router} />
)

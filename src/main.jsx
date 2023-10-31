import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './Components/Header.jsx'
import ResContainer from './Components/ResContainer.jsx'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'


const App =()=>{
    return (
        <div>
          <Header />
          <ResContainer />
        </div>
      )
}


const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
  ]);


ReactDOM.createRoot(document.getElementById('root')).render(
        <RouterProvider router={router} />
)

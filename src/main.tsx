import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {createHashRouter, RouterProvider} from 'react-router-dom'
import Home from './routes/home.tsx'
import Contact from './routes/contact.tsx'
import About from './routes/about.tsx'

const router = createHashRouter([
  {
  path:'/',
  element:<Home />
},
{
  path:'/about',
  element:<About />,
},
{
  path:'/contact',
  element:<Contact />,
},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    
    
  </React.StrictMode>,
)

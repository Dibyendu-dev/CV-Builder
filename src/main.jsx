import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout.jsx';
import { HomePage } from './components/pages/Homepage.jsx';
import CVpage from './components/pages/CVpage.jsx';
import Contact from './components/pages/Contactus.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <HomePage/>
      },
      {
        path: "createcv",
        element: <CVpage />
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)

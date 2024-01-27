import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.scss'
import Home from './Pages/Home/Home'
import ErrorPage from './Pages/404/404'
import Contact from './Pages/Inventory/Inventory'
import ThemeProvider from './theme/ThemeProvider'
import Market from './Pages/Market/Market'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'contacts/:contactId',
        element: <Contact />
      },
      {
        path: 'market',
        element: <Market />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)

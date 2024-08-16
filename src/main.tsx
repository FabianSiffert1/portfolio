import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.scss'
import ErrorPage from './Pages/404/404'
import Home from './Pages/Home/Home'
import Inventory from './Pages/Inventory/Inventory'
import About from './Pages/About/About'
import ThemeProvider from './util/ui/theme/ThemeProvider'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <About />,
        index: true
      },
      {
        path: 'inventory',
        element: <Inventory />
      },
      {
        path: 'about',
        element: <About />
      }
    ]
  }
])

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <ThemeProvider>
          <RouterProvider router={router} />
      </ThemeProvider>
    </React.StrictMode>
  </QueryClientProvider>
)

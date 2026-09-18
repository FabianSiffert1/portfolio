import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import './index.scss'
import ErrorPage from './Pages/404/404'
import Layout from './Pages/Layout/Layout'
import Projects from './Pages/Projects/Projects'
import About from './Pages/About/About'
import ThemeProvider from './ui/theme/ThemeProvider'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <About />
      },
      {
        path: 'projects',
        element: <Projects />
      },
      {
        path: 'about',
        element: <Navigate to='/' replace />
      },
      {
        path: '*',
        element: <ErrorPage />
      }
    ]
  }
])

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element #root not found')
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)

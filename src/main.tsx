import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
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
        element: <About />,
      },
      {
        path: 'projects',
        element: <Projects />
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

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import './styles/index.css'
import 'react-toastify/dist/ReactToastify.css'
import { toastProps } from './utils/toastContainer'
import { routeTree } from './routeTree.gen'
import { TripProvider } from './context/TripContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createRouter, RouterProvider } from '@tanstack/react-router'

const router = createRouter({ routeTree })

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <TripProvider>
        <ToastContainer {...toastProps} />
        <RouterProvider router={router} />
      </TripProvider>
    </QueryClientProvider>
  </StrictMode>
)

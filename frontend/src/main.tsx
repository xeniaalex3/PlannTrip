import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import './styles/index.css'
import 'react-toastify/dist/ReactToastify.css'
import { toastProps } from './utils/toastContainer'
import router from './routes/router'
import { TripProvider } from './context/TripContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

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

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app'
import { ToastContainer } from 'react-toastify'
import './styles/index.css'
import 'react-toastify/dist/ReactToastify.css'
import { toastProps } from './utils/toastContainer'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <ToastContainer {...toastProps} />
    <App />
  </StrictMode>,
)

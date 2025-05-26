import { type ToastContainerProps, Bounce } from 'react-toastify'

export const toastProps: ToastContainerProps = {
  position: 'bottom-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: false,
  pauseOnHover: true,
  draggable: true,
  theme: 'colored',
  transition: Bounce
}

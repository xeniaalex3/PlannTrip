import { createBrowserRouter } from 'react-router-dom'
import Root from './Root'
import TripDetails from '../pages/TripDetails/TripDetails'
import ConfirmTrip from '../pages/ConfirmTrip/ConfirmTrip'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />
  },
   {
    path: '/confirm-trip',
    element: <ConfirmTrip />
  },
  {
    path: '/trips/:tripId',
    element: <TripDetails />
  }
])

export default router

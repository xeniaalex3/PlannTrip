import { createBrowserRouter } from 'react-router-dom'
import Root from './Root'
import TripDetails from '../pages/TripDetails/TripDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
     path: '/trips/:tripId',
    element: <TripDetails />,
  }
])

export default router

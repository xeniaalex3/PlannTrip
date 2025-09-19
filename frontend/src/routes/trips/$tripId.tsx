import { createFileRoute } from '@tanstack/react-router'
import TripDetails from '../../pages/TripDetails/TripDetails'

export const Route = createFileRoute('/trips/$tripId')({
  component: TripDetails,
})

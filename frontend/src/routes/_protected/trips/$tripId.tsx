import { createFileRoute } from '@tanstack/react-router'
import TripDetails from '../../../pages/TripDetails/TripDetails'

export const Route = createFileRoute('/_protected/trips/$tripId')({
  component: TripDetails,
})

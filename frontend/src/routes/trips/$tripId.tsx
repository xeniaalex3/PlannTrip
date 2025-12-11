import { createFileRoute, redirect } from '@tanstack/react-router'
import { authApi } from '../../api/auth'
import TripDetails from '../../pages/TripDetails/TripDetails'

export const Route = createFileRoute('/trips/$tripId')({
  beforeLoad: () => {
    const token = authApi.getAccessToken()
    if (!token) {
      throw redirect({ to: '/login' })
    }
  },
  component: TripDetails,
})

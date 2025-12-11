import { createFileRoute, redirect } from '@tanstack/react-router'
import { authApi } from '../api/auth'
import ConfirmTrip from '../pages/ConfirmTrip/ConfirmTrip'

export const Route = createFileRoute('/confirm-trip')({
  beforeLoad: () => {
    const token = authApi.getAccessToken()
    if (!token) {
      throw redirect({ to: '/login' })
    }
  },
  component: ConfirmTrip,
})

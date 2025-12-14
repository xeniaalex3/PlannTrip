import { createFileRoute, redirect } from '@tanstack/react-router'
import { authApi } from '../api/auth'
import Profil from '../pages/Profil/Profil'

export const Route = createFileRoute('/profil')({
  beforeLoad: () => {
    const token = authApi.getAccessToken()
    if (!token) {
      throw redirect({ to: '/login' })
    }
  },
  component: Profil,
})

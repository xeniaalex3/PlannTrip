import { createFileRoute, redirect } from '@tanstack/react-router'
import { authApi } from '../api/auth'
import App from '../App'

export const Route = createFileRoute('/')({
  beforeLoad: () => {
    const token = authApi.getAccessToken()
    if (!token) {
      throw redirect({ to: '/login' })
    }
  },
  component: App,
})

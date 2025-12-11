import { Outlet, createFileRoute, redirect } from '@tanstack/react-router'
import { authApi } from '../api/auth'

// Authenticated layout used as parent for protected screens
const ProtectedLayout = () => {
  return <Outlet />
}

export const Route = createFileRoute('/_protected')({
  beforeLoad: () => {
    const token = authApi.getAccessToken()
    if (!token) {
      throw redirect({ to: '/login' })
    }
  },
  component: ProtectedLayout,
})

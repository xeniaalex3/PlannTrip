import { Outlet, createFileRoute, useNavigate } from '@tanstack/react-router'
import { useAuth } from '../../context/AuthContext'
import { useEffect } from 'react'

export const ProtectedLayout = () => {
  const { isAuthenticated, isLoading } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate({ to: '/login' })
    }
  }, [isLoading, isAuthenticated, navigate])

  if (isLoading) return <div>Chargement...</div>
  if (!isAuthenticated) return null

  return <Outlet />
}

export const Route = createFileRoute('/_protected/_protectedRoute')({
  component: ProtectedLayout,
})


import { useNavigate } from '@tanstack/react-router'
import Logo from '../../components/ui/Logo/Logo'
import { useAuth } from '../../context/AuthContext'
import { LogOut } from 'lucide-react'

export default function Header() {
  const { isAuthenticated, user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate({ to: '/register' })
  }

  return (
    <div className="space-y-5 w-full">
      <div className="flex items-center justify-between px-4">
        <Logo />
        {isAuthenticated && (
          <div className="flex items-center gap-4">
            <span className="text-gray-300 text-sm">
              Bem-vindo, <span className="font-semibold">{user?.firstname}</span>
            </span>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors"
              title="Logout"
            >
              <LogOut size={18} />
              <span className="text-sm">Sair</span>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}


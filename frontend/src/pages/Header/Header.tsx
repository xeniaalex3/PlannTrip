import { useNavigate } from '@tanstack/react-router'
import Logo from '../../components/ui/Logo/Logo'
import { useAuth } from '../../context/AuthContext'
import { LogOut } from 'lucide-react'
import CustomButton from '../../components/ui/Button/CustomButton/CustomButton'

export default function Header() {
  const { isAuthenticated, user, logout, isLoading } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate({ to: '/login' })
  }

  if (isLoading) return null;

  return (
    <div className="w-full">
      <div className="flex items-center justify-around">
        <Logo />
        {isAuthenticated && (
          <div className="flex items-center gap-4">
            <span className="text-gray-300 text-sm">
              Bienvenue, <span className="font-semibold">{user?.firstname} ! </span>
            </span>
            <CustomButton
              type='button'
              color='gray'
              onClick={handleLogout}
              className="flex items-center gap-2 px-3 py-0 rounded-md transition-colors"
            >
              <LogOut size={18} />
              <span className="text-sm">Déconnexion</span>
            </CustomButton>
          </div>
        )}
      </div>
    </div>
  )
}


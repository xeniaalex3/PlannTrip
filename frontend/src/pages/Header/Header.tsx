import { useLocation, useNavigate } from '@tanstack/react-router'
import Logo from '../../components/ui/Logo/Logo'
import { useAuth } from '../../context/AuthContext'
import { LogOut } from 'lucide-react'
import CustomButton from '../../components/ui/Button/CustomButton/CustomButton'
import MenuLinks from './MenuLinks/MenuLinks'
import { menuItems } from './MenuItems/MenuItems'
import { isFocusPage } from '../../utils/utils'
import { useTrip } from '../../context/TripContext'

export default function Header() {
  const { isAuthenticated, logout, isLoading } = useAuth()
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { tripId } = useTrip()

  const handleLogout = () => {
    logout()
    navigate({ to: '/login' })
  }

  // Filter menu items: only show 'Détails du voyage' if tripId exists
  const filteredMenuItems = menuItems.filter(item => 
    item.id !== 'details-voyage' || tripId
  )

  if (isLoading) return null

  return (
    <header className="w-full">
      <div className="flex items-center justify-around">
        <Logo />
        {isAuthenticated && (
          <div className="flex justify-center items-center gap-4">
            <nav className="flex flex-row justify-end items-center gap-4 md:flex xs:hidden">
              {filteredMenuItems.map(item => (
                <MenuLinks
                  key={item.name}
                  path={item.path}
                  name={item.name}
                  pathname={pathname}
                  id={item.id}
                  focus={isFocusPage(pathname, item.id)}
                />
              ))}
            </nav>
            <CustomButton
              type="button"
              color="gray"
              onClick={handleLogout}
              className="flex items-center gap-2 px-3 py-0 rounded-md transition-colors"
            >
              <LogOut size={18} />
              <span className="text-sm">Déconnexion</span>
            </CustomButton>
          </div>
        )}
      </div>
    </header>
  )
}

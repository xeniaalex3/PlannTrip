import { useLocation, useNavigate } from '@tanstack/react-router'
import Logo from '../../components/ui/Logo/Logo'
import { useAuth } from '../../context/AuthContext'
import { menuItems } from './MenuItems/MenuItems'
import { isFocusPage } from '../../utils/utils'
import { useTrip } from '../../context/TripContext'
import MenuDesktop from './MenuDesktop/MenuDesktop'
import MenuMobile from './MenuMobile/MenuMobile'

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
          <>
          <MenuDesktop filteredMenuItems={filteredMenuItems} pathname={pathname} handleLogout={handleLogout} isFocusPage={isFocusPage}/>
          <MenuMobile />
          </>
         
        )}
      </div>
    </header>
  )
}

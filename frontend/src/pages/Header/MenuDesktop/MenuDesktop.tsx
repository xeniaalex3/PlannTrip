import { LogOut } from 'lucide-react'
import CustomButton from '../../../components/ui/Button/CustomButton/CustomButton'
import MenuLinks from '../MenuLinks/MenuLinks'
import { type MenuDesktopProps } from '../../../@types/header'

export default function MenuDesktop({
  filteredMenuItems,
  pathname,
  handleLogout,
  isFocusPage
}: MenuDesktopProps) {
  return (
    <div className="flex justify-center items-center gap-4 xs:max-sm:hidden">
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
        <LogOut size={18} className="xs:max-sm:" />
        <span className="text-sm">Déconnexion</span>
      </CustomButton>
    </div>
  )
}

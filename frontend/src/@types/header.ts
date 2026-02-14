import { menuItems } from '../pages/Header/MenuItems/MenuItems'

export interface MenuLinksProps {
  path: string;
  name: string;
  id: string;
  focus: boolean;
  pathname: string;
  onClose?: () => void;
}

export interface MenuDesktopProps {
  filteredMenuItems: typeof menuItems;
  pathname: string;
  handleLogout: () => void;
  isFocusPage: (pathname: string, page: string) => boolean;
}

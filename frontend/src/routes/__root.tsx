import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import Header from '../pages/Header/Header'
import Footer from '../pages/Footer/Footer'

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col py-7">
      <Header />
      <div className="flex-1 flex items-center justify-center">
        <Outlet />
      </div>
      <Footer />
      <TanStackRouterDevtools />
    </div>
  )
}

export const Route = createRootRoute({ component: RootLayout })

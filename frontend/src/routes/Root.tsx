import Footer from '../pages/Footer/Footer'
import Header from '../pages/Header/Header'
import Home from '../pages/Home/Home'
import { TripProvider } from '../context/TripContext'

export default function App() {
  return (
    <div className="h-screen flex items-center justify-center bg-[var(--bgImage)] bg-no-repeat bg-center">
      <div className="max-w-3xl mx-auto px-6 text-center space-y-10 ">
        <Header />
        <TripProvider>
          <Home />
        </TripProvider>

        <Footer />
      </div>
    </div>
  )
}

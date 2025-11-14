import Footer from '../src/pages/Footer/Footer'
import Header from '../src/pages/Header/Header'
import Home from '../src/pages/Home/Home'

export default function App() {
  return (
    <div className="h-screen flex flex-col justify-between bg-[var(--bgImage)] bg-no-repeat bg-center py-8 text-center">
      <Header />

      <div className="flex-1 flex items-center justify-center px-6">
        <Home />
      </div>

      <Footer />
    </div>
  )
}

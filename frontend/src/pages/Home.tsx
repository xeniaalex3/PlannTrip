import { useState } from 'react'
import SearchForm from '../components/SearchForm/SearchForm'
import GuestForm from '../components/GuestForm/GuestForm'
import Logo from '../components/ui/Logo/Logo'

export default function Home() {
  const [inputOpen, setInputOpen] = useState(false)

  function openGuestInput() {
    setInputOpen(true)
  }

  return (
    <div className="max-w-3xl mx-auto px-6 text-center space-y-10 ">
      <div className="space-y-5">
        <Logo />
        <p className="text-zinc-300 text-lg">
          Invitez vos amis et planifiez votre prochain voyage !
        </p>
      </div>
      <div className="space-y-4">
        <SearchForm openGuestInput={openGuestInput} />
        {inputOpen && <GuestForm />}
      </div>

      <p className="text-zinc-500 text-sm">
        En planifiant votre voyage par l'intermédiaire de PlannTrip, vous
        acceptez automatiquement <br /> à nos{' '}
        <a href="" className="text-zinc-300 underline">
          conditions générales d'utilisation
        </a>{' '}
        et à notre{' '}
        <a href="" className="text-zinc-300 underline">
          politique de confidentialité
        </a>
        .
      </p>
    </div>
  )
}

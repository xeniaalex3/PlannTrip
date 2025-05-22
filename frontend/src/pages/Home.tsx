import { useState } from 'react'
import SearchForm from '../components/SearchForm/SearchForm'
import GuestForm from '../components/GuestForm/GuestForm'
import Logo from '../components/ui/Logo/Logo'
import ModalWrapper from '../components/ui/ModalWrapper/ModalWrapper'

export default function Home() {
  const [inputOpen, setInputOpen] = useState(false)
  const [guestModalOpen, setGuestModalOpen] = useState(false)

  const openGuestInput = () => setInputOpen(true)
  const closeGuestInput = () => setInputOpen(false)
  const openGuestModal = () => setGuestModalOpen(true)
  const closeGuestModal = () => setGuestModalOpen(false)

  return (
    <div className="max-w-3xl mx-auto px-6 text-center space-y-10 ">
      <div className="space-y-5">
        <Logo />
        <p className="text-zinc-300 text-lg">
          Invitez vos amis et planifiez votre prochain voyage !
        </p>
      </div>
      <div className="space-y-4">
        <SearchForm
          openGuestInput={openGuestInput}
          inputOpen={inputOpen}
          closeGuestInput={closeGuestInput}
        />
        {inputOpen && <GuestForm openGuestModal={openGuestModal} />}
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
      {guestModalOpen && (
        <ModalWrapper closeGuestModal={closeGuestModal}>
          <div className="flex flex-col items-start py-5">
            <h2 className='text-zinc-200'>Sélectionner les invités</h2>
            <p className="text-zinc-400 text-sm">
              Les invités recevront un courrier électronique confirmant leur
              participation au voyage.
            </p>
          </div>
        </ModalWrapper>
      )}
    </div>
  )
}

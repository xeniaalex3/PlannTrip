import { useState } from 'react'
import SearchForm from '../components/SearchForm/SearchForm'
import GuestForm from '../components/GuestForm/GuestForm'
import Logo from '../components/ui/Logo/Logo'
import ModalWrapper from '../components/ui/ModalWrapper/ModalWrapper'
import { X } from 'lucide-react'

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
          <div className="py-5">
            <div className="space-y-2 flex flex-col items-start">
              <h2 className="text-zinc-200 text-lg font-semibold">
                Sélectionner les invités
              </h2>
              <p className="text-zinc-400 text-sm">
                Les invités recevront un courrier électronique confirmant leur
                participation au voyage.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 my-5">
              <div className="py-1.5 px-2.5 rounded-md bg-zinc-700 flex items-center gap-2">
                <span className='text-zinc-300'>jessica.white44@yahoo.com</span>
                <button type='button'>
                  <X className='size-4 text-zinc-400'/>
                </button>
              </div>
             <div className='w-full h-px bg-zinc-700 space-y-2'/>
              
            </div>
          </div>
        </ModalWrapper>
      )}
    </div>
  )
}

import { useState } from 'react'
import SearchForm from '../../components/SearchForm/SearchForm'
import GuestForm from '../../components/GuestForm/GuestForm'
import ModalGuestInvite from '../../components/ModalGuestInvite/ModalGuestInvite'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import ModalConfirmationTrip from '../../components/ModalConfirmationTrip/ModalConfirmationTrip'

export default function Home() {
  const [inputOpen, setInputOpen] = useState(false)
  const [guestModalOpen, setGuestModalOpen] = useState(false)
  const [modalConfirmation, setModalConfirmation] = useState(false);
  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([])

  const openGuestInput = () => setInputOpen(true)
  const closeGuestInput = () => setInputOpen(false)
  const openGuestModal = () => setGuestModalOpen(true)
  const closeGuestModal = () => setGuestModalOpen(false)
  const openGuestModalConfirmation = () => setModalConfirmation(true);
  const closeModalConfirmation = () => setModalConfirmation(false);

  return (
    <div className="max-w-3xl mx-auto px-6 text-center space-y-10 ">
      <Header />
      <div className="space-y-4">
        <SearchForm
          openGuestInput={openGuestInput}
          inputOpen={inputOpen}
          closeGuestInput={closeGuestInput}
        />
        {inputOpen && <GuestForm 
        openGuestModal={openGuestModal} 
        guestsCount={emailsToInvite.length} 
        openGuestModalConfirmation={openGuestModalConfirmation}
        />}
      </div>
      <Footer />

      {guestModalOpen && (
        <ModalGuestInvite
          closeGuestModal={closeGuestModal}
          emailsToInvite={emailsToInvite}
          setEmailsToInvite={setEmailsToInvite}
        />
      )}

      {modalConfirmation && (
        <ModalConfirmationTrip 
        closeModalConfirmation={closeModalConfirmation}
        />
      )}
    </div>
  )
}

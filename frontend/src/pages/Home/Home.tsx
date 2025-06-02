import { useState } from 'react'
import SearchForm from '../../components/steps/SearchForm/SearchForm'
import GuestForm from '../../components/steps/GuestForm/GuestForm'
import InviteGuestModal from '../../components/InviteGuestModal/InviteGuestModal'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import ConfirmTripModal from '../../components/ConfirmTripModal/ConfirmTripModal'

export default function Home() {
  const [inputOpen, setInputOpen] = useState(false)
  const [guestModalOpen, setGuestModalOpen] = useState(false)
  const [confirmModal, setConfirmModal] = useState(false)
  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([])

  const openGuestInput = () => setInputOpen(true)
  const closeGuestInput = () => setInputOpen(false)
  const openGuestModal = () => setGuestModalOpen(true)
  const closeGuestModal = () => setGuestModalOpen(false)
  const openGuestModalConfirmation = () => setConfirmModal(true)
  const closeModalConfirmation = () => setConfirmModal(false)

  return (
    <div className="max-w-3xl mx-auto px-6 text-center space-y-10 ">
      <Header />
      <div className="space-y-4">
        <SearchForm
          openGuestInput={openGuestInput}
          inputOpen={inputOpen}
          closeGuestInput={closeGuestInput}
        />
        {inputOpen && (
          <GuestForm
            openGuestModal={openGuestModal}
            guestsCount={emailsToInvite.length}
            openGuestModalConfirmation={openGuestModalConfirmation}
          />
        )}
      </div>
      <Footer />

      {guestModalOpen && (
        <InviteGuestModal
          closeGuestModal={closeGuestModal}
          emailsToInvite={emailsToInvite}
          setEmailsToInvite={setEmailsToInvite}
        />
      )}

      {confirmModal && (
        <ConfirmTripModal closeModalConfirmation={closeModalConfirmation} />
      )}
    </div>
  )
}

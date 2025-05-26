import { useState, type FormEvent } from 'react'
import SearchForm from '../components/SearchForm/SearchForm'
import GuestForm from '../components/GuestForm/GuestForm'
import Logo from '../components/ui/Logo/Logo'
import ModalWrapper from '../components/ui/ModalWrapper/ModalWrapper'
import { X, AtSign, Plus } from 'lucide-react'
import InputWrapper from '../components/form/InputWrapper/InputWrapper'
import CustomButton from '../components/ui/CustomButton/CustomButton'

export default function Home() {
  const [inputOpen, setInputOpen] = useState(false)
  const [guestModalOpen, setGuestModalOpen] = useState(false)
  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([])

  const openGuestInput = () => setInputOpen(true)
  const closeGuestInput = () => setInputOpen(false)
  const openGuestModal = () => setGuestModalOpen(true)
  const closeGuestModal = () => setGuestModalOpen(false)

  function handleAddNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const email = data.get('email')?.toString()

    if (!email) {
      return
    }

    if(emailsToInvite.includes(email)){
      return
    }

    setEmailsToInvite([...emailsToInvite, email])

    event.currentTarget.reset();
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
          <div>
            <div className="space-y-2 flex flex-col items-start">
              <h2 className="text-zinc-200 text-lg font-semibold">
                Sélectionner les invités
              </h2>
              <p className="text-zinc-400 text-sm">
                Les invités recevront un courrier électronique confirmant leur
                participation au voyage.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 my-4">
              {emailsToInvite.map(email => {
                return (
                  <div
                    key={email}
                    className="py-1.5 px-2.5 rounded-md bg-zinc-700 flex items-center gap-2"
                  >
                    <span className="text-zinc-300">{email}</span>
                    <button type="button">
                      <X className="size-4 text-zinc-400" />
                    </button>
                  </div>
                )
              })}
            </div>
            <div className="w-full h-px bg-zinc-700 mb-3" />
            <form
              action=""
              className="bg-zinc-950 h-14 w-[592px] flex justify-baseline items-center px-2 rounded-lg"
              onSubmit={handleAddNewEmailToInvite}
            >
              <div className="flex items-center gap-2 flex-1">
                <AtSign className="text-zinc-400 size-5" />
                <InputWrapper
                  type="email"
                  name="email"
                  placeholder="Saisir l'adresse e-mail de l'invité"
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none w-90"
                />
              </div>
              <CustomButton type="submit" onClick={openGuestInput}>
                Inviter
                <Plus className="size-5 text-lime-950" />
              </CustomButton>
            </form>
          </div>
        </ModalWrapper>
      )}
    </div>
  )
}

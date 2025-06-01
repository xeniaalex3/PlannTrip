import { type Dispatch, type FormEvent } from 'react'
import ModalWrapper from '../ui/ModalWrapper/ModalWrapper'
import { X, AtSign, Plus } from 'lucide-react'
import InputWrapper from '../form/InputWrapper/InputWrapper'
import CustomButton from '../ui/CustomButton/CustomButton'
import { toast } from 'react-toastify'

interface InviteGuestModalProps {
  closeGuestModal: () => void
  emailsToInvite: string[]
  setEmailsToInvite: Dispatch<React.SetStateAction<string[]>>
}

export default function InviteGuestModal({
  closeGuestModal,
  emailsToInvite,
  setEmailsToInvite
}: InviteGuestModalProps) {
  
  function handleAddNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const email = data.get('email')?.toString()

    if (!email) {
      return
    }

    if (emailsToInvite.includes(email)) {
      toast.error('Cet e-mail est déjà dans la liste des invités.')
      return
    }

    setEmailsToInvite([...emailsToInvite, email])

    event.currentTarget.reset()
  }

  function removeEmailsFromInvites(emailToRemove: string) {
    const newEmailList = emailsToInvite.filter(email => email !== emailToRemove)

    setEmailsToInvite(newEmailList)
  }

  return (
    <ModalWrapper onClick={closeGuestModal}>
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
                  <X
                    className="size-4 text-zinc-400 cursor-pointer"
                    onClick={() => removeEmailsFromInvites(email)}
                  />
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
          <CustomButton type="submit">
            Inviter
            <Plus className="size-5 text-lime-950" />
          </CustomButton>
        </form>
      </div>
    </ModalWrapper>
  )
}

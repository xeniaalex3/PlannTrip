import { useState, type FormEvent } from 'react'
import ModalWrapper from '../../../../components/ui/ModalWrapper/ModalWrapper'
import InputWrapper from '../../../../components/ui/form/InputWrapper/InputWrapper'
import CustomButton from '../../../../components/ui/CustomButton/CustomButton'
import { User, Mail } from 'lucide-react'
import { type CreateGuestModalProps } from '../../../../@types/tripDetails'

export default function CreateGuestModal({
  handleCloseGuestModal,
  onCreateGuest
}: CreateGuestModalProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  function handleSubmitCreateNewGuest(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!name || !email) return

    const id = Date.now()

    const newGuest = {
      id,
      name,
      email,
      done: false
    }

    onCreateGuest(newGuest)

    e.currentTarget.reset()
    handleCloseGuestModal()
  }

  return (
    <ModalWrapper onClick={handleCloseGuestModal}>
      <div className="space-y-2 flex flex-col items-start">
        <h2 className="text-zinc-200 text-lg font-semibold">
          Confirmer la participation
        </h2>
        <div className="space-y-6">
          <p className="text-zinc-400 text-sm text-left">
            Vous avez été invité à participer à un voyage à{' '}
            <span className="text-zinc-100 font-semibold">Florianópolis</span> ,
            au <span className="text-zinc-100 font-semibold">Brésil</span> ,
            <br></br> du{' '}
            <span className="text-zinc-100 font-semibold">
              16 au 27 août 2024
            </span>
            .
          </p>
          <p className="text-zinc-400 text-sm text-left">
            Pour confirmer votre présence au voyage, remplissez le formulaire
            ci-dessous :
          </p>
        </div>
      </div>
      <form
        action=""
        className="flex flex-col items-center  mt-4 space-y-3"
        onSubmit={handleSubmitCreateNewGuest}
      >
        <div className="flex items-center gap-2 bg-zinc-950 h-14 w-full px-2 rounded-lg">
          <User className="text-zinc-400 size-5" />
          <InputWrapper
            type="text"
            name="name"
            placeholder="Votre nom complet"
            className="bg-transparent text-lg placeholder-zinc-400 outline-none w-90"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 bg-zinc-950 h-14 w-full px-2 rounded-lg">
          <Mail className="text-zinc-400 size-5" />
          <InputWrapper
            type="text"
            name="email"
            placeholder="Votre e-mail"
            className="bg-transparent text-lg placeholder-zinc-400 outline-none w-90"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <CustomButton type="submit" fullWidth>
          Confirmer ma présence
        </CustomButton>
      </form>
    </ModalWrapper>
  )
}

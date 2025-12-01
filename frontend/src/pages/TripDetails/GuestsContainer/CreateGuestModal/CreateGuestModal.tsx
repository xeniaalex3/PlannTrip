import { useState, type FormEvent } from 'react'
import ModalWrapper from '../../../../components/ui/ModalWrapper/ModalWrapper'
import InputWrapper from '../../../../components/ui/form/InputWrapper/InputWrapper'
import CustomButton from '../../../../components/ui/Button/CustomButton/CustomButton'
import { User, Mail } from 'lucide-react'
import { type CreateGuestModalProps } from '../../../../@types/tripDetails'
import { useCreateParticipant } from '../../../../api/hooks/guests/mutations'
import { toast } from 'react-toastify'
import { useTripId } from '../../../../api/hooks/trips/queries'
import { formatDateRange } from '../../../../utils/date'

export default function CreateGuestModal({
  handleCloseGuestModal,
  trip
}: CreateGuestModalProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const createGuest = useCreateParticipant()
  const tripId = useTripId()

  const formattedDates = formatDateRange(
    { from: new Date(trip.starts_at), to: new Date(trip.ends_at) },
    ' au '
  )

  function isValidEmail(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
  }

  async function handleSubmitCreateNewGuest(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!name || !email) {
      toast.error('Veuillez remplir tous les champs.')
      return
    }

    if (!isValidEmail(email)) {
      toast.error('Veuillez saisir une adresse e-mail valide.')
      return
    }

    if (!tripId) {
      toast.error('ID du voyage manquant.')
      return
    }

    try {
      setIsLoading(true)
      await createGuest.mutateAsync({
        name,
        email,
        trip_id: Number(tripId),
        is_confirmed: true,
        is_owner: false
      })

      toast.success('Participant ajouté avec succès !')

      setName('')
      setEmail('')

      handleCloseGuestModal()
    } catch (error) {
      console.error(error)
      toast.error('Erreur lors de la création du participant.')
    } finally {
      setIsLoading(false)
    }
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
            <span className="text-zinc-100 font-semibold">{trip.destination}</span> ,
            du{' '}
            <span className="text-zinc-100 font-semibold">
              {formattedDates}
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
        className="flex flex-col items-center mt-4 space-y-3"
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
        <CustomButton 
        type="submit" 
        fullWidth
        isLoading={isLoading}
        message="Confirmation en cours..."
        >
          Confirmer ma présence
        </CustomButton>
      </form>
    </ModalWrapper>
  )
}

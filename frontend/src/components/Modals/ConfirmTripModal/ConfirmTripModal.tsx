import { type FormEvent } from 'react'
import ModalWrapper from '../../ui/ModalWrapper/ModalWrapper'
import { User, Mail } from 'lucide-react'
import InputWrapper from '../../ui/form/InputWrapper/InputWrapper'
import CustomButton from '../../ui/Button/CustomButton/CustomButton'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router'
import { formatDateRange } from '../../../utils/date'
import { useTrip } from '../../../context/TripContext'
import { useCreateTrip } from '../../../api/hooks/trips/mutations'

interface ConfirmTripModalProps {
  closeModalConfirmation: () => void
  emailsToInvite: string[]
}

export default function ConfirmTripModal({
  closeModalConfirmation,
  emailsToInvite
}: ConfirmTripModalProps) {
  const navigate = useNavigate()
  const { tripLocation, eventStartAndEndDates } = useTrip()
  const createTrip = useCreateTrip()

  const formattedDates = formatDateRange(eventStartAndEndDates, ' au ')

  async function handleSubmitConfirmationTrip(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = formData.get('name') as string
    const email = formData.get('email') as string

    if (!name || !email) {
      toast.error('Veuillez remplir tous les champs.')
      return
    }

    if (
      !eventStartAndEndDates ||
      !eventStartAndEndDates.from ||
      !eventStartAndEndDates.to
    ) {
      toast.error('Les dates du voyage ne sont pas définies.')
      return
    }

    try {
      const response = await createTrip.mutateAsync({
        destination: tripLocation,
        starts_at: eventStartAndEndDates.from.toISOString(),
        ends_at: eventStartAndEndDates.to?.toISOString(),
        is_confirmed: true,
        participants: [
          {
            name,
            email,
            is_owner: true
          },
          ...emailsToInvite.map(guestEmail => ({
            name: '',
            email: guestEmail,
            is_owner: false
          }))
        ]
      })

      const tripId = response.data.id

      toast.success('Voyage créé avec succès !')
      closeModalConfirmation()
      navigate('/confirm-trip', { state: { tripId } })
    } catch (error) {
      console.error(error)
      toast.error('Erreur lors de la création du voyage.')
    }
  }

  return (
    <ModalWrapper onClick={closeModalConfirmation}>
      <div className="space-y-2 flex flex-col items-start">
        <h2 className="text-zinc-200 text-lg font-semibold">
          Confirmer la création du voyage
        </h2>
        <p className="text-zinc-400 text-sm text-left">
          Pour réaliser votre voyage à{' '}
          <span className="font-semibold text-zinc-100">{tripLocation}</span> ,
          du{' '}
          <span className="font-semibold text-zinc-100">{formattedDates}</span>,
          remplissez vos coordonnées ci-dessous :
        </p>
      </div>
      <form
        action=""
        className="flex flex-col items-center  mt-4 space-y-3"
        onSubmit={handleSubmitConfirmationTrip}
      >
        <div className="flex items-center gap-2 bg-zinc-950 h-14 w-full px-2 rounded-lg">
          <User className="text-zinc-400 size-5" />
          <InputWrapper
            type="text"
            name="name"
            placeholder="Votre nom complet"
            className="bg-transparent text-lg placeholder-zinc-400 outline-none w-90"
          />
        </div>
        <div className="flex items-center gap-2 bg-zinc-950 h-14 w-full px-2 rounded-lg">
          <Mail className="text-zinc-400 size-5" />
          <InputWrapper
            type="email"
            name="email"
            placeholder="Votre e-mail personnel"
            className="bg-transparent text-lg placeholder-zinc-400 outline-none w-90"
          />
        </div>
        <CustomButton type="submit" fullWidth>
          Confirmer la création du voyage
        </CustomButton>
      </form>
    </ModalWrapper>
  )
}
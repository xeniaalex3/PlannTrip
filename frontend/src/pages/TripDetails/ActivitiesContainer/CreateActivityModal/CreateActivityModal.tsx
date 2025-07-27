import { useState, type FormEvent, useEffect} from 'react'
import { Calendar, Clock, Tag } from 'lucide-react'
import ModalWrapper from '../../../../components/ui/ModalWrapper/ModalWrapper'
import InputWrapper from '../../../../components/ui/form/InputWrapper/InputWrapper'
import CustomButton from '../../../../components/ui/Button/CustomButton/CustomButton'
import { type CreateActivityModalProps } from '../../../../@types/tripDetails'
import DatePicker from '../../../../components/ui/DatePicket/DatePicket'
import { useCreateActivity } from '../../../../api/hooks/activities/mutations'
import { useTripId } from '../../../../api/hooks/trips/queries'
import { toast } from 'react-toastify'
import { formatSingleDate } from '../../../../utils/date'

export default function CreateActivityModal({
  handleCloseActivityModal,
  eventStartDate,
  setEventStartDate
}: CreateActivityModalProps) {
  const [title, setTitle] = useState('')
 const [occurs, setOccurs] = useState<Date | undefined>(undefined)
  const [time, setTime] = useState('')
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const createActivity = useCreateActivity()
  const tripId = useTripId()

  useEffect(() => {
  if (eventStartDate) {
    setOccurs(eventStartDate)
  }
}, [eventStartDate])

  function openDatePicker() {
    setIsDatePickerOpen(true)
  }

  function closeDatePicker() {
    setIsDatePickerOpen(false)
  }

  async function handleSubmitCreateNewActivity(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!time || !occurs) {
      toast.error('Veuillez remplir tous les champs.')
      return
    }

    try {
      setIsLoading(true)

      await createActivity.mutateAsync({
        title,
        time,
        occurs_at: occurs,
        trip_id: Number(tripId)
      })
      toast.success("L'activité a été ajoutée avec succès !")

      setTime('')
      setTitle('')
      setOccurs(undefined)
      setEventStartDate(undefined)
      handleCloseActivityModal()
    } catch (error) {
      console.error(error)
      toast.error('Une erreur est survenue lors de la création de l’activité.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <ModalWrapper onClick={handleCloseActivityModal}>
      <div className="space-y-2 flex flex-col items-start">
        <h2 className="text-zinc-200 text-lg font-semibold">
          Enregistrer l'activité
        </h2>
        <p className="text-zinc-400 text-sm text-left">
          Tous les invités peuvent voir les activités.
        </p>
      </div>
      <form
        action=""
        className="flex flex-col items-center  mt-4 space-y-3"
        onSubmit={handleSubmitCreateNewActivity}
      >
        <div className="flex items-center gap-2 bg-zinc-950 h-14 w-full px-3 rounded-lg">
          <Tag className="text-zinc-400 size-5" />
          <InputWrapper
            type="text"
            name="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Quelle est l'activité ?"
            className="bg-transparent text-lg placeholder-zinc-400 outline-none w-90"
          />
        </div>
        <div className="flex items-center gap-2 w-full">
          <button
            className="flex items-center gap-2 bg-zinc-950 h-14 px-3 rounded-lg flex-2"
            onClick={openDatePicker}
          >
            <Calendar className="text-zinc-400 size-5" />
            <InputWrapper
              type="text"
              name="date"
              value={occurs ? formatSingleDate(occurs) : ''}
            onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
              readOnly
              placeholder="Date"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none"
            />
          </button>
          {isDatePickerOpen && (
            <DatePicker
              eventStartDate={eventStartDate}
              setEventStartDate={setEventStartDate}
              closeDatePicker={closeDatePicker}
              mode="single"
            />
          )}
          <div className="flex items-center gap-2 bg-zinc-950 h-14 px-3 rounded-lg flex-1">
            <Clock className="text-zinc-400 size-5" />
            <InputWrapper
              type="time"
              name="time"
              value={time}
              onChange={e => setTime(e.target.value)}
              placeholder="Horaire"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none"
            />
          </div>
        </div>

        <CustomButton
          type="submit"
          fullWidth
          isLoading={isLoading}
          message="Ajout de l'activité..."
        >
          Enregistrer l'activité
        </CustomButton>
      </form>
    </ModalWrapper>
  )
}

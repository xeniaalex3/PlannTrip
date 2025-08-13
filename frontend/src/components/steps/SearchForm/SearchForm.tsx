import { useState } from 'react'
import InputWrapper from '../../ui/form/InputWrapper/InputWrapper'
import CustomButton from '../../ui/Button/CustomButton/CustomButton'
import { MapIcon, Calendar, ArrowRight, Settings2 } from 'lucide-react'
import DatePicker from '../../ui/DatePicket/DatePicket'
import { useTrip } from '../../../context/TripContext'
import { formatDateRange } from '../../../utils/date'

export interface SearchFormProps {
  openGuestInput: () => void
  closeGuestInput: () => void
  inputOpen: boolean
}

export default function SearchForm({
  openGuestInput,
  inputOpen,
  closeGuestInput
}: SearchFormProps) {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)
  const {
    setEventStartAndEndDates,
    setTripLocation,
    eventStartAndEndDates,
    tripLocation
  } = useTrip()

  function openDatePicker() {
    setIsDatePickerOpen(true)
  }

  function closeDatePicker() {
    setIsDatePickerOpen(false)
  }

  const displayedDate = formatDateRange(eventStartAndEndDates)

  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center w-[42rem] shadow-[var(--shadow)] gap-3 xs:max-sm:flex-col xs:max-sm:h-46 xs:max-sm:w-[23rem] xs:max-sm:items-start xs:max-sm:space-y-1">
      <div className="flex items-center gap-2 flex-1">
        <MapIcon className="text-zinc-400 size-5" />
        <InputWrapper
          type="text"
          placeholder="Où allez-vous?"
          className="bg-transparent text-lg placeholder-zinc-400 outline-none"
          disabled={inputOpen}
          onChange={e => setTripLocation(e.target.value)}
          value={tripLocation}
        />
      </div>

      <button className="flex items-center gap-2" onClick={openDatePicker}>
        <Calendar className="text-zinc-400 size-5" />
        <InputWrapper
          type="text"
          placeholder="Quand?"
          className={`bg-transparent outline-none w-24 placeholder-zinc-400 text-lg ${
            displayedDate ? 'text-sm text-zinc-300 w-[178px]' : ''
          }`}
          disabled={inputOpen}
          value={displayedDate ?? undefined}
          readOnly
        />
      </button>
      {isDatePickerOpen && (
        <DatePicker
          eventStartAndEndDates={eventStartAndEndDates}
          setEventStartAndEndDates={setEventStartAndEndDates}
          closeDatePicker={closeDatePicker}
          mode="range"
        />
      )}
      <div className="w-px h-6 bg-zinc-600 xs:max-sm:hidden" />
      {inputOpen ? (
        <CustomButton type="button" color="gray" onClick={closeGuestInput} className="xs:max-sm:mb-2">
          Modifier lieu/date
          <Settings2 className="size-5 text-zinc-200" />
        </CustomButton>
      ) : (
        <CustomButton type="submit" onClick={openGuestInput} className="xs:max-sm:mb-4 xs:max-sm:w-full">
          Continuer
          <ArrowRight className="size-5 text-lime-950" />
        </CustomButton>
      )}
    </div>
  )
}

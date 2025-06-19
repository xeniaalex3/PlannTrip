import { useState } from 'react'
import InputWrapper from '../../ui/form/InputWrapper/InputWrapper'
import CustomButton from '../../ui/Button/CustomButton/CustomButton'
import { MapIcon, Calendar, ArrowRight, Settings2 } from 'lucide-react'
import { type DateRange } from 'react-day-picker'
import DatePicker from '../../ui/DatePicket/DatePicket'
import { format } from 'date-fns'

export interface SearchFormProps {
  openGuestInput: () => void
  closeGuestInput: () => void
  inputOpen: boolean
  setEventStartAndEndDates: (dates: DateRange | undefined) => void
  eventStartAndEndDates: DateRange | undefined
}

export default function SearchForm({
  openGuestInput,
  inputOpen,
  closeGuestInput,
  setEventStartAndEndDates,
  eventStartAndEndDates
}: SearchFormProps) {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)

  function openDatePicker() {
    setIsDatePickerOpen(true)
  }

  function closeDatePicker() {
    setIsDatePickerOpen(false)
  }

  const displayedDate =
    eventStartAndEndDates?.from && eventStartAndEndDates?.to
      ? `${format(eventStartAndEndDates.from, 'dd/MM/yyyy')} - ${format(
          eventStartAndEndDates.to,
          'dd/MM/yyyy'
        )}`
      : null

  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center w-[42rem] shadow-[var(--shadow)] gap-3">
      <div className="flex items-center gap-2 flex-1">
        <MapIcon className="text-zinc-400 size-5" />
        <InputWrapper
          type="text"
          placeholder="Où allez-vous?"
          className="bg-transparent text-lg placeholder-zinc-400 outline-none"
          disabled={inputOpen}
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
      <div className="w-px h-6 bg-zinc-600" />
      {inputOpen ? (
        <CustomButton type="button" color="gray" onClick={closeGuestInput}>
          Modifier lieu/date
          <Settings2 className="size-5 text-zinc-200" />
        </CustomButton>
      ) : (
        <CustomButton type="submit" onClick={openGuestInput}>
          Continuer
          <ArrowRight className="size-5 text-lime-950" />
        </CustomButton>
      )}
    </div>
  )
}

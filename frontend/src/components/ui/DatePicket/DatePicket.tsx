import { X } from 'lucide-react'
import { DayPicker, type DateRange } from 'react-day-picker'
import { fr } from "react-day-picker/locale";
import 'react-day-picker/dist/style.css'

interface DatePickerProps {
  setEventStartAndEndDates?: (dates: DateRange | undefined) => void
  eventStartAndEndDates?: DateRange | undefined
  closeDatePicker: () => void
  mode: 'single' | 'range';
  eventStartDate?: Date | undefined;
  setEventStartDate?: (date: Date | undefined) => void;
}

export default function DatePicker({
  eventStartAndEndDates,
  setEventStartAndEndDates,
  closeDatePicker,
  mode,
  eventStartDate,
  setEventStartDate
}: DatePickerProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="font-lg font-semibold">Selecione a data</h2>
            <button>
              <X className="size-5 text-zinc-400" onClick={closeDatePicker} />
            </button>
          </div>
        </div>

        {mode === 'range' ? (
          <DayPicker
            mode="range"
            selected={eventStartAndEndDates}
            onSelect={setEventStartAndEndDates}
            required
            locale={fr}
          />
        ) : (
          <DayPicker
            mode="single"
            selected={eventStartDate}
            onSelect={setEventStartDate}
            locale={fr}
          />
        )}
      </div>
    </div>
  )
}

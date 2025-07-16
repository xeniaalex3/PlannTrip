import { Calendar, MapPin, Settings2 } from 'lucide-react'
import CustomButton from '../../../components/ui/Button/CustomButton/CustomButton'
import { useTrip } from '../../../context/TripContext'
import { formatDateRange } from '../../../utils/date'

export default function DestinationDateHeader() {
  const { tripLocation, eventStartAndEndDates } = useTrip()
  const formattedDates = formatDateRange(eventStartAndEndDates, ' au ')

  return (
    <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-[var(--shadow)] flex items-center justify-between">
      <div className="flex items-center gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <span className="text-lg text-zinc-100">{tripLocation}</span>
      </div>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <Calendar className="size-5 text-zinc-400" />
          <span className="text-lg text-zinc-200">{formattedDates}</span>
        </div>
        <div className="w-px h-6 bg-zinc-600" />

        <CustomButton type="button" color="gray">
          Modifier lieu/date
          <Settings2 className="size-5 text-zinc-200" />
        </CustomButton>
      </div>
    </div>
  )
}

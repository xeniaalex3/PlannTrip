import { Calendar, MapPin, Settings2 } from 'lucide-react'
import CustomButton from '../../../components/ui/Button/CustomButton/CustomButton'
import { formatDateRange } from '../../../utils/date'
import { type Trip } from '../../../@types/trips'

interface DestinationDateHeaderProps {
  trip: Trip
}

export default function DestinationDateHeader({
  trip
}: DestinationDateHeaderProps) {
  
  const formattedDates = formatDateRange(
    { from: new Date(trip.starts_at), to: new Date(trip.ends_at) },
    ' au '
  )

  return (
    <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-[var(--shadow)] flex items-center justify-between xs:max-sm:flex-col xs:max-sm:items-start xs:max-sm:h-44 xs:max-sm:py-4 sm:max-md:flex-col sm:max-md:items-start sm:max-md:h-44 sm:max-md:py-4 ">
      <div className="flex items-center gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <span className="text-lg text-zinc-100">{trip.destination}</span>
      </div>
      <div className="flex items-center gap-5 xs:max-sm:flex-col xs:max-sm:items-start sm:max-md:flex-col sm:max-md:items-start">
        <div className="flex items-center gap-2">
          <Calendar className="size-5 text-zinc-400" />
          <span className="text-lg text-zinc-200">{formattedDates}</span>
        </div>
        <div className="w-px h-6 bg-zinc-600 xs:max-sm:hidden sm:max-md:hidden" />

        <CustomButton type="button" color="gray">
          Modifier lieu/date
          <Settings2 className="size-5 text-zinc-200" />
        </CustomButton>
      </div>
    </div>
  )
}

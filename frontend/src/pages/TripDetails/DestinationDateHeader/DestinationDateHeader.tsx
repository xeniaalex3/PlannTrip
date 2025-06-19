import { Calendar, MapPin } from 'lucide-react'
import ModifButton from '../../../components/ui/Button/ModifButton/ModifButton'

export default function DestinationDateHeader() {
  return (
    <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-[var(--shadow)] flex items-center justify-between">
      <div className="flex items-center gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <span className="text-lg text-zinc-100">Florianopolis, Brasil</span>
      </div>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <Calendar className="size-5 text-zinc-400" />
          <span className="text-lg text-zinc-200">17 à 23 de Agosto</span>
        </div>
        <div className="w-px h-6 bg-zinc-600" />
        <ModifButton text="Modifier lieu/date" />
      </div>
    </div>
  )
}

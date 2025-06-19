import { CircleCheck, CircleDashed } from 'lucide-react'
import { type GuestsContentProps } from '../../../../@types/tripDetails'

export default function GuestsContent({
  guests,
  onToggleDone
}: GuestsContentProps) {
  return (
    <div className="space-y-4">
      {guests.map(guest => (
        <div className="flex justify-between items-center" key={guest.id}>
          <div>
            <h4 className="text-zinc-100">{guest.name}</h4>
            <p className="text-zinc-400 text-sm">{guest.email}</p>
          </div>
          <button onClick={() => onToggleDone(guest.id)}>
            {guest.done ? (
              <CircleCheck className="size-5 text-lime-300" />
            ) : (
              <CircleDashed className="size-5 text-zinc-400" />
            )}
          </button>
        </div>
      ))}
    </div>
  )
}

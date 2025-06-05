import { CircleCheck, CircleDashed } from 'lucide-react'
import { type ActivityContentProps } from '../../../../@types/tripDetails'

export default function ActivityContent({
  dayLabel,
  weekDay,
  activities
}: ActivityContentProps) {
  return (
    <div className="space-y-2.5">
      <div className="flex gap-2 items-baseline">
        <span className="text-zinc-300 font-semibold text-xl">
          Jour {dayLabel}
        </span>
        <span className="text-zinc-500 text-xs">{weekDay}</span>
      </div>
      <div className="space-y-2.5">
        {activities.length === 0 ? (
          <p className="text-zinc-500 text-sm">
            Aucune activité enregistrée à cette date.
          </p>
        ) : (
          activities.map((activity, index) => (
            <div
              key={index}
              className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-[var(--shadow)] flex items-center gap-3"
            >
              {activity.done ? (
                <CircleCheck className="size-5 text-lime-300" />
              ) : (
                <CircleDashed className="size-5 text-zinc-400" />
              )}
              <span className="text-zinc-100">{activity.title}</span>
              <span className="text-zinc-400 text-sm ml-auto">
                {activity.time}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

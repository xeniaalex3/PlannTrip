import { CircleCheck, CircleDashed } from 'lucide-react'
import { type ActivityContentProps } from '../../../../@types/tripDetails'
import { type Activities } from '../../../../@types/activities'
import { formatSingleDate } from '../../../../utils/date'

function groupActivitiesByDate(activities: Activities[]) {
  return activities.reduce<Record<string, Activities[]>>((acc, activity) => {
    const dateKey = new Date(activity.occurs_at).toISOString().split('T')[0] // 'YYYY-MM-DD'
    if (!acc[dateKey]) {
      acc[dateKey] = []
    }
    acc[dateKey].push(activity)
    return acc
  }, {})
}

export default function ActivityContent({
  activities,
  onToggleDone,
}: ActivityContentProps) {
  if (activities.length === 0) {
    return (
      <p className="text-zinc-500 text-sm">
        Aucune activité enregistrée pour le moment.
      </p>
    )
  }

  const grouped = groupActivitiesByDate(activities)

  return (
    <div className="flex flex-col gap-12">
      {Object.entries(grouped).map(([dateKey, activitiesOnDate]) => (
        <div key={dateKey} className="space-y-3">
          <h3 className="text-zinc-300 font-semibold text-xl xs:max-sm:text-base">
            Jour{' '}
            <span className="text-lg text-zinc-400 ml-2 xs:max-sm:text-base">
              {formatSingleDate(new Date(dateKey))}
            </span>
          </h3>

          {activitiesOnDate.map((activity) => (
            <div
              key={activity.id}
              className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-[var(--shadow)] flex items-center gap-3"
            >
              <button onClick={() => onToggleDone(activity.id)}>
                {activity.done ? (
                  <CircleCheck className="size-5 text-lime-300" />
                ) : (
                  <CircleDashed className="size-5 text-zinc-400" />
                )}
              </button>

              <span className="text-zinc-100">{activity.title}</span>

              <span className="text-zinc-400 text-sm ml-auto">
                {activity.time}
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

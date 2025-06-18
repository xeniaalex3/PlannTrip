import { CircleCheck, CircleDashed } from 'lucide-react'
import { type ActivityContentProps, type Activity } from '../../../../@types/tripDetails'

// Fonction de regroupement par date
function groupActivitiesByDate(activities: Activity[]) {
  return activities.reduce<Record<string, Activity[]>>((acc, activity) => {
    if (!acc[activity.date]) {
      acc[activity.date] = []
    }
    acc[activity.date].push(activity)
    return acc
  }, {})
}

export default function ActivityContent({
  activities,
  onToggleDone,
}: ActivityContentProps) {
  const grouped = groupActivitiesByDate(activities)

  if (activities.length === 0) {
    return (
      <p className="text-zinc-500 text-sm">
        Aucune activité enregistrée pour le moment.
      </p>
    )
  }

  return (
    <div className="flex flex-col gap-12">
      {Object.entries(grouped).map(([date, activitiesOnDate]) => (
        <div key={date} className="space-y-3">
          <div className="flex gap-2 items-baseline">
            <span className="text-zinc-300 font-semibold text-xl">
              Jour <span className="text-lg text-zinc-400 ml-2">{date}</span>
            </span>
          </div>

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

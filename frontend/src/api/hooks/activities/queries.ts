import { useQuery } from '@tanstack/react-query'
import { api } from '../../client'
import type { Activities } from '../../../@types/activities'

export function useActivities() {
  return useQuery({
    queryKey: ['activities'],
    queryFn: async () => {
      const { data } = await api.get<Activities[]>('/activities')
      return data
    }
  })
}

export function useActivity(activityId: string) {
  return useQuery({
    queryKey: ['activity', activityId],
    queryFn: async () => {
      const { data } = await api.get<Activities>(`/activities/${activityId}`)
      return data
    },
    enabled: !!activityId,
  })
}
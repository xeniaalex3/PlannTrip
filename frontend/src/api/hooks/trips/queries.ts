import { useQuery } from '@tanstack/react-query'
import { api } from '../../client'
import type { Trip } from '../../../@types/trips'
import { useParams } from '@tanstack/react-router'

export function useTrips() {
  return useQuery({
    queryKey: ['trips'],
    queryFn: async () => {
      const { data } = await api.get<Trip[]>('/trips')
      return data
    }
  })
}

export function useTrip(tripId: string) {
  return useQuery({
    queryKey: ['trip', tripId],
    queryFn: async () => {
      const { data } = await api.get<Trip>(`/trips/${tripId}`)
      return data
    },
    enabled: !!tripId,
  })
}

export function useTripId(): string | undefined {
  const { tripId } = useParams({ from: '/trips/$tripId' })
  return tripId
}

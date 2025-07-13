import { useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '../../client'
import type { Trip } from '../../../@types/trips'
import type { CreateTripInput } from '../../../@types/trips'

export function useCreateTrip() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (newTrip: CreateTripInput) => api.post<Trip>('/trips', newTrip),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['trips'] })
    }
  })
}

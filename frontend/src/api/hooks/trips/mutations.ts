import { useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '../../client'
import type { Trip } from '../../../@types/trips'
import type { CreateTripInput } from '../../../@types/trips'
import { toast } from 'react-toastify'

export function useCreateTrip() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (newTrip: CreateTripInput) => api.post<Trip>('/trips', newTrip),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['trips'] })
    },
    onError: () => {
      toast.error("Erreur lors de la création du voyage.")
    }
  })
}

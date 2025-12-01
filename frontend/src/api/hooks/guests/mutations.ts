import { useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '../../client'
import type { Participant } from '../../../@types/guests'
import { toast } from 'react-toastify'

export function useCreateParticipant() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (newParticipant: Omit<Participant, 'id'>) =>
      api.post<Participant>('/participants', newParticipant),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['participants'] })
    },
    onError: () => {
      toast.error("Erreur lors de la création du participant.")
    },
  })
}
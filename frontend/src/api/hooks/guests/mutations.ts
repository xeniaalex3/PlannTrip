import { useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '../../client'
import type { Participant } from '../../../@types/guests'

export function useCreateParticipant() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (newParticipant: Omit<Participant, 'id'>) =>
      api.post<Participant>('/participants', newParticipant),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['participants'] })
    },
  })
}
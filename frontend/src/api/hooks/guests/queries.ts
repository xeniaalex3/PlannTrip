import { useQuery } from '@tanstack/react-query'
import { api } from '../../client'
import type { Participant } from '../../../@types/guests'

export function useParticipants() {
  return useQuery({
    queryKey: ['participants'],
    queryFn: async () => {
      const { data } = await api.get<Participant[]>('/participants')
      return data
    }
  })
}

export function useParticipant(participantId: string) {
  return useQuery({
    queryKey: ['participant', participantId],
    queryFn: async () => {
      const { data } = await api.get<Participant>(`/participants/${participantId}`)
      return data
    },
    enabled: !!participantId,
  })
}
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '../../client'
import type { Activities } from '../../../@types/activities'

export function useCreateActivity() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (newActivity: Omit<Activities, 'id'>) =>
      api.post<Activities>('/activities', newActivity),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['activities'] })
    }
  })
}

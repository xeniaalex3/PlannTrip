import { useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '../../client'
import type { Links } from '../../../@types/links'

export function useCreateLink(){
  const queryClient = useQueryClient()
  return useMutation({
      mutationFn: (newLink: Omit<Links, 'id'>) =>
        api.post<Links>('/links', newLink),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['links'] })
      },
    })
}
import { useQuery } from '@tanstack/react-query'
import { api } from '../../client'
import type { Links } from '../../../@types/links'

export function useLinks(){
  return useQuery({
     queryKey: ['links'],
        queryFn: async () => {
          const { data } = await api.get<Links[]>('/links')
          return data
        }
  })
}

export function useLink(linkId: string) {
  return useQuery({
    queryKey: ['link', linkId],
    queryFn: async () => {
      const { data } = await api.get<Links>(`/links/${linkId}`)
      return data
    },
    enabled: !!linkId,
  })
}
export interface Participant {
  id: number
  name: string
  email: string
  is_confirmed: boolean
  is_owner: boolean
  trip_id: number
  done?: boolean
}
import { createContext, useContext, useState, type ReactNode } from 'react'
import type { DateRange } from 'react-day-picker'

interface TripContextProps {
  children: ReactNode
}

export interface TripData {
  tripLocation: string
  eventStartAndEndDates: DateRange | undefined
  setTripLocation: (dest: string) => void
  setEventStartAndEndDates: (dates: DateRange | undefined) => void
}

const TripContext = createContext<TripData | undefined>(undefined)

// eslint-disable-next-line react-refresh/only-export-components
export const useTrip = () => {
   const context = useContext(TripContext)
  if (!context) {
    throw new Error('useTrip must be used within a TripProvider')
  }
  return context
}

export function TripProvider({ children }: TripContextProps) {
  const [tripLocation, setTripLocation] = useState<string>('')
  const [eventStartAndEndDates, setEventStartAndEndDates] = useState<
    DateRange | undefined
  >()

  return (
    <TripContext.Provider
      value={{
        tripLocation,
        setTripLocation,
        eventStartAndEndDates,
        setEventStartAndEndDates
      }}
    >
      {children}
    </TripContext.Provider>
  )
}

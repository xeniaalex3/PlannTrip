import { type Activities } from './activities'
import { type Participant } from './guests'
import { type Links } from './links'
import type { Trip } from './trips'

export interface LinksContentProps {
  links: Links[]
}

export interface CreateLinkModalProps {
  handleCloseLinkModal: () => void
}

export interface ActivityContentProps {
  activities: Activities[]
  onToggleDone: (index: number) => void
}

export interface CreateActivityModalProps {
  handleCloseActivityModal: () => void
  eventStartDate: Date | undefined
  setEventStartDate: (date: Date | undefined) => void
}

export interface GuestsContentProps {
  guests: Participant[]
  onToggleDone: (index: number) => void
}

export interface CreateGuestModalProps {
  handleCloseGuestModal: () => void
  trip: Trip
}

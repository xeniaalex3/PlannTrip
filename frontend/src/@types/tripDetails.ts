export interface LinksContentProps {
  title: string
  link: string
}

export interface CreateLinkModalProps {
  handleCloseLinkModal: () => void
}

export interface Activity {
  id: number
  title: string
  time: string
  date: string
  done: boolean
}

export interface ActivityContentProps {
  activities: Activity[];
  onToggleDone: (index: number) => void
}

export interface CreateActivityModalProps {
  handleCloseActivityModal: () => void;
  eventStartDate: Date | undefined;
  setEventStartDate: (date: Date | undefined) => void;
   onCreateActivity: (activity: Activity) => void;
}

export interface Guest{
  id: number
  name: string;
  email: string;
  done: boolean
}

export interface GuestsContentProps {
  guests: Guest[];
  onToggleDone: (index: number) => void
}

export interface CreateGuestModalProps {
  handleCloseGuestModal: () => void;
   onCreateGuest: (guest: Guest) => void;
}

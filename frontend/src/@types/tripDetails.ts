export interface LinksContentProps {
  title: string
  link: string
}

export interface CreateLinkModalProps {
  handleCloseLinkModal: () => void
}

export interface Activity {
  title: string
  time: string
  done: boolean
}

export interface ActivityContentProps {
  dayLabel: string
  weekDay: string
  activities: Activity[]
}

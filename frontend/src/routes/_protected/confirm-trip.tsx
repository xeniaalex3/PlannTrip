import { createFileRoute } from '@tanstack/react-router'
import ConfirmTrip from '../../pages/ConfirmTrip/ConfirmTrip'

export const Route = createFileRoute('/_protected/confirm-trip')({
  component: ConfirmTrip,
})



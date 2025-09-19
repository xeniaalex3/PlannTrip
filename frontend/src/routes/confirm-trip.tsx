import { createFileRoute } from '@tanstack/react-router'
import ConfirmTrip from '../pages/ConfirmTrip/ConfirmTrip'

export const Route = createFileRoute('/confirm-trip')({
  component: ConfirmTrip,
})


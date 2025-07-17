import { useState, useEffect } from 'react'
import { Plus, UserCog } from 'lucide-react'
import CustomButton from '../../components/ui/Button/CustomButton/CustomButton'
import LinksContent from './LinksContainer/LinksContent/LinksContent'
import CreateLinkModal from './LinksContainer/CreateLinkModal/CreateLinkModal'
import ActivityContent from './ActivitiesContainer/ActivityContent/ActivityContent'
import CreateActivityModal from './ActivitiesContainer/CreateActivityModal/CreateActivityModal'
import GuestsContent from './GuestsContainer/GuestsContent/GuestsContent'
import CreateGuestModal from './GuestsContainer/CreateGuestModal/CreateGuestModal'
import DestinationDateHeader from './DestinationDateHeader/DestinationDateHeader'
import { useTrip } from '../../api/hooks/trips/queries'
import { type Activities } from '../../@types/activities'
import { type Participant } from '../../@types/guests'
import { type Links } from '../../@types/links'
import { useParams } from 'react-router'

export default function TripDetails() {
  const [openLinkModal, setOpenLinkModal] = useState(false)
  const [openActivityModal, setOpenActivityModal] = useState(false)
  const [openGuestModal, setOpenGuestModal] = useState(false)
  const [eventStartDate, setEventStartDate] = useState<Date>()
  const [activities, setActivities] = useState<Activities[]>([])
  const [guests, setGuests] = useState<Participant[]>([])
  const [links, setLinks] = useState<Links[]>([])

  const { tripId } = useParams<{ tripId: string }>()
  const { data: trip } = useTrip(tripId!)

  useEffect(() => {
    if (trip) {
      setActivities(trip.activities || [])
      setGuests(trip.participants || [])
      setLinks(trip.links || [])
    }
  }, [trip])

  // link
  const handleOpenLinkModal = () => setOpenLinkModal(true)
  const handleCloseLinkModal = () => setOpenLinkModal(false)
  // activity
  const handleOpenActivityModal = () => setOpenActivityModal(true)
  const handleCloseActivityModal = () => setOpenActivityModal(false)
  // guest
  const handleOpenGuestModal = () => setOpenGuestModal(true)
  const handleCloseGuestModal = () => setOpenGuestModal(false)

  // Activities

  function handleCreateActivity(newActivity: Activities) {
    setActivities(prev => [...prev, newActivity])
  }

  function toggleActivityDone(id: number) {
    setActivities(prev =>
      prev.map(activity =>
        activity.id === id ? { ...activity, done: !activity.done } : activity
      )
    )
  }

  // Guests

  function handleCreateGuest(newGuest: Participant) {
    setGuests(prev => [...prev, newGuest])
  }

  function toggleGuestDone(id: number) {
    setGuests(prev =>
      prev.map(guest =>
        guest.id === id ? { ...guest, done: !guest.done } : guest
      )
    )
  }

  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <DestinationDateHeader />
      <main className="flex gap-16 px-6">
        <div className="flex-1 space-y-12">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold text-zinc-50">Activités</h2>
            <CustomButton type="button" onClick={handleOpenActivityModal}>
              <Plus className="size-5 text-lime-950" />
              Enregistrer l'activité
            </CustomButton>
          </div>
          <div className="space-y-3">
            <ActivityContent
              activities={activities}
              onToggleDone={toggleActivityDone}
            />
          </div>
        </div>

        <div className="w-80 space-y-6">
          <div className="space-y-6">
            <h3 className="text-zinc-100 font-semibold text-lg">
              Liens importants
            </h3>
            <LinksContent links={links} />
            <CustomButton
              type="button"
              color="gray"
              fullWidth
              onClick={handleOpenLinkModal}
            >
              <Plus className="size-5 text-zinc-200" />
              Enregistrer un nouveau lien
            </CustomButton>
          </div>
          <div className="w-full h-px bg-zinc-700" />
          <div className="space-y-6">
            <h3 className="text-zinc-100 font-semibold text-lg">Invités</h3>
            <GuestsContent guests={guests} onToggleDone={toggleGuestDone} />
            <CustomButton
              type="button"
              color="gray"
              fullWidth
              onClick={handleOpenGuestModal}
            >
              <UserCog className="size-5 text-zinc-200" />
              Gestion des invités
            </CustomButton>
          </div>
        </div>
      </main>
      {openLinkModal && (
        <CreateLinkModal handleCloseLinkModal={handleCloseLinkModal} />
      )}
      {openGuestModal && (
        <CreateGuestModal
          handleCloseGuestModal={handleCloseGuestModal}
          onCreateGuest={handleCreateGuest}
        />
      )}

      {openActivityModal && (
        <CreateActivityModal
          handleCloseActivityModal={handleCloseActivityModal}
          eventStartDate={eventStartDate}
          setEventStartDate={setEventStartDate}
          onCreateActivity={handleCreateActivity}
        />
      )}
    </div>
  )
}

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
import { useParams } from '@tanstack/react-router'
import Loading from '../../components/ui/Loading/Loading'

export default function TripDetails() {
  const [openLinkModal, setOpenLinkModal] = useState(false)
  const [openActivityModal, setOpenActivityModal] = useState(false)
  const [openGuestModal, setOpenGuestModal] = useState(false)
  const [eventStartDate, setEventStartDate] = useState<Date>()
  const [activities, setActivities] = useState<Activities[]>([])
  const [guests, setGuests] = useState<Participant[]>([])
  const [links, setLinks] = useState<Links[]>([])

  const { tripId } = useParams({ from: '/trips/$tripId' })
  const { data: trip, isLoading, isError } = useTrip(tripId!)

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

  function toggleActivityDone(id: number) {
    setActivities(prev =>
      prev.map(activity =>
        activity.id === id ? { ...activity, done: !activity.done } : activity
      )
    )
  }

  // Guests

  function toggleGuestDone(id: number) {
    setGuests(prev =>
      prev.map(guest =>
        guest.id === id ? { ...guest, done: !guest.done } : guest
      )
    )
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full py-10">
        <Loading />
        <p className="text-zinc-100 text-lg">Chargement du voyage...</p>
      </div>
    )
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center h-full py-10">
        <p className="text-red-400 text-lg">
          Une erreur est survenue lors du chargement du voyage.
        </p>
      </div>
    )
  }

  return (
    <div className="self-start max-w-6xl lg:w-7xl px-4 py-10 space-y-8">
      {trip && <DestinationDateHeader trip={trip} />}
      <main className="flex gap-16 px-6 xs:max-sm:flex-col xs:max-sm:max-h-svh xs:max-sm:overflow-auto sm:max-md:flex-col sm:max-md:max-h-svh sm:max-md:overflow-auto">
        <div className="flex-1 space-y-12 xs:max-sm:space-y-8 sm:max-md:space-y-8">
          <div className="flex items-center justify-between xs:max-sm:flex-col xs:max-sm:justify-start xs:max-sm:items-start xs:max-sm:space-y-3 md:max-lg:flex-col md:max-lg:justify-start md:max-lg:items-start md:max-lg:space-y-3">
            <h2 className="text-3xl font-semibold text-zinc-50 xs:max-sm:text-lg sm:max-md:text-xl md:max-lg:text-2xl">
              Activités
            </h2>
            <CustomButton
              type="button"
              onClick={handleOpenActivityModal}
              className="xs:max-sm:text-sm"
            >
              <Plus className="size-5 text-lime-950 xs:max-sm:size-4" />
              Enregistrer l'activité
            </CustomButton>
          </div>
          <div className="space-y-3 xs:max-sm:max-h-[14rem] xs:max-sm:overflow-auto sm:max-md:max-h-[20rem] sm:max-md:overflow-auto">
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
            <div className="xs:max-sm:max-h-[14rem] xs:max-sm:overflow-auto sm:max-md:max-h-[16rem] sm:max-md:overflow-auto">
              <LinksContent links={links} />
            </div>

            <CustomButton
              type="button"
              color="gray"
              fullWidth
              onClick={handleOpenLinkModal}
              className="xs:max-sm:text-sm"
            >
              <Plus className="size-5 text-zinc-200 xs:max-sm:size-4" />
              Enregistrer un nouveau lien
            </CustomButton>
          </div>
          <div className="w-full h-px bg-zinc-700" />
          <div className="space-y-6">
            <h3 className="text-zinc-100 font-semibold text-lg">Invités</h3>
            <div className="xs:max-sm:max-h-[14rem] xs:max-sm:overflow-auto sm:max-md:max-h-[16rem] sm:max-md:overflow-auto">
              <GuestsContent guests={guests} onToggleDone={toggleGuestDone} />
            </div>

            <CustomButton
              type="button"
              color="gray"
              fullWidth
              onClick={handleOpenGuestModal}
              className="xs:max-sm:text-sm"
            >
              <UserCog className="size-5 text-zinc-200 xs:max-sm:size-4" />
              Gestion des invités
            </CustomButton>
          </div>
        </div>
      </main>
      {openLinkModal && (
        <CreateLinkModal handleCloseLinkModal={handleCloseLinkModal} />
      )}
      {openGuestModal && trip && (
        <CreateGuestModal
          handleCloseGuestModal={handleCloseGuestModal}
          trip={trip}
        />
      )}

      {openActivityModal && (
        <CreateActivityModal
          handleCloseActivityModal={handleCloseActivityModal}
          eventStartDate={eventStartDate}
          setEventStartDate={setEventStartDate}
        />
      )}
    </div>
  )
}

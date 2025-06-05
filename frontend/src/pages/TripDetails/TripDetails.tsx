import { useState } from 'react'
import {
  Calendar,
  MapPin,
  Settings2,
  Plus,
} from 'lucide-react'
import CustomButton from '../../components/ui/CustomButton/CustomButton'
import LinksContent from './LinksContainer/LinksContent/LinksContent'
import CreateLinkModal from './LinksContainer/CreateLinkModal/CreateLinkModal'
import ActivityContent from './ActivitiesContainer/ActivityContent/ActivityContent'
import CreateActivityModal from './ActivitiesContainer/CreateActivityModal/CreateActivityModal'

export default function TripDetails() {
  const [openLinkModal, setOpenLinkModal] = useState(false)
  const [openActivityModal, setOpenActivityModal] = useState(false)

  // link
  const handleOpenLinkModal = () => setOpenLinkModal(true)
  const handleCloseLinkModal = () => setOpenLinkModal(false)
  // activity
  const handleOpenActivityModal = () => setOpenActivityModal(true)
  const handleCloseActivityModal = () => setOpenActivityModal(false)


  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-[var(--shadow)] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MapPin className="size-5 text-zinc-400" />
          <span className="text-lg text-zinc-100">Florianopolis, Brasil</span>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <Calendar className="size-5 text-zinc-400" />
            <span className="text-lg text-zinc-200">17 à 23 de Agosto</span>
          </div>
          <div className="w-px h-6 bg-zinc-600" />
          <CustomButton type="button" color="gray">
            Modifier lieu/date
            <Settings2 className="size-5 text-zinc-200" />
          </CustomButton>
        </div>
      </div>
      <main className="flex gap-16 px-6">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold text-zinc-50">Activités</h2>
            <CustomButton type="button" onClick={handleOpenActivityModal}>
              <Plus className="size-5 text-lime-950" />
              Enregistrer l'activité
            </CustomButton>
          </div>
          <div className="space-y-8">
         <ActivityContent dayLabel={''} weekDay={''} activities={[]} />
          </div>
        </div>

        <div className="w-80 space-y-6">
          <div className="space-y-6">
            <h3 className="text-zinc-100 font-semibold text-lg">
              Liens importants
            </h3>
            <LinksContent
              title="Réservation d'AirBnB"
              link="https://www.airbnb.com.br/rooms/104700011"
            />
            <LinksContent
              title="Règlement intérieur"
              link="https://www.notion.com/pages/1047000112"
            />
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
          </div>
        </div>
      </main>
      {openLinkModal && (
        <CreateLinkModal handleCloseLinkModal={handleCloseLinkModal} />
      )}

      {openActivityModal && (
        <CreateActivityModal handleCloseActivityModal={handleCloseActivityModal} />
      )}
    </div>
  )
}

import { useState } from 'react'
import {
  Calendar,
  MapPin,
  Settings2,
  Plus,
  CircleCheck,
  CircleDashed
} from 'lucide-react'
import CustomButton from '../../components/ui/CustomButton/CustomButton'
import LinksContent from './LinksContainer/LinksContent/LinksContent'
import CreateLinkModal from './LinksContainer/CreateLinkModal/CreateLinkModal'

export default function TripDetails() {
  const [openLinkModal, setOpenLinkModal] = useState(false)

  const handleOpenLinkModal = () => setOpenLinkModal(true)
  const handleCloseLinkModal = () => setOpenLinkModal(false)

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
            <CustomButton type="button">
              <Plus className="size-5 text-lime-950" />
              Enregistrer l'activité
            </CustomButton>
          </div>
          <div className="space-y-8">
            <div className="space-y-2.5">
              <div className="flex gap-2 items-baseline">
                <span className="text-zinc-300 font-semibold text-xl">
                  Jour 17
                </span>
                <span className="text-zinc-500 text-xs">Samedi</span>
              </div>
              <p className="text-zinc-500 text-sm">
                Aucune activité enregistrée à cette date.
              </p>
            </div>
            <div className="space-y-2.5">
              <div className="flex gap-2 items-baseline">
                <span className="text-zinc-300 font-semibold text-xl">
                  Jour 18
                </span>
                <span className="text-zinc-500 text-xs">Dimanche</span>
              </div>
              <div className="space-y-2.5">
                <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-[var(--shadow)] flex items-center gap-3">
                  <CircleCheck className="size-5 text-lime-300" />
                  <span className="text-zinc-100">Course de karting</span>
                  <span className="text-zinc-400 text-sm ml-auto">08:00h</span>
                </div>
              </div>
              <div className="space-y-2.5">
                <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-[var(--shadow)] flex items-center gap-3">
                  <CircleDashed className="size-5 text-zinc-400" />
                  <span className="text-zinc-100">Le déjeuner</span>
                  <span className="text-zinc-400 text-sm ml-auto">12:00h</span>
                </div>
              </div>
            </div>
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
    </div>
  )
}

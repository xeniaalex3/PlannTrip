import { Calendar, Clock, Tag } from 'lucide-react'
import ModalWrapper from '../../../../components/ui/ModalWrapper/ModalWrapper'
import InputWrapper from '../../../../components/ui/form/InputWrapper/InputWrapper'
import CustomButton from '../../../../components/ui/CustomButton/CustomButton'
import { type CreateActivityModalProps } from '../../../../@types/tripDetails'

export default function CreateActivityModal({
  handleCloseActivityModal
}: CreateActivityModalProps) {
  return (
    <ModalWrapper onClick={handleCloseActivityModal}>
      <div className="space-y-2 flex flex-col items-start">
        <h2 className="text-zinc-200 text-lg font-semibold">
          Enregistrer l'activité
        </h2>
        <p className="text-zinc-400 text-sm text-left">
          Tous les invités peuvent voir les activités.
        </p>
      </div>
      <form action="" className="flex flex-col items-center  mt-4 space-y-3">
        <div className="flex items-center gap-2 bg-zinc-950 h-14 w-full px-3 rounded-lg">
          <Tag className="text-zinc-400 size-5" />
          <InputWrapper
            type="text"
            name="title"
            placeholder="Quelle est l'activité ?"
            className="bg-transparent text-lg placeholder-zinc-400 outline-none w-90"
          />
        </div>
        <div className="flex items-center gap-2 w-full">
          <div className="flex items-center gap-2 bg-zinc-950 h-14 px-3 rounded-lg">
            <Calendar className="text-zinc-400 size-5" />
            <InputWrapper
              type="text"
              name="date"
              placeholder="Date"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none"
            />
          </div>
          <div className="flex items-center gap-2 bg-zinc-950 h-14 px-3 rounded-lg">
            <Clock className="text-zinc-400 size-5" />
            <InputWrapper
              type="text"
              name="text"
              placeholder="Horaire"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none"
            />
          </div>
        </div>

        <CustomButton type="submit" fullWidth>
          Enregistrer l'activité
        </CustomButton>
      </form>
    </ModalWrapper>
  )
}

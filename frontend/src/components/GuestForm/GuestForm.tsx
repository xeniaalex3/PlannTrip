import CustomButton from '../ui/CustomButton/CustomButton'
import { UserRoundPlus, ArrowRight } from 'lucide-react'

interface GuestFormProps {
  openGuestModal: () => void;
}

export default function GuestForm({ openGuestModal } : GuestFormProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center w-[42rem] shadow-[var(--shadow)] gap-3">
      <button type="button" onClick={openGuestModal} className="flex items-center gap-2 flex-1 cursor-pointer">
        <UserRoundPlus className="text-zinc-400 size-5" />
        <span className="bg-transparent text-lg text-zinc-400">Qui voyagera ?</span>
      </button>

      <div className="w-px h-6 bg-zinc-600" />
      <CustomButton type="submit" >
        Confirmer le voyage
        <ArrowRight className="size-5 text-lime-950" />
      </CustomButton>
    </div>
  )
}

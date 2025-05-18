import InputWrapper from '../form/InputWrapper/InputWrapper'
import CustomButton from '../ui/CustomButton/CustomButton'
import { UserRoundPlus, ArrowRight } from 'lucide-react'

export default function GuestForm() {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center w-[42rem] shadow-[var(--shadow)] gap-3">
      <div className="flex items-center gap-2 flex-1">
        <UserRoundPlus className="text-zinc-400 size-5" />
        <InputWrapper
          type="text"
          placeholder="Qui voyagera ?"
          className="bg-transparent text-lg placeholder-zinc-400 outline-none"
        />
      </div>

      <div className="w-px h-6 bg-zinc-600" />
      <CustomButton type="submit" >
        Confirmer le voyage
        <ArrowRight className="size-5 text-lime-950" />
      </CustomButton>
    </div>
  )
}

import InputWrapper from '../form/InputWrapper/InputWrapper'
import CustomButton from '../ui/CustomButton/CustomButton'
import { MapIcon, Calendar, ArrowRight } from 'lucide-react'

export default function SearchForm() {
  return (
    <form
      action=""
      className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center w-[42rem] shadow-[var(--shadow)] gap-3"
    >
      <div className="flex items-center gap-2 flex-1">
        <MapIcon className="text-zinc-400 size-5" />
        <InputWrapper
          type="text"
          placeholder="Où allez-vous?"
          className="bg-transparent text-lg placeholder-zinc-400 outline-none"
        />
      </div>

      <div className="flex items-center gap-2">
        <Calendar className="text-zinc-400 size-5" />
        <InputWrapper
          type="text"
          placeholder="Quand?"
          className="bg-transparent text-lg placeholder-zinc-400 w-24 outline-none"
        />
      </div>
      <div className="w-px h-6 bg-zinc-600" />
      <CustomButton type="submit">
        Continuer
        <ArrowRight className="size-5 text-lime-950" />
      </CustomButton>
    </form>
  )
}

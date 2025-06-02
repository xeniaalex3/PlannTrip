import InputWrapper from '../../ui/form/InputWrapper/InputWrapper'
import CustomButton from '../../ui/CustomButton/CustomButton'
import { MapIcon, Calendar, ArrowRight, Settings2 } from 'lucide-react'

interface SearchFormProps {
  openGuestInput: () => void
  closeGuestInput: () => void
  inputOpen: boolean
}

export default function SearchForm({
  openGuestInput,
  inputOpen,
  closeGuestInput
}: SearchFormProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center w-[42rem] shadow-[var(--shadow)] gap-3">
      <div className="flex items-center gap-2 flex-1">
        <MapIcon className="text-zinc-400 size-5" />
        <InputWrapper
          type="text"
          placeholder="Où allez-vous?"
          className="bg-transparent text-lg placeholder-zinc-400 outline-none"
          disabled={inputOpen}
        />
      </div>

      <div className="flex items-center gap-2">
        <Calendar className="text-zinc-400 size-5" />
        <InputWrapper
          type="text"
          placeholder="Quand?"
          className="bg-transparent text-lg placeholder-zinc-400 w-24 outline-none"
          disabled={inputOpen}
        />
      </div>
      <div className="w-px h-6 bg-zinc-600" />
      {inputOpen ? (
        <button
          type="button"
          className="bg-zinc-800 rounded-xl px-5 py-2 text-zinc-400 font-medium flex items-center gap-2 hover:bg-zinc-700 cursor-pointer"
          onClick={closeGuestInput}
        >
          Modifier lieu/date
          <Settings2 className="size-5 text-zinc-400" />
        </button>
      ) : (
        <CustomButton type="submit" onClick={openGuestInput}>
          Continuer
          <ArrowRight className="size-5 text-lime-950" />
        </CustomButton>
      )}
    </div>
  )
}

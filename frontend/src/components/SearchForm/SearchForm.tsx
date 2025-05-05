import InputWrapper from '../form/InputWrapper/InputWrapper'
import CustomButton from '../ui/CustomButton/CustomButton'

export default function SearchForm() {
  return (
    <form
      action=""
      className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center"
    >
      <InputWrapper type="text" placeholder="Où allez-vous?" />
      <InputWrapper type="text" placeholder="Quand?" />
      <CustomButton type="submit">Continuer</CustomButton>
    </form>
  )
}

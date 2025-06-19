import { Settings2 } from 'lucide-react'
import CustomButton from '../CustomButton/CustomButton'
import { type ModifButtonProps } from '../../../../@types/ui'

export default function ModifButton({ text, onClick }: ModifButtonProps) {
  return (
    <CustomButton type="button" color="gray" onClick={onClick}>
      {text}
      <Settings2 className="size-5 text-zinc-200" />
    </CustomButton>
  )
}

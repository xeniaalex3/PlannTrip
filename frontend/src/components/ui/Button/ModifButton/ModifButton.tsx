import { Settings2 } from 'lucide-react'
import CustomButton from '../CustomButton/CustomButton'
import { type ModifButtonProps } from '../../../../@types/ui'

export default function ModifButton({ text, ...props }: ModifButtonProps) {
  return (
    <CustomButton {...props} type="button" color="gray">
      {text}
      <Settings2 className="size-5 text-zinc-200" />
    </CustomButton>
  )
}

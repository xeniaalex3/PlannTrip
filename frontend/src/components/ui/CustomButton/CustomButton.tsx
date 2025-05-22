import { type CustomButtonProps } from '../../../@types/ui'

export default function CustomButton({ children, type, onClick }: CustomButtonProps) {
  return (
    <button
    onClick={onClick}
      type={type}
      className="bg-lime-300 rounded-xl px-5 py-2 text-lime-950 font-medium flex items-center gap-2 hover:bg-lime-400 cursor-pointer"
    >
      {children}
    </button>
  )
}

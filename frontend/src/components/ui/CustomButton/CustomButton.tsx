import { type CustomButtonProps } from '../../../@types/ui'

export default function CustomButton({ children, type }: CustomButtonProps) {
  return (
    <button
      type={type}
      className="bg-lime-300 rounded-xl px-5 py-2 text-lime-950"
    >
      {children}
    </button>
  )
}

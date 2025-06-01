import { type CustomButtonProps } from '../../../@types/ui'

export default function CustomButton({ children, type, onClick,  fullWidth = false }: CustomButtonProps) {
  return (
    <button
    onClick={onClick}
      type={type}
      className={`
         ${fullWidth ? 'w-full' : ''}
        bg-lime-300 rounded-lg px-5 py-2 text-lime-950 font-medium flex justify-center items-center gap-2 hover:bg-lime-400 cursor-pointer`}
    >
      {children}
    </button>
  )
}

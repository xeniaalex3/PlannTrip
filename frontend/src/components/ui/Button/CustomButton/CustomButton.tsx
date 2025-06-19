import { clsx } from "clsx";
import { type CustomButtonProps } from '../../../../@types/ui'

export default function CustomButton({
  children,
  type,
  onClick,
  fullWidth = false,
  color
}: CustomButtonProps) {

   let colorCss;

  switch (color) {
    case "yellow":
      colorCss = "bg-lime-300 text-lime-950 hover:bg-lime-400";
      break;
    case "gray":
      colorCss = "bg-zinc-800 text-zinc-200 hover:bg-zinc-700";
      break;
    default:
      colorCss = "bg-lime-300 text-lime-950 hover:bg-lime-400";
      break;
  }

  return (
    <button
      onClick={onClick}
      type={type}
      className={clsx(
         fullWidth ? 'w-full' : '',
        " rounded-lg px-5 py-2  font-medium flex justify-center items-center gap-2  cursor-pointer",
        colorCss
      )}
    >
      {children}
    </button>
  )
}

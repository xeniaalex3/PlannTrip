import type { ComponentProps, ReactNode } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const buttonVariants = tv({
  base: 'rounded-lg px-5 py-2  font-medium flex justify-center items-center gap-2  cursor-pointer',
  variants: {
    color: {
      yellow: 'bg-lime-300 text-lime-950 hover:bg-lime-400',
      gray: 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700'
    },
    fullWidth: {
      true: 'w-full',
      false: ''
    }
  },
  defaultVariants: {
    color: 'yellow'
  }
})

interface CustomButtonProps
  extends Omit<ComponentProps<'button'>, 'color'>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode
  type: 'submit' | 'button' | 'reset'
}

export default function CustomButton({
  children,
  type,
  color,
  fullWidth,
  ...props
}: CustomButtonProps) {
  return (
    <button
      {...props}
      type={type}
      className={buttonVariants({ color, fullWidth })}
    >
      {children}
    </button>
  )
}

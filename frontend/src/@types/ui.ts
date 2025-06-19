import type { ComponentProps, ReactNode } from 'react'

export interface CustomButtonProps extends ComponentProps<'button'> {
  children: ReactNode
  type: 'submit' | 'button' | 'reset'
  fullWidth?: boolean
  color?: 'yellow' | 'gray'
}


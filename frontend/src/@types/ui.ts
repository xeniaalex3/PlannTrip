import type { ComponentProps, ReactNode } from 'react'

export interface CustomButtonProps extends ComponentProps<'button'> {
  children: ReactNode
  type: 'submit' | 'button' | 'reset'
  fullWidth?: boolean
  color?: 'yellow' | 'gray'
}

export interface ModifButtonProps extends ComponentProps<'button'>{
  text: string
}

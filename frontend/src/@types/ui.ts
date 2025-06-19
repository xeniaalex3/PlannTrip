import type { ReactNode } from 'react'

export interface CustomButtonProps {
  children: ReactNode
  type: 'submit' | 'button' | 'reset'
  onClick?: () => void
  fullWidth?: boolean
  color?: 'yellow' | 'gray'
}

export interface ModifButtonProps {
  text: string
  onClick?: () => void
}

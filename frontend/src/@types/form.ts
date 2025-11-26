import { type ChangeEvent, type InputHTMLAttributes } from 'react'

export interface InputWrapperProps
  extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string
  type: 'text' | 'date' | 'email' | 'time' | 'password'
  className?: string
  disabled?: boolean
  name?: string
  value?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

import { forwardRef } from 'react'
import type { InputWrapperProps } from '../../../../@types/form'

const InputWrapper = forwardRef<HTMLInputElement, InputWrapperProps>(
  ({ placeholder, type, className, disabled, ...rest }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        className={className}
        disabled={disabled}
        {...rest}
      />
    )
  }
)

export default InputWrapper

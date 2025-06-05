import type { InputWrapperProps } from '../../../../@types/form'

export default function InputWrapper({
  placeholder,
  type,
  name,
  className,
  disabled,
  value,
  onChange
}: InputWrapperProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      disabled={disabled}
      name={name}
      value={value}
      onChange={onChange}
    />
  )
}

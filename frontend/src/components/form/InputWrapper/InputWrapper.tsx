import type { InputWrapperProps } from "../../../@types/form"

export default function InputWrapper({ placeholder, type, className, disabled}: InputWrapperProps){
  return(
    <input 
    type={type} 
    placeholder={placeholder}
    className={className}
    disabled={disabled}
    />
  )
}
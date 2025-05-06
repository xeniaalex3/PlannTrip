import type { InputWrapperProps } from "../../../@types/form"

export default function InputWrapper({ placeholder, type, className}: InputWrapperProps){
  return(
    <input 
    type={type} 
    placeholder={placeholder}
    className={className}
    />
  )
}
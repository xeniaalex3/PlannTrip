import type { InputWrapperProps } from "../../../@types/form"

export default function InputWrapper({ placeholder, type}: InputWrapperProps){
  return(
    <input 
    type={type} 
    placeholder={placeholder}
    />
  )
}
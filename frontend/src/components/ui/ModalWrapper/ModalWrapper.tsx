import type { ReactNode } from "react"
import { X } from 'lucide-react'

interface ModalWrapperProps {
  children: ReactNode;
  closeGuestModal: () => void;
}

export default function ModalWrapper({ children, closeGuestModal }: ModalWrapperProps){
  return(
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
     <div className=" relative w-[640px] rounded-xl py-5 px-6 shadow-[var(--shadow)] bg-zinc-800">
       <button 
          onClick={closeGuestModal}
          className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-100 transition-colors"
          aria-label="close modal"
          type="button"
        >
          <X size={20} className="size-5 text-zinc-400 cursor-pointer"/>
        </button>
       {children}
     </div>
    </div>
  )
}
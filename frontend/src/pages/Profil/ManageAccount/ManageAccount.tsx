import { Mail, User } from 'lucide-react'
import { useAuth } from '../../../context/AuthContext'

export default function ManageAccount() {
  const { user } = useAuth()

  return (
    
      <div className="shadow-[var(--shadow)] px-4 py-4 w-[45%]">
        <h1 className="text-lg font-semibold text-zinc-50">Gérer le compte</h1>
        <div className="py-4 flex flex-col gap-3">
          <p className="flex items-center gap-4 text-base text-zinc-400">
            <User className="size-5 text-zinc-400" />
            Prénom: <span className='text-zinc-100 text-base'>{user?.firstname}</span>
          </p>
          <p className="flex items-center gap-4 text-base text-zinc-400">
            <User className="size-5 text-zinc-400" />
            Nom: <span className='text-zinc-100 text-base'>{user?.lastname}</span>
          </p>
          <p className="flex items-center gap-4 text-base text-zinc-400">
            <Mail className="size-5 text-zinc-400" />
            Email: <span className='text-zinc-100 text-base'>{user?.email}</span> 
          </p>
        </div>
      </div>
    
  )
}

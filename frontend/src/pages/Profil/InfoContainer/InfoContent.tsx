import { Mail, Calendar} from 'lucide-react'
import { useAuth } from '../../../context/AuthContext'

export default function InfoContent(){
  const { user, profile } = useAuth()

  return(
    <div className="shadow-[var(--shadow)] px-4 py-4">
      <h1 className="text-2xl font-semibold text-zinc-50">Informations de base</h1>
      <div className='py-4 flex flex-col gap-3'>
        <p className='flex items-center gap-4 text-xl'><Mail className="size-6 text-zinc-400" />Email:{' '}{user?.email}</p>
        <p className='flex items-center gap-4 text-xl'><Calendar className="size-6 text-zinc-400" />Compte créé le :{' '} {profile?.createdAt}</p>
      </div>
    </div>
  )
}
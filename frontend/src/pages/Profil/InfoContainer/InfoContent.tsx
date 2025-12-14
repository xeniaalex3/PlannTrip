import { Calendar, Clock } from 'lucide-react'
import { useAuth } from '../../../context/AuthContext'
import { formatDateString } from '../../../utils/date'

export default function InfoContent() {
  const { user } = useAuth()

  return (
    <div className="shadow-[var(--shadow)] px-4 py-4 w-[45%]">
      <h1 className="text-2xl font-semibold text-zinc-50">
        Informations de base
      </h1>
      <div className="py-4 flex flex-col gap-3">
        <p className="flex items-center gap-4 text-xl text-zinc-400">
          <Calendar className="size-6 text-zinc-400" />
          Compte créé le :{' '}
          <span className='text-zinc-100'>{formatDateString(user?.createdAt || '')}</span>{' '}
        </p>
        <p className="flex items-center gap-4 text-xl text-zinc-400">
          <Clock className="size-6 text-zinc-400" />
          Dernière connexion :{' '}
          <span className='text-zinc-100'>{formatDateString(user?.updatedAt || '')}</span>{' '}
        </p>
      </div>
    </div>
  )
}

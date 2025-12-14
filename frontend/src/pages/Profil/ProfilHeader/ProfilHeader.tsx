import userImage from '../../../assets/images/user.png'
import CustomButton from '../../../components/ui/Button/CustomButton/CustomButton'
import { useAuth } from '../../../context/AuthContext'

export default function ProfilHeader() {
  const { user } = useAuth()
  return (
    <div className="flex flex-row items-center justify-between rounded-xl bg-zinc-900 shadow-[var(--shadow)] px-4 py-4 h-19">
      <div className="flex flex-row items-center gap-4">
        <img
          src={userImage}
          alt="Image user"
          className="w-15 h-15 rounded-full"
        />
        <p className="text-zinc-100 text-xl">
          Bienvenue,{' '}
          <span className="font-semibold">
            {user?.firstname}{' '}
            {user?.lastname} !{' '}
          </span>
        </p>
      </div>
      <CustomButton type="button">Modifier le profil</CustomButton>
    </div>
  )
}

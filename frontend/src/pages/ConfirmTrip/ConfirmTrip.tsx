import CustomButton from '../../components/ui/Button/CustomButton/CustomButton'
import Logo from '../../components/ui/Logo/Logo'
import { useNavigate } from 'react-router'

export default function ConfirmTrip() {
  const navigate = useNavigate()

  function handleViewDetailsPage() {
    navigate('/trips/1')
  }

  return (
    <div className="h-dvh flex flex-col justify-center items-center">
      <div className="max-w-3xl mx-auto px-6 text-center space-y-10 ">
        <Logo />
        <div className="space-y-4 shadow-[var(--shadow)] bg-zinc-900 px-6 py-8 rounded-lg">
          <h3 className="text-zinc-100 font-medium text-xl">
            Votre voyage a été créé avec succès !{' '}
          </h3>
          <p className="text-zinc-400 text-base">
            Pour consulter les détails de votre voyage, veuillez cliquer sur le
            bouton ci-dessous.
          </p>
          <div className="flex justify-center mt-7">
            <CustomButton type="button" onClick={handleViewDetailsPage}>
              Voir les détails
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  )
}

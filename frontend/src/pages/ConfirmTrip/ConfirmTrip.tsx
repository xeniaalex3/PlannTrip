import CustomButton from '../../components/ui/Button/CustomButton/CustomButton'
import { useNavigate, useSearch } from '@tanstack/react-router'
import { Route as ConfirmTripRoute } from '../../routes/confirm-trip'

export default function ConfirmTrip() {
  const navigate = useNavigate()
  const search = useSearch({ from: ConfirmTripRoute.id })
  const tripId = search.tripId

  function handleViewDetailsPage() {
    if (tripId) {
      navigate({ to: '/trips/$tripId', params: { tripId } })
    }
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="max-w-3xl mx-auto px-6 text-center space-y-10 ">
        <div className="space-y-4 shadow-[var(--shadow)] bg-zinc-900 px-6 py-8 rounded-lg">
          <h3 className="text-zinc-100 font-medium text-xl xs:max-sm:text-lg">
            Votre voyage a été créé avec succès !{' '}
          </h3>
          <p className="text-zinc-400 text-base xs:max-sm:text-sm">
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

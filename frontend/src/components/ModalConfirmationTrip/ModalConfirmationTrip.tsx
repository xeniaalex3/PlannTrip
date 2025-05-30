import ModalWrapper from '../ui/ModalWrapper/ModalWrapper'

interface ModalConfirmationTripProps {
  closeModalConfirmation: () => void;
}

export default function ModalConfirmationTrip({
  closeModalConfirmation
}: ModalConfirmationTripProps) {
  return (
    <ModalWrapper onClick={closeModalConfirmation}>
      <div className="space-y-2 flex flex-col items-start">
        <h2 className="text-zinc-200 text-lg font-semibold">
          Confirmer la création du voyage
        </h2>
        <p className="text-zinc-400 text-sm">
          Les invités recevront un courrier électronique confirmant leur
          participation au voyage.
        </p>
      </div>
    </ModalWrapper>
  )
}

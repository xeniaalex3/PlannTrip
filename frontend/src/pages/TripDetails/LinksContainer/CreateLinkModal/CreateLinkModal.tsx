import { useState, type FormEvent } from 'react'
import ModalWrapper from '../../../../components/ui/ModalWrapper/ModalWrapper'
import { type CreateLinkModalProps } from '../../../../@types/tripDetails'
import { Link2, Tag } from 'lucide-react'
import InputWrapper from '../../../../components/ui/form/InputWrapper/InputWrapper'
import CustomButton from '../../../../components/ui/Button/CustomButton/CustomButton'
import { useCreateLink } from '../../../../api/hooks/links/mutations'
import { useTripId } from '../../../../api/hooks/trips/queries'
import { toast } from 'react-toastify'

export default function CreateLinkModal({
  handleCloseLinkModal
}: CreateLinkModalProps) {
  const [title, setTitle] = useState('')
  const [link, setLink] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const createLink = useCreateLink()
  const tripId = useTripId()

  async function handleSubmitCreateNewLink(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!title || !link) {
      toast.error('Veuillez remplir tous les champs.')
      return
    }

    try {
      setIsLoading(true)
      await createLink.mutateAsync({
        title,
        url: link,
        trip_id: Number(tripId)
      })

      toast.success('Lien ajouté avec succès ! !')

      setTitle('')
      setLink('')

      handleCloseLinkModal()
    } catch (error) {
      console.error(error)
      toast.error('Erreur lors de la création du lien.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <ModalWrapper onClick={handleCloseLinkModal}>
      <div className="space-y-2 flex flex-col items-start">
        <h2 className="text-zinc-200 text-lg font-semibold">
          Enregistrer le lien
        </h2>
        <p className="text-zinc-400 text-sm text-left">
          Tous les invités peuvent consulter les liens importants.
        </p>
      </div>
      <form
        action=""
        className="flex flex-col items-center  mt-4 space-y-3"
        onSubmit={handleSubmitCreateNewLink}
      >
        <div className="flex items-center gap-2 bg-zinc-950 h-14 w-full px-2 rounded-lg">
          <Tag className="text-zinc-400 size-5" />
          <InputWrapper
            type="text"
            name="title"
            placeholder="Titre du lien"
            className="bg-transparent text-lg placeholder-zinc-400 outline-none w-90"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 bg-zinc-950 h-14 w-full px-2 rounded-lg">
          <Link2 className="text-zinc-400 size-5" />
          <InputWrapper
            type="text"
            name="link"
            placeholder="URL"
            className="bg-transparent text-lg placeholder-zinc-400 outline-none w-90"
            value={link}
            onChange={e => setLink(e.target.value)}
          />
        </div>
        <CustomButton
          type="submit"
          fullWidth
          isLoading={isLoading}
          message="Création en cours..."
        >
          Enregistrer le lien
        </CustomButton>
      </form>
    </ModalWrapper>
  )
}

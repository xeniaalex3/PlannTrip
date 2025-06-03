import ModalWrapper from '../../../../components/ui/ModalWrapper/ModalWrapper'
import { type CreateLinkModalProps } from '../../../../@types/tripDetails'
import { Link2, Tag } from 'lucide-react'
import InputWrapper from '../../../../components/ui/form/InputWrapper/InputWrapper'
import CustomButton from '../../../../components/ui/CustomButton/CustomButton'

export default function CreateLinkModal({
  handleCloseLinkModal
}: CreateLinkModalProps) {
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
            
          >
            <div className="flex items-center gap-2 bg-zinc-950 h-14 w-full px-2 rounded-lg">
              <Tag className="text-zinc-400 size-5" />
              <InputWrapper
                type="text"
                name="title"
                placeholder="Titre du lien"
                className="bg-transparent text-lg placeholder-zinc-400 outline-none w-90"
              />
            </div>
            <div className="flex items-center gap-2 bg-zinc-950 h-14 w-full px-2 rounded-lg">
              <Link2 className="text-zinc-400 size-5" />
              <InputWrapper
                type="email"
                name="link"
                placeholder="URL"
                className="bg-transparent text-lg placeholder-zinc-400 outline-none w-90"
              />
            </div>
            <CustomButton type="submit" fullWidth>
              Enregistrer le lien
            </CustomButton>
          </form>
        </ModalWrapper>
  )
}

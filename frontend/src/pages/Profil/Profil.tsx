import ProfilHeader from './ProfilHeader/ProfilHeader'
import InfoContent from './InfoContainer/InfoContent'
import ManageAccount from './ManageAccount/ManageAccount'

export default function Profil() {
  return (
    <div className="self-start max-w-6xl lg:w-6xl px-9 py-15 space-y-8">
      <ProfilHeader />
      <main className="flex flex-row justify-between xs:max-sm:flex-col xs:max-sm:gap-4">
        <InfoContent />
        <ManageAccount />
      </main>
    </div>
  )
}

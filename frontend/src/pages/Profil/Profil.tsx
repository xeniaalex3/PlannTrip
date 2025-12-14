import ProfilHeader from './ProfilHeader/ProfilHeader'
import InfoContent from './InfoContainer/InfoContent'

export default function Profil() {
  return (
    <div className="self-start max-w-6xl lg:w-6xl px-9 py-15 space-y-8">
      <ProfilHeader />
      <main className="flex flex-col space-y-12">
        <InfoContent />
      </main>
    </div>
  )
}

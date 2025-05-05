import SearchForm from '../components/SearchForm/SearchForm'

export default function Home() {
  return (
    <div className="max-w-3x px-6 text-center space-y-10">
      <p className="text-zinc-300 text-lg">
        Invitez vos amis et planifiez votre prochain voyage !
      </p>
      <SearchForm />
      <p className="text-zinc-500 text-sm">
        En planifiant votre voyage par l'intermédiaire de PlannTrip, vous
        acceptez automatiquement <br /> à nos{' '}
        <a href="" className="text-zinc-300 underline">
          conditions générales d'utilisation
        </a>{' '}
        et à notre{' '}
        <a href="" className="text-zinc-300 underline">
          politique de confidentialité
        </a>
        .
      </p>
    </div>
  )
}

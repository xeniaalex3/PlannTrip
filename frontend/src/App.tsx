function App() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="max-w-3x px-6 text-center space-y-10">
        <p className="text-zinc-300 text-lg">Invitez vos amis et planifiez votre prochain voyage !</p>
        <form action="" className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center">
          <input type="text" placeholder="Où allez-vous?"/>
          <input type="text" placeholder="Quand?"/>
          <button type="button" className="bg-lime-300 rounded-xl px-5 py-2 text-lime-950">Continuer</button>
        </form>
        <p className="text-zinc-500 text-sm">
          En planifiant votre voyage par l'intermédiaire de PlannTrip, vous
          acceptez automatiquement <br/> à nos{' '}
          <a href="" className="text-zinc-300 underline">conditions générales d'utilisation</a> et à notre{' '}
          <a href="" className="text-zinc-300 underline">politique de confidentialité</a>.
        </p>
      </div>
    </div>
  )
}

export default App

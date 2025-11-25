import CustomButton from '../../../components/ui/Button/CustomButton/CustomButton'
import InputWrapper from '../../../components/ui/form/InputWrapper/InputWrapper'

export default function Register() {
  return (
    <div className="flex flex-col justify-center items-center gap-12 w-full max-w-md">
      <div className="flex flex-col justify-center items-center text-center gap-4">
        <h1 className="font-semibold text-2xl">Inscription</h1>
        <h3>
          Bienvenue sur votre application plannTrip. Entrez vos informations
          pour créer votre compte.
        </h3>
      </div>

      <form action="" className="flex flex-col gap-5 w-full">
        <InputWrapper
          type="text"
          name="firstname"
          placeholder="Entrez votre prénom"
          className="bg-zinc-800 text-lg placeholder-zinc-400 outline-none px-4 rounded-md h-10 w-full"
        />
        <InputWrapper
          type="text"
          name="lastname"
          placeholder="Entrez votre nom"
          className="bg-zinc-800 text-lg placeholder-zinc-400 outline-none outline-none px-4 rounded-md h-10"
        />
        <InputWrapper
          type="email"
          name="email"
          placeholder="Entrez votre adresse email"
          className="bg-zinc-800 text-lg placeholder-zinc-400 outline-none outline-none px-4 rounded-md h-10"
        />
        <InputWrapper
          type="text"
          name="password"
          placeholder="Entrez votre mot de passe"
          className="bg-zinc-800 text-lg placeholder-zinc-400 outline-none outline-none px-4 rounded-md h-10"
        />
        <CustomButton
          type="submit"
          className="xs:max-sm:mb-4 xs:max-sm:w-full sm:max-md:mb-4 sm:max-md:w-full mt-2"
          message="Enregistrement..."
        >
          S'inscrire
        </CustomButton>
      </form>
    </div>
  )
}

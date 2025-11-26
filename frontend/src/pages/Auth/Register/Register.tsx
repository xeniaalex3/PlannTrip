import CustomButton from '../../../components/ui/Button/CustomButton/CustomButton'
import InputWrapper from '../../../components/ui/form/InputWrapper/InputWrapper'
import LinkToSwitch from '../LinkToSwitch/LinkToSwitch'
import AuthLayout from '../AuthLayout/AuthLayout'

export default function Register() {
  return (
    <AuthLayout
      title="Inscription"
      subtitle="Bienvenue sur votre application plannTrip. Entrez vos informations pour créer votre compte."
    >
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
        type="password"
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
      <LinkToSwitch
        to="/login"
        title="Vous avez déjà un compte ?"
        subtitle="Se connecter"
      />
    </AuthLayout>
  )
}

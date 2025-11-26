import CustomButton from '../../../components/ui/Button/CustomButton/CustomButton'
import InputWrapper from '../../../components/ui/form/InputWrapper/InputWrapper'
import AuthLayout from '../AuthLayout/AuthLayout'
import LinkToSwitch from '../LinkToSwitch/LinkToSwitch'

export default function Login() {
  return (
    <AuthLayout
      title="Connexion"
      subtitle="Bon retour sur votre application plannTrip. Entrez vos identifiants pour vous connecter."
    >
      <InputWrapper
        type="email"
        name="email"
        placeholder="Entrez votre adresse email"
        className="bg-zinc-800 text-lg placeholder-zinc-400 outline-none px-4 rounded-md h-10 w-full"
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
        message="Connexion ..."
      >
        Se connecter
      </CustomButton>
      <LinkToSwitch
        to="/inscription"
        title="Pas encore inscrit ?"
        subtitle="Inscrivez-vous"
      />
    </AuthLayout>
  )
}

import { useState } from 'react'
import CustomButton from '../../../components/ui/Button/CustomButton/CustomButton'
import InputWrapper from '../../../components/ui/form/InputWrapper/InputWrapper'
import LinkToSwitch from '../LinkToSwitch/LinkToSwitch'
import AuthLayout from '../AuthLayout/AuthLayout'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { registerSchema } from '../../../lib/zodSchema'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'react-toastify'

type FormField = z.infer<typeof registerSchema>

export default function Register() {
  const [isLoading, setIsLoading] = useState(false) 

  const { register, handleSubmit, reset } = useForm<FormField>({
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    },
    resolver: zodResolver(registerSchema)
  })

  const handleSubmitFormRegister: SubmitHandler<FormField> = async data => {
    console.log('SUBMIT STARTED')

    try {
      setIsLoading(true)
      await new Promise(resolve => setTimeout(resolve, 1500))
      toast.success('Inscription réussie 🎉')
      console.log('FORM DATA:', data)
    } catch (err) {
      console.error(err)
      toast.error("Une erreur est survenue lors d'inscription")
    } finally {
      setIsLoading(false)
      console.log('SUBMIT FINISHED')
    }
    reset()
  }

  return (
    <AuthLayout
      title="Inscription"
      subtitle="Bienvenue sur votre application plannTrip. Entrez vos informations pour créer votre compte."
      onSubmit={handleSubmit(handleSubmitFormRegister)}
    >
      <InputWrapper
        type="text"
        {...register('firstname')}
        placeholder="Entrez votre prénom"
        className="bg-zinc-800 text-lg placeholder-zinc-400 outline-none px-4 rounded-md h-10 w-full"
      />
      <InputWrapper
        type="text"
        {...register('lastname')}
        placeholder="Entrez votre nom"
        className="bg-zinc-800 text-lg placeholder-zinc-400 outline-none outline-none px-4 rounded-md h-10"
      />
      <InputWrapper
        type="email"
        {...register('email')}
        placeholder="Entrez votre adresse email"
        className="bg-zinc-800 text-lg placeholder-zinc-400 outline-none outline-none px-4 rounded-md h-10"
      />
      <InputWrapper
        type="password"
        {...register('password')}
        placeholder="Entrez votre mot de passe"
        className="bg-zinc-800 text-lg placeholder-zinc-400 outline-none outline-none px-4 rounded-md h-10"
      />
      <CustomButton
        type="submit"
        className="xs:max-sm:mb-4 xs:max-sm:w-full sm:max-md:mb-4 sm:max-md:w-full mt-2"
        message="Enregistrement..."
        isLoading={isLoading}
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

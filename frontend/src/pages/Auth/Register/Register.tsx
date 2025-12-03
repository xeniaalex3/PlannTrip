import { useNavigate } from '@tanstack/react-router'
import CustomButton from '../../../components/ui/Button/CustomButton/CustomButton'
import InputWrapper from '../../../components/ui/form/InputWrapper/InputWrapper'
import LinkToSwitch from '../LinkToSwitch/LinkToSwitch'
import AuthLayout from '../AuthLayout/AuthLayout'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { registerSchema } from '../../../lib/zodSchema'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'react-toastify'
import { useRegisterMutation } from '../../../api/hooks/auth/mutations'

type FormField = z.infer<typeof registerSchema>

export default function Register() {
  const navigate = useNavigate()
  const { mutate: register, isPending: isLoading } = useRegisterMutation()

  const { register: registerForm, handleSubmit, reset, formState: { errors } } = useForm<FormField>({
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    },
    resolver: zodResolver(registerSchema),
    mode: 'onBlur'
  })

  const handleSubmitFormRegister: SubmitHandler<FormField> = async data => {
    register(data, {
      onSuccess: () => {
        toast.success('Inscription réussie 🎉')
        reset()
        // Redirect to login after successful registration
        setTimeout(() => {
          navigate({ to: '/login' })
        }, 500)
      },
      onError: (error) => {
        console.error(error)
        if (error instanceof Error) {
          toast.error(error.message || "Une erreur est survenue lors d'inscription.")
        } else {
          toast.error("Une erreur est survenue lors d'inscription.")
        }
      }
    })
  }

  return (
    <AuthLayout
      title="Inscription"
      subtitle="Bienvenue sur votre application plannTrip. Entrez vos informations pour créer votre compte."
      onSubmit={handleSubmit(handleSubmitFormRegister)}
    >
      <InputWrapper
        type="text"
        {...registerForm('firstname')}
        placeholder="Entrez votre prénom"
        className="bg-zinc-800 text-lg placeholder-zinc-400 outline-none px-4 rounded-md h-10 w-full"
      />
      {errors.firstname && <p className="text-red-500 text-sm mt-1">{errors.firstname.message}</p>}
      <InputWrapper
        type="text"
        {...registerForm('lastname')}
        placeholder="Entrez votre nom"
        className="bg-zinc-800 text-lg placeholder-zinc-400 outline-none outline-none px-4 rounded-md h-10"
      />
      {errors.lastname && <p className="text-red-500 text-sm mt-1">{errors.lastname.message}</p>}
      <InputWrapper
        type="email"
        {...registerForm('email')}
        placeholder="Entrez votre adresse email"
        className="bg-zinc-800 text-lg placeholder-zinc-400 outline-none outline-none px-4 rounded-md h-10"
      />
      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      <InputWrapper
        type="password"
        {...registerForm('password')}
        placeholder="Entrez votre mot de passe"
        className="bg-zinc-800 text-lg placeholder-zinc-400 outline-none outline-none px-4 rounded-md h-10"
      />
      {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
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

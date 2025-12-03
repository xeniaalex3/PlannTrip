import { useNavigate } from '@tanstack/react-router'
import CustomButton from '../../../components/ui/Button/CustomButton/CustomButton'
import InputWrapper from '../../../components/ui/form/InputWrapper/InputWrapper'
import AuthLayout from '../AuthLayout/AuthLayout'
import LinkToSwitch from '../LinkToSwitch/LinkToSwitch'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { loginSchema } from '../../../lib/zodSchema'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'react-toastify'
import { useLoginMutation } from '../../../api/hooks/auth/mutations'

type FormField = z.infer<typeof loginSchema>

export default function Login() {
  const navigate = useNavigate()
  const { mutate: login, isPending: isLoading } = useLoginMutation()

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormField>({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: zodResolver(loginSchema),
    mode: 'onBlur'
  })

  const handleSubmitFormLogin: SubmitHandler<FormField> = async data => {
    login(data, {
      onSuccess: async () => {
        toast.success('Connexion réussie 🎉')
        reset()
         navigate({ to: '/' })
      },
      onError: (error) => {
        console.error(error)
        if (error instanceof Error) {
          toast.error(error.message || 'Une erreur est survenue lors de la connexion.')
        } else {
          toast.error('Une erreur est survenue lors de la connexion.')
        }
      }
    })
  }

  return (
    <AuthLayout
      title="Connexion"
      subtitle="Bon retour sur votre application plannTrip. Entrez vos identifiants pour vous connecter."
      onSubmit={handleSubmit(handleSubmitFormLogin)}
    >
      <InputWrapper
        type="email"
        {...register('email')}
        placeholder="Entrez votre adresse email"
        className="bg-zinc-800 text-lg placeholder-zinc-400 outline-none px-4 rounded-md h-10 w-full"
      />
      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      <InputWrapper
        type="password"
        {...register('password')}
        placeholder="Entrez votre mot de passe"
        className="bg-zinc-800 text-lg placeholder-zinc-400 outline-none outline-none px-4 rounded-md h-10"
      />
      {errors.password && (
        <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
      )}
      <CustomButton
        type="submit"
        className="xs:max-sm:mb-4 xs:max-sm:w-full sm:max-md:mb-4 sm:max-md:w-full mt-2"
        message="Connexion ..."
        isLoading={isLoading}
      >
        Se connecter
      </CustomButton>
      <LinkToSwitch
        to="/register"
        title="Pas encore inscrit ?"
        subtitle="Inscrivez-vous"
      />
    </AuthLayout>
  )
}

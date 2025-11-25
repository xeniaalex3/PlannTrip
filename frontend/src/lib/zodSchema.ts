import { z } from 'zod'

export const loginSchema = z.object({
  email: z.email({
    message: "Format d'adresse email invalide"
  }),
  password: z
    .string()
    .min(12, 'Password must be at least 12 characters')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\W_]{12,}$/,
      'Mauvais format de mot de passe.'
    )
})

export const registerSchema = z.object({
  firstname: z
    .string()
    .min(2, 'Le prénom doit faire au minimum 2 caractères')
    .max(100, 'Le prénom est trop long'),
  lastname: z
    .string()
    .min(2, 'Le nom doit faire au minimum 2 caractères')
    .max(100, 'Le nom est trop long'),
  email: z.email({
    message: "Format d'adresse email invalide"
  }),
  password: z
    .string()
    .min(12, 'Password must be at least 12 characters')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\W_]{12,}$/,
      'Mauvais format de mot de passe.'
    )
})

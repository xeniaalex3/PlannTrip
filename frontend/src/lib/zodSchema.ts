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

export const activitySchema = z.object({
  title: z
    .string()
    .min(2, "Le titre de l'activité doit faire au minimum 2 caractères")
    .max(200, "Le titre de l'activité est trop long"),
  occurs_at: z.date(),
  time: z
    .string()
    .min(1, "L'horaire de l’activité est obligatoire"),
  trip_id: z
    .number()
    .int()
    .positive('ID du voyage invalide')
})

export const guestSchema = z.object({
  name: z
    .string()
    .min(2, 'Le nom doit faire au minimum 2 caractères')
    .max(150, 'Le nom est trop long'),
  email: z.email({
    message: "Format d'adresse email invalide"
  }),
  trip_id: z
    .number()
    .int()
    .positive('ID du voyage invalide'),
  is_confirmed: z.boolean().default(true),
  is_owner: z.boolean().default(false)
})

export const linkSchema = z.object({
  title: z
    .string()
    .min(2, 'Le titre du lien doit faire au minimum 2 caractères')
    .max(200, 'Le titre du lien est trop long'),
  url: z
    .string()
    .url('Veuillez saisir une URL valide.'),
  trip_id: z
    .number()
    .int()
    .positive('ID du voyage invalide')
})
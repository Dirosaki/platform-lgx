import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z
  .object({
    newPassword: z
      .string()
      .min(1, 'Campo obrigatório!')
      .min(8, 'A nova senha deve ter no mínimo 8 caracteres!')
      .max(128, 'A nova senha deve ter no máximo 128 caracteres!'),
    passwordConfirm: z.string().min(1, 'Campo obrigatório!'),
  })
  .refine(({ newPassword, passwordConfirm }) => newPassword === passwordConfirm, {
    path: ['passwordConfirm'],
    message: 'As senhas não correspondem!',
  })

type ResetPasswordForm = z.infer<typeof schema>

export const useResetPassword = () => {
  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordForm>({
    resolver: zodResolver(schema),
  })

  const handleSubmit = hookFormSubmit(async () => {})

  return { register, handleSubmit, errors, isSubmitting }
}

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
  email: z.string().min(1, 'O e-mail é obrigatório!').email('E-mail inválido!').toLowerCase(),
  password: z
    .string()
    .min(1, 'A senha é obrigatória!')
    .min(8, 'A senha deve ter no mínimo 8 caracteres!')
    .max(128, 'A senha deve ter no máximo 128 caracteres!'),
})

type RegisterForm = z.infer<typeof schema>

export const useRegister = () => {
  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterForm>({
    resolver: zodResolver(schema),
  })

  const handleSubmit = hookFormSubmit(async () => {})

  return { register, handleSubmit, errors, isSubmitting }
}

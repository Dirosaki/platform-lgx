import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
  email: z.string().min(1, 'O e-mail é obrigatório!').email('E-mail inválido!').toLowerCase(),
})

type ForgotPasswordForm = z.infer<typeof schema>

export const useForgotPassword = () => {
  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordForm>({
    resolver: zodResolver(schema),
  })

  const handleSubmit = hookFormSubmit(async () => {})

  return { register, handleSubmit, errors, isSubmitting }
}

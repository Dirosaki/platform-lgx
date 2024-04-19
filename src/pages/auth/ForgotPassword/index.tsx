import { Link } from 'react-router-dom'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Group, Helper, Input, Label } from '@/components/form'

import { useForgotPassword } from './hooks/useForgotPassword'

export const ForgotPassword = () => {
  const { register, handleSubmit, errors, isSubmitting } = useForgotPassword()

  return (
    <Card as="form" onSubmit={handleSubmit}>
      <h1 className="text-2xl font-semibold text-white">Esqueci minha senha</h1>
      <p className="mb-8 mt-2 text-sm text-placeholder">
        Insira seu e-mail para enviarmos as instruções para criar uma nova senha.
      </p>

      <Group>
        <Label htmlFor="email">Senha</Label>
        <Input
          autoComplete="email"
          id="email"
          placeholder="Seu e-mail"
          type="text"
          {...register('email')}
        />
        <Helper message={errors.email?.message} />
      </Group>

      <Button className="mt-6 md:mt-8" isLoading={isSubmitting} type="submit">
        Enviar
      </Button>

      <Link className="mt-3 w-full" to="/auth/login">
        <Button type="button" variant="secondary">
          Voltar para o Login
        </Button>
      </Link>
    </Card>
  )
}

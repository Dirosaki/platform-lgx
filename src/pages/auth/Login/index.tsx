import { Link } from 'react-router-dom'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Group, Helper, Input, Label } from '@/components/form'

import { useLogin } from './hooks/useLogin'

export const Login = () => {
  const { register, handleSubmit, errors, isSubmitting } = useLogin()

  return (
    <Card as="form" onSubmit={handleSubmit}>
      <h1 className="text-2xl font-semibold text-white">Entrar</h1>
      <p className="mb-8 mt-2 text-sm text-placeholder">
        Insira seu e-mail e senha para acessar a plataforma.
      </p>

      <Group>
        <Label htmlFor="email">E-mail</Label>
        <Input
          autoComplete="email"
          id="email"
          placeholder="Seu e-mail"
          type="text"
          {...register('email')}
        />
        <Helper message={errors.email?.message} />
      </Group>

      <Group>
        <Label htmlFor="password">Senha</Label>
        <Input id="password" placeholder="Sua senha" type="password" {...register('password')} />
        <Helper message={errors.password?.message} />
      </Group>

      <Link
        className="mt-4 text-sm text-white underline underline-offset-4 transition-colors hover:text-primary "
        to="/auth/forgot-password"
      >
        Esqueci minha senha
      </Link>

      <Button className="mt-6 md:mt-8" isLoading={isSubmitting} type="submit">
        Entrar
      </Button>

      <span className="mx-auto mt-8 text-center text-white">
        Não tem uma conta?{' '}
        <Link
          className="underline underline-offset-4 transition-colors hover:text-primary"
          to="/auth/register"
        >
          Cadastre-se
        </Link>
      </span>
    </Card>
  )
}

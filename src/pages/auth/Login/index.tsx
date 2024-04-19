import { Link } from 'react-router-dom'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Input } from '@/components/form'

import { useLogin } from './hooks/useLogin'

export const Login = () => {
  const { register, handleSubmit, errors, isSubmitting } = useLogin()

  return (
    <Card as="form" onSubmit={handleSubmit}>
      <h1 className="text-2xl font-semibold text-white">Entrar</h1>
      <p className="mb-8 mt-2 text-sm text-placeholder">
        Insira seu e-mail e senha para acessar a plataforma
      </p>

      <div className="flex w-full flex-col gap-[6px]">
        <label className="inline-flex self-start text-sm text-white" htmlFor="email">
          E-mail
        </label>
        <Input
          autoComplete="email"
          id="email"
          placeholder="Seu e-mail"
          type="text"
          {...register('email')}
        />
        {errors.email?.message && (
          <span className="text-sm text-placeholder">{errors.email.message}</span>
        )}
      </div>

      <div className="mt-4 flex w-full flex-col gap-[6px]">
        <label className="inline-flex self-start text-sm text-white" htmlFor="password">
          Senha
        </label>
        <Input id="password" placeholder="Sua senha" type="password" {...register('password')} />
        {errors.password?.message && (
          <span className="text-balance text-sm text-placeholder">{errors.password.message}</span>
        )}
      </div>

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
